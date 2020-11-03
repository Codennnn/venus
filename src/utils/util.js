/**
 * 设置网页标题
 */
export function setPageTitle(title) {
  const subTitle = title ? `${title} - ` : ''
  document.title = `${subTitle}${process.env.VUE_APP_PAGE_TITLE}`
}

/**
 * 是否为数组
 */
export function isArray(value) {
  return Array.isArray(value)
}

/**
 * 是否为函数
 */
export function isFunction(value) {
  return typeof value === 'function'
}

/**
 * 是否为有效链接
 */
export function isValidUrl(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
