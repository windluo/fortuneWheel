<template>
  <div class="ft-msg-box" v-show="showBox">
    <div class="msg-box-b" v-show="showBox"></div>
      <div class="msg-box-container">
        <transition name="msgbox-bounce">
          <div class="msg-box-contc2" v-show="showBox">
            <p class="msg-box-title">{{title}}</p>
            <p class="msg-box-msg">{{msg}}</p>
            <mday-button :mday-btn-fn="handleClickOk">OK</mday-button>
          </div>
        </transition>
      </div>
  </div>
</template>

<script>
import MdayButton from './MdayButton'

export default {
  name: 'ft-msg-box',
  data () {
    return {
      showBox: false
    }
  },

  props: {
    title: {type: String, default: 'Title'},
    msg: {type: String, default: 'Message'},
    callBack: {type: [Function, String]}
  },

  components: {
    'mday-button': MdayButton
  },

  watch: {
    title (val) {
      if (!val) {
        this.showBox = false
      } else {
        this.showBox = true
      }
    }
  },

  methods: {
    handleClickOk () {
      if (this.callBack && typeof this.callBack === 'function') {
        this.callBack()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/_common'

.ft-msg-box
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  z-index 100
  .msg-box-b
    width 100%
    height 100%
    background #000
    opacity 0.7
  .msg-box-container
    width 100%
    position absolute
    top px2rem(274)
    left 0
    transition: .2s
    .msg-box-contc2
      width px2rem(248)
      padding px2rem(20) px2rem(16)
      text-align center
      border-radius px2rem(10)
      background #ffffff
      margin 0 auto
    .msg-box-title
      font-size px2rem(16)
      color deep_red
      line-height px2rem(40)
    .msg-box-msg
      font-size px2rem(14)
      color deep_blue
      margin-bottom px2rem(34)
  // .dt-btn-container
  //   width 100%
  //   height px2rem(30)
  //   line-height px2rem(30)
  //   text-align center
  //   .mday-button
  //     width px2rem(126)
  //     height 100%
  //     background url(../assets/img/btn_pink2.png) no-repeat
  //     background-size 100% 100%
  //     text-transform uppercase
  //     color real_red
  //     font-size px2rem(12)
  //     margin 0 auto
  .msgbox-bounce-enter {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.7)
  }
  .msgbox-bounce-leave-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.9)
  }
</style>
