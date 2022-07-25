import Cookies from 'js-cookie'

const TokenKey = 'meihua-token'

export const getToken = () => {
  return Cookies.get(TokenKey)
}

export const setToken = (token) => {
  return Cookies.set(TokenKey, token)
}

export const removeToken = (token) => {
  return Cookies.remove(TokenKey, token)
}
