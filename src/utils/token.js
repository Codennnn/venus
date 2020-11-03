import Vue from 'vue'

export function setToken(value = (() => { throw new Error('请输入参数！') })()) {
  if (typeof value !== 'string') {
    throw new Error('参数应为 string')
  }

  Vue.ls.set('token', value)
}

export function getToken() {
  return Vue.ls.get('token')
}

export function removeToken() {
  return Vue.ls.remove('token')
}
