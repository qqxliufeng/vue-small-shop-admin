<template>
<div class=''></div>
</template>

<script>

export default {
  name: 'auth',
  components: {},
  data () {
    return {
      code: ''
    }
  },
  methods: {
    wxLogin () {
      if (this.code && this.$root.userInfo.isLogin() && (!this.$root.userInfo.state.openid || this.$root.userInfo.state.openid === 'null')) {
        this.$http(this.$urlPath.getWXOpenid, {
          code: this.code
        }, '正在授权登录…', (data) => {
          this.$root.userInfo.setUserInfoOpenId(data.data.openid)
          console.log(this.$root.userInfo)
          this.$router.go(-1)
        }, (errorCode, error) => {
          // this.$router.go(-1)
          // console.log(error)
          this.$toast('授权登录失败…')
        })
      } else {
        this.$router.go(-1)
      }
    }
  },
  mounted () {
    this.code = this.$route.query.code
    this.wxLogin()
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'

</style>
