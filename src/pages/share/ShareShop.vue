<template>
  <div class='s-shop-container'>
    <my-navi title="分享店铺" :isFixed="true"></my-navi>
    <div class="content">
        <share-component>
          <template slot="shareHeader">
            <img class="share-image" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551767583542&di=c71abe346d8549974662ee3129a1a25f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1c527b891defb0ddfe86302ba7f644b63c53d193e801-yE5WDO_fw658" alt="">
          </template>
          <template slot="shareInfo">
            <div class="info-content-wrapper">
                <div class="post-logo">
                    <img src="http://img.pconline.com.cn/images/upload/upc/tx/ladyproduct/1501/08/c0/1616021_1420691838105_100x100.jpg" alt="">
                </div>
                <div class="post-info">
                  <p><span class="iconfont icon">&#xe736;</span>王大宝的店铺</p>
                  <p><span class="iconfont icon">&#xe613;</span>王大宝</p>
                  <p><span class="iconfont icon">&#xe615;</span>189888888888</p>
                </div>
                <div class="post-code-wrapper">
                  <div class="post-code">
                    <img src="http://cli.clewm.net/file/2014/12/10/10febbdfabe543c7dd27d74fb4f411f3.png" alt="">
                  </div>
                  <p>长按识别进入</p>
                </div>
            </div>
          </template>
          <template slot="shareAddress">
            <span class="shop-address-title">店铺链接:</span>
            <span class="shop-address">http://www.baidu.comhttp://www.baidu.comhttp://www.baidu.comhttp://www.baidu.comhttp://www.baidu.comhttp://www.baidu.comhttp://www.baidu.com</span>
          </template>
        </share-component>
    </div>
  </div>
</template>

<script>
import ShareComponent from '@/pages/share/Share'
export default {
  name: 'shareShop',
  components: {
    ShareComponent
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
.s-shop-container
    .content
        contentFixed()
        .share-image
            width 100%
            height 100%
        .info-content-wrapper
            display flex
            padding rem(.3)
            .post-logo
                width rem(1.5)
                height rem(1.5)
                & img
                    width 100%
                    height 100%
                    object-fit cover
        .post-info
            flex 1
            display flex
            justify-content space-between
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
            .post-code
                width rem(1.2)
                height rem(1.2)
                & img
                    width 100%
                    height 100%
            & p
                margin-top rem(.1)
                color red
                font-size rem(.2)
</style>
