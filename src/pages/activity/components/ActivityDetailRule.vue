<template>
  <div class='activity-detail-rule-container'>
    <div class="title-wrapper">
      <span class="title">活动规则</span>
    </div>
    <div class="content-wrapper">
      <p>
        1、指定门票在线直接销售<span class="height-tip">{{statistic_type === 1 ? '单数' : '张数'}}</span>达到指定数量（<span class="height-tip">{{award_type === 1 ? '销售后发放' : '核销后发放'}}</span>），即可获得对应奖励。
      </p>
      <p>
        2、奖励将于活动结束后发放至账户余额内。
      </p>
      <p>
        3、此活动的最终解释权归易行旅行社所属。
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'activityDetailRule',
  props: {
    statistic_type: Number,
    award_type: Number
  },
  components: {},
  data () {
    return {
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.activity-detail-rule-container
    background-color #ffffff
    border-radius rem(.1)
    padding rem(.3)
    .title-wrapper
        text-align center
        margin-top rem(.2)
        .title
            border-radius rem(.1)
            background #6EB6B3
            padding rem(.15) rem(.5)
            color #ffffff
    .content-wrapper
        margin-top rem(.4)
        & > p
            color #888
            line-height rem(.6)
            font-size rem(.3)
        .height-tip
            color $orangeColor
            margin 0 rem(.1)
</style>
