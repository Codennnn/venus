import Mock from 'mockjs'

import user from './user'

Mock.mock('/common/image', 'post', { code: 2001 })

Mock.mock('/user/login', 'post', user.login)
Mock.mock('/user/logout', 'post', { code: 2000 })
Mock.mock('/user/info', 'get', user.info)

Mock.setup({
  timeout: '300-500',
})
