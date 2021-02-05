<!-- 交通部数据/静态数据查询/乘客评价信息  -->
<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <t-query-panel :model="query" size="medium">
        <template v-slot:querybar>
            <el-form-item>
                <el-select v-model="query.ptname" clearable placeholder="平台名称">
                    <el-option
                            v-for="item in getAutoCompanyName"
                            :key="item.onlyId"
                            :label="item.label"
                            :value="item.value"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-date-picker v-model="query.stime" type="datetime" placeholder="开始日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-date-picker v-model="query.etime" type="datetime" placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleQueryClick">查询</el-button>
            </el-form-item>
        </template>
        <t-table-page
                :loading="table.loading"
                :data="table.data"
                :page-size="table.pageSize"
                :page-total="table.total"
                @current-change="handlePageChange"
        >
            <t-table-column type="index" label="序号" width="60"></t-table-column>
            <t-table-column prop="COMPANYNAME" label="公司" width="240"></t-table-column>
            <t-table-column prop="ORDERID" label="订单号" width="180"></t-table-column>
            <t-table-column prop="EVALUATETIME" label="评价时间" :formatter="formatterTableTime" width="180"></t-table-column>
            <t-table-column prop="SERVICESCORE" label="服务满意度(五分制)" width="180"></t-table-column>
            <t-table-column prop="DRIVERSCORE" label="驾驶员满意度(五分制)" width="180"></t-table-column>
            <t-table-column prop="VEHICLESCORE" label="车辆满意度(五分制)" width="180"></t-table-column>
            <t-table-column prop="DETAIL" label="评价内容" min-width="180"></t-table-column>
        </t-table-page>
    </t-query-panel>
</template>

<script>
  import { ajaxT } from 'util'
  import { mapGetters } from 'vuex'
  import moment from 'moment'

  export default {
    name: 'PassengerEvaluationInformation',
    data() {
      return {
        query: {
          ptname: '0',
          stime: '',
          etime: ''
        },
        table: {
          loading: false,
          data: [],
          pageSize: 15,
          page: 1,
          total: 0
        }
      }
    },
    mounted() {
      this.query.stime = new Date(moment().startOf('day'))
      this.query.etime = new Date()
      this.getTableData()
    },
    computed: {
      ...mapGetters(['getAutoCompanyName'])
    },
    methods: {
      handleQueryClick() {
        this.table.page = 1
        this.getTableData()
      },
      formatterTableTime(a, b, val) {
        return (val && moment(val).format('YYYY-MM-DD HH:mm:ss')) || ''
      },
      getTableData() {
        const { ptname, stime, etime } = this.query
        if (!stime || !etime) return this.$message.error('请选择时间！')
        if ((stime && moment(stime).format('YYYY-MM')) !== (etime && moment(etime).format('YYYY-MM'))) return this.$message.error('无法跨月查询！')
        const { page, pageSize } = this.table
        this.table.loading = true
        this.getData({
          ptname,
          stime,
          etime,
          page,
          pageSize
        }).then(res => {
          this.table.data = res.datas || []
          // 总数
          this.table.total = parseInt(res.count)
          this.table.loading = false
        })
      },

      getData(data) {
        let params = `postData={
        'ptname':'${data.ptname}',
        'begintime':'${(data.stime && moment(data.stime).format('YYYY-MM-DD')) || ''}',
        'endtime':'${(data.etime && moment(data.etime).format('YYYY-MM-DD')) || ''}',
        'pageIndex':'${data.page}',
        'pageSize':'${data.pageSize}'
        }`
        return ajaxT.post('dynamicData/findRatedPassenger', params).then(res => res.data)
      },

      handlePageChange(val) {
        this.table.page = val.currentPage
        this.getTableData()
      }
    },
    watch: {
      'query.stime': {
        handler(newVal, oldVal) {
          if (!newVal) this.query.stime = oldVal
        }
      },
      'query.etime': {
        handler(newVal, oldVal) {
          if (!newVal) this.query.etime = oldVal
        }
      }
    }
  }
</script>

<style></style>


