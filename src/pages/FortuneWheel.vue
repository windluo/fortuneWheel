<template>
  <div class="luck-draw">
    <div class="luck-draw-title">
      <p>来啊，抽奖啊！</p>
    </div>
    <div class="wheel-container">
      <div class="wheel-shell">
        <div class="wheel-gift-container wheelgift" ref="wheelgift">
          <div class="wheel-gift-item wheel-gift-calendar">
            <div class="gift-calendar-img"></div>
            <p class="gift-title">Wheel</p>
            <p class="gift-title">Calendar</p>
          </div>
          <div class="wheel-gift-item wheel-gift-giftcard">
            <div class="gift-giftcard-img"></div>
            <p class="gift-title">Gift Card</p>
            <p class="gift-title">Tororo.com</p>
            <p class="gift-title">50K</p>
          </div>
          <div class="wheel-gift-item wheel-gift-pregnancy">
            <div class="gift-pregnancy-img"></div>
            <p class="gift-title">Pregnancy</p>
            <p class="gift-title">Card</p>
          </div>
          <div class="wheel-gift-item wheel-gift-25k">
            <div class="gift-25k-img"></div>
            <p class="gift-title">Pulsa</p>
            <p class="gift-title">25K</p>
            <p class="gift-title">Rupiah</p>
          </div>
          <div class="wheel-gift-item wheel-gift-voucher">
            <div class="gift-voucher-img"></div>
            <p class="gift-title">Voucher</p>
            <p class="gift-title">Belanja</p>
            <p class="gift-title">Tororo.com</p>
            <p class="gift-title">100K</p>
          </div>
          <div class="wheel-gift-item wheel-gift-brush">
            <div class="gift-brush-img"></div>
            <p class="gift-title">Mermaid</p>
            <p class="gift-title">Brush</p>
          </div>
          <div class="wheel-gift-item wheel-gift-none">
            <div class="gift-none-img"></div>
            <p class="gift-title">Terima Kasih</p>
          </div>
          <div class="wheel-gift-item wheel-gift-none wheel-gift-nonebt">
            <div class="gift-none-img"></div>
            <p class="gift-title">Terima Kasih</p>
          </div>
        </div>
        <div class="wheel-btn" @click="startDraw">Putar</div>
      </div>
    </div>
    <div class="leave-info" v-show="showInfo">
      <div class="leave-b"></div>
      <div class="leave-container">
        <div class="leave-wrap">
          <p class="leave-title">恭喜!</p>
          <p class="leave-subtitle">{{prizeMsg[rn].text}}</p>
          <img :src="prizeMsg[rn].img" class="giftimg">
          <mday-button :mday-btn-fn="submit">确认</mday-button>
        </div>
      </div>
    </div>
    <ft-msg-box :title="title" :msg="msg" :call-back="callBack"></ft-msg-box>
  </div>
</template>
<script>
import FtmessageBox from '../components/FtmessageBox'
import MdayButton from '../components/MdayButton'
import move from 'move-js'

export default {
  data () {
    return {
      title: '',
      msg: '',
      callBack: '',
      name: '',
      address: '',
      phone: '',
      email: '',
      deg: 0,
      moveLoop: 1,  // 统计转盘转了几圈
      showInfo: false,
      canDraw: false,
      rn: 1,
      prizeMsg: {  // 顺序对应转盘上奖品的位置
        0: {text: '恭喜获得日历', img: require('../assets/img/gift_calendar_big.png')},
        1: {text: '', img: ''},
        2: {text: '恭喜获得美人鱼刷', img: require('../assets/img/gift_brush_big.png')},
        3: {text: '恭喜获得10K购物券', img: require('../assets/img/gift_voucher_big.png')},
        4: {text: '恭喜获得2.5K购物券', img: require('../assets/img/gift_25k_big.png')},
        6: {text: '恭喜获得pregnancy', img: require('../assets/img/gift_pregnancy_big.png')},
        5: {text: '', img: ''},
        7: {text: '恭喜获得5K购物卡', img: require('../assets/img/gift_giftcard_big.png')}
      }
    }
  },

  components: {
    'ft-msg-box': FtmessageBox,
    'mday-button': MdayButton
  },

  methods: {
    startDraw () {
      // 用于测试中奖或不中奖的弹框提示
      // 这里的数据都不进数据库
      this.canDraw = false
      this.rn = Math.floor(Math.random() * 8)
      this.deg = this.rn * 45
      move('.wheelgift')
        .rotate(1800 * this.moveLoop + this.deg)
        .duration('5s')
        .end(() => {
          this.moveLoop++
          if (this.rn === 1 || this.rn === 5) {
            this.title = '遗憾！'
            this.msg = '很遗憾你没有中奖，欢迎下次再来···'
            this.callBack = () => {
              this.title = ''
              this.msg = ''
            }
          } else {
            this.showInfo = true
          }
        })
    },

    submit () {
      this.showInfo = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../assets/stylus/_common'
.luck-draw
  height 100%
  // height px2rem(640)
  width 100%
  background #f5f5f5
  .luck-draw-title
    color deep_blue
    font-size px2rem(14)
    text-align center
    padding-top px2rem(64)
  .wheel-container
    width px2rem(288)
    height px2rem(288)
    margin px2rem(34) auto 0
    position relative
  .wheel-shell
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    background url(../assets/img/back04.png) no-repeat
    background-size 100% 100%
    transform rotate(-20deg)
  .wheel-gift-container
    width px2rem(256)
    height px2rem(256)
    background url(../assets/img/back05.png) no-repeat
    background-size 100% 100%
    position relative
    margin px2rem(16) auto
  .wheel-btn
    width px2rem(80)
    height px2rem(94)
    color orange_yellow
    font-size px2rem(16)
    text-align center
    line-height px2rem(108)
    background url(../assets/img/btn_wheel.png) no-repeat
    background-size 100% 100%
    position absolute
    top 48%
    left 50%
    transform translate3d(-50%, -50%, 0) rotate(20deg)
  .wheel-gift-item
    color rol_purple
    font-size px2rem(10)
    text-align center
    position absolute
    &.wheel-gift-calendar
      top px2rem(25)
      left px2rem(140)
      transform rotate(20deg)
    &.wheel-gift-giftcard
      transform rotate(70deg)
      top px2rem(64)
      right px2rem(20)
    &.wheel-gift-pregnancy
      transform rotate(110deg)
      top px2rem(135)
      right px2rem(24)
    &.wheel-gift-25k
      transform rotate(200deg)
      top px2rem(180)
      left px2rem(72)
    &.wheel-gift-voucher
      transform rotate(-110deg)
      top px2rem(130)
      left px2rem(18)
    &.wheel-gift-brush
      transform rotate(-64deg)
      top px2rem(70)
      left px2rem(28)
    &.wheel-gift-none
      transform rotate(-30deg)
      top px2rem(20)
      left px2rem(60)
    &.wheel-gift-nonebt
      transform rotate(156deg)
      top px2rem(200)
      left px2rem(135)
    .gift-calendar-img
      display inline-block
      width px2rem(20)
      height px2rem(21)
      background url(../assets/img/gift_calendar.png) no-repeat
      background-size 100% 100%
    .gift-giftcard-img
      display inline-block
      width px2rem(43)
      height px2rem(24)
      background url(../assets/img/gift_giftcard.png) no-repeat
      background-size 100% 100%
    .gift-pregnancy-img
      display inline-block
      width px2rem(28)
      height px2rem(28)
      background url(../assets/img/gift_pregnancy.png) no-repeat
      background-size 100% 100%
    .gift-25k-img
      display inline-block
      width px2rem(42)
      height px2rem(24)
      background url(../assets/img/gift_25k.png) no-repeat
      background-size 100%
    .gift-voucher-img
      display inline-block
      width px2rem(36)
      height px2rem(21)
      background url(../assets/img/gift_voucher.png) no-repeat
      background-size 100%
    .gift-brush-img
      display inline-block
      width px2rem(17)
      height px2rem(28)
      background url(../assets/img/gift_brush.png) no-repeat
      background-size 100% 100%
    .gift-none-img
      display inline-block
      width px2rem(25)
      height px2rem(25)
      background url(../assets/img/gift_none.png) no-repeat
      background-size 100% 100%
  .leave-info
    width 100%
    height 100%
    position fixed
    top 0
    left 0
    z-index 200
    .leave-b
      width 100%
      height 100%
      background #000
      opacity 0.7
    .leave-container
      width px2rem(240)
      max-height 80%
      overflow-y auto
      padding px2rem(20)
      background #ffffff
      border-radius px2rem(10)
      position absolute
      top 50%
      left 50%
      transform translate3d(-50%, -50%, 0)
    .leave-title
      color deep_red
      font-size px2rem(16)
      line-height px2rem(40)
      text-align center
    .leave-subtitle
      color deep_blue
      font-size px2rem(14)
      text-align center
      &.subtitle-d
        text-align left
    .giftimg
      display block
      // background rs_red
      width px2rem(240)
      // height px2rem(240)
      margin-top px2rem(16)
      margin-bottom px2rem(8)
      border none
    .leave-sub-desc
      color deep_blue
  .leave-form
    margin-top px2rem(16)
    .form-item
      border 1px solid rs_red
      border-radius px2rem(4)
      margin-bottom px2rem(10)
      padding px2rem(13) px2rem(10)
      font-size px2rem(14)
      & input
        display block
        width 100%
        color deep_blue
        border none
  .dt-btn-container
    margin-top px2rem(27)
</style>
