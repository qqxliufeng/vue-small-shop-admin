<template>
  <div class='r-s-one-container'>
    <p class="title">请填写您的身份信息</p>
    <div class="info-wrapper">
      <div class="info-content-wrapper">
        <input type="text" class="input" placeholder="请输入手机号" v-model="registerInfo.phone" maxlength="11">
      </div>
    </div>
    <div class="info-wrapper">
      <div class="info-code-wrapper">
        <input type="text" class="input" placeholder="请输入验证码" v-model="registerInfo.verifyCode">
        <button class="bt-code" @click="getCode" :disabled="disabled">{{countDownText}}</button>
      </div>
    </div>
    <el-button class="next-step" @click="nextStep">下一步</el-button>
    <el-dialog :visible.sync="showVerifyDialog" width="80%" :modal="false">
        <slide-verify
        :w="width"
        @success="onSlideSuccess"
        ref="slideVerfiy"></slide-verify>
    </el-dialog>
    <div class="modal" v-show="showVerifyDialog"></div>
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
        idType: '2',
        workName: '',
        idFront: '',
        idBack: '',
        studentCard: '',
        shopName: '',
        shopArea: '',
        shopPhone: ''
      },
      countDownText: '获取验证码', // 获取验证码
      disabled: false,
      verifyCode: '',
      width: document.body.clientWidth * 0.8 - 40,
      showVerifyDialog: false
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
    onSlideSuccess () {
      if (this.$refs.slideVerfiy) {
        this.$refs.slideVerfiy.reset()
      }
      this.showVerifyDialog = false
      this.$http(this.$urlPath.getCaptcha, {
        mobile: this.registerInfo.phone,
        pid: this.$route.query.pid,
        store_id: this.registerInfo.storeId,
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
      if (this.$refs.slideVerfiy) {
        this.$refs.slideVerfiy.reset()
      }
      this.showVerifyDialog = true
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
        .info-content-wrapper
            width 100%
            display flex
            justify-content space-between
            border-bottom 1px solid #ccc
            .input
                border-radius rem(.02)
                background #fff
                padding rem(.2)
                padding rem(.1)
                font-size 14px
                flex 1
          .info-code-wrapper
                width 100%
                border-bottom 1px solid #ccc
                display flex
                .input
                    border-radius rem(.02)
                    background #fff
                    padding rem(.1)
                    font-size 14px
                    display inline-block
                    flex 1
                .bt-code
                    font-size 14px
                    padding 0 rem(.1)
                    color $primary
                    border-radius rem(.1)
                    background-color #fff
                    display inline-block
                    width 40%
                    &::before
                        content '|'
                        display inline-block
                        width 2px
                        color $primary
                        height 100%
                        margin-right rem(.5)
    .next-step
        background $primary
        color #fff
        width 90%
        display block
        margin 0 auto
        position absolute
        bottom rem(.5)
    .modal
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: .5;
        background: #000;
</style>
