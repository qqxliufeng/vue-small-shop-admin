<template>
<div class='share-ticket-container'>
  <my-navi title="邀请好友" :isFixed="true"></my-navi>
  <div class="content" v-if="info">
    <share-component>
      <template slot="shareHeader">
        <div class="header-content-wrapper">
          <div class="header-content">
            <div class="content-title-wrapper">
              <img :src="$utils.image.getImagePath($root.userInfo.state.avatar)" class="item-face-icon">
              <div class="item-info">
                <p class="item-name">{{$root.userInfo.state.name}}</p>
                <p class="item-phone">邀请您成为他的分销商</p>
              </div>
            </div>
            <div class="separator-wrapper">
              <span class="left"></span>
              <span class="center"></span>
              <span class="right"></span>
            </div>
            <div class="code-wrapper">
              <canvas class="code" ref="qrcode"/>
              <p class="flag">长按识别二维码</p>
            </div>
          </div>
        </div>
      </template>
      <template slot="shareInfo">
        <div class="info-content-wrapper">
          加盟须知：
          这是一个很重要的事这是一个很重要的事这是一个很重要的事这是一个很重要的事这是一个很重要的事这是一个很重要的事这是一个很重要的事这是一个很重要的事这是一个很重要的事
        </div>
      </template>
      <template slot="shareAddress">
        <span class="shop-address-title">注册链接:</span>
        <span class="shop-address">{{$urlPath.getShareRegisterUrl($root.userInfo.state.id)}}</span>
      </template>
    </share-component>
  </div>
</div>
</template>

<script>
import QRCode from 'qrcode'
import ShareComponent from './Share'
export default {
  name: 'shareTicket',
  components: {
    ShareComponent
  },
  data () {
    return {
      info: null
    }
  },
  watch: {
    info (newVal, oldVal) {
      if (newVal) {
        this.qrCode()
      }
    }
  },
  methods: {
    qrCode () {
      this.$nextTick(() => {
        QRCode.toCanvas(this.$refs.qrcode, this.$urlPath.getShareRegisterUrl(this.$root.userInfo.state.id), error => {
          if (error) {
            console.log(error)
          } else {
            console.log('success')
          }
        })
      })
    },
    getData () {
      this.$http(this.$urlPath.shareReigsterUrl, {}, '',
        (data) => {
          this.info = data.data
        }, (errorCode, error) => {
          this.$toast(error)
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
.share-ticket-container
    .content
        contentFixed()
        .header-content-wrapper
            background $primary
            height 100%
            overflow hidden
            .header-content
                position relative
                width 70%
                height 70%
                margin 0 auto
                margin-top rem(.5)
                background #fff
                padding rem(.3)
                box-sizing border-box
                .content-title-wrapper
                    display flex
                    .item-face-icon
                        display inline-block
                        width rem(1)
                        height rem(1)
                        border-radius 50%
                        margin-right rem(.1)
                    .item-info
                        display flex
                        flex-direction column
                        justify-content space-around
                        .item-name
                            textStyle(#333, .3)
                        .item-phone
                            textStyle(#888, .28)
                .separator-wrapper
                    display flex
                    position absolute
                    top rem(1.5)
                    left rem(-.2)
                    right rem(-.2)
                    align-items center
                    .left
                    .right
                        display inline-block
                        width rem(.4)
                        height rem(.4)
                        border-radius 50%
                        background $primary
                    .center
                        flex 1
                        height 0
                        display inline-block
                        border-top 1.5px dashed #f5f5f5
                        border-bottom 1.5px dashed #f5f5f5
                  .code-wrapper
                      position absolute
                      bottom rem(1)
                      left 0
                      right 0
                      width 60%
                      height 0
                      padding-bottom 60%
                      margin 0 auto
                      text-align center
                      margin-bottom rem(.1)
                      .code
                          width 100%!important
                          height 42vw!important
                      .flag
                          textStyle($orangeColor, .28)
      .info-content-wrapper
          background $primary
          height 100%
          width 100%
          textStyle(#fff, .28)
          line-height rem(.35)
          padding-left rem(.3)
          padding-right rem(.3)
          padding-bottom rem(.3)
          margin-top rem(-1.6)
          box-sizing border-box
    .loading-fail
        margin-top rem(1)
        text-align center
        textStyle(#888, .32)
</style>
