<template>
  <div class="info-content-wrapper">
      <div class="post-logo">
          <img src="../../../assets/images/img_logo_icon.png">
      </div>
      <div class="post-info">
        <p><span class="iconfont icon">&#xe736;</span>{{$root.userInfo.state.name}}</p>
        <p><span class="iconfont icon">&#xe613;</span>{{$root.userInfo.state.linkname}}</p>
        <p><span class="iconfont icon">&#xe615;</span>{{$root.userInfo.state.id}}</p>
      </div>
      <div class="post-code-wrapper">
        <div class="post-code">
          <canvas ref="codeCanvas" class="code-canvas"></canvas>
        </div>
        <p>{{ $isWeiXin ? '微&nbsp;信&nbsp;扫&nbsp;码' : '长&nbsp;按&nbsp;识&nbsp;别'}}</p>
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
    padding rem(.15)
    .post-logo
        width rem(1.5)
        height rem(1.6)
        margin-top rem(.15)
        display flex
        justify-content center
        align-items center
        border-radius 5px
        & img
            width 100%
            height 100%
            object-fit cover
            border-radius 5px
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
            font-size rem(.25)
</style>
