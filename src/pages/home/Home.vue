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
  <home-tools ref="homeTools"></home-tools>
  <p class="logout" @click="logout">退出登录</p>
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
      amount: null
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
</style>
