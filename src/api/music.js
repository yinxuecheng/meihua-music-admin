import { get, post, put } from './request'

export const list = () => {
  return get('/music')
}

export const create = (music) => {
  return post('/music', music)
}

export const update = (id, music) => {
  return put(`/music/${id}`, music)
}

export const publish = (id) => {
  return post(`/${id}/publish`)
}

export const closed = (id) => {
  return post(`/${id}/closed`)
}
