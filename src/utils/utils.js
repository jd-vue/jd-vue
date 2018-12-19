
/**
 * 存储sessionStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.sessionStorage.setItem(name, content)
}

/**
 * 获取sessionStorage
 */
export const getStore = name => {
  if (!name) return
  return window.sessionStorage.getItem(name)
}

/**
 * 删除sessionStorage
 */
export const removeStore = name => {
  if (!name) return
  window.sessionStorage.removeItem(name)
}

/**
 * 获取当前时间
 */
export const getNowTime = () => {
  return (new Date()).getTime()
}
