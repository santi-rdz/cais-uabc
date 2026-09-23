import {
  adminSchema,
  adminSignupSchema,
  coordinadorSchema,
  coordinadorSignupSchema,
  pasanteSchema,
  pasanteSignupSchema,
} from '@cais/shared/schemas/users'
import { z } from 'zod'
import { dayjsDateSchema, areaSchema, withPasswordConfirmation } from '@cais/shared/schemas/fields'

// Form-level schemas: componen los schemas del backend (shared) y los adaptan
// al shape que necesita el form (dayjs en vez de string ISO, refines de
// confirmación de password, omits de campos que el form no captura, etc.).

const confirmPassword = z.string({ error: 'Confirma la contraseña' })

export const internSignupFormSchema = pasanteSignupSchema
  .omit({ token: true })
  .extend({ fecha_nacimiento: dayjsDateSchema })
  .refine((d) => d.password === d.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  })

export const internEditSchema = pasanteSchema
  .omit({ rol: true, password: true })
  .extend({ fecha_nacimiento: dayjsDateSchema, area: areaSchema.optional() })

export function buildInternCreateSchema(correoField) {
  return withPasswordConfirmation(
    pasanteSchema.omit({ rol: true }).extend({
      fecha_nacimiento: dayjsDateSchema,
      correo: correoField,
      area: areaSchema,
      confirmPassword,
    })
  )
}

export const coordSignupFormSchema = coordinadorSignupSchema
  .omit({ token: true })
  .extend({ fecha_nacimiento: dayjsDateSchema })
  .refine((d) => d.password === d.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  })

export const coordEditSchema = coordinadorSchema
  .omit({ rol: true, password: true })
  .extend({ fecha_nacimiento: dayjsDateSchema, area: areaSchema.optional() })

export function buildCoordCreateSchema(correoField) {
  return withPasswordConfirmation(
    coordinadorSchema.omit({ rol: true }).extend({
      fecha_nacimiento: dayjsDateSchema,
      correo: correoField,
      area: areaSchema,
      confirmPassword,
    })
  )
}

export const adminSignupFormSchema = adminSignupSchema
  .omit({ token: true })
  .extend({ fecha_nacimiento: dayjsDateSchema })
  .refine((d) => d.password === d.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  })

export const adminEditSchema = adminSchema
  .omit({ rol: true, password: true })
  .extend({ fecha_nacimiento: dayjsDateSchema })

export function buildAdminCreateSchema(correoField) {
  return withPasswordConfirmation(
    adminSchema
      .omit({ rol: true })
      .extend({ fecha_nacimiento: dayjsDateSchema, correo: correoField, confirmPassword })
  )
}
