<template>
  <div class='l-c-container'>
    <my-navi title="登录" :isShowBack="false"></my-navi>
    <el-tabs :stretch="true" v-model="activeName">
      <el-tab-pane label="快捷登录" name="first">
        <fast-login></fast-login>
      </el-tab-pane>
      <el-tab-pane label="账号登录" name="second">
        <login></login>
      </el-tab-pane>
    </el-tabs>
    <p class="pc">更多功能请登录电脑端：http://www.test.youdaike.com/distributor/dashboard?ref=addtabs</p>
  </div>
</template>

<script>
import FastLogin from './FastLogin'
import Login from './login'
export default {
  name: '',
  components: {
    FastLogin,
    Login
  },
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.pc
    text-align center
    textStyle(#aaa, .25)
    position absolute
    left 0
    right 0
    bottom 0
    margin-bottom rem(.2)
    line-height rem(.4)
</style>
