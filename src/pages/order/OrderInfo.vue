<template>
    <div>
        <my-navi title="订单详情" :isFixed="true"></my-navi>
        <div id="top" class="top"></div>
        <div class="o-i-container">
            <order-info-waiting-pay v-if="orderType === '1'" :detail="detail" @backTop="backTop"></order-info-waiting-pay>
            <order-info-waiting-use v-else-if="orderType === '2'" :detail="detail" @backTop="backTop"></order-info-waiting-use>
            <order-info-waiting-comment v-else-if="orderType === '3'" :detail="detail" @backTop="backTop"></order-info-waiting-comment>
            <!-- <order-info-after-service v-else-if="orderType === '4'" :orderId="orderId"></order-info-after-service> -->
            <order-info-other v-else :detail="detail" @backTop="backTop"></order-info-other>
        </div>
    </div>
</template>

<script>
// import orderInfoWaitingPay from './OrderInfoWaitingPay'
// import orderInfoWaitingUse from './OrderInfoWaitingUse'
// import orderInfoAfterService from './OrderInfoAfterService'
// import orderInfoOther from './OrderInfoOther'
import orderInfoWaitingPay from './orderInfo/OrderInfoPay'
import orderInfoWaitingUse from './orderInfo/OrderInfoUse'
import orderInfoOther from './orderInfo/OrderInfoOther'
export default {
  name: 'orderInfo',
  props: {
    orderId: {
      type: String,
      default: '1'
    },
    orderType: {
      type: String,
      default: '1'
    }
  },
  data () {
    return {
      detail: null
    }
  },
  watch: {
    '$route' (newVal, oldVal) {
      if (newVal.name === 'orderInfo') {
        this.detail = null
        this.getData()
      }
    }
  },
  components: {
    orderInfoWaitingPay,
    orderInfoWaitingUse,
    orderInfoOther
  },
  methods: {
    getData () {
      this.$http(this.$urlPath.orderDetails, {
        ord_id: this.orderId
      }, '', (data) => {
        this.detail = data.data
        if (this.orderType === '1') {
          this.detail.time = data.time
        }
      }, (errorCode, error) => {
        this.$toast(error)
      })
    },
    backTop () {
      document.querySelector('#top').scrollIntoView()
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.top
    height $headerHeight
</style>
