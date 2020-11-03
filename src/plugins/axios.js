import axios from 'axios'
import Message from 'ant-design-vue/es/message'
import { getToken, removeToken } from '@/utils/token'
import responseHandler from '@/utils/response-handler'

const errorHandler = (error) => {
  const { status = 'default', statusText = '错误信息' } = error.response
  responseHandler[status](status, statusText)

  return Promise.reject(error)
}

const service = axios.create({
  baseURL: process.env.VUE_APP_REQUEST_BASE_URL,
  timeout: 20000,
  responseType: 'json',
  withCredentials: true,
})

service.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  errorHandler,
)

service.interceptors.response.use(
  (response) => {
    const { data } = response

    const { code, message = '接口异常' } = data
    if (code !== 2000) {
      Message.warning(message)

      if (code === 4018) {
        removeToken()
        window.location.reload()
      }

      return Promise.reject(data)
    }
    return data
  },
  errorHandler,
)

export default service
