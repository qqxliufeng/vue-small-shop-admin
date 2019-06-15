<template>
  <div class='f-p-container'>
      <div class="input-container">
        <div>
            <input placeholder="请输入手机号" class="user-name" maxlength="11" v-model="phone"/>
        </div>
        <div class="input-password-container">
            <input placeholder="请输入验证码" class="user-password" maxlength="6" v-model="verifyCode"/>
            <button class="input-forget-password" @click="getVerifyCode" :disabled="disabled">{{verifyTip}}</button>
        </div>
        <el-button type="primary" class="input-login" @click="submit">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fastLogin',
  components: {},
  data () {
    return {
      verifyTip: '获取验证码',
      disabled: false,
      phone: '',
      verifyCode: '',
      code: ''
    }
  },
  methods: {
    submit () {
      if (!this.phone) {
        this.$toast('请输入手机号')
        return
      }
      if (!this.$utils.validator.isPhone(this.phone)) {
        this.$toast('请输入合法手机号')
        return
      }
      if (!this.verifyCode) {
        this.$toast('请输入验证码')
        return
      }
      if (this.verifyCode !== this.code) {
        this.$toast('请输入正确的验证码')
        return
      }
      this.$http(this.$urlPath.fastLogin, {
        mobile: this.phone,
        captcha: this.verifyCode
      }, '正在登录…', (data) => {
        if (data.data) {
          this.$root.$data.userInfo.setUserInfo(data.data.distributorinfo)
          this.$router.go(-1)
        } else {
          this.$toast('登录失败')
        }
      }, (errorCode, error) => {
        this.$toast(error)
      })
    },
    getVerifyCode () {
      if (!this.phone) {
        this.$toast('请输入手机号')
        return
      }
      if (!this.$utils.validator.isPhone(this.phone)) {
        this.$toast('请输入合法手机号')
        return
      }
      this.$http(this.$urlPath.getCaptcha, {
        mobile: this.phone,
        event: 'mobilelogin'
      }, '正在发送验证码…', (data) => {
        this.$toast('验证码发送成功，请注意查收')
        let countDown = 60
        let interval = setInterval(() => {
          countDown--
          this.disabled = true
          this.verifyTip = countDown + 's'
          if (countDown <= 0) {
            clearInterval(interval)
            this.disabled = false
            this.verifyTip = '重新获取？'
          }
        }, 1000)
        this.code = data.data.code
      }, (errorCode, error) => {
        this.$toast(error)
      })
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
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
          font-size 12px
          padding rem(.1)
          background $primary
          border-radius rem(.1)
          color #fff
          margin-left rem(.2)
          white-space nowrap
          min-width rem(1.5)
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
