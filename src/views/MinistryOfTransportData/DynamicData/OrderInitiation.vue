<!-- 交通部数据/动态数据查询/订单发起表  -->
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
      <t-table-column type="index"  label="序号" width="60"></t-table-column>
      <t-table-column prop="COMPANYNAME" label="公司" width="240"></t-table-column>
      <t-table-column prop="ADDRESS" label="发起地行政区划代码" width="180"></t-table-column>
      <t-table-column prop="ORDERID" label="订单编号" width="180"></t-table-column>
      <t-table-column prop="DEPARTTIME" label="预计用车时间" :formatter="formatterTableTime" width="180"></t-table-column>
      <t-table-column prop="ORDERTIME" label="订单发起时间" :formatter="formatterTableTime" width="180"></t-table-column>
      <t-table-column prop="PASSENGERNOTE" label="乘客备注" width="180"></t-table-column>
      <t-table-column prop="DEPARTURE" label="预计出发地点详细地址" width="180"></t-table-column>
      <t-table-column prop="DEPLONGITUDE" label="预计出发地点经度" width="180"></t-table-column>
      <t-table-column prop="DEPLATITUDE" label="预计出发地点纬度" width="180"></t-table-column>
      <t-table-column prop="DESTINATION" label="目的地" width="180"></t-table-column>
      <t-table-column prop="DESTLONGITUDE" label="目的地经度" width="180"></t-table-column>
      <t-table-column prop="DESTLATITUDE" label="目的地纬度" width="180"></t-table-column>
      <t-table-column prop="ENCRYPTBS" label="坐标加密标识" :formatter="formatterEncryptBS" width="180"></t-table-column>
      <t-table-column prop="FARETYPE" label="运价类型编码" width="180"></t-table-column>
      <t-table-column prop="DBTIME" label="入库时间" :formatter="formatterTableTime" min-width="180"></t-table-column>
    </t-table-page>
  </t-query-panel>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
import { getTableData } from 'api/MinistryOfTransportData/DynamicData/order-initiation-api'

export default {
  name: 'OrderInitiation',
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
    this.query.stime = new Date(moment().startOf('day'));
    this.query.etime = new Date();
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
    formatterEncryptBS(a, b, val) {
      val = parseInt(val);
      if(val=== 1){
        return 'GCJ-02';
      }else if(val===2){
        return 'WGS84 GPS';
      }else if(val===3){
        return 'BD-09';
      }else if(val===0){
        return '其他';
      }else {
        return '';
      }
    },
    getTableData() {
      const { ptname, stime, etime } = this.query
      if(!stime||!etime) return this.$message.error('请选择时间！');
      if((stime&&moment(stime).format('YYYY-MM'))!==(etime&&moment(etime).format('YYYY-MM'))) return this.$message.error('无法跨月查询！');
      const { page, pageSize } = this.table
      this.table.loading=true
      getTableData({
        ptname,
        stime,
        etime,
        page,
        pageSize
      }).then(res => {
        this.table.data = res.datas||[]
        // 总数
        this.table.total = parseInt(res.count)
        this.table.loading=false
      })
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
