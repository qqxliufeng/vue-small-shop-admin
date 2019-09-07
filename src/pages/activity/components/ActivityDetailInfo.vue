<template>
<div class='activity-detail-info-container'>
  <div class="title-time">
    <span>距离活动结束:</span>
    <count-down :time="info.status === 3 ? 0 : (info.end_time - info.now_time )* 1000 " @end="countDownEnd">
      <template slot-scope="props">
          <span class="time-wrapper">
              <span class="time-bg">{{ props.days }}</span>天<span class="time-bg">{{ props.hours }}</span>时<span  class="time-bg">{{ props.minutes }}</span>分<span  class="time-bg">{{ props.seconds }}</span>秒
          </span>
      </template>
    </count-down>
  </div>
  <div class="content-info">
    <p class="sub-title">{{info.title}}</p>
    <div class="red-pack-info">
      <div class="red-pack-wrapper">
          <div class="left-circle"></div>
          <div class="right-circle"></div>
          <div class="red-pack-money-wrapper">
            <p class="red-pack-money-title">销售{{info.need_finish_num}}{{Number(info.statistic_type) === 1 ? '单' : '张' }}即可获得</p>
            <p class="red-pack-money">￥<span class="money">{{Number(info.money).toFixed(2) || 0}}</span></p>
          </div>
          <div class="line"></div>
          <div class="red-tips-wrapper">
            <div v-if="info.details_status === 1" class="num-wrapper">
              <p>再销售<span class="num">{{Number(info.need_finish_num) - Number(info.finish_num)}}</span>{{Number(info.statistic_type) === 1 ? '单' : '张' }}</p>
              <p>即可获得</p>
              <p class="goto-start">{{redPackTip}}</p>
            </div>
            <div class="finish-tip" v-else>
              <div v-if="info.status === 3" class="tip">
                <p>活动已结束</p>
                <p class="goto-start">{{redPackTip}}</p>
              </div>
              <div v-else class="tip">
                <p>活动已完成</p>
                <p class="goto-start">{{redPackTip}}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import CountDown from 'common/components/countdown/countdown'
export default {
  name: 'activityDetailInfo',
  props: {
    info: Object
  },
  components: {
    CountDown
  },
  data () {
    return {
    }
  },
  computed: {
    redPackTip () {
      switch (this.info.give_reward) {
        case 1:
          return '红包未发放'
        case 2:
          return '红包待发放'
        case 3:
          return '红包已发放'
        default:
          return ''
      }
    }
  },
  methods: {
    countDownEnd () {
      this.$emit('countDownEnd')
    },
    gotoStart () {
      this.$emit('gotoStart')
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.activity-detail-info-container
    .title-time
        border-radius rem(.1) rem(.1) 0 0
        background-color #2a8682
        height rem(.7)
        text-align center
        color #ffffff
        line-height rem(.7)
        .time-bg
            background-color #6EB6B3
            display inline-block
            padding 0 rem(.1)
            margin  0 rem(.05)
            line-height rem(.4)
            min-width rem(.3)
    .content-info
        border-radius 0 0 rem(.1) rem(.1)
        background-color #ffffff
        padding rem(.3)
        .sub-title
            color $orangeColor
            text-align center
            font-size rem(.32)
        .red-pack-info
            display flex
            flex-direction row
            justify-content center
            margin-top rem(.3)
            .red-pack-wrapper
                background #E4534C
                border-radius rem(.1)
                height rem(1.8)
                flex 1
                position relative
                overflow hidden
                display flex
                .left-circle
                    position absolute
                    top 50%
                    left 0
                    margin-top rem(-.2)
                    margin-left rem(-.2)
                    width rem(.4)
                    height rem(.4)
                    background #fff
                    border-radius 50%
                .right-circle
                    position absolute
                    top 50%
                    right 0
                    margin-top rem(-.2)
                    margin-right rem(-.2)
                    width rem(.4)
                    height rem(.4)
                    background #fff
                    border-radius 50%
                .red-pack-money-wrapper
                    flex 3
                    color #F9DF82
                    display flex
                    justify-content space-around
                    flex-direction column
                    align-items center
                    font-weight bold
                    .red-pack-money-title
                        font-size rem(.3)
                    .red-pack-money
                        .money
                            font-size rem(.65)
                .line
                    border 1px dashed #fff
                    height 100%
                .red-tips-wrapper
                    flex 2
                    color #fff
                    display flex
                    flex-direction column
                    font-size rem(.3)
                    justify-content center
                    align-items center
                    .num-wrapper
                        display flex
                        flex-direction column
                        justify-content space-around
                        height 100%
                        .num
                            font-size rem(.55)
                            color #f9df82
                            margin 0 rem(.1)
                    .finish-tip
                        color #fff
                        height 100%
                        .tip
                            display flex
                            flex-direction column
                            justify-content space-around
                            height 100%
    .goto-start
        background-color $orangeColor
        border-radius rem(.2)
        text-align center
        font-size rem(.22)
        margin-top rem(.1)
        padding rem(.1)
</style>
