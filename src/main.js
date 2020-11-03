import Vue from 'vue'
import errorHandler from '@/utils/error-handler'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import './router/control'
import '@/assets/scss/reset.scss'
import '@/assets/scss/common.scss'
import './plugins'
import './directives' // 自定义指令

Vue.config.errorHandler = errorHandler
Vue.config.productionTip = false

window.addEventListener('unhandledrejection', (e) => {
  console.warn('未处理的 promise rejection:/\n', e.reason)
  e.preventDefault()
})

if (process.env.NODE_ENV === 'production') {
  console.warn(`%c
  通过以下方式可联系作者👇🏼：
  微信：leoku_new
  邮箱：czc12580520@gmail.com / 1559162803@qq.com
  欢迎学习交流
  `, 'font-size: 16px;')
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
