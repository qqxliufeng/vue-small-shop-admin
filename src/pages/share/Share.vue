<template>
    <div class='share-container'>
        <div ref="post">
            <div class="share-header">
                <slot name="shareHeader"></slot>
            </div>
            <slot name="shareInfo"></slot>
        </div>
        <p class="shop-address-wrapper">
            <slot name="shareAddress"></slot>
        </p>
        <slot name="otherInfo"></slot>
        <div class="seperator-line"></div>
        <div class="post-action-wrapper">
          <span class="action action1" @click="savePost">保存图片</span>
          <span class="action action2" @click="sharePost">分享图片</span>
        </div>
        <el-dialog :visible.sync="showDialog" width="90%" :modal="false" :title="dialogTitle" center>
              <div class="share-img-post-wrapper">
                <img :src="postUrl">
              </div>
        </el-dialog>
        <div class="v-modal" v-show="showDialog"></div>
    </div>
</template>

<script>
import shareFlowImage from 'images/img_share_flow.png'
import html2canvas from 'html2canvas'
export default {
  name: 'shareComponent',
  components: {},
  data () {
    return {
      showDialog: false,
      postUrl: '',
      dialogTitle: '长按保存图片到手机'
    }
  },
  methods: {
    savePost () {
      html2canvas(this.$refs.post, {
        backgroundColor: '#ffffff',
        useCORS: true,
        logging: true,
        width: this.$refs.post.offsetWidth,
        height: this.$refs.post.offsetHeight,
        dpi: window.devicePixelRatio
      }).then((canvas) => {
        let dataUrl = canvas.toDataURL('image/png')
        this.postUrl = dataUrl
        this.dialogTitle = '长按保存图片到手机'
        this.showDialog = true
      })
    },
    sharePost () {
      this.dialogTitle = '分享流程'
      this.showDialog = true
      this.postUrl = shareFlowImage
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
>>> .el-dialog__header
    padding rem(.15)
>>> .el-dialog__headerbtn
    top rem(.15)
>>> .el-dialog__title
    font-size rem(.28)
.share-container
    overflow-y scroll
    .share-header
        width 100%
        height 117vw
    .shop-address-wrapper
        border-top rem(.1) solid #f5f5f5
        padding rem(.2)
        .shop-address-title
            textStyle(#333, .32)
            display inline-block
            width 20%
        .shop-address
            display inline-block
            word-break break-all
            background #E8EDED
            border 1px solid #DCE0E2
            padding rem(.2)
            width 70%
            vertical-align text-top
    .seperator-line
        width 100%
        height rem(1)
    .post-action-wrapper
        display flex
        position fixed
        right 0
        left 0
        bottom 0
        padding rem(.15) rem(.3)
        justify-content space-around
        border-top 1px solid #f5f5f5
        background #ffffff
        .action
            border-radius rem(.1)
            padding rem(.2) rem(.3)
        .action1
            border 1px solid #eea53a
            color #eea53a
        .action2
            background #eea53a
            color #ffffff
    & >>> .el-dialog__body
        padding 0
        .share-img-post-wrapper
            width 100%
            & img
                width 100%
                height 100%
                object-fit cover
    .v-modal
        position: fixed
        left 0
        top 0
        width 100%
        height 100%
        opacity .5
        background: #000
        z-index 10
</style>
