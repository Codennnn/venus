import Message from 'ant-design-vue/es/message'

export default {
  hideMessage: null,
  install() {
    window.addEventListener('online', () => {
      this.hideMessage()
      this.hideMessage = null
    })
    window.addEventListener('offline', () => {
      this.hideMessage = Message.error('网络连接已断开', 0)
    })
  },
}
