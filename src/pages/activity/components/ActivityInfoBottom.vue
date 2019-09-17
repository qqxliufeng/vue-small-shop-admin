<template>
  <div class='activity-info-bottom'>
    <div class="bottom-info">
      <span>活动详情见</span>
      <span class="rules" @click="ruleClick">活动规则></span>
    </div>
    <div class="invite-info" @click="invite">邀请好友赚赏金</div>
  </div>
</template>

<script>

export default {
  name: 'activityInfoBottom',
  methods: {
    ruleClick () {
      this.$emit('rule')
    },
    invite () {
      this.$emit('invite')
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.activity-info-bottom
    margin 8%
    margin-bottom 0
    .bottom-info
        width 90%
        margin 0 auto
        text-align center
        textStyle(#f00, .3)
        .rules
            color #fff
            text-decoration underline
    .invite-info
        font-weight bold
        textStyle(#fff, .4)
        background linear-gradient(top, #ff6151, red)
        border-radius rem(.3)
        display flex
        justify-content center
        align-items center
        padding rem(.3) 0
        margin-top rem(1)
</style>
