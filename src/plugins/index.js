import Vue from 'vue'

import PerfectScrollbar from 'vue2-perfect-scrollbar'
import VueFeather from 'vue-feather'
import VueApexCharts from 'vue-apexcharts'
import VueHighlightJS from 'vue-highlightjs'
import echarts from 'echarts'
import Storage from './storage'
import OnlineCheck from './online-check'
import './ant-design'
import 'dayjs/locale/zh-cn'
import '@/mock'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import '@icon-park/vue/styles/index.css'
import '@/assets/scss/tailwind.scss'
import '@/assets/scss/highlight.scss'

Vue.use(PerfectScrollbar)
Vue.use(VueFeather)
Vue.use(VueApexCharts)
Vue.use(VueHighlightJS)
Vue.use(Storage)
Vue.use(OnlineCheck)
Vue.component('apexchart', VueApexCharts)
Vue.prototype.$echarts = echarts
