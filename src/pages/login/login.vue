<template>
<div class='login-container'>
  <my-navi title="登录"></my-navi>
  <div class="input-container">
      <div>
          <span class="iconfont input-close" @click="clear">&#xe604;</span>
          <input placeholder="请输入手机号" class="user-name" maxlength="11" v-model="userName"/>
      </div>
      <div class="input-password-container">
          <input placeholder="请输入密码" class="user-password" maxlength="16" v-model="userPassword"/>
          <router-link to="/forgetpasswordstepone">
            <span class="input-forget-password">忘记密码</span>
          </router-link>
      </div>
      <el-button type="primary" class="input-login" @click="login">登录</el-button>
      <div>
          <router-link to="/fastlogin">
            <span class="input-fast-phone">手机快捷登录</span>
          </router-link>
      </div>
  </div>
  <loading v-if="showLoading" loadingTip="正在登录…"></loading>
  <el-dialog :visible.sync="showVerifyDialog" modal width="90%" @opened="openDialog" @closed="closeDialog">
    <slide-verify
    :w="width"
    @success="onSlideSuccess"
    ref="slideVerfiy"></slide-verify>
  </el-dialog>
</div>
</template>

<script>

export default {
  name: 'login',
  methods: {
    goHome () {
      this.$router.push({name: 'home'})
    },
    openDialog () {
      document.addEventListener('touchmove', e => {
        e.preventDefault()
        e.stopPropagation()
      }, { passive: false })
    },
    closeDialog () {
      this.$refs.slideVerfiy.refresh()
      document.removeEventListener('touchmove', null, { passive: false })
    },
    onSlideSuccess () {
      this.showVerifyDialog = false
    }
  },
  data () {
    return {
      showVerifyDialog: false
    }
  },
  computed: {
    width () {
      return document.body.clientWidth * 0.9 - 40
    }
  },
  mounted () {
    console.log(this.width)
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.login-container
    & >>> .slide-verify
        width 100%
    & >>> .slide-verify-slider
        width 100%
    .input-container
        margin 1rem .5rem
        position relative
        .user-name
            width 100%
            border: 0 none
            border-bottom: 1px solid #ccc
            border-radius: 0px
            padding-bottom .1rem
            font-size .3rem
        .input-close
            font-size .5rem
            position absolute
            right 0
            top 0
            color #aaaaaa
        .user-password
            font-size .3rem
        .input-password-container
            margin-top .6rem
            border: 0 none
            border-bottom: 1px solid #ccc
            border-radius: 0px
            padding-bottom .1rem
            position relative
            overflow hidden
          .input-forget-password
              position absolute
              right 0
              margin-top .1rem
              margin-right .3rem
              color $primary
              &::before
                  content '|'
                  margin-right .5rem
        .input-login
            background-color $primary
            border 0 none
            width 100%
            margin-top 1rem
            margin-bottom .5rem
        .input-fast-phone
            float left
            font-size .3rem
            color #ccc
        .input-regist
            float right
            font-size .3rem
            color #ccc
</style>
