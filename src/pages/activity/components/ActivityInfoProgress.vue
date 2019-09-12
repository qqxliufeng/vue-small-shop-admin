<template>
  <div class='activity-info-progress-container' v-if="info">
    <activity-info-title title="活动进度"></activity-info-title>
    <div class="progress-info-wrapper">
      <div class="num-wrapper">
        <div class="num-info-wrapper">
          <div class="num-info"><span class="num">{{info.need_finish_num}}</span>{{unit}}</div>
          <div class="num-tip">销售任务单数</div>
        </div>
        <div class="line"></div>
        <div class="num-info-wrapper">
          <div class="num-info"><span class="num">{{info.finish_num}}</span>{{unit}}</div>
          <div class="num-tip">已完成订单</div>
        </div>
        <div class="line"></div>
        <div class="num-info-wrapper">
          <div class="num-info"><span class="num">{{info.need_finish_num - info.finish_num}}</span>{{unit}}</div>
          <div class="num-tip">还差</div>
        </div>
      </div>
      <div class="progress-remark-wrapper" v-html="tip">
      </div>
    </div>
  </div>
</template>

<script>
import ActivityInfoTitle from './ActivityInfoTitle'
export default {
  name: 'activityInfoProgress',
  props: {
    info: Object
  },
  computed: {
    unit () {
      return Number(this.info.statistic_type) === 1 ? '单' : '张'
    },
    tip () {
      if (this.info) {
        // 活动已结束
        if (this.info.status === 3) {
          // 活动任务进行中
          if (this.info.details_status === 1) {
            return '很遗憾，您差<span style="font-size: 0.4rem; margin: 0 .1rem">' + (this.info.need_finish_num - this.info.finish_num) + '</span>' + this.unit + '才能完成任务'
          } else { // 活动任务已完成
            const finishTip = '恭喜，您已完成活动任务，'
            switch (this.info.give_reward) {
              case 1:
                return finishTip + '红包未发放'
              case 2:
                return finishTip + '红包于活动结束后7个工作日内发放，请耐心等待'
              case 3:
                return finishTip + '红包已发放，请注意查收'
              default:
                return ''
            }
          }
        } else { // 活动进行中
          // 活动任务进行中
          if (this.info.details_status === 1) {
            return '再完成<span style="font-size: 0.4rem; margin: 0 .1rem">' + (this.info.need_finish_num - this.info.finish_num) + '</span>' + this.unit + '即可获得红包奖励'
          } else { // 活动任务已完成
            const finishTip = '恭喜，您已完成活动任务，'
            switch (this.info.give_reward) {
              case 1:
                return finishTip + '红包未发放'
              case 2:
                return finishTip + '红包于活动结束后7个工作日内发放，请耐心等待'
              case 3:
                return finishTip + '红包已发放，请注意查收'
              default:
                return ''
            }
          }
        }
      }
    }
  },
  components: {
    ActivityInfoTitle
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.activity-info-progress-container
    margin-top 20%
    .progress-info-wrapper
        width 90%
        margin 0 auto
        margin-top rem(-.2)
        .num-wrapper
            background #f5f5f5
            border-top-left-radius rem(.08)
            border-top-right-radius rem(.08)
            display flex
            padding rem(.8) 0 rem(.5) 0
            .line
                border 1px solid #ddd
            .num-info-wrapper
                flex 1
                text-align center
                .num-info
                    color #f00
                    .num
                        textStyle(#f00, .8)
                        font-weight bold
                .num-tip
                    margin-top rem(.2)
                    textStyle(#888, .28)
        .progress-remark-wrapper
            textStyle(#666, .3)
            background #fff
            border-bottom-left-radius rem(.08)
            border-bottom-right-radius rem(.08)
            padding rem(.3)
            line-height rem(.35)
</style>
