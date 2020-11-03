import Notification from 'ant-design-vue/es/notification'

const errorHandler = {
  errorNotify({
    message = '哎呀！', description = '请求出错啦！', duration = null,
  } = {}) {
    Notification.error({
      message,
      description,
      duration,
    })
  },
  401(status, statusText) {
    this.errorNotify({ message: `${status}`, description: `抱歉，您没有权限访问 - ${statusText}` })
  },
  404(status, statusText) {
    this.errorNotify({ message: `${status}`, description: `找不到资源 - ${statusText}` })
  },
  418(status) {
    this.errorNotify({ message: `${status}`, description: '登录过期，请重新登录~', duration: '3000' })
  },
  500(status, statusText) {
    this.errorNotify({ message: `${status}`, description: `服务出错 - ${statusText}` })
  },
  default() {
    this.errorNotify()
  },
}

export default errorHandler
