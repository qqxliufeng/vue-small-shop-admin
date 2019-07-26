<template>
  <div class='activity-detail-container'>
    <my-navi title="活动详情" :isFixed="true"></my-navi>
    <div class="content-wrapper" v-if="deailInfo">
      <div class="img-bg-wrapper">
          <img :src="headerImage">
      </div>
      <div class="detail-wrapper">
        <activity-detail-info :info="deailInfo" @countDownEnd="countDownEnd"></activity-detail-info>
      </div>
      <div class="goods-list-wrapper">
        <activity-detail-goods-list :goods="deailInfo.goods" :status="deailInfo.status" :finish_status="deailInfo.details_status"></activity-detail-goods-list>
      </div>
      <div class="goods-list-wrapper">
        <activity-detail-rule :statistic_type="deailInfo.statistic_type" :award_type="deailInfo.award_type"></activity-detail-rule>
      </div>
    </div>
  </div>
</template>

<script>
import headerImage from 'images/img_activity_detail_bg.png'
import ActivityDetailInfo from './components/ActivityDetailInfo'
import ActivityDetailGoodsList from './components/ActivityDetailGoodsList'
import ActivityDetailRule from './components/ActivityDetailRule'
export default {
  name: 'activityDetail',
  components: {
    ActivityDetailInfo,
    ActivityDetailGoodsList,
    ActivityDetailRule
  },
  data () {
    return {
      headerImage,
      deailInfo: null
    }
  },
  methods: {
    getData () {
      this.$http(this.$urlPath.activityDetails, {
        id: this.$route.query.aid
      }, '', (data) => {
        this.deailInfo = data.data
      }, (errorCode, error) => {
        this.$toast(error)
      })
    },
    countDownEnd () {
      if (this.detailInfo) {
        this.detailInfo.status = 3
      }
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.activity-detail-container
    .content-wrapper
        padding-top $headerHeight
        .img-bg-wrapper
            & > img
                width 100%
                object-fit cover
        .detail-wrapper
            background #7fc294
            padding rem(.3)
        .goods-list-wrapper
            background #7fc294
            padding 0 rem(.3) rem(.3) rem(.3)
</style>
