<template>
  <div class='home-shop-num-container'>
    <span>店铺粉丝：</span>
    <span>{{num}}</span>
  </div>
</template>

<script>

export default {
  name: 'homeShopNum',
  props: {
    num: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.home-shop-num-container
    textStyle(#888, .25)
</style>
