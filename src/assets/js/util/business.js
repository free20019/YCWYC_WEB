// 私有项目工具类
import _ from 'underscore'

export function tableCanBeFilledColumn({
  columns,
  columnName,
  value,
  addCName = 'hasEdit',
  type = 'prop'
} = {}) {
  _.each(columns, item => {
    if (item[type] === columnName) item[addCName] = value
  })
}
