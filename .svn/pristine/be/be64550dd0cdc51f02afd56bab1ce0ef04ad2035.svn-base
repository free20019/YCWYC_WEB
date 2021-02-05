import { ajaxT } from 'util'
import moment from 'moment'

export function getTableData(data) {
  let params = `postData={'ptname':'${data.ptname}','begintime':'${(data.stime &&
    moment(data.stime).format('YYYY-MM-DD')) ||
    ''}','endtime':'${(data.etime && moment(data.etime).format('YYYY-MM-DD')) ||
    ''}','pageIndex':'${data.page}','pageSize':'${data.pageSize}'}`
  return ajaxT.post('dynamicData/findOrderCreate', params).then(res => res.data)
}
