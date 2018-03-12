import {serveUrl} from './config'
import Vue from 'vue'

/**
 * 封装post请求
 * @param url     请求接口
 * @param params  请求参数
 * @returns {*}
 */
export function post(url, params) {
  let _this = Vue.prototype
  _this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('token')

  return _this.$http({
    method: 'post',
    url: url,
    data: params
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
