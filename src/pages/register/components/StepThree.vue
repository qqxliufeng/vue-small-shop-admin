<template>
<div class='r-s-three-container'>
  <p class="title">请填写您的店铺信息</p>
  <div class="info-wrapper">
    <div class="info-item-wrapper">
      <p class="info-title">店铺名称：</p>
      <span class="info-tag">(必填)</span>
    </div>
    <div class="info-content-wrapper">
      <input type="text" class="input" placeholder="请输入手机号">
    </div>
  </div>
  <div class="info-wrapper">
    <div class="info-item-wrapper">
      <p class="info-title">所在区域：</p>
      <span class="info-tag">(必填)</span>
    </div>
    <div class="info-code-wrapper">
    </div>
  </div>
  <div class="info-wrapper">
    <div class="info-item-wrapper">
      <p class="info-title">客服电话：</p>
    </div>
    <div class="info-content-wrapper">
      <input type="text" class="input" placeholder="请输入手机号">
    </div>
  </div>
  <div class="info-wrapper">
    <div class="info-item-wrapper">
      <p class="info-title">客服QQ：</p>
    </div>
    <div class="info-content-wrapper">
      <input type="text" class="input" placeholder="请输入手机号">
    </div>
  </div>
  <div class="info-wrapper">
    <div class="info-item-wrapper">
      <p class="info-title">客服微信：</p>
    </div>
    <div class="info-content-wrapper">
      <input type="text" class="input" placeholder="请输入手机号">
    </div>
  </div>
  <p class="next-step">提交</p>
</div>
</template>

<script>

export default {
  name: 'stepThree',
  components: {},
  data () {
    return {

    }
  },
  mounted () {
    window.addEventListener('resize', function () {
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        setTimeout(() => {
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
.r-s-three-container
    background #f5f5f5
    padding rem(.4) rem(.4) $headerHeight rem(.4)
    box-sizing border-box
    overflow hidden
    .title
        textStyle(#888, .3)
    .info-wrapper
        display flex
        align-items center
        padding rem(.4) 0
        .info-item-wrapper
            width 35%
            .info-title
                textStyle(#333, .28)
            .info-tag
                textStyle(#888, .25)
        .info-content-wrapper
            width 65%
            .input
                display inline-block
                width 100%
                border-radius rem(.02)
                background #fff
                border 1px solid #EDEEEE
                padding rem(.1)
                box-sizing border-box
                font-size 12px
    .image-title-wrapper
        textStyle(#333, .28)
        margin-top rem(.2)
        & span
            textStyle(#888, .25)
    .next-step
        background $primary
        color #fff
        text-align center
        margin rem(1) rem(.5) rem(.2) rem(.5)
        border-radius rem(.5)
        height $headerHeight
        line-height $headerHeight
</style>
