<template>
  <div class='r-s-one-container'>
    <p class="title">请填写您的身份信息</p>
    <div class="info-wrapper">
      <span class="info-title">手机号：</span>
      <div class="info-content-wrapper">
        <input type="text" class="input" placeholder="请输入手机号" v-model="registerInfo.phone" maxlength="11">
      </div>
    </div>
    <div class="info-wrapper">
      <span class="info-title">验证码：</span>
      <div class="info-code-wrapper">
        <input type="text" class="input" placeholder="请输入验证码" v-model="registerInfo.verifyCode">
        <button class="bt-code" @click="getCode" :disabled="disabled">{{countDownText}}</button>
      </div>
    </div>
    <!-- <div class="info-wrapper">
      <span class="info-title">密码：</span>
      <div class="info-content-wrapper">
        <input type="password" class="input" placeholder="请输入密码" v-model="registerInfo.password" maxlength="16">
      </div>
    </div>
    <div class="info-wrapper">
      <span class="info-title">确认密码：</span>
      <div class="info-content-wrapper">
        <input type="password" class="input" placeholder="请再次输入密码" v-model="registerInfo.confirmPassword">
      </div>
    </div> -->
    <el-button class="next-step" @click="nextStep">下一步</el-button>
  </div>
</template>

<script>
export default {
  name: 'stepOne',
  data () {
    return {
      registerInfo: {
        parentId: this.$route.query.pid,
        storeId: this.$route.query.storeId || '',
        // parentId: 2,
        phone: '',
        verifyCode: '',
        password: '',
        confirmPassword: '',
        realName: '',
        idCard: 1,
        workName: '',
        idFront: '',
        idBack: '',
        studentCard: '',
        shopName: '',
        shopArea: '',
        shopPhone: ''
      },
      countDownText: '获取验证码',
      disabled: false,
      verifyCode: ''
    }
  },
  methods: {
    nextStep () {
      if (!this.registerInfo.phone) {
        this.$toast('请输入手机号')
        return
      }
      if (!this.$utils.validator.isPhone(this.registerInfo.phone)) {
        this.$toast('请输入合法手机号')
        return
      }
      if (!this.registerInfo.verifyCode) {
        this.$toast('请输入验证码')
        return
      }
      if (this.registerInfo.verifyCode !== this.verifyCode) {
        this.$toast('请输入正确的验证码')
        return
      }
      this.$router.replace({name: 'stepTwo'})
    },
    getCode () {
      if (!this.registerInfo.phone) {
        this.$toast('请输入手机号')
        return
      }
      if (!this.$utils.validator.isPhone(this.registerInfo.phone)) {
        this.$toast('请输入合法手机号')
        return
      }
      this.$http(this.$urlPath.getCaptcha, {
        mobile: this.registerInfo.phone,
        pid: this.$route.query.pid,
        event: 'register'
      }, '正在发送验证码…', (data) => {
        this.$toast('验证码发送成功')
        this.disabled = true
        let count = 60
        let time = setInterval(() => {
          this.disabled = true
          count--
          this.countDownText = count + ' s'
          if (count <= 0) {
            clearInterval(time)
            this.disabled = false
            this.countDownText = '重新获取？'
          }
        }, 1000)
        this.verifyCode = data.data.code
      }, (errorCode, error) => {
        this.$toast(error)
      })
    }
  },
  mounted () {
    this.$root.state.registerInfo = this.registerInfo
    window.addEventListener('resize', function () {
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        window.setTimeout(function () {
          document.activeElement.scrollIntoViewIfNeeded()
        }, 0)
      }
    })
  },
  destroyed () {
    window.removeEventListener('resize', () => {})
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.r-s-one-container
    background #ffffff
    padding rem(.4)
    padding-bottom 0
    height auto
    min-height 90%
    overflow hidden
    position relative
    .title
        textStyle(#888, .3)
    .info-wrapper
        display flex
        align-items center
        padding rem(.4) 0
        .info-title
            width 20%
            textStyle(#333, .3)
            & i
                textStyle(#888, .25)
        .info-content-wrapper
            width 80%
            display flex
            justify-content space-between
            .input
                border-radius rem(.02)
                background #fff
                border 1px solid #EDEEEE
                padding rem(.2)
                padding rem(.1)
                font-size 12px
                flex 1
          .info-code-wrapper
                width 80%
                display flex
                justify-content space-between
                .input
                    border-radius rem(.02)
                    background #fff
                    border 1px solid #EDEEEE
                    padding rem(.1)
                    font-size 12px
                    flex 2
                .bt-code
                    font-size 12px
                    padding 0 rem(.1)
                    background $primary
                    border-radius rem(.1)
                    color #fff
                    margin-left rem(.2)
                    white-space nowrap
                    // min-width rem(1.5)
                    // width 100%
                    flex 1
    .next-step
        background $primary
        color #fff
        width 90%
        display block
        margin 0 auto
        position absolute
        bottom rem(.5)
</style>
