<template>
<div class='r-b-recharge-container'>
  <my-navi title="充值"></my-navi>
  <div class="recharge-input-container">
    <p class="title-tip">充值金额</p>
    <div class="input-wrapper">
      <span class="input-money-tag">￥</span>
      <input class="input-money" type="text" v-model="rechargeMoney">
    </div>
  </div>
  <div class="select-type-container">
    <p class="title-tip">充值方式</p>
    <div class="input-wrapper">
      <div class="type-wrapper" @click="typeClick(1)">
        <img :src="imgZFBIcon" class="img">
        <span class="type-name">支付宝</span>
        <el-radio v-model="selectType" label="1" class="radio"></el-radio>
      </div>
      <div class="sperator"></div>
       <div class="type-wrapper" @click="typeClick(2)">
        <img :src="imgWXIcon" class="img">
        <span class="type-name">微信</span>
        <el-radio v-model="selectType" label="2" class="radio"></el-radio>
      </div>
    </div>
  </div>
  <el-button type="primary" class="submit" @click="recharge">确定</el-button>
</div>
</template>

<script>
import imgZFBIcon from 'images/img_zfb_icon.png'
import imgWXIcon from 'images/img_weixin_icon.png'
export default {
  name: 'rechargeBalance',
  components: {},
  data () {
    return {
      imgZFBIcon,
      imgWXIcon,
      selectType: '1',
      rechargeMoney: ''
    }
  },
  methods: {
    typeClick (type) {
      this.selectType = type + ''
    },
    recharge () {
      if (!this.rechargeMoney) {
        this.$toast('请输入充值金额')
        return
      }
      if (!this.$utils.validator.isMoney(this.rechargeMoney)) {
        this.$toast('请输入合法的金额')
        return
      }
      this.$toast('充值')
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.r-b-recharge-container
    background #F0F4F5
    height 100vh
    .recharge-input-container
        background #fff
        padding-bottom rem(.2)
        .title-tip
            padding rem(.3)
            textStyle(#555, .32)
        .input-wrapper
            borderBottom()
            height rem(.8)
            line-height rem(.8)
            margin rem(.3)
            overflow hidden
            .input-money-tag
                textStyle(#555, .5)
                font-weight bold
            .input-money
                font-weight bold
                display inline-block
                line-height rem(.8)
                width 90%
                textStyle(#555, .48)
                padding-bottom rem(.2)
    .select-type-container
        margin-top rem(.2)
        background #fff
        .title-tip
            padding rem(.3)
            textStyle(#555, .32)
        .sperator
            height 1px
            background #f5f5f5
            margin rem(.2) rem(.3)
        .type-wrapper
            padding rem(.3)
            .img
                width rem(.45)
                height rem(.45)
                line-height rem(.45)
                vertical-align middle
            .type-name
                vertical-align middle
                textStyle(#555, .32)
                margin-left rem(.2)
            .radio
                float right
                line-height rem(.45)
            & >>> .el-radio__label
                display none
    .submit
        width 80%
        display block
        margin rem(1) auto
</style>
