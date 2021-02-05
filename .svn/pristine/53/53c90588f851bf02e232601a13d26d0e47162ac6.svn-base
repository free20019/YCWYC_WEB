import moment from 'moment'

const WEEK = ['一', '二', '三', '四', '五', '六', '日']

/**
 * 设置时间格式
 * 如果date值是空的不做处理
 *
 * @export
 * @param {*} date 需要设置的时间
 * @param {*} format 需要设置的格式
 * @returns 返回自定义格式的时间
 */
export function setDateTime(date, format) {
  return (date && moment(date).format(format)) || ''
}

/**
 * 设置日期加时间的格式
 *
 * @export
 * @param {*} value 需要设置的时间
 * @returns 返回这个'YYYY-MM-DD HH:mm:ss'格式的时间
 */
export function formatterDateTime(value) {
  return setDateTime(value, 'YYYY-MM-DD HH:mm:ss')
}

/**
 * 设置日期加时间的格式（element.table专用）
 *
 * @export
 * @param {*} row
 * @param {*} col
 * @param {*} value 需要设置的时间
 * @returns
 */
export function formatterTDateTime(row, col, value) {
  return formatterDateTime(value)
}

/**
 * 设置日期的格式
 *
 * @export
 * @param {*} value 需要设置的日期
 * @returns 返回这个'YYYY-MM-DD'格式的时间
 */
export function formatterDate(value) {
  return setDateTime(value, 'YYYY-MM-DD')
}

/**
 * 设置日期的格式（element.table专用）
 *
 * @export
 * @param {*} row
 * @param {*} col
 * @param {*} value 需要设置的日期
 * @returns
 */
export function formatterTDate(row, col, value) {
  return formatterDate(value)
}

/**
 * 设置日期的格式II
 *
 * @export
 * @param {*} value 需要设置的时间
 * @returns 返回这个'YYYY年MM月DD日'格式的时间
 */
export function formatterCDate(value) {
  return setDateTime(value, 'YYYY年MM月DD日')
}

/**
 * 设置日期的格式II（element.table专用）
 *
 * @export
 * @param {*} row
 * @param {*} col
 * @param {*} value 需要设置的时间
 * @returns
 */
export function formatterTCDate(row, col, value) {
  return formatterCDate(value)
}

/**
 * 设置年和月份的格式
 *
 * @export
 * @param {*} value 需要设置的时间
 * @returns 返回这个'YYYY-MM'格式的时间
 */
export function formatterYearMonth(value) {
  return setDateTime(value, 'YYYY-MM')
}

/**
 * 设置年和月份的格式（element.table专用）
 *
 * @export
 * @param {*} row
 * @param {*} col
 * @param {*} value 需要设置的时间
 * @returns
 */
export function formatterTYearMonth(row, col, value) {
  return formatterYearMonth(value)
}

/**
 * 设置年和月份的格式II
 *
 * @export
 * @param {*} value 需要设置的时间
 * @returns 返回这个'YYYY年MM月'格式的时间
 */
export function formatterCYearMonth(value) {
  return setDateTime(value, 'YYYY年MM月')
}

/**
 * 设置年和月份的格式II（element.table专用）
 *
 * @export
 * @param {*} row
 * @param {*} col
 * @param {*} value 需要设置的时间
 * @returns
 */
export function formatterTCYearMonth(row, col, value) {
  return formatterCYearMonth(value)
}

/**
 * 设置月份的格式
 *
 * @export
 * @param {*} value 需要设置的时间
 * @returns 返回这个'MM'格式的时间
 */
export function formatterMonth(value) {
  return setDateTime(value, 'MM')
}

/**
 * 设置月份的格式（element.table专用）
 *
 * @export
 * @param {*} row
 * @param {*} col
 * @param {*} value 需要设置的时间
 * @returns
 */
export function formatterTMonth(row, col, value) {
  return formatterMonth(value)
}

/**
 * 设置时间格式
 * @param {*} value 需要设置的时间
 */
export function formatterTime(value) {
  return setDateTime(value, 'HH:mm:ss')
}

/**
 * 设置时间格式（element.table专用）
 *
 * @export
 * @param {*} row
 * @param {*} col
 * @param {*} value 需要设置的时间
 * @returns
 */
export function formatterTTime(row, col, value) {
  return formatterTime(value)
}

/**
 * 获取当月日历信息
 *
 * @export
 * @param {*} date：日期
 * @returns
 */
export function getCalendar(date) {
  const lastDate = moment(date).endOf('month')
  const length = parseInt(lastDate.format('DD'))
  const calendar = []
  for (let i = 0; i < length; i++) {
    const currentDate = moment(moment(date).format(`YYYY-MM-${i + 1}`))
    calendar.push(getCalendarItem(currentDate))
  }
  return calendar
}

/**
 * 日历每项格式
 *
 * @param {*} date：日期
 * @returns
 */
function getCalendarItem(date) {
  return {
    y: date.format('YYYY'),
    m: date.format('MM'),
    d: date.format('DD'),
    date: date._d,
    char: date.format('YYYY年MM月DD日'),
    week: `周${WEEK[date.format('E') - 1]}`
  }
}
