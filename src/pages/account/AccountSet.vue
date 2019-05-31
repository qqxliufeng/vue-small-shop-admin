<template>
  <div class='a-s-container'>
    <my-navi title="个人设置"></my-navi>
    <div class="item" @click="accountInfo">
      <span class="title">账号信息</span>
      <span class="el-icon-arrow-right arrow"></span>
    </div>
    <div class="item" @click="authInfo">
      <span class="title">认证信息</span>
      <span class="el-icon-arrow-right arrow"></span>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  components: {},
  data () {
    return {
    }
  },
  methods: {
    accountInfo () {
      this.$router.push({name: 'personalInfo'})
    },
    authInfo () {
      this.$router.push({name: 'authInfo'})
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.item
    border-bottom 1px solid #f5f5f5
    overflow hidden
    padding rem(.3)
    line-height rem(.4)
    .title
        vertical-align middle
    .arrow
        vertical-align middle
        color #888
        float right
        line-height rem(.4)
        font-size rem(.3)
</style>
