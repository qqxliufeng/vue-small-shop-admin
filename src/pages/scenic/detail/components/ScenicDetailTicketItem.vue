<template>
    <div class="s-d-hot-item-wrapper">
        <div class="s-d-hot-item-info">
            <div class="s-d-hot-item-info-title-wrapper">
                <p class="s-d-hot-item-info-title"><span class="iconfont s-d-hot-title-icon" v-if="item.is_promotion > 0">&#xe6a0;</span>{{item.goodsTitle}}</p>
                <p class="s-d-hot-item-info-price"><span>￥{{item.minPrice}}</span></p>
            </div>
            <div class="s-d-hot-item-info-remark-wrapper">
                <!-- <p class="s-d-hot-item-info-remark">{{item.before}}</p> -->
                 <div class="tags">
                    <span v-for="(itemTag, index) of item.tag" :key="index" class="tag">
                        <el-tag size="mini" :type=" index === 0 ? 'success' : 'danger'" v-if="itemTag">{{itemTag}}</el-tag>
                    </span>
                 </div>
                <p class="s-d-hot-item-info-old-price">￥{{item.retailPrice}}</p>
            </div>
            <div class="s-d-hot-item-info-info-wrapper">
                <div class="s-d-hot-item-info-info-info">
                    <p>
                        <span v-if="item.totalSales > 0">已售{{$utils.common.trasformNum(item.totalSales)}}</span>
                        <span class="ticket-must" @click="itemClickOrder(item)" v-if="isCanReseve">购票须知<i class="el-icon-arrow-right"></i></span>
                    </p>
                </div>
                <div class="s-d-hot-item-info-info-action">
                    <el-button type="primary" size="mini" @click="itemClickShare(item)" v-if="isCanShare">分享:￥{{item.price}}</el-button>
                    <el-button type="primary" size="mini" @click="itemClickOrder(item)" class="button">立即预订</el-button>
                </div>
            </div>
        </div>
        <p v-if="Number(this.item.buy_status) !== 1" class="reseve-tip">提示：此商品只能用于分享</p>
        <div class="line"></div>
    </div>
</template>

<script>
import qianggouIcon from 'images/img_qianggou_icon.png'
export default {
  name: 'scenicDetailTicketItem',
  props: {
    item: Object
  },
  computed: {
    isCanShare () {
      return this.$root.state.canShareTicket === '1'
    },
    isCanReseve () {
      // 判断是不是可以购买此产品
      return this.$root.state.canFloorBuyTicket === '1'
    }
  },
  data () {
    return {
      qianggouIcon,
      numberTask: this.$root.state.numberTask
    }
  },
  methods: {
    itemClickOrder (item) {
      if (Number(this.item.buy_status) === 1) {
        if (this.isCanReseve) {
          this.$emit('reseve-detail', item)
        } else {
          if (this.numberTask) {
            if (Number(this.numberTask.floorBuyNumber) > 0) {
              // this.$toast('您需要完成' + this.numberTask.floorBuyNumber + '单任务才能底价购买')
              // this.$nextTick(() => {
              //   this.$router.push({name: 'scenicPostList'})
              // })
              this.$emit('show-tip-dialog', {number: this.numberTask.floorBuyNumber})
            } else {
              this.$emit('reseve-detail', item)
            }
          } else {
            this.$emit('reseve-detail', item)
          }
        }
      } else {
        this.$toast('此商品只能用于分享')
      }
    },
    itemClickShare (item) {
      this.$emit('share-ticket', item)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.s-d-hot-item-wrapper
    position relative
    border-bottom #f5f5f5 solid rem(.05)
    .line
        width 90%
        height 1px
        background-color #eee
        margin 0 auto
    .reseve-tip
        padding rem(.1)
        padding-right rem(.3)
        text-align right
        textStyle($orangeColor, .25)
    .bg
        position absolute
        top 0
        left 30%
        overflow hidden
        opacity .2
        text-align center
        & > div
            textStyle($orangeColor, 2.8)
    .s-d-hot-item-info
        padding rem(.2)
        .s-d-hot-item-info-title-wrapper
            padding rem(.1) 0
            overflow hidden
            .s-d-hot-item-info-title
                float left
                normalTextStyle(#333, .32)
            .s-d-hot-title-icon
                textStyle($orangeColor, .35)
                margin-right rem(.1)
            .s-d-hot-item-info-price
                float right
                & span
                    normalTextStyle($primary, .4)
                & i
                    normalTextStyle(#888888, .2)
                    margin-left rem(.1)
        .s-d-hot-item-info-remark-wrapper
            position relative
            height rem(.5)
            .s-d-hot-item-info-remark
                position absolute
                top 0
                left 0
                right rem(1)
                ellipsis()
                normalTextStyle(#888888, .25)
            .s-d-hot-item-info-old-price
                position absolute
                top 0
                right 0
                normalTextStyle(#888888, .25)
                text-decoration line-through
            .tags
                margin-top rem(.08)
                .tag
                    margin 0 rem(.1)
                    & >>> .el-tag
                        background-color transparent
                        border-radius 1px
                    & >>> .el-tag--success
                        background-color transparent
                    & >>> .el-tag--danger
                        background-color transparent
        .s-d-hot-item-info-info-wrapper
            display flex
            justify-content center
            align-items center
            margin-top rem(.1)
            .s-d-hot-item-info-info-info
                overflow hidden
                flex 1
                & p:nth-child(1)
                    margin-top rem(.1)
                    normalTextStyle(#888888, .25)
                    & span:nth-child(1)
                        margin 0 rem(.1)
                .ticket-must
                    textStyle($orangeColor, .25)
        .button
            background $orangeColor
            border-color $orangeColor
    .s-d-hot-item-will-online
        background-color #FEEBC6
        normalTextStyle($orangeColor, .28)
</style>
