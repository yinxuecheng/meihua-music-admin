import { get } from './request'

export const getSiteSetting = () => {
  return get('/settings/site')
}
