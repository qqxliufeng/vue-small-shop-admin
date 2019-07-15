<template>
  <div class="info-content-wrapper">
      <div class="post-logo">
          <img :src="logo">
      </div>
      <div class="post-info">
        <p><span class="iconfont icon">&#xe736;</span>{{$root.userInfo.state.name}}</p>
        <p><span class="iconfont icon">&#xe613;</span>{{$root.userInfo.state.linkname}}</p>
        <p><span class="iconfont icon">&#xe615;</span>{{$root.userInfo.state.phone}}</p>
      </div>
      <div class="post-code-wrapper">
        <div class="post-code">
          <canvas ref="codeCanvas" class="code-canvas"></canvas>
        </div>
        <p>长按识别进入</p>
      </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'
export default {
  name: 'shareCode',
  props: {
    logo: String,
    url: String
  },
  components: {},
  data () {
    return {
    }
  },
  methods: {
    creatQrCode () {
      this.$nextTick(() => {
        QRCode.toCanvas(this.$refs.codeCanvas, this.url, (data) => {
        })
      })
    }
  },
  mounted () {
    this.creatQrCode()
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.info-content-wrapper
    display flex
    width 100%
    box-sizing border-box
    padding rem(.2) rem(.3)
    .post-logo
        width rem(1.5)
        height rem(1.6)
        margin-top rem(.15)
        display flex
        justify-content center
        align-items center
        & img
            width 100%
            height 100%
            object-fit cover
    .post-info
        flex 1
        display flex
        justify-content space-around
        flex-direction column
        color #333
        font-size rem(.3)
        margin-left rem(.2)
        .icon
            color #EEA53A
            font-size rem(.35)
            margin-right rem(.1)
    .post-code-wrapper
        text-align center
        width rem(1.8)
        overflow hidden
        .post-code
            text-align center
            .code-canvas
                width rem(1.6) !important
                height rem(1.6) !important
        & p
            color red
            font-size rem(.2)
</style>
