<template>
<div class='r-s-three-container'>
  <p class="title">请填写您的店铺信息</p>
  <div class="info-wrapper">
    <div class="info-item-wrapper">
      <p class="info-title">店铺名称：</p>
      <span class="info-tag">(必填)</span>
    </div>
    <div class="info-content-wrapper">
      <input type="text" class="input" placeholder="请输入店铺名称" v-model="registerInfo.shopName" maxlength="8">
    </div>
  </div>
  <div class="info-wrapper">
    <div class="info-item-wrapper">
      <p class="info-title">所在区域：</p>
      <span class="info-tag">(必填)</span>
    </div>
    <div class="info-area-wrapper" @click="selectArea">
      {{city ? city : '选择所在地区'}}<span class="el-icon-arrow-right"></span>
    </div>
  </div>
  <div class="info-wrapper">
    <div class="info-item-wrapper">
      <p class="info-title">客服电话：</p>
      <span class="info-tag">(必填)</span>
    </div>
    <div class="info-content-wrapper">
      <input type="text" class="input" placeholder="请输入客服电话"  v-model="registerInfo.shopPhone">
    </div>
  </div>
  <p class="next-step" @click="submit">提交</p>
</div>
</template>

<script>
export default {
  name: 'stepThree',
  components: {},
  data () {
    return {
      registerInfo: this.$root.state.registerInfo,
      city: null
    }
  },
  methods: {
    selectArea () {
      this.$router.push({name: 'city', params: {backName: 'stepThree'}})
    },
    submit () {
      if (!this.registerInfo.shopName) {
        this.$toast('请输入店铺名称')
        return
      }
      if (this.registerInfo.shopName.length > 8) {
        this.$toast('店铺名称最多8位')
        return
      }
      if (!this.registerInfo.shopArea) {
        this.$toast('请输入所在区域')
        return
      }
      if (!this.registerInfo.shopPhone) {
        this.$toast('请输入客服电话')
        return
      }
      if (!this.registerInfo.parentId) {
        this.$toast('注册失败，请重试…')
        return
      }
      this.$http(this.$urlPath.register, {
        registerInfo: JSON.stringify(this.registerInfo)
      }, '正在注册…', (data) => {
        if (data.data) {
          this.$toast('恭喜，注册成功')
          this.$root.$data.userInfo.setUserInfo(data.data.distributorinfo)
          this.$router.replace({name: 'home'})
        } else {
          this.$toast('注册失败')
        }
      }, (errorCode, error) => {
        this.$toast(error)
      })
    }
  },
  mounted () {
    window.addEventListener('resize', function () {
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        setTimeout(() => {
          document.activeElement.scrollIntoViewIfNeeded()
        }, 0)
      }
    })
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (from.name === 'city' && to.params.city) {
        vm.registerInfo.shopArea = to.params.city
        vm.city = to.params.city.province.value + ' ' + to.params.city.city.value
      } else {
        if (vm.$root.userInfo.isLogin()) {
          vm.$router.replace({name: 'home'})
        }
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
.r-s-three-container
    background #f5f5f5
    padding rem(.4) rem(.4) $headerHeight rem(.4)
    box-sizing border-box
    overflow hidden
    height auto
    min-height 100%
    .title
        textStyle(#888, .3)
    .info-wrapper
        display flex
        align-items center
        padding rem(.4) 0
        .info-item-wrapper
            width 35%
            .info-title
                textStyle(#333, .28)
            .info-tag
                textStyle(#888, .25)
        .info-content-wrapper
            width 65%
            .input
                display inline-block
                width 100%
                border-radius rem(.02)
                background #fff
                border 1px solid #EDEEEE
                padding rem(.1)
                box-sizing border-box
                font-size 12px
        .info-area-wrapper
            textStyle(#888, .28)
    .image-title-wrapper
        textStyle(#333, .28)
        margin-top rem(.2)
        & span
            textStyle(#888, .25)
    .next-step
        background $primary
        color #fff
        text-align center
        margin rem(1) rem(.5) rem(.2) rem(.5)
        border-radius rem(.5)
        height $headerHeight
        line-height $headerHeight
</style>
