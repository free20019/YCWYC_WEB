<template>
  <div class="tw-icon" :class="iconClassName" :style="{ fontSize: styleFontSize }"></div>
</template>

<script>
export default {
  name: 'TWIcon',
  props: {
    icon: String,
    fontSize: String
  },
  computed: {
    iconClassName() {
      if (this.icon && this.icon.indexOf('icon-') >= 0) return `iconfont ${this.icon}`
      else return this.icon
    },
    styleFontSize() {
      return this.fontSize || '16px'
    }
  }
}
</script>

<style scoped>
.tw-icon {
  display: inline-block;
}
</style>
