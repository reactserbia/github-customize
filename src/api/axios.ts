import axios, {
    type AxiosResponse,
    type AxiosError,
    type AxiosInstance,
    type InternalAxiosRequestConfig
} from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: `${apiUrl}`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

const onRequest = (
    config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => config

const onResponse = (response: AxiosResponse): AxiosResponse => response

const onRequestError = async (error: AxiosError): Promise<AxiosError> =>
    await Promise.reject(error)

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
    if (error.response?.status === 401) {
        localStorage.clear()
        window.location.href = '/'
    }

    return await Promise.reject(error)
}

axiosInstance.interceptors.request.use(onRequest, onRequestError)
axiosInstance.interceptors.response.use(onResponse, onResponseError)
