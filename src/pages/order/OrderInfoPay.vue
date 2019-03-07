<template>
    <div>
        <my-navi title="支付"></my-navi>
        <div class="o-i-pay-container">
            <div class="o-i-pay-time-wrapper">
                <p>剩余支付时间</p>
                <count-down :time="2 * 24 * 60 * 60 * 1000">
                    <template v-slot="props">
                        <div class="time-wrapper">
                            {{ props.hours }}:{{ props.minutes }}:{{ props.seconds }}
                        </div>
                    </template>
                </count-down>
            </div>
            <div class="o-i-pay-goods-info-wrapper">
                <div>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550315558341&di=5eb3ae6776ef018e8eadf3eaabbeb16f&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb3119313b07eca8043a138229c2397dda044834a.jpg">
                </div>
                <div>
                    <p>卧虎山滑雪场成人票</p>
                    <p>￥188</p>
                </div>
            </div>
            <div class="o-i-pay-goods-info-money">
                <span>支付金额</span>
                <span>￥25.50</span>
            </div>
            <div class="sperator-line-height"></div>
            <div class="o-i-pay-goods-info-money">
                <span>请选择支付方式</span>
            </div>
            <div class="sperator-line"></div>
            <ul class="o-i-pay-type-wrapper">
                <li class="o-i-pay-type-zfb-wrapper" v-for="(item, index) of filterPayItemList" :key="index" @click="payItemClick(item)">
                    <img :src="item.icon">
                    <span>{{item.name}}</span>
                    <i :class="[item.isChecked ? 'el-icon-circle-check' : 'icon-style']"></i>
                </li>
            </ul>
            <p class="o-i-pay-action">支付</p>
        </div>
    </div>
</template>

<script>
import imgZFBIcon from 'images/img_zfb_icon.png'
import imgWXIcon from 'images/img_weixin_icon.png'
import imgYEIcon from 'images/img_yue_icon.png'
import imgSXIcon from 'images/img_shouxin_icon.png'
import CountDown from 'common/components/countdown/countdown'
export default {
  name: 'orderInfoPay',
  components: {
    CountDown
  },
  data () {
    return {
      payItemList: [
        {
          name: '支付宝',
          icon: imgZFBIcon,
          isChecked: true,
          isShow: !this.$isWeiXin
        },
        {
          name: '微信',
          icon: imgWXIcon,
          isChecked: true,
          isShow: this.$isWeiXin
        },
        {
          name: '余额支付',
          icon: imgYEIcon,
          isChecked: false,
          isShow: true
        },
        {
          name: '授信支付',
          icon: imgSXIcon,
          isChecked: false,
          isShow: true
        }
      ]
    }
  },
  computed: {
    filterPayItemList () {
      let filterArray = []
      this.payItemList.forEach(item => {
        if (item.isShow) {
          filterArray.push(item)
        }
      })
      return filterArray
    }
  },
  methods: {
    payItemClick (item) {
      this.filterPayItemList.forEach(element => {
        element.isChecked = item === element
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.o-i-pay-time-wrapper
    borderBottom()
    display flex
    flex-direction column
    justify-content center
    align-items center
    padding .5rem
    & p:nth-child(1)
        color #888
        font-size .28rem
        line-height .32rem
    .time-wrapper
        color #333
        font-size .5rem
        line-height .52rem
        margin-top .2rem
.o-i-pay-goods-info-wrapper
    display flex
    padding .2rem
    borderBottom()
    margin-bottom 3px
    & div:nth-child(1)
        flex 1
        height 1rem
        overflow hidden
        & img
            width 100%
            height 100%
            object-fit cover
    & div:nth-child(2)
        flex 5
        padding-left .2rem
        box-sizing border-box
        display flex
        flex-direction column
        justify-content space-between
        overflow hidden
        & p:nth-child(1)
            ellipsis()
            color #333
            font-size .3rem
            line-height .32rem
        & p:nth-child(2)
            color $primary
            font-size .32rem
            line-height .34rem
.o-i-pay-goods-info-money
    overflow hidden
    padding rem(.3)
    & span:nth-child(1)
        normalTextStyle(#333, .3)
        vertical-align middle
        &::before
            beforeLine()
            margin-bottom 3px
    & span:nth-child(2)
        float right
        normalTextStyle($orangeColor, .28)
.sperator-line
    horizontalLine(#f5f5f5, .02, 0, .4)
.o-i-pay-goods-info-money-add
    overflow hidden
    padding rem(.3)
    borderBottom()
    & span:nth-child(1)
        float left
        normalTextStyle(#888888, .28)
    & span:nth-child(2)
        float right
        normalTextStyle(#333, .28)
.sperator-line-height
    horizontalLine(#f5f5f5, .2)
.o-i-pay-action
    padding rem(.2)
    background-color $primary
    position fixed
    left 0
    bottom 0
    right 0
    text-align center
    normalTextStyle(#ffffff, .3)
.o-i-pay-type-wrapper
    padding 0 rem(.3)
    padding-bottom $headerHeight
    .o-i-pay-type-zfb-wrapper
        overflow hidden
        padding rem(.3) 0
        borderBottom()
        & img
            width rem(.5)
            height rem(.5)
            vertical-align middle
            margin-right rem(.2)
        & span
            normalTextStyle(#333333, .3)
            vertical-align middle
        & i
            textStyle($primary, .44)
            vertical-align middle
            float right
            margin-top 2px
        .icon-style
            width rem(.4)
            height rem(.4)
            border 1px solid #cccccc
            border-radius 50%
            padding rem(.01)
            box-sizing border-box
</style>
