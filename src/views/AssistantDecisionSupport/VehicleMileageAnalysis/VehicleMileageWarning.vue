<!-- 车辆里程预警 -->
<template>
  <t-query-panel :model="query" size="medium">
    <template v-slot:querybar>
        <el-form-item>
            <el-select v-model="query.companyname" clearable placeholder="平台名称">
                <el-option
                        v-for="item in getAutoCompanyName"
                        :key="item.onlyId"
                        :label="item.label"
                        :value="item.value"
                ></el-option>
            </el-select>
        </el-form-item>
      <el-form-item>
        <el-input v-model="query.cphm" placeholder="车牌号码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="query.mileages" placeholder="总行驶里程"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="query.status" placeholder="状态" clearable>
          <el-option
            v-for="item in query.stateOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
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
      <t-table-column prop="ABB_NAME" label="平台公司名称" width="340"></t-table-column>
      <t-table-column prop="CPHM" label="车牌号码" width="340"></t-table-column>
      <t-table-column prop="MILEAGES" label="总行驶里程(千米)" width="240"></t-table-column>
      <t-table-column prop="STATUS" label="状态" min-width="240"></t-table-column>
    </t-table-page>
  </t-query-panel>
</template>

<script>

  import { ajaxT, baseURL} from 'util'
  import moment from 'moment'
  import { mapGetters } from 'vuex'

export default {
  name: 'VehicleMileageWarning',
  data() {
    return {
      query: {
        companyname: '',
        cphm: '',
        mileages: '',
        status: '',
        stateOptions: [
          {label: '正常', value: '0'},
          {label: '预警', value: '1'},
          {label: '报警', value: '2'},
        ]
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
      this.getVehicleMileageWarning()
    })
  },
  computed: {
    ...mapGetters(['getAutoCompanyName'])
  },
  methods: {
    // 查询表格数据
    getVehicleMileageWarning() {
      this.table.loading = true
      const { companyname, cphm, mileages, status} = this.query
      const params = new URLSearchParams()
      params.append('companyname', companyname)
      params.append('cphm', cphm)
      params.append('mileages', mileages)
      params.append('status', status)
      ajaxT.post('data/getVehicleMileageWarning', params).then(res => {
        this.table.data = res.data.datas
        this.table.loading = false
      })
    },
    handleQueryClick() {
      this.getVehicleMileageWarning()
    },
    handleExportClick() {
      const { companyname, cphm, mileages, status} = this.query
      window.open(
        `${baseURL}data/exportVehicleMileageWarning?companyname=${companyname}&cphm=${cphm}&mileages=${mileages}&status=${status}`
      )
    },

  },
}

</script>

<style></style>
