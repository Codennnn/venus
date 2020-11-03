import { constantRoutes, asyncRoutes } from '@/router/router'
import { isArray, isFunction } from '@/utils/util'

/**
 * 3.检测是否能对应上相应路由的角色权限
 *
 * @param {Array.<string>} permissions 用户拥有的权限标识数组
 * @param {Object} param1 路由元数据
 * @returns {boolean} 为 true 时表示具有权限，否则无权限
 */
function hasPermission(permissions, { meta }) {
  const permissionKeyName = process.env.VUE_APP_ROUTE_PERMISSION_KEY_NAME || 'permission'

  if (isArray(meta?.[permissionKeyName])) {
    return meta.permission.every((el) => permissions.includes(el))
  }

  if (isFunction(meta?.[permissionKeyName])) {
    return meta.permission(permissions)
  }

  // 默认是具有权限的，所以返回 true
  return true
}

/**
 * 2.对已定义的动态路由进行过滤
 *
 * @param {Array.<Object>} routes 已定义的动态路由
 * @param {Array.<string>} permissions 用户拥有的权限标识数组
 */
export function filterAsyncRoutes(routes, permissions) {
  const res = routes.map((route) => {
    const tmp = { ...route }
    if (hasPermission(permissions, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, permissions)
      }
      return tmp
    }
    return null
  })

  return res.filter((item) => item)
}

const state = {
  routes: [],
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = constantRoutes.concat(routes)
  },
}

const actions = {
  /**
   * 1.触发生成动态路由的方法
   *
   * @param {Array.<Object>} asyncRoutes 已定义的动态路由
   * @param {Array.<string>} permissions 用户拥有的权限标识数组
   */
  generateRoutes({ commit }, permissions) {
    const accessedRoutes = filterAsyncRoutes(asyncRoutes, permissions)
    commit('SET_ROUTES', accessedRoutes)
    return accessedRoutes
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
