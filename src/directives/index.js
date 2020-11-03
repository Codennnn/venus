import Vue from 'vue'
import store from '@/store/store'
import { isArray } from '@/utils/util'

export function defaultFunc() {

}

export function hasPermission(permission) {
  if (typeof permission === 'string') {
    return store.state.user.permissions.includes(permission)
  }
  if (isArray(permission)) {
    return permission.every((tag) => store.state?.user?.permissions.includes(tag))
  }
  return false
}

// 判断管理员是否已绑定用户
Vue.directive('auth', {
  inserted(el, binding) {
    if (!hasPermission(binding.value)) {
      // 如果没有权限，则移除节点
      el.parentNode.removeChild(el)
    }
  },
})
Vue.prototype.$auth = (permissions) => {
  if (hasPermission(permissions)) {
    return true
  }
  return false
}
