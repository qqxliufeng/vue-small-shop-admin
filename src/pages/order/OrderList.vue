<template>
    <div class="o-a-list-container">
        <my-navi title="我的订单" :isFixed="true"></my-navi>
        <order-list-item ref="allItem" :state="0"></order-list-item>
    </div>
</template>

<script>
import orderListItem from './components/OrderListItem'
export default {
  name: 'orderList',
  components: {
    orderListItem
  },
  data () {
    return {
      currentRefs: null
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$refs.allItem.$refs.mescroll && vm.$refs.allItem.$refs.mescroll.beforeRouteEnter()
    })
  },
  beforeRouteLeave (to, from, next) {
    this.$refs.allItem.$refs.mescroll && this.$refs.allItem.$refs.mescroll.beforeRouteLeave()
    next()
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.o-a-list-container >>> .mescroll
    top $headerHeight
    height 93%
</style>
