<template>
  <div class='activity-detail-container'>
    <my-navi title="活动详情" :isFixed="true"></my-navi>
    <div class="content-wrapper" v-if="detailInfo">
      <div class="img-bg-wrapper">
          <img :src="headerImage">
      </div>
      <div class="detail-wrapper">
        <activity-detail-info :info="detailInfo" @countDownEnd="countDownEnd" @gotoStart="gotoStart"></activity-detail-info>
      </div>
      <div class="goods-list-wrapper" id="list">
        <activity-detail-goods-list :goods="detailInfo.goods" :status="detailInfo.status" :finish_status="detailInfo.details_status"></activity-detail-goods-list>
      </div>
      <div class="goods-list-wrapper">
        <activity-detail-rule :statistic_type="detailInfo.statistic_type" :award_type="detailInfo.award_type"></activity-detail-rule>
      </div>
    </div>
  </div>
</template>

<script>
import headerImage from 'images/img_activity_detail_bg.jpg'
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
      detailInfo: null
    }
  },
  methods: {
    getData () {
      this.$http(this.$urlPath.activityDetails, {
        id: this.$route.query.aid
      }, '', (data) => {
        this.detailInfo = data.data
      }, (errorCode, error) => {
        this.$toast(error)
      })
    },
    countDownEnd () {
      if (this.detailInfo) {
        this.detailInfo.status = 3
      }
    },
    gotoStart () {
      document.querySelector('#list').scrollIntoView()
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
