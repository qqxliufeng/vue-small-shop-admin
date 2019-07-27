<template>
<div class='activity-detail-info-container' v-if="info">
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
          <div class="red-yello-bg"></div>
          <div class="red-pack-money-wrapper">
            <p class="red-pack-money-title">余额红包</p>
            <p class="red-pack-money">￥<span class="money">{{Number(info.money).toFixed(0) || 0}}</span></p>
          </div>
      </div>
      <div class="red-tips-wrapper">
        <div v-if="info.details_status === 1">
          <p>再销售<span class="num">{{Number(info.need_finish_num) - Number(info.finish_num)}}</span>{{Number(info.statistic_type) === 1 ? '单' : '张' }}</p>
          <p>即可获得</p>
        </div>
        <div class="finish-tip" v-else>
          <p v-if="info.status === 3">活动已结束</p>
          <p v-else>活动已完成</p>
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
    info: {
      type: Object,
      default: null
    }
  },
  components: {
    CountDown
  },
  data () {
    return {
    }
  },
  methods: {
    countDownEnd () {
      this.$emit('countDownEnd')
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
                .red-yello-bg
                    background-color #F9DF82
                    height rem(5)
                    width rem(5)
                    border-radius 50%
                    position absolute
                    top rem(-1.6)
                    left rem(-4.4)
                .red-pack-money-wrapper
                    color #F9DF82
                    position absolute
                    top 0
                    left rem(.5)
                    bottom 0
                    right 0
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
            .red-tips-wrapper
                margin-left rem(.2)
                color $orangeColor
                display flex
                flex-direction column
                font-size rem(.45)
                justify-content center
                align-items center
                line-height rem(.6)
                .num
                    font-size rem(.65)
                    color red
                    margin 0 rem(.1)
                .finish-tip
                    color #888888
</style>
