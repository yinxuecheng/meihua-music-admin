import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '../pages/Layout.vue'

const routes = [
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  {
    path: '/',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: () => import('../pages/index/Index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/403',
    component: () => import('../pages/403.vue')
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('../pages/404.vue')
  }
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes: routes // `routes: routes` 的缩写
})

export default router
