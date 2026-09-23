import { fetchApi } from '@lib/fetchApi'

export async function getHealth() {
  return fetchApi('/health', { errorMsg: 'Error al consultar el estado del servidor' })
}
