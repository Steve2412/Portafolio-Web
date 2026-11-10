'use client';

import { useActionState, useEffect, useRef } from 'react';
import { FaCircleCheck, FaPaperPlane, FaTriangleExclamation } from 'react-icons/fa6';
import type { Dictionary } from '@/dictionaries/es';
import { contactLimits, contactReasons } from '@/content/contact';
import { sendContact, type ContactState } from '@/app/[lang]/contact/actions';

const initialState: ContactState = { status: 'idle' };

export function ContactForm({ t }: { t: Dictionary['pages']['contact']['form'] }) {
  const [state, action, pending] = useActionState(sendContact, initialState);
  const startedAt = useRef<HTMLInputElement>(null);

  // Marca de tiempo para el filtro anti-bots; se renueva tras cada envío.
  useEffect(() => {
    if (startedAt.current) startedAt.current.value = String(Date.now());
  }, [state]);

  const values = state.status === 'error' ? state.values : undefined;
  const { name, message } = contactLimits;

  return (
    <form className="contact-form" action={action}>
      <div className="form-head">
        <h2>{t.title}</h2>
        <p>{t.lead}</p>
      </div>

      <div className="form-grid">
        <label className="field">
          <span>{t.name}</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={name.min}
            maxLength={name.max}
            defaultValue={values?.name}
            key={`name-${state.status}`}
          />
        </label>

        <label className="field">
          <span>{t.email}</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            defaultValue={values?.email}
            key={`email-${state.status}`}
          />
        </label>

        <label className="field field--full">
          <span>{t.reason}</span>
          <select name="reason" required defaultValue={values?.reason ?? ''} key={`reason-${state.status}`}>
            <option value="" disabled>
              {t.reasonPlaceholder}
            </option>
            {contactReasons.map((r) => (
              <option key={r} value={r}>
                {t.reasons[r]}
              </option>
            ))}
          </select>
        </label>

        <label className="field field--full">
          <span>{t.message}</span>
          <textarea
            name="message"
            rows={6}
            required
            minLength={message.min}
            maxLength={message.max}
            defaultValue={values?.message}
            key={`message-${state.status}`}
          />
        </label>
      </div>

      {/* Campo trampa: invisible para personas, los bots suelen rellenarlo. */}
      <div className="hp" aria-hidden="true">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input ref={startedAt} name="startedAt" type="hidden" />

      <div className="form-foot">
        <p className="form-status" role="status" aria-live="polite">
          {state.status === 'success' && (
            <span className="form-ok">
              <FaCircleCheck aria-hidden="true" /> {t.success}
            </span>
          )}
          {state.status === 'error' && (
            <span className="form-error">
              <FaTriangleExclamation aria-hidden="true" /> {t.errors[state.code]}
            </span>
          )}
        </p>
        <button type="submit" className="btn btn-primary" disabled={pending}>
          {pending ? t.sending : t.submit}
          {!pending && <FaPaperPlane aria-hidden="true" />}
        </button>
      </div>
    </form>
  );
}
