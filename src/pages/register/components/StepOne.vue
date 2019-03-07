<template>
<div class='r-s-one-container'>
  <p class="title">请填写您的身份信息</p>
  <div class="info-wrapper">
    <span class="info-title">手机号<i>(必填)</i>：</span>
    <div class="info-content-wrapper">
      <input type="text" class="input" placeholder="请输入手机号">
    </div>
  </div>
  <div class="info-wrapper">
    <span class="info-title">验证码<i>(必填)</i>：</span>
    <div class="info-code-wrapper">
      <input type="text" class="input" placeholder="请输入验证码">
      <button class="bt-code">获取验证码</button>
    </div>
  </div>
  <div class="info-wrapper">
    <span class="info-title">密码<i>(必填)</i>：</span>
    <div class="info-content-wrapper">
      <input type="text" class="input" placeholder="请输入手机号">
    </div>
  </div>
  <div class="info-wrapper">
    <span class="info-title">确认密码<i>(必填)</i>：</span>
    <div class="info-content-wrapper">
      <input type="text" class="input" placeholder="请输入手机号">
    </div>
  </div>
  <p class="next-step" @click="nextStep">下一步</p>
</div>
</template>

<script>

export default {
  name: 'stepOne',
  components: {},
  data () {
    return {

    }
  },
  methods: {
    nextStep () {
      this.$router.replace({name: 'stepTwo'})
    }
  },
  mounted () {
    window.addEventListener('resize', function () {
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        window.setTimeout(function () {
          document.activeElement.scrollIntoViewIfNeeded()
        }, 0)
      }
    })
  },
  destroyed () {
    window.removeEventListener('resize', () => {})
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.r-s-one-container
    background #f5f5f5
    padding rem(.4)
    padding-bottom 0
    height 100%
    overflow hidden
    .title
        textStyle(#888, .3)
    .info-wrapper
        display flex
        align-items center
        padding rem(.4) 0
        .info-title
            width 30%
            textStyle(#333, .3)
            & i
                textStyle(#888, .25)
        .info-content-wrapper
            width 70%
            display flex
            justify-content space-between
            .input
                border-radius rem(.02)
                background #fff
                border 1px solid #EDEEEE
                padding rem(.2)
                padding rem(.1)
                font-size 12px
                flex 1
          .info-code-wrapper
                width 70%
                display flex
                justify-content space-between
                .input
                    width 50%
                    border-radius rem(.02)
                    background #fff
                    border 1px solid #EDEEEE
                    padding rem(.1)
                    font-size 12px
                    flex 1
                .bt-code
                  font-size 12px
                  padding 0 rem(.1)
                  background $primary
                  border-radius rem(.1)
                  color #fff
                  margin-left rem(.2)
                  white-space nowrap
    .next-step
        background $primary
        color #fff
        text-align center
        margin rem(1) rem(.5) rem(.2) rem(.5)
        border-radius rem(.5)
        height $headerHeight
        line-height $headerHeight
</style>
