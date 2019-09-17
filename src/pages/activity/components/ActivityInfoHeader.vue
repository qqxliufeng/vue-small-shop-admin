<template>
  <div class='activity-info-header-container' v-if="info">
      <div class="bg-image-wrapper">
        <img src="../../../assets/images/activity/img_info_header_bg.png">
      </div>
      <div class="rule-info" @click="ruleClick">活动规则</div>
      <div class="bg-red-pack-wrapper">
         <img src="../../../assets/images/activity/img_info_red_pack_bg.png">
         <div class="detail-info-wrapper" @click="showRedDialog">
           <p class="title">邀好友参与此次销售活动满{{info.need_finish_num}}{{unit()}}</p>
           <div class="money-wrapper">
             <span>您多赚</span>
             <span class="money">{{info.money}}</span>
             <span class="yuan">元</span>
           </div>
           <p class="time">
             {{info.start_time + '至' + info.end_time2}}
           </p>
         </div>
         <div class="bottom-action-wrapper">
           <img src="../../../assets/images/activity/img_invite.png" @click="invite">
           <img src="../../../assets/images/activity/img_mian_to_mian.png" @click="showCodeDialog">
         </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'activityInfoHeader',
  props: {
    info: Object
  },
  methods: {
    unit () {
      return Number(this.info.statistic_type) === 1 ? '单' : '张'
    },
    ruleClick () {
      this.$emit('rule')
    },
    showRedDialog () {
      this.$emit('showRedDialog')
    },
    invite () {
      this.$emit('invite')
    },
    showCodeDialog () {
      this.$emit('show-code-dialog')
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.activity-info-header-container
    .bg-image-wrapper
        & > img
            width 100%
    .rule-info
        position absolute
        top 10%
        right 0
        line-height rem(.6)
        background #ffd681
        border-bottom-left-radius rem(.4)
        border-top-left-radius rem(.4)
        padding 0 rem(.3)
        font-weight bold
        color #fff
        font-size rem(.3)
    .bg-red-pack-wrapper
        margin 0 auto
        width 90%
        margin-top -55%
        position relative
        & > img
            position absolute
            top 0
            bottom 0
            left 0
            right 0
            width 100%
        .detail-info-wrapper
            position relative
            padding-top 30%
            box-sizing border-box
            transform rotate(-3deg)
            .title
                font-size rem(.28)
                color #ff6151
                text-align center
                font-weight bold
            .money-wrapper
                margin-top rem(.2)
                color #ff6151
                font-size rem(.28)
                text-align center
                font-weight bold
                .money
                    font-size rem(1)
                .yuan
                    font-size rem(.3)
                    background-color #ffd681
                    padding rem(.1)
                    border-radius 50%
                    display inline-block
                    width rem(.35)
                    height rem(.35)
                    line-height rem(.35)
                    border 2px solid #fff
                    margin-left rem(-.2)
            .time
                border 2px solid #ffd681
                width 40%
                border-radius rem(.3)
                text-align center
                color #ff6151
                margin 0 auto
                margin-top rem(.2)
                font-size rem(.2)
                padding rem(.05)
        .bottom-action-wrapper
            text-align center
            position relative
            margin-top 30%
            & > img
                width 70%
</style>
