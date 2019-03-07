<template>
<div class='login-container'>
  <span @click="goHome">login</span>
</div>
</template>

<script>

export default {
  name: 'login',
  components: {},
  methods: {
    goHome () {
      this.$router.push({name: 'home'})
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'

</style>
