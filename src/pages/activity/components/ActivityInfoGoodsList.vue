<template>
  <div class='activity-detail-goods-list-container'>
    <activity-info-title title="活动商品"></activity-info-title>
    <div class="content-list-wrapper" v-if="info">
      <p class="title">只有此列表的商品订单，完成任务赚取红包</p>
      <div class="title-time">
        <span>距离活动结束:</span>
        <count-down :time="info.status === 3 ? 0 : (info.end_time - info.now_time )* 1000 " @end="countDownEnd">
          <template slot-scope="props">
              <span class="time-wrapper">
                  <span class="time-bg">{{ props.days }}</span>天<span class="time-bg">{{ props.hours }}</span>时<span  class="time-bg">{{ props.minutes }}</span>分<span  class="time-bg">{{ props.seconds }}</span>秒
              </span>
          </template>
        </count-down>
      </div>
      <ul>
        <li v-for="item of info.goods" :key="item.goods_id">
          <div class="list-item-wrapper">
            <div class="img-wrapper">
              <img v-lazy="$utils.image.getImagePath(item.share_image)">
            </div>
            <div class="conent-wrapper">
              <p class="content-title">{{item.scenic_name}}</p>
              <p class="goods-title">{{item.goods_name}}</p>
              <div class="content-info">
                <span class="price">{{'￥' + item.price}}</span>
                <span class="content-sales-num" v-if="item.total_sales > 0">已售{{$utils.common.trasformNum(item.total_sales)}}</span>
              </div>
              <div class="action-wrapper">
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
import ActivityInfoTitle from './ActivityInfoTitle'
import CountDown from 'common/components/countdown/countdown'
export default {
  name: 'activityDetailGoodsList',
  props: {
    info: Object
  },
  data () {
    return {
      countDown: false
    }
  },
  components: {
    ActivityInfoTitle,
    CountDown
  },
  methods: {
    share (item) {
      if (this.countDown || this.info.status === 3) {
        this.$toast('此活动已结束')
        return
      }
      this.$router.push({name: 'shareTicket', query: { s_id: item.scenic_id, goods_id: item.goods_id }})
    },
    countDownEnd () {
      this.countDown = true
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.activity-detail-goods-list-container
    margin-top 8%
    .content-list-wrapper
        width 90%
        margin 0 auto
        margin-top rem(-.2)
        background-color #f5f5f5
        border-radius rem(.08)
        padding rem(.4) 0 rem(.1) 0
        .title
            textStyle(#ff6151, .28)
            text-align center
            margin-top rem(.1)
        .title-time
            margin-top rem(.2)
            height rem(.7)
            text-align center
            color #333
            line-height rem(.7)
            .time-bg
                background-color #ffad2c
                color #fff
                display inline-block
                padding 0 rem(.1)
                margin  0 rem(.05)
                line-height rem(.4)
                min-width rem(.3)
        .list-item-wrapper
            border-radius rem(.08)
            border 1px solid #ff6151
            background-color #fff
            margin rem(.2)
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
                    align-items center
                    justify-content flex-end
                    .ticket-detail
                        background-color $orangeColor
                        color #fff
                        padding rem(.1) rem(.28)
                        font-size rem(.24)
                        border-radius rem(.05)
                        margin-right rem(.2)
                    .detail
                        border-radius rem(.05)
                        background linear-gradient(top, #ff6151, red)
                        color #fff
                        padding rem(.1) rem(.28)
                        font-size rem(.24)
                    .share
                        background-color #ffffff
                        border 1px solid $orangeColor
                        color $orangeColor
                        margin-right rem(.15)
                .content-info
                    color #888
                    font-size rem(.24)
                    .price
                        textStyle(#ff6151, .3)
                    .content-price-wrapper
                        font-size rem(.2)
                        & > i
                            font-size rem(.32)
                            color red
                            margin-right rem(.05)
                    .content-sales-num
                        margin-left rem(.2)
</style>
