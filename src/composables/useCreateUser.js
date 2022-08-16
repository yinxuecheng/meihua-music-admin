import { create } from '../api/user'

export const useCreateUser = (username, password) => {
  const createUser = () => {
    create({ username: username.value, password: password.value }).then(
      (res) => {
        console.log(res)
      }
    )
  }
  return {
    createUser,
    username,
    password
  }
}
