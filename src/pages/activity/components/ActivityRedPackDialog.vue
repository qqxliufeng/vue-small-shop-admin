<template>
  <div class='activity-rea-pack-container' v-if="showDialog">
    <div class="bg" @click="cancelDialog"></div>
    <div class="content-wrapper">
      <div class="img-bg-wrapper">
        <img src="../../../assets/images/activity/img_red_pack_bg.png">
      </div>
      <div class="info-wrapper">
         <div class="img-wrapper">
            <img src="../../../assets/images/activity/img_red_pack.png">
            <span class="money">{{Number(info.money).toFixed(2)}}元</span>
         </div>
         <div class="tip1">销售<span>活动商品</span>满{{info.need_finish_num}}单时您获得{{Number(info.money).toFixed(2)}}元红包</div>
         <div class="line">
           <img src="../../../assets/images/activity/img_red_pack_line.png" alt="">
         </div>
         <div class="tip2">不论销售何种商品，您都会获得<span>分销返利</span></div>
      </div>
      <div class="button-wrapper">
        <div class="invite-info">立即邀请</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'activityRedPackDialog',
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    info: Object
  },
  methods: {
    cancelDialog () {
      this.$emit('dismiss')
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.activity-rea-pack-container
    display flex
    position fixed
    justify-content center
    align-items center
    top 0
    left 0
    right 0
    bottom 0
    z-index 999
    .bg
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        background-color #000
        opacity .6
        z-index 1
    .content-wrapper
        width 80%
        border-radius rem(.2)
        position relative
        z-index 2
        .img-bg-wrapper
            min-height 300px
            & > img
                width 100%
        .info-wrapper
            position absolute
            top 30%
            left 0
            right 0
            text-align center
            .img-wrapper
                & > img
                    width 30%
                .money
                    textStyle(#fff, .5)
                    font-weight bold
                    vertical-align bottom
            .tip1
                textStyle(#fff, .28)
                margin-top 8%
                & > span
                    textStyle(#f00, .35)
            .tip2
                textStyle(#fff, .28)
                & > span
                    textStyle(#f00, .35)
            .line
                & > img
                    width 80%
                    margin rem(.2)
        .button-wrapper
            background #fff
            padding rem(.4)
            margin-top rem(-.3)
            position relative
            border-bottom-left-radius rem(.2)
            border-bottom-right-radius rem(.2)
            .invite-info
                max-width 80%
                margin 0 auto
                font-weight bold
                textStyle(#fff, .32)
                background linear-gradient(top, #ff6151, red)
                border-radius rem(.3)
                display flex
                justify-content center
                align-items center
                padding rem(.25) 0
</style>
