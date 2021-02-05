import axios from 'axios'
import { msgSuccess, msgWarning, msgError } from 'util'
export const baseURL = process.env.NODE_ENV !== 'production' ? '/ycwyc/' : ''

/**
 * 返回API接口的状态类型
 *
 * @export
 * @param {*} code
 * @param {*} type
 * @param {*} cb
 */
export function apiReturnType(code, type, cb) {
  if (code > 0) {
    msgSuccess(`${type}成功`)
    if (typeof cb === 'function') cb()
  } else if (type === '删除') {
    if (code === -3) msgWarning(`无法${type}（别的表用到该条数据）`)
    else msgError(`${type}失败`)
  } else if (code === 0) msgError(`${type}失败`)
  else if (code === -1) msgWarning(`${type}失败，数据已存在`)
}

/**
 * 封装axios插件
 */
export const ajaxT = axios.create({ baseURL })

/**
 * 重置路径
 *
 * @export
 * @param {*} path
 * @returns
 */
export function resetPath(path) {
  return path ? baseURL + path : ''
}
