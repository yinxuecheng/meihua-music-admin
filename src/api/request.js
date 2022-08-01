import axios from 'axios'
import store from '../store'
import { Notify } from 'quasar'

const baseURL = import.meta.env.VITE_API_HOST

const instance = axios.create({
  baseURL
})

//拦截器
instance.interceptors.request.use(
  (config) => {
    if (store.state.user.token) {
      config.headers['Authorization'] = store.state.user.token
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
    return response
  },
  (error) => {
    Notify.create({
      type: 'negative',
      message: error.message,
      position: 'top'
    })
    return Promise.reject(error)
  }
)

const { get, post, put } = instance

export { get, post, put }
