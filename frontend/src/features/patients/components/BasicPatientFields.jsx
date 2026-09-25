import { Controller, useFormContext } from 'react-hook-form'
import FormRow from '@components/FormRow'
import Input from '@components/Input'
import Grid from '@components/Grid'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/Select'
import BirthdayField from '@ui/BirthdayField'
import PhoneField from '@ui/PhoneField'
import ExternoToggle from '@features/patients/components/ExternoToggle'

const GENERO_OPTIONS = ['Masculino', 'Femenino', 'Otro']

export default function BasicPatientFields() {
  const { register, control, formState } = useFormContext()
  const { errors } = formState

  return (
    <>
      <Grid cols={2} gap={4} mobileCols={2}>
        <FormRow htmlFor="nombre" label="Nombre(s)" required>
          <Input
            {...register('nombre')}
            id="nombre"
            type="text"
            placeholder="Ingrese nombre(s)"
            hasError={errors?.nombre?.message}
            variant="outline"
            size="lg"
          />
        </FormRow>
        <FormRow htmlFor="apellidos" label="Apellidos" required>
          <Input
            {...register('apellidos')}
            id="apellidos"
            type="text"
            placeholder="Ingrese apellidos"
            hasError={errors?.apellidos?.message}
            variant="outline"
            size="lg"
          />
        </FormRow>
      </Grid>

      <Grid cols={3} gap={4} mobileCols={2}>
        <BirthdayField name="fecha_nacimiento" control={control} errors={errors} />
        <PhoneField />
        <FormRow label="Género" required error={errors?.genero?.message}>
          <Controller
            name="genero"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange} fullWidth>
                <SelectTrigger size="lg" hasError={errors?.genero?.message}>
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  {GENERO_OPTIONS.map((g) => (
                    <SelectItem key={g} value={g}>
                      {g}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </FormRow>
      </Grid>

      <ExternoToggle />
    </>
  )
}
