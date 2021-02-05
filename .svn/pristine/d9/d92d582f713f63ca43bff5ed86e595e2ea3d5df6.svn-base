/**
 * 验证格式
 *
 * @param {number} [code=404] ：格式编码[0：验证通过,1：验证失败，404：验证后没有传对（属于验证返回格式错误）]
 * @param {string} [msg='未找到验证信息'] ：提示信息
 * @returns
 */
function verificationFormat(code = 404, msg = '未找到验证信息') {
  if (code == 0) return { code, msg: '验证通过' }
  if (code == 404) return { code, msg: '未找到验证信息' }
  if (msg == '未找到验证信息') return { code: 404, msg }
  return { code, msg }
}

/**
 * 金额验证
 *
 * @export
 * @param {*} value：传入的金额
 * @param {string} [title='金额'] ：需要验证的标题
 * @returns
 */
export function verificationMonth(value, title = '金额') {
  const regular = /^(([1-9]\d*)|\d)(\.\d{1,2})?$/
  if (value == null || value == '')
    return verificationFormat(1, `请输入${title}`)
  if (value == 0) return verificationFormat(1, `输入的${title}不能为"0"`)
  if (!regular.test(value))
    return verificationFormat(1, `输入的${title}不正确，请检查后再提交。`)
  return verificationFormat(0)
}
