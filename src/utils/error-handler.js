/* eslint no-underscore-dangle: 0, no-console: 0 */

import Notification from 'ant-design-vue/es/notification'
import consoleLog from '@/utils/console-log'

function formatComponentName(vm) {
  if (vm.$root === vm) return 'root'
  const name = vm._isVue
    ? (vm.$options && vm.$options.name)
    || (vm.$options && vm.$options._componentTag)
    : vm.name
  return (
    (name ? `component <${name}>` : 'anonymous component')
    + (vm._isVue && vm.$options && vm.$options.__file
      ? ` at ${vm.$options && vm.$options.__file}`
      : '')
  )
}

export default (err, vm, info) => {
  consoleLog(err, 'Vue')

  const component_name = formatComponentName(vm)
  const detail = {
    component_name,
    route: vm?.$route?.fullPath,
  }
  Notification({
    message: detail,
    description: info,
    duration: null,
  })
}
