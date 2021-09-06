/**
 * 公共接口
 */

import request from '@/plugins/axios'

export function uploadImage(data) {
  return request({
    url: '/common/image',
    method: 'post',
    data,
  })
}

export function getPublicKey() {
  return request({
    url: '/login/getPublicKey',
    method: 'get',
  })
}
