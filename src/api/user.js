/**
 * 用户接口
 */

import request from '@/plugins/axios'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  })
}

export function logout(data) {
  return request({
    url: '/user/logout',
    method: 'post',
    data,
  })
}

export function getUserInfo(params) {
  return request({
    url: '/user/info',
    method: 'get',
    params,
  })
}

export function resetPassword(data) {
  return request({
    url: '/user/resetPassword',
    method: 'post',
    data,
  })
}
