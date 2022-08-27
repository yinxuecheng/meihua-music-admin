import { post } from './request'

export const initUpload = (file) => {
  return post('/files/upload_init', file)
}

export const finishUpload = (fileId) => {
  return post(`/files/${fileId}/upload_finish`)
}
