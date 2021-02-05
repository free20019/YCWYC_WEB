import _ from 'underscore'

/**
 * 判断'class'属性是否匹配
 *
 * @export
 * @param {*} el
 * @param {*} cls
 * @returns
 */
export function hasClass(el, cls) {
  if (!el || !cls) return false
  if (el.classList) return el.classList.contains(cls)
  else return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
}

/**
 * 定义图标类型名
 *
 * @export
 * @param icon
 * @returns {string|*}
 */
export function iconClassName(icon) {
  if (icon) {
    if (icon.indexOf('el-icon-') === 0) return icon
    else if (icon.indexOf('icon-') === 0) return `iconfont ${icon}`
    else return icon
  }
  return ''
}

/**
 * 样式的值转数字类型
 *
 * @export
 * @param {*} value
 * @returns
 */
export function styleValueToInt(value) {
  if (value == null) throw new TypeError(`styleValueToInt value：值为空`)
  const resetNumber = value.match(/^[0-9]+/)
  if (!resetNumber || !resetNumber[0])
    throw new TypeError(`styleValueToInt value：类型不符合；当前的值:${value}`)
  return parseInt(value.match(/^[0-9]+/)[0])
}

/**
 * 获取样式的单位
 *
 * @export
 * @param {*} value
 * @returns
 */
export function getStyleValueUnit(value) {
  if (value == null) throw new TypeError(`getStyleValueUnit value：值为空`)
  return value.match(/px|em|rem|pt|pc|ex|mm|cm|in|%$/)[0]
}

/**
 * 模块高度自适应
 * @param content：需要设置的dom
 * @param element：需要知道高度的dom
 * @param cb
 */
export function templateHeight(content, element, cb) {
  getDomHeight()
  window.onresize = () => {
    getDomHeight()
  }
  function getDomHeight() {
    const height = formatTemplateHeight(element)
    content.style.height = height
    if (cb) cb(height)
  }
}

/**
 * 获取模块剩余高度
 * @param elements
 * @returns {string}
 */
export function formatTemplateHeight(elements) {
  let height = 0
  if (!(elements instanceof Array) && !elements.offsetHeight) return ''
  if (elements instanceof Array)
    _.each(elements, (item) => {
      try {
        height += parseInt(item.offsetHeight)
      } catch (e) {
        console.error(e)
      }
    })
  else height = parseInt(elements.offsetHeight)
  return `calc(100% - ${height}px - 20px)`
}

/**
 * 从文本中获取img标签
 *
 * @export
 * @param {*} content
 * @returns
 */
export function getImageTag(content) {
  const imageReg = /<img.*?(?:>|\/>)/gi
  return content.match(imageReg)
}

/**
 * 从文本中获取src路径
 *
 * @export
 * @param {*} content
 * @returns
 */
export function getSrcPath(content) {
  const srcReg = /src=['"]?([^'"]*)['"]?/i
  return content.match(srcReg)
}

/**
 * 富文本长度限制
 *
 * @export
 * @param {*} content
 * @param {*} totalLength：文本总长度
 * @returns
 */
export function richTextLengthLimit(content, totalLength) {
  if (!content) throw new TypeError('richTextLengthLimit content：值为空')
  const splitText = ']-*-[' // 分割文本
  const interimContent = content.replace(/<[^>]+>/gi, splitText) // 获取文本内容
  let contentLength = 0 // 累计文本长度
  const interimList = _.map(interimContent.split(splitText), (item) => {
    const oldLenght = contentLength
    contentLength += item.length
    if (contentLength > totalLength && oldLenght <= totalLength) {
      const outLength = contentLength - totalLength
      return item.substring(0, item.length - outLength) + '...'
    } else if (oldLenght > totalLength) return ''
    else return item
  })
  return _.map(
    _.filter(interimList, (item) => item),
    (item) => `<p>${item}</p>`
  ).join('')
}
