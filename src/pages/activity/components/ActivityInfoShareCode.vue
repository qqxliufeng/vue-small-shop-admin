<template>
  <div class='activity-info-share-code-container' v-if="showCode">
    <div class="bg"></div>
    <div class="content" @click="cancelDialog">
      <div class="face-tip">面对面邀请</div>
      <div class="post-code">
          <canvas ref="codeCanvas" class="code-canvas"></canvas>
        </div>
      <div class="tip" v-if="$isWeiXin">此二维码只能在微信客户端分享</div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'
export default {
  name: 'activityInfoShareCode',
  props: {
    showCode: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      codeUrl: ''
    }
  },
  watch: {
    showCode (newVal) {
      if (newVal) {
        this.creatQrCode()
      }
    }
  },
  methods: {
    cancelDialog () {
      this.$emit('dismiss-code')
    },
    creatQrCode () {
      this.$nextTick(() => {
        QRCode.toCanvas(this.$refs.codeCanvas, this.url, (data) => {
        })
      })
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.activity-info-share-code-container
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 999
    .bg
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        background-color #000
        opacity .6
        z-index 1
    .content
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        display flex
        justify-content center
        align-items center
        flex-direction column
        z-index 2
        .face-tip
            textStyle(#fff, .5)
        .post-code
            margin rem(.5) 0
        .tip
            textStyle($orangeColor, .3)
</style>
