<template>
    <div class="r-d-detail-container">
        <my-navi title="提交订单" :isFixed="true"></my-navi>
        <div class="r-d-detail-wrapper">
            <ticket-info></ticket-info>
            <ticket-user-info></ticket-user-info>
            <div class="r-d-detail-pay-action-wrapper" v-show="isShowAction">
                <span class="r-d-pay-action-price">总价：<i>￥45.00</i></span>
                <span class="r-d-pay-action-pay" @click="startOrderPay">立即预定</span>
            </div>
        </div>
    </div>
</template>

<script>
import TicketInfo from './components/TicketInfo'
import TicketDiscount from './components/TicketDiscount'
import TicketUserInfo from './components/TicketUserInfo'
export default {
  name: 'ReseveDetail',
  components: {
    TicketInfo,
    TicketDiscount,
    TicketUserInfo
  },
  data () {
    return {
      isShowAction: true
    }
  },
  methods: {
    startOrderPay () {
      this.$router.push({name: 'orderInfoPay'})
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.isShowAction = document.documentElement.clientHeight > 400
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        window.setTimeout(function () {
          document.activeElement.scrollIntoViewIfNeeded()
        }, 0)
      }
    })
  },
  destroyed () {
    window.removeEventListener('resize', () => {})
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.slide-fade-enter-active, .slide-fade-leave-active
    transition all .3s
.slide-fade-enter, .slide-fade-leave-to
    transform translateY($headerHeight)
    opacity 0
.r-d-detail-container
    z-index 0
    .r-d-detail-wrapper
        contentFixed()
        padding-bottom $headerHeight * 2
        .r-d-detail-pay-action-wrapper
            display flex
            height $headerHeight
            background-color #ffffff
            position fixed
            left 0
            right 0
            bottom 0
            align-items center
            border-top 1px solid #f5f5f5
            .r-d-pay-action-price
                flex 1
                padding-left rem(.3)
                & i
                   color $orangeColor
            .r-d-pay-action-pay
                background-color $orangeColor
                textStyle(#fff, .32)
                display flex
                align-items center
                height 100%
                padding 0 rem(.3)
</style>
