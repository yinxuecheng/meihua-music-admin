import router from './router'
import store from './store'
import { getToken } from './utils/auth'

const witeList = ['/login', '/403', '404']

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (witeList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login?redirect=' + to.path)
    }
  }
  console.log(to, from, next)
})
