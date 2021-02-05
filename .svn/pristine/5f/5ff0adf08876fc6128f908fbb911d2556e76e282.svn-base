<!-- 营运日报 -->
<template>
    <t-query-panel :model="query" size="medium">
        <template v-slot:querybar>
            <el-form-item>
                <el-date-picker v-model="query.time" type="date" placeholder="日期"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"  @click="handleQueryClick">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"  @click="handleExportClick">导出</el-button>
            </el-form-item>
        </template>
        <t-table-page :loading="table.loading" :page-size="table.pageSize" :data="table.data">
            <t-table-column type="index" label="序号" width="60"></t-table-column>
            <t-table-column prop="ABB_NAME" label="企业名称" width="240"></t-table-column>
            <t-table-column prop="ACTIVE_NUM" label="活跃车辆数" width="200"></t-table-column>
            <t-table-column prop="MATCH_NUM" label="接单量" width="200"></t-table-column>
            <t-table-column prop="DEP_NUM" label="完单量" width="200"></t-table-column>
            <t-table-column prop="DEP_RATE" label="完单率" width="200"></t-table-column>
            <t-table-column prop="DRIVEMILE" label="载客里程(千米)" width="200"></t-table-column>
            <t-table-column prop="FACTPRICE" label="营收金额(元)" min-width="200"></t-table-column>
        </t-table-page>
    </t-query-panel>
</template>

<script>

  import { ajaxT, baseURL} from 'util'
  import moment from 'moment'

  export default {
    name: 'EnterpriseDaily',
    data() {
      return {
        query: {
          time: '',
        },
        table: {
          data: [],
          pageSize: 15,
          loading: false
        },
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.query.time = new moment().add('day','-1')
        this.getEnterpriseDaily()
      })
    },
    methods: {
      // 查询表格数据
      getEnterpriseDaily() {
        const { time } = this.query
        if(!time) return this.$message.error('请选择时间！')
        this.table.loading = true
        const params = new URLSearchParams()
        params.append('time', time && moment(time).format('YYYY-MM-DD'))
        ajaxT.post('data/getEnterpriseDaily', params).then(res => {
          this.table.data = res.data.datas
          this.table.loading = false
        })
      },
      handleQueryClick() {
        this.getEnterpriseDaily()
      },
      handleExportClick() {
        const { time} = this.query
        if(!time) return this.$message.error('请选择时间！')
        window.open(
          `${baseURL}data/exportEnterpriseDaily?time=${time && moment(time).format('YYYY-MM-DD')}`
        )
      },

    },
  }

</script>

<style></style>
