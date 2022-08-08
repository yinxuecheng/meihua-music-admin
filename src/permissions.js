import router from './router'
import store from './store'
import { getToken } from './utils/auth'
import { Notify } from 'quasar'

const witeList = ['/login', '/403', '/404']

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const currentUser = store.state.user.currentUser
      const adminRole = currentUser.roles.find((item) => {
        return item.name === 'ROLE_ADMIN'
      })
      if (adminRole) {
        next()
      } else {
        await store.dispatch('user/logout')
        Notify.create({
          type: 'negative',
          message: '该账号无权登录后台系统',
          position: 'top'
        })
        next('/login?redirect=' + to.path)
      }
    }
  } else {
    if (witeList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login?redirect=' + to.path)
    }
  }
})
