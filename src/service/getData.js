import http from './fetch'
/**
 * 我的个人信息展示
 */
export const showInfo = (params) => {
  return http.fetchGet('/news/index', params)
}
