<template>
  <div class='activity-info-use-container'>
    <activity-info-title title="赏金如何使用"></activity-info-title>
    <div class="use-wrapper">
      分销商获得的奖励通过【账户返利】转为【账户余额】后，在易行旅行网上购买任何商品时直接抵扣。
    </div>
  </div>
</template>

<script>
import ActivityInfoTitle from './ActivityInfoTitle'
export default {
  name: 'activityInoUse',
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
.activity-info-use-container
    width 90%
    margin 0 auto
    margin-top 8%
    .use-wrapper
        margin-top rem(-.18)
        border-radius rem(.08)
        background #f5f5f5
        padding rem(.4)
        line-height rem(.35)
        textStyle(#666, .3)
</style>
