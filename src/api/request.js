import axios from 'axios'
import store from '../store'
import notify from '../utils/notify'

const baseURL = import.meta.env.VITE_API_HOST
const tokenPrefix = 'Bearer '

const instance = axios.create({
  baseURL
})

//拦截器
instance.interceptors.request.use(
  (config) => {
    if (store.state.user.token) {
      config.headers['Authorization'] = tokenPrefix + store.state.user.token
    }
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    if (response.data.code) {
      handleErrorResponse(response)
      return Promise.reject(response.data)
    }
    return response.data
  },
  (error) => {
    handleErrorResponse(error.response)
    return Promise.reject(error)
  }
)

const handleErrorResponse = (response) => {
  if (response.status === 401 || response.status === 403) {
    store.dispatch('user/logout').then(() => {
      window.location.reload()
    })
  }

  if (response.data instanceof Array) {
    response.data.forEach((item) => {
      notify.error(item.message)
    })
  } else {
    notify.error(response.data.message)
  }
}

const { get, post, put } = instance

export { get, post, put }
