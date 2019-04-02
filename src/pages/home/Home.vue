<template>
<div class='home-container'>
  <home-navigation></home-navigation>
  <div class="tip-wrapper">
      <p class="tip-content" v-if="showTip" @click="tipClick">
        温馨提示：更多功能敬请登录电脑端进行查看。
        <span class="el-icon-error close-tip"></span>
      </p>
      <home-header></home-header>
  </div>
  <home-tools></home-tools>
  <home-bottom-navigation @logout="logout"></home-bottom-navigation>
</div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeNavigation from './components/HomeNavigation'
import HomeTools from './components/HomeTool'
import HomeBottomNavigation from './components/HomeBottomNavigation'
export default {
  name: 'home',
  components: {
    HomeNavigation,
    HomeHeader,
    HomeTools,
    HomeBottomNavigation
  },
  data () {
    return {
      msg: '',
      showTip: true
    }
  },
  methods: {
    tipClick () {
      this.showTip = false
    },
    logout () {
      let confirm = window.confirm('是否要退出当前帐号？')
      if (confirm) {
        this.$http(this.$urlPath.logoutUrl, {
        }, '正在退出…', (data) => {
          this.$root.userInfo.clearInfoAction()
          this.$router.replace({name: 'login'})
        }, (errorCode, error) => {
          this.$toast(error)
        })
      }
    }
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
</style>
