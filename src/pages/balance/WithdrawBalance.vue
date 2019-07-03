<template>
<div class='r-b-recharge-container'>
  <my-navi title="提现"></my-navi>
  <div class="recharge-input-container" v-if="info">
    <p class="title-tip">提现金额</p>
    <div class="input-wrapper">
      <span class="input-money-tag">￥</span>
      <input class="input-money" type="text" :disabled="!canCrash" v-model="crashMoney" maxlength="10">
      <span class="all-money" @click="allMoneyCrash">全部提现</span>
    </div>
    <p class="tip-no-input" v-if="!isInput">当前余额：<i>￥{{$root.userInfo.state.balance || '0.00'}}</i>，提现最低金额：<i>￥{{crashTip.miniCrash || '0.00'}}</i>，账户最低余额：<i>￥{{crashTip.miniBalance || '0.00'}}</i>，提现手续费：<i>{{Number(crashTip.serviceCharge || 0.00) * 100 + '%'}}</i></p>
    <p class="tip-no-input" v-else>本次提现手续费为：<i>￥{{serviceCharge.toFixed(2)}}</i>服务费（费率{{crashTip.serviceCharge * 100 + '%'}}），此金额将会在您的提现金额中扣除</p>
  </div>
  <div class="select-type-container">
    <p class="title-tip">提现方式</p>
    <div class="input-wrapper">
      <div class="type-wrapper" @click="typeClick('alipay')">
        <img :src="imgZFBIcon" class="img">
        <span class="type-name">支付宝</span>
        <el-radio v-model="selectType" label="alipay" class="radio"></el-radio>
      </div>
      <div class="sperator"></div>
       <div class="type-wrapper" @click="typeClick('wechat')">
        <img :src="imgWXIcon" class="img">
        <span class="type-name">微信</span>
        <el-radio v-model="selectType" label="wechat" class="radio"></el-radio>
      </div>
    </div>
    <div class="sperator"></div>
    <p class="title-tip">提现账号</p>
    <input type="text" class="account-input" placeholder="请输入提现账号" :disabled="!canCrash" v-model="crashAccount">
  </div>
  <el-button type="primary" class="submit" :disabled="!canCrash" @click="crash">确定</el-button>
</div>
</template>

<script>
import imgZFBIcon from 'images/img_zfb_icon.png'
import imgWXIcon from 'images/img_weixin_icon.png'
export default {
  name: 'withdrawBalance',
  components: {},
  data () {
    return {
      imgZFBIcon,
      imgWXIcon,
      selectType: 'alipay',
      info: null,
      crashTip: null,
      canCrash: false,
      crashMoney: '',
      isInput: false,
      serviceCharge: 0.00,
      crashAccount: ''
    }
  },
  watch: {
    info (newVal, oldVal) {
      if (newVal) {
        this.crashTip = {
          balance: this.$root.userInfo.state.balance,
          miniCrash: Number(newVal.minimum_cash),
          miniBalance: Number(newVal.minimum_balance),
          serviceCharge: Number(newVal.service_charge)
        }
        this.canCrash = this.crashTip.balance && this.crashTip.balance > 0 && this.crashTip.balance >= this.crashTip.miniCrash + this.crashTip.miniBalance
      }
    },
    crashMoney (newVal, oldVal) {
      if (newVal) {
        this.isInput = true
        if (this.$utils.validator.isMoney(newVal)) {
          this.serviceCharge = Number(newVal) * Number(this.info.service_charge)
        } else {
          this.serviceCharge = 0
        }
      } else {
        this.isInput = false
      }
    }
  },
  methods: {
    typeClick (type) {
      this.selectType = type
    },
    allMoneyCrash () {
      if (this.canCrash) {
        this.crashMoney = Number(this.$root.userInfo.state.balance).toFixed(2) - Number(this.crashTip.miniBalance) + ''
      }
    },
    getData () {
      this.$http(this.$urlPath.withdrawCash, {}, '', (data) => {
        this.info = data.data
      }, (errorCode, error) => {
        this.$toast(error)
      })
    },
    crash () {
      if (!this.$utils.validator.isMoney(this.crashMoney)) {
        this.$toast('请输入合法的金额')
        return
      }
      if (Number(this.crashMoney) < Number(this.crashTip.miniCrash)) {
        this.$toast('提现金额小于最低提现金额')
        return
      }
      if (Number(this.crashMoney) > Number(this.$root.userInfo.state.balance)) {
        this.$toast('提现金额大于当前账户余额')
        return
      }
      if (!this.crashAccount) {
        this.$toast('请输入提现账号')
        return
      }
      this.$http(this.$urlPath.withdrawCash, {
        pay_away: this.selectType,
        account_number: this.crashAccount,
        amount: this.crashMoney
      }, '正在操作…', (data) => {
        this.$toast('提现申请成功')
        this.$root.userInfo.setUserInfoBalance(data.data.balance)
        this.crashMoney = ''
        this.crashAccount = ''
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
input[disabled]
    background #ffffff
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
            position relative
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
                width 75%
                textStyle(#555, .48)
                padding-bottom rem(.2)
            .all-money
                position absolute
                right 0
                top 0
                textStyle($primary, .28)
        .tip-no-input
            padding 0 rem(.3)
            textStyle(#888, .25)
            line-height rem(.3)
            & i
                textStyle($primary, .25)
    .select-type-container
        margin rem(.2) 0
        padding-bottom rem(.2)
        background #fff
        .title-tip
            padding rem(.3)
            textStyle(#555, .32)
        .sperator
            height 1px
            background #f5f5f5
            margin rem(.2) rem(.3)
        .type-wrapper
            padding rem(.1) rem(.3)
            .img
                width rem(.4)
                height rem(.4)
                line-height rem(.4)
                vertical-align middle
            .type-name
                vertical-align middle
                textStyle(#555, .3)
                margin-left rem(.2)
            .radio
                float right
                line-height rem(.4)
            & >>> .el-radio__label
                display none
        .account-input
            width 90%
            overflow hidden
            height rem(.8)
            margin-top rem(.2)
            display block
            margin 0 rem(.3)
            borderBottom()
            box-sizing border-box
    .submit
        width 80%
        display block
        margin rem(1) auto
</style>
