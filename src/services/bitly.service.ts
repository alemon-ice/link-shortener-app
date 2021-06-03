import api from './api'

export const generateShortURL = async (long_url: string) => {
  const response = await api.post('/shorten', { long_url })

  return response.data
}