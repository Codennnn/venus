import store from '@/store/store'
import NProgress from 'nprogress'
import { getToken, removeToken } from '@/utils/token'
import { setPageTitle, isArray } from '@/utils/util'
import router, { resetRouter } from './router'

import 'nprogress/nprogress.css'

// 配置 NProgress
NProgress.configure({ showSpinner: false })

const accessList = ['Login', 'Register']

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  setPageTitle(to.meta?.title)

  if (getToken()) {
    if (to.name === 'Login') {
      // 如果已经有了 token 再访问登录页的话，将会被重定向到首页
      next('/')
    } else {
      const isAuthorized = isArray(store.state.user.permissions)

      if (isAuthorized) {
        next()
      } else {
        try {
          resetRouter()
          const { permissions } = await store.dispatch('user/getUserInfo')
          const accessedRoutes = await store.dispatch('auth/generateRoutes', permissions)
          // 动态添加路由
          router.addRoutes(accessedRoutes)
          next({ ...to, replace: true })
        } catch (e) {
          console.log(e)
          NProgress.done()
          removeToken()
          next({ name: 'Login' })
        }
      }
    }
  } else if (accessList.includes(to.name)) {
    // 如果路由在白名单里面，则直接跳转
    next()
  } else {
    store.commit('SET_REDIRECT_PATH', to.fullPath)
    // 如果没有权限，则重定向回登录页
    next({ name: 'Login' })
  }
})

router.afterEach(() => {
  NProgress.done()
})
