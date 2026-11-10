/** Motivos del formulario de contacto; las etiquetas viven en los diccionarios. */
export const contactReasons = ['job', 'freelance', 'collaboration', 'inquiry', 'other'] as const;

export type ContactReason = (typeof contactReasons)[number];

export const contactLimits = {
  name: { min: 2, max: 80 },
  message: { min: 10, max: 5000 },
  /** Segundos mínimos entre que carga el formulario y se envía; más rápido suele ser un bot. */
  minFillSeconds: 3,
} as const;
