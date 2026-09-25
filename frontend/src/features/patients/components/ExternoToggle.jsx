import { Controller, useFormContext } from 'react-hook-form'
import SegmentedToggle from '@components/SegmentedToggle'

const OPTIONS = [
  { value: 'interno', label: 'UABC' },
  { value: 'externo', label: 'Externo' },
]

export default function ExternoToggle() {
  const { control } = useFormContext()
  return (
    <Controller
      name="es_externo"
      control={control}
      render={({ field }) => (
        <div className="flex items-center gap-3">
          <span id="es_externo-label" className="text-5 text-zinc-600">
            Tipo de paciente
          </span>
          <SegmentedToggle
            value={field.value ? 'externo' : 'interno'}
            onChange={(v) => field.onChange(v === 'externo')}
            options={OPTIONS}
            ariaLabelledBy="es_externo-label"
          />
        </div>
      )}
    />
  )
}
