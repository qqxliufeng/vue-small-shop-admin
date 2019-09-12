<template>
  <div class='activity-info-reward-container'>
    <activity-info-title title="分销奖励"></activity-info-title>
    <div class="reward-wrapper">
      <div class="image-wrapper">
        <img src="../../../assets/images/activity/img_reward_step.png">
      </div>
      <div class="reward-info-wrapper">
        <div class="reward-title-wrapper">
          <img src="../../../assets/images/activity/img_left_right.png" class="left-img">
          <span>好友购买越多，赏金越多</span>
          <img src="../../../assets/images/activity/img_left_right.png">
        </div>
        <div class="reward-example">
          例如XXX共邀请了40位好友购票，按每张返利15元计算，则XXX获得的返利如下：
        </div>
        <div class="image-wrapper" style="padding-top: 0; border-bottom: 0px">
          <img src="../../../assets/images/activity/img_reward_example.png">
        </div>
        <div class="reward-example-money">
          相当于平均每张获得30元
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActivityInfoTitle from './ActivityInfoTitle'
export default {
  name: 'activityInfoReward',
  components: {
    ActivityInfoTitle
  },
  data () {
    return {

    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.activity-info-reward-container
    position relative
    margin-top 8%
    .reward-wrapper
        width 90%
        margin 0 auto
        margin-top rem(-.2)
        background-color #f5f5f5
        border-radius rem(.08)
        .image-wrapper
            border-bottom 1px solid #ddd
            padding rem(.5)
            text-align center
            padding-top rem(.6)
            & > img
                width 90%
        .reward-info-wrapper
            padding rem(.3) 0
            .reward-title-wrapper
                display flex
                justify-content center
                align-items center
                & > img
                    height rem(.2)
                    width 15%
                .left-img
                    transform rotate(180deg)
                & > span
                    min-width 50%
                    ellipsis()
                    text-align center
                    color #ff6151
                    font-weight bold
            .reward-example
                width 80%
                margin rem(.4) auto
                line-height rem(.35)
                textStyle(#888, .25)
        .reward-example-money
            width 70%
            margin 0 auto
            border-top 1px solid #ddd
            border-bottom 1px solid #ddd
            text-align center
            padding rem(.3) 0
            textStyle(#888, .3)
</style>
