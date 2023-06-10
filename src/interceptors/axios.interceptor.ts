import { getValidationError } from '../utilities'
import axios, { type AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'

export const AxiosInterceptor = () => {
  const updateHeader = (request: InternalAxiosRequestConfig) => {
    // const token = localStorage.getItem('token')
    const token = '121212121'
    const newHeaders = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
    request.headers.set(newHeaders)
    return request
  }

  // Intercepta cualquier peticion que se haga con axios
  axios.interceptors.request.use((request: InternalAxiosRequestConfig) => {
    // No se envia con el token las peticiones a assets
    if (request.url?.includes('assets')) {
      return request
    }

    console.log('Starting Request', request)
    return updateHeader(request)
  })

  // La informacion que se recibe de la peticion
  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log('Response:', response)
      return response
    },
    (error: AxiosError) => {
      console.log('Error:', getValidationError(error.code))
      // "mata" la respuesta y la rechaza
      return Promise.reject(error)
    }
  )
}
