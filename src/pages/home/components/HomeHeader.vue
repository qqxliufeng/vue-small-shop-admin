<template>
<div class='h-header-container'>
  <div class="circle-bg"></div>
  <div class="content-wrapper">
      <div class="face-wrapper">
        <img :src="$utils.image.getImagePath($root.userInfo.state.avatar)">
      </div>
      <span class="nick-name">{{$root.userInfo.state.name}}</span>
      <div class="info-wrapper">
          <div class="release-money-wrapper">
            <div class="release-money" @click="myBalance">
              <p>账户余额</p>
              <p class="money">￥{{$root.userInfo.state.balance}}</p>
            </div>
            <el-button type="primary" size="mini" @click="myBalance">详情</el-button>
          </div>
          <span class="separator-line"></span>
          <div class="other-money-wrapper">
            <p><span>账户返利  </span><span class="money">￥{{$root.userInfo.state.rebate}}</span></p>
            <p><span>授信额度  </span><span class="money">￥{{$root.userInfo.state.credit}}</span></p>
          </div>
      </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'homeHeader',
  data () {
    return {
    }
  },
  methods: {
    myBalance () {
      this.$router.push({name: 'myBalance'})
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.h-header-container
    // margin-top $headerHeight * 1.5
    height rem(3.8)
    background #74D8C9
    overflow hidden
    position relative
    border-bottom rem(.1) solid #f5f5f5
    z-index 1
    .circle-bg
        position absolute
        height 700%
        width  300%
        top 0
        left -100%
        border-radius 50%
        background #ffffff
        margin-top $headerHeight
        border 1px solid #fff
        -webkit-font-smoothing antialiased
        z-index 1
    .content-wrapper
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        display flex
        flex-direction column
        align-items center
        z-index 10
        .face-wrapper
            margin-top rem(.32)
            background #f5f5f5
            height rem(1.2)
            width rem(1.2)
            border-radius 50%
            border 2px solid #ffffff
            overflow hidden
            & img
                width 100%
                height 100%
                object-fit cover
        .nick-name
            normalTextStyle(#333, .32)
        .info-wrapper
            display flex
            flex-direction row
            margin-top rem(.5)
            align-items center
            justify-content center
            .separator-line
                display inline-block
                width rem(.05)
                height rem(.5)
                background #f5f5f5
                margin 0 rem(.5)
            .release-money-wrapper
                display flex
                align-items center
                .release-money
                    margin-right rem(.5)
                    font-size rem(.3)
                    text-align center
                    & p:nth-child(2)
                        margin-top rem(.2)
                        font-size rem(.32)
                & >>> .el-button
                    height rem(.6)
            .other-money-wrapper
                flex 1
                font-size rem(.3)
                & p:nth-child(1)
                    margin-bottom rem(.2)
.money
    color $primary
</style>
