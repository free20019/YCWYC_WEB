<template>
  <div class="tw-template-wrapper">
    <div class="tw-dialog-title">
      <div>基本信息</div>
    </div>
    <el-form
      class="tw-form"
      label-position="right"
      :inline="true"
      size="small"
      label-width="150px"
      ref="platformBaseInfo"
    >
      <el-form-item label="车牌号码">
        <el-input :value="(selectRow && selectRow.PLATE_NUMBER) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="车牌颜色">
        <el-input :value="(selectRow && selectRow.PLATECOLOR) || ''" readonly></el-input>
      </el-form-item>

      <el-form-item label="道路运输证号">
        <el-input :value="(selectRow && selectRow.CERTIFICATE) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="GPS厂家名称">
        <el-input :value="(selectRow && selectRow.GPSBRAND) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="报废年限">
        <el-input :value="(selectRow && timeFormatter(selectRow.DATESTOP)) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="营运状态">
        <el-input :value="(selectRow && selectRow.STATUS) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="本次年审日期">
        <el-input :value="(selectRow && selectRow.ANNUALREVIEW) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="稽查处理状态">
        <el-input :value="(selectRow && selectRow.INSPECTIONSTATUS) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="缴费截止日期">
        <el-input :value="(selectRow && timeFormatter(selectRow.PAYENDTIME)) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="车辆技术等级">
        <el-input :value="(selectRow && selectRow.TECHNOLOGY) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="运输证发证机构">
        <el-input :value="(selectRow && selectRow.TRANSAGENCY) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="许可证号码">
        <el-input :value="(selectRow && selectRow.LICENSENUMBER) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="初次发证日期">
        <el-input
          :value="(selectRow && timeFormatter(selectRow.CERTIFICATIONTIME)) || ''"
          readonly
        ></el-input>
      </el-form-item>
      <el-form-item label="车辆ID">
        <el-input :value="(selectRow && selectRow.VEHICLEID) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="车辆获得方式">
        <el-input :value="(selectRow && selectRow.VEHICLEACQUISITION) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="本次发证日期">
        <el-input :value="(selectRow && timeFormatter(selectRow.DATEOFISSUE)) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="年审登记日期">
        <el-input :value="(selectRow && timeFormatter(selectRow.REGISTRATIONDATE)) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="有效期至">
        <el-input :value="(selectRow && timeFormatter(selectRow.VALIDITYTIME)) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="业主名称">
        <el-input :value="(selectRow && selectRow.OWNERNAME) || ''" readonly></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'CarInfo',
  props: {
    selectRow: Object
  },
  methods: {
    //颜色状态
    colorFormatter(item, col, value) {
      if (value == '2600') {
        return '蓝色'
      } else if (value == '2603') {
        return '渐变绿'
      } else {
        return value
      }
    },
    //颜色状态
    statusFormatter(item, col, value) {
      if (value == '10') {
        return '正常'
      } else if (value == '80') {
        return '注销'
      } else if (value == '35') {
        return '过户'
      } else {
        return value
      }
    },
    timeFormatter(value) {
      if (value != null) {
        return moment(value).format('YYYY-MM-DD')
      }
    }
  }
}
</script>

<style></style>
