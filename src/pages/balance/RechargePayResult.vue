<template>
  <div class='o-i-result-container'>
    <my-navi title="支付结果"></my-navi>
    <div class="result-icon-container">
      <span class="el-icon-success result-icon" :class="{'el-icon-success' : state === 1, 'el-icon-circle-close' : state === 0}"></span>
      <p class="result-icon-tip">{{state === 1 ? '支付成功' : '支付失败'}}</p>
    </div>
    <div class="result-action-container">
      <p><el-button size="mini" type="primary" class="button" @click="confirm">确定</el-button></p>
    </div>
  </div>
</template>

<script>
import IdMixin from 'common/mixins/id-mixin'
export default {
  name: 'rechargePayResult',
  mixins: [IdMixin],
  components: {
  },
  data () {
    return {
      state: parseInt(this.$route.state || 1)
    }
  },
  methods: {
    confirm () {
      // this.$root.$emit('closePage')
      // this.$router.go(-1)
      this.$router.replace({name: 'home'})
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.result-icon-container
    text-align center
    padding-top rem(1)
    .result-icon
        font-size rem(1.5)
        color $primary
    .result-icon-tip
        textStyle(#666, .3)
        margin-top rem(.4)
.result-action-container
    margin-top rem(1.5)
    text-align center
    & > p
        margin-top rem(.5)
    .button
        width 50%
        line-height 1.5
        font-size rem(.3)
</style>
