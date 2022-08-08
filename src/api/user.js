import { get } from './request'

export const search = (paging) => {
  return get('/users', { params: paging })
}

/**
 * 返回当前用户信息
 * @returns
 */
export const me = () => {
  return get('/users/me')
}
