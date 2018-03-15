import {post} from './post'
import {serveUrl} from './config'

/**
 * 获取logo
 * @returns {*}
 */
export function getLogo() {
  const result = post('Home/Index/logo')
  return result
}

/**
 * 获取轮播图列表
 * @returns {*}
 */
export function homeSwiper() {
  const result = post('Home/Index/imgs')
  return result
}

/**
 * 获取首页协会动态列表
 * @returns {*}
 */
export function associatList() {
  const result = post('Home/Index/dynamic')
  return result
}

/**
 * 获取首页通知公告列表
 * @returns {*}
 */
export function noticeIndexList() {
  const result = post('Home/Index/notice')
  return result
}

/**
 * 获取首页学术交流列表
 * @returns {*}
 */
export function academicIndexList() {
  const result = post('Home/Index/academic')
  return result
}

/**
 * 获取首页他山之石&在线阅读列表
 * @param type    1他山之石,2在线阅读
 * @returns {*}
 */
export function otherIndexList(type = 1) {
  const result = post('Home/Index/ta', {
    type: type
  })
  return result
}

/**
 * 获取首页会员天地列表
 * @returns {*}
 */
export function vipIndexList() {
  const result = post('Home/Members/imgs')
  return result
}

/**
 * 获取底部信息
 * @returns {*}
 */
export function getFootInfo() {
  const result = post('Home/Index/ends')
  return result
}

/**
 * 获取通知公告列表
 * @param page
 * @returns {*}
 */
export function noticeList(page = 1) {
  const result = post('Home/Notice/lists', {
    page: page
  })
  return result
}

/**
 * 获取通知公告详情
 * @param id
 * @returns {*}
 */
export function noticeDetail(id) {
  const result = post('Home/Notice/data', {
    id: id
  })
  return result
}

/**
 * 协会介绍列表
 * @param page
 * @returns {*}
 */
export function introduceList(page = 1) {
  const result = post('Home/introduce/lists', {
    page: page
  })
  return result
}

/**
 * 协会介绍详情
 * @param id
 * @returns {*}
 */
export function introduceDetail(id) {
  const result = post('Home/introduce/data', {
    id: id
  })
  return result
}

/**
 * 获取图片验证码
 * @returns {string}
 */
export function getImgCode() {
  return serveUrl + '/Home/Introduce/vertify' + '/' + Date.parse(new Date())
}

/**
 * 提交表单数据
 * @param name
 * @param phone
 * @param content
 * @param vertify
 * @returns {*}
 */
export function formSubmit(name, phone, content, vertify) {
  const result = post('Home/Introduce/message', {
    name: name,
    phone: phone,
    content: content,
    vertify: vertify
  })
  return result
}

/**
 * 获取会员天地
 * @param page
 * @returns {*}
 */
export function vipList(page = 1) {
  const result = post('Home/Members/lists', {
    page: page
  })
  return result
}

/**
 * 获取协会动态
 * @param page
 * @returns {*}
 */
export function dynamicList(page = 1) {
  const result = post('Home/Dynamic/lists', {
    page: page
  })
  return result
}

/**
 * 获取学术交流列表
 * @param page
 * @returns {*}
 */
export function academicList(page = 1) {
  const result = post('Home/Academic/lists', {
    page: page
  })
  return result
}

/**
 * 获取在线阅读列表
 * @param page
 * @returns {*}
 */
export function onlineList(page = 1) {
  const result = post('Home/Online/lists', {
    page: page
  })
  return result
}

/**
 * 他山之石列表
 * @param page
 * @returns {*}
 */
export function taShanList(page = 1) {
  const result = post('Home/Ta/lists', {
    page: page
  })
  return result
}

/**
 * 下载专区列表
 * @param page
 * @returns {*}
 */
export function downloadList(page = 1) {
  const result = post('Home/Download/lists', {
    page: page
  })
  return result
}

/**
 * 文件下载
 * @param filename
 * @returns {string}
 */
export function downFile(filename) {
  return serveUrl + '/' + 'Home/Download/download?filename=' + filename
}
