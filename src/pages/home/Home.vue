<template>
<div class='home-container'>
  <home-navigation></home-navigation>
  <div class="tip-wrapper">
      <p class="tip-content" v-if="showTip" @click="tipClick">
        温馨提示：更多功能敬请登录电脑端进行查看。
        <span class="el-icon-error close-tip"></span>
      </p>
      <home-header :amount="amount"></home-header>
  </div>
  <home-tools ref="homeTools" :authInfo="authInfo"></home-tools>
  <p class="logout" @click="logout">退出登录</p>
  <p class="pc">更多功能请登录电脑端：http://www.baidu.com</p>
  <confirm-dialog content="是否要退出登录？" @dialogConfirm="dialogConfirm" ref="confrimDialog"></confirm-dialog>
</div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeNavigation from './components/HomeNavigation'
import HomeTools from './components/HomeTool'
import HomeBottomNavigation from './components/HomeBottomNavigation'
import ConfirmDialog from 'common/components/confirm-dialog'
export default {
  name: 'home',
  components: {
    HomeNavigation,
    HomeHeader,
    HomeTools,
    HomeBottomNavigation,
    ConfirmDialog
  },
  data () {
    return {
      msg: '',
      showTip: true,
      amount: null,
      authInfo: null
    }
  },
  methods: {
    tipClick () {
      this.showTip = false
    },
    dialogConfirm () {
      this.$http(this.$urlPath.logoutUrl, {
      }, '正在退出…', (data) => {
        this.$root.userInfo.clearInfoAction()
        this.$router.replace({name: 'login'})
      }, (errorCode, error) => {
        this.$toast(error)
      })
    },
    getData () {
      this.$http(this.$urlPath.getAmount, {
      }, null, (data) => {
        this.amount = data.data
        this.authInfo = this.amount
        this.$root.userInfo.setUserInfoBalance(this.amount.balance)
        this.$root.userInfo.setUserInfoRebate(this.amount.rebate)
        // start************根据接口返回来的数据判断是不是有对应的权限************
        let canShareTicket = false
        let canFloorBuyTicket = false
        if (this.authInfo) { // 是否获取到数据了
          let auth = Number(this.authInfo.auth)
          let authSet = this.authInfo.auth_set
          if (auth === 1) { // 是否是做任务开启权限
            canShareTicket = Number(this.authInfo.finish_order_number) <= Number(this.authInfo.photo_sharing_order_number) // 判断任务是否是完成了，能不能分享单个商品
            canFloorBuyTicket = Number(this.authInfo.finish_order_number) <= Number(this.authInfo.floor_buy_number) // 判断任务是否是完成了，能不能低价购买商品
          } else if (auth === 2) { // 手动开启权限
            canShareTicket = authSet && authSet.indexOf('1') !== -1 // 是不是能分享图片
            canFloorBuyTicket = authSet && authSet.indexOf('2') !== -1 // 是不是能低价购买
          }
        }
        this.$root.state.saveCanShareTicket(canShareTicket)
        this.$root.state.saveCanFloorBuyTicket(canFloorBuyTicket)
        // end************根据接口返回来的数据判断是不是有对应的权限************
      }, (errorCode, error) => {
        this.$toast(error)
      })
    },
    logout () {
      this.$refs.confrimDialog.showDialog()
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
.tip-wrapper
    margin-top $headerHeight
    .tip-content
        background #F9EFC4
        padding rem(.1)
        textStyle($orangeColor, .25)
    .close-tip
        float right
        font-size rem(.28)
.logout
    width 70%
    background $primary
    border-radius rem(.5)
    margin rem(1.2) auto rem(.3) auto
    text-align center
    line-height rem(.8)
    color #fff
.pc
    text-align center
    textStyle(#aaa, .25)
    position absolute
    left 0
    right 0
    bottom 0
    margin-bottom rem(.2)
</style>
