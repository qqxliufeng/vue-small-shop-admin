<template>
<div class='share-ticket-container'>
  <my-navi title="分享门票" :isFixed="true"></my-navi>
  <share-tip></share-tip>
  <div class="content" v-if="info">
    <share-component>
      <template slot="shareHeader">
          <img class="share-image" :src="$utils.image.getImagePath(info.share_image)" alt="">
      </template>
      <template slot="shareInfo">
        <share-code :logo="$utils.image.getImagePath($root.userInfo.state.avatar)" :url="wexin_url ? wexin_url: url"></share-code>
      </template>
      <template slot="shareAddress">
        <span class="shop-address-title">门票链接:</span>
        <!-- <span class="shop-address">{{url}}</span> -->
        <textarea class="shop-address" :value="wexin_url ? wexin_url: url" rows="3"></textarea>
      </template>
    </share-component>
  </div>
</div>
</template>

<script>
import ShareCode from './components/ShareCode'
import ShareComponent from './Share'
import ShareTip from './components/ShareTip'
import IdMixin from 'common/mixins/id-mixin'
export default {
  name: 'shareTicket',
  mixins: [IdMixin],
  components: {
    ShareComponent,
    ShareCode,
    ShareTip
  },
  data () {
    return {
      info: null,
      wexin_url: null
    }
  },
  computed: {
    url () {
      return this.$urlPath.getShareTicketUrl(this.identity, this.storeId, this.$route.query.s_id, this.$route.query.goods_id)
    }
  },
  methods: {
    getData () {
      this.$http(this.$urlPath.ticketPosterDetail, {
        goods_id: this.$route.query.goods_id,
        scenic_id: this.$route.query.s_id,
        store_id: this.storeId,
        isWeiXin: this.$isWeiXin ? '1' : '0'
      }, '', (data) => {
        this.info = data.data
        this.wexin_url = this.info.wexin_url
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
        .other-info-wrapper
            padding rem(.2)
            border-top 1px solid #f5f5f5
            .other-info-title
                textStyle(#333, .3)
            .other-info-content
                display flex
                justify-content center
                align-items center
                padding rem(.2)
                & ul
                    width 80%
                    textStyle($primary, .3)
                    line-height rem(.35)
            .other-info-bottom
                text-align right
                textStyle(#ccc, .2)
</style>
