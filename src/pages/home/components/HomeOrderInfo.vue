<template>
  <div>
    <p class="title">我的订单</p>
    <div class='h-o-i-container'>
      <div class="type-wrapper" @click="orderClick(0)"><span class="iconfont type-icon">&#xe618;</span><p class="type-title">全部订单</p></div>
      <div class="type-wrapper" @click="orderClick(1)"><span class="iconfont type-icon">&#xe621;</span><p class="type-title">待付款</p></div>
      <div class="type-wrapper" @click="orderClick(2)"><span class="iconfont type-icon">&#xe60a;</span><p class="type-title">待使用</p></div>
      <div class="type-wrapper" @click="orderClick(4)"><span class="iconfont type-icon">&#xe60f;</span><p class="type-title">退款/售后</p></div>
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
    orderClick (type) {
      this.$emit('orderClick', { type: type })
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.title
    padding rem(.25)
    color #666
    font-size rem(.3)
.h-o-i-container
    display flex
    .type-wrapper
        flex 1
        color #666
        text-align center
        font-size rem(.26)
        padding rem(.2) 0
        .type-icon
            font-size rem(.55)
            color $orangeColor
        .type-title
            margin-top rem(.2)
</style>
