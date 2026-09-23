import { useQuery } from '@tanstack/react-query'
import { getHealth } from '@services/apiHealth'

// Público, sin sesión. Mientras carga se asume habilitado para no parpadear
// a un estado deshabilitado que luego resulta innecesario.
export default function useServerHealth() {
  const { data, isPending } = useQuery({
    queryKey: ['server-health'],
    queryFn: getHealth,
    retry: false,
  })

  return { emailEnabled: data?.emailEnabled ?? true, isPending }
}
