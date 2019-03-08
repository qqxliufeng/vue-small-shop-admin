<template>
<div class='login-container'>
  <span @click="goHome">login</span>
  <el-dialog :visible.sync="showVerifyDialog" modal width="90%" @opened="openDialog" @closed="closeDialog">
    <slide-verify
    :w="width"></slide-verify>
  </el-dialog>
  <el-button @click="showVerifyDialog = true">打开</el-button>
</div>
</template>

<script>

export default {
  name: 'login',
  components: {},
  methods: {
    goHome () {
      this.$router.push({name: 'home'})
    },
    openDialog () {
      document.addEventListener('touchmove', e => {
        e.preventDefault()
        e.stopPropagation()
      }, false)
    },
    closeDialog () {
      document.removeEventListener('touchmove', null, false)
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
</style>
