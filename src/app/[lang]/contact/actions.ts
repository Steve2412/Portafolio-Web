'use server';

import { site } from '@/content/site';
import { contactLimits, contactReasons, type ContactReason } from '@/content/contact';
import { es } from '@/dictionaries/es';

export type ContactErrorCode = 'invalid' | 'send';

export type ContactState =
  | { status: 'idle' }
  | { status: 'success' }
  | {
      status: 'error';
      code: ContactErrorCode;
      /** Valores enviados, para no vaciar el formulario cuando falla. */
      values: { name: string; email: string; reason: string; message: string };
    };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(text: string) {
  return text.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values = {
    name: field(formData, 'name'),
    email: field(formData, 'email'),
    reason: field(formData, 'reason'),
    message: field(formData, 'message'),
  };

  // Anti-spam: el campo trampa está oculto para personas, y un envío casi instantáneo delata a un bot.
  // A los bots se les responde "éxito" para no darles pistas.
  const startedAt = Number(field(formData, 'startedAt'));
  const tooFast = startedAt > 0 && Date.now() - startedAt < contactLimits.minFillSeconds * 1000;
  if (field(formData, 'website') || tooFast) return { status: 'success' };

  const { name, message } = contactLimits;
  const valid =
    values.name.length >= name.min &&
    values.name.length <= name.max &&
    values.email.length <= 254 &&
    EMAIL_RE.test(values.email) &&
    contactReasons.includes(values.reason as ContactReason) &&
    values.message.length >= message.min &&
    values.message.length <= message.max;
  if (!valid) return { status: 'error', code: 'invalid', values };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] Falta RESEND_API_KEY en las variables de entorno.');
    return { status: 'error', code: 'send', values };
  }

  const reasonLabel = es.pages.contact.form.reasons[values.reason as ContactReason];
  const rows: [string, string][] = [
    ['Nombre', values.name],
    ['Correo', values.email],
    ['Motivo', reasonLabel],
  ];

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || 'Portafolio <onboarding@resend.dev>',
        to: [process.env.CONTACT_TO_EMAIL || site.email],
        reply_to: values.email,
        subject: `[${reasonLabel}] Mensaje de ${values.name}`,
        text: `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\n${values.message}`,
        html: `${rows
          .map(([k, v]) => `<p style="margin:0"><strong>${k}:</strong> ${escapeHtml(v)}</p>`)
          .join('')}<hr><p style="white-space:pre-wrap">${escapeHtml(values.message)}</p>`,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      console.error('[contact] Resend respondió', res.status, await res.text());
      return { status: 'error', code: 'send', values };
    }
  } catch (err) {
    console.error('[contact] No se pudo contactar con Resend', err);
    return { status: 'error', code: 'send', values };
  }

  return { status: 'success' };
}
