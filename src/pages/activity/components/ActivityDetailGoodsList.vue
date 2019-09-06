<template>
  <div class='activity-detail-goods-list-container' v-if="goods && goods.length > 0">
    <div class="title-wrapper">
      <span class="title">活动商品</span>
    </div>
    <div class="content-list-wrapper">
      <ul>
        <li v-for="item of goods" :key="item.goods_id">
          <div class="list-item-wrapper">
            <div class="img-wrapper">
              <img v-lazy="$utils.image.getImagePath(item.share_image)">
            </div>
            <div class="conent-wrapper">
              <p class="content-title">{{item.scenic_name}}</p>
              <p class="goods-title">{{item.goods_name}}</p>
              <div class="content-info">
                <!-- <span class="content-price-wrapper"><i>￥89</i>起</span> -->
                <span class="content-sales-num" v-if="item.total_sales > 0">已售{{$utils.common.trasformNum(item.total_sales)}}</span>
              </div>
              <div class="action-wrapper">
                <span class="price">{{'￥' + item.price}}</span>
                <span class="detail" @click="share(item)">立即分享</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'activityDetailGoodsList',
  props: {
    goods: Array,
    status: Number,
    finish_status: Number
  },
  components: {},
  data () {
    return {
    }
  },
  methods: {
    share (item) {
      if (this.status === 3) {
        this.$toast('此活动已结束')
        return
      }
      this.$router.push({name: 'shareTicket', query: { s_id: item.scenic_id, goods_id: item.goods_id }})
    },
    trasformNum (num) {
      if (!num || isNaN(num) || Number(num) === 0) {
        return 0
      }
      let intNum = Number(num)
      if (intNum / 10000 >= 1) {
        return Math.floor(intNum / 10000) + '万+'
      } else {
        return intNum
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.activity-detail-goods-list-container
    background-color #ffffff
    border-radius rem(.1)
    padding rem(.3)
    .title-wrapper
        text-align center
        margin-top rem(.2)
        .title
            border-radius rem(.1)
            background #6EB6B3
            padding rem(.15) rem(.5)
            color #ffffff
    .content-list-wrapper
        margin-top rem(.4)
        .list-item-wrapper
            border-radius rem(.08)
            border 1px solid #7fc294
            padding rem(.2)
            display flex
            justify-content space-around
            .img-wrapper
                flex 1
                height rem(1.7)
                & > img
                    width 100%
                    height 100%
                    border-radius rem(.08)
                    object-fit cover
            .conent-wrapper
                width 65%
                display flex
                flex-direction column
                justify-content space-between
                padding-left rem(.2)
                .content-title
                    font-size rem(.3)
                    color #333
                    ellipsis()
                .goods-title
                    ellipsis()
                    font-size rem(.25)
                    color $orangeColor
                .sub-title
                    color $primary
                    ellipsis()
                .time
                    color #666
                    font-size rem(.28)
                    .time-wrapper
                        color $orangeColor
                .action-wrapper
                    overflow hidden
                    display flex
                    justify-content space-between
                    align-items center
                    .price
                        textStyle($orangeColor, .35)
                    .detail
                        float right
                        border-radius rem(.05)
                        background-color $orangeColor
                        border 1px solid $orangeColor
                        color #fff
                        padding rem(.08) rem(.18)
                        font-size rem(.24)
                    .share
                        background-color #ffffff
                        border 1px solid $orangeColor
                        color $orangeColor
                        margin-right rem(.15)
                .content-info
                    color #888
                    font-size rem(.24)
                    .content-price-wrapper
                        font-size rem(.2)
                        & > i
                            font-size rem(.32)
                            color red
                            margin-right rem(.05)
</style>
