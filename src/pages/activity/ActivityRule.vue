<template>
  <div class='activity-detail-rule-container'>
    <my-navi title="活动详情" :isFixed="true"></my-navi>
    <div class="content-wrapper">
      <div class="img-wrapper">
        <img src="../../assets/images/activity/img_rule_header_img.png">
      </div>
      <div class="rule-info" v-html="rule">
      </div>
    </div>
    <div class="invite-info">邀请好友赚赏金</div>
  </div>
</template>

<script>
export default {
  name: 'activityDetailRule',
  props: {
    statistic_type: Number,
    award_type: Number
  },
  data () {
    return {
      rule: ''
    }
  },
  methods: {
    getData () {
      this.$http(this.$urlPath.activityDetailsRules, {
        id: this.$route.query.id
      }, '', (data) => {
        this.rule = data.data.rules
      }, (errorCode, error) => {
        console.log(error)
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.activity-detail-rule-container
    .content-wrapper
        margin-top $headerHeight
        padding-bottom rem(1.5)
        .rule-info
            textStyle(#666, .3)
            line-height rem(.4)
            padding rem(.2)
        .img-wrapper
            & > img
                width 100%
                min-height 188px
                background-color #f5f5f5
        & > p
            color #888
            line-height rem(.6)
            font-size rem(.3)
        .height-tip
            color $orangeColor
            margin 0 rem(.1)
    .invite-info
        font-weight bold
        textStyle(#fff, .4)
        background linear-gradient(top, #ff6151, red)
        border-radius rem(.3)
        display flex
        justify-content center
        align-items center
        padding rem(.3) 0
        width 80%
        margin 0 auto
        position fixed
        bottom 0
        left 0
        right 0
        margin-bottom rem(.2)
</style>
