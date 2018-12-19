import axios from 'axios'
import { setStore, getStore } from '../utils/utils'
axios.defaults.baseURL = process.env.API_ROOT
axios.defaults.withCredentials = true
// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (config.method === 'get') { // 判断是get请求
      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    } else if (config.data && config.data instanceof FormData) { // 判断是文件上传
      config.headers = {
        'Content-Type': 'multipart/form-data'
      }
    } else { // post put delete都是json
      config.data = JSON.stringify(config.data)
      config.headers = {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }
    if (getStore('token')) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.token = `${getStore('token')}`
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default {
  /**
   * 封装get方法
   * @param url
   * @param data
   * @returns {Promise}
   */

  fetchGet (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, params).then(res => {
        // 缓存请求的参数，为了mock数据可以使用
        setStore('params', JSON.stringify(params))
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  /**
   * 封装post请求
   * @param url
   * @param data
   * @returns {Promise}
   */

  fetchPost (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        // 缓存请求的参数，为了mock数据可以使用
        setStore('params', JSON.stringify(params))
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  /**
   * 封装patch请求
   * @param url
   * @param data
   * @returns {Promise}
   */

  patch (url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.patch(url, data).then(response => {
        // 缓存请求的参数，为了mock数据可以使用
        setStore('params', JSON.stringify(data))
        resolve(response.data)
      }, err => {
        reject(err)
      })
    })
  },

  /**
   * 封装put请求
   * @param url
   * @param data
   * @returns {Promise}
   */

  put (url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, data)
        .then(response => {
          // 缓存请求的参数，为了mock数据可以使用
          setStore('params', JSON.stringify(data))
          resolve(response.data)
        }, err => {
          reject(err)
        })
    })
  },

  /**
   * 封装delete方法
   * @param url
   * @param data
   * @returns {Promise}
   */

  delete (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.delete(url, params).then(res => {
        // 缓存请求的参数，为了mock数据可以使用
        setStore('params', JSON.stringify(params))
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
