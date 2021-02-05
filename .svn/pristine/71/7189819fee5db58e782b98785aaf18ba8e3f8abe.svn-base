<!--
 * @Descripttion: 
 * @version: 
 * @Author: CFQ
 * @Date: 2020-03-26 14:13:31
 * @LastEditors: CFQ
 * @LastEditTime: 2020-04-02 10:45:38
 -->
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
      label-width="125px"
      ref="platformBaseInfo"
    >
      <el-form-item label="姓名">
        <el-input :value="(selectRow && selectRow.NAME) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input :value="(selectRow && selectRow.SEX) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="身份证号">
        <el-input :value="(selectRow && selectRow.IDNUMBER) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input :value="(selectRow && selectRow.ADDRESS) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input :value="(selectRow && selectRow.TELEPHONE) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="初领驾驶证日期">
        <el-input :value="(selectRow && timeFormatter(selectRow.GETTIME)) || ''" readonly></el-input>
      </el-form-item>

      <el-form-item label="户籍地">
        <el-input :value="(selectRow && selectRow.HOUSEHOLD) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="准驾车型">
        <el-input :value="(selectRow && selectRow.MODEL) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="证件全称">
        <el-input :value="(selectRow && selectRow.CERTIFICATES) || ''" readonly></el-input>
      </el-form-item>
      <el-form-item label="资格证初领日期">
        <el-input
          :value="(selectRow && timeFormatter(selectRow.QUALIFICATIONSTIME)) || ''"
          readonly
        ></el-input>
      </el-form-item>
      <el-form-item label="从业资格类别状态">
        <el-input :value="(selectRow && selectRow.DISTINGUISH) || ''" readonly></el-input>
      </el-form-item>
      <!-- <el-form-item label="状态">
        <el-input :value="(selectRow && stateFormatter(selectRow.STATE)) || ''" readonly></el-input>
      </el-form-item> -->
    </el-form>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'IdCard',
  props: {
    selectRow: Object
  },
  methods: {
    //颜色状态
    statusFormatter(item, col, value) {
      if (value == '0') {
        return '正常'
      } else if (value == '1') {
        return '老系统(弃用)'
      } else if (value == '0') {
        return '注销'
      } else {
        return value
      }
    },
    //性别状态
    sexFormatter(value = '') {
      if (value == '2') {
        return '女'
      } else if (value == '1') {
        return '男'
      } else {
        return value
      }
    },
    // 状态
    stateFormatter(value) {
      if (value == '0') {
        return '有效'
      } else if (value == '1') {
        return '无效'
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
