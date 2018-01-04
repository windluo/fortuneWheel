<template>
  <div class="dt-btn-container">
    <div class="mday-button" @click="handleClickOk"><slot></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    mdayBtnFn: {
      type: [Function, String],
      default: ''
    }
  },

  methods: {
    handleClickOk () {
      if (this.mdayBtnFn && typeof this.mdayBtnFn === 'function') {
        this.mdayBtnFn()
      }
    }
  }
}
</script>


<style lang="stylus" scoped>
@import '../assets/stylus/_common'
.dt-btn-container
  width 100%
  height px2rem(30)
  line-height px2rem(30)
  text-align center
  margin-top px2rem(8)
  .mday-button
    width px2rem(126)
    height 100%
    background url(../assets/img/btn_pink2.png) no-repeat
    background-size 100% 100%
    text-transform uppercase
    color real_red
    font-size px2rem(12)
    margin 0 auto
</style>
