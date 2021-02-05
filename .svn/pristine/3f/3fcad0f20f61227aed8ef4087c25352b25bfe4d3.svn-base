import { ajaxT } from 'util'
import moment from 'moment'

export function getTableData(data) {
  const params = queryParams(data)
  return ajaxT.post('***/***', params).then(res => res.data)
}

function queryParams(data) {
  const params = new URLSearchParams()
  params.append('year', (data.year && moment(data.year).format('YYYY')) || '')

  return params
}
