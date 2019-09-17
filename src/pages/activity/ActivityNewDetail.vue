<template>
  <div class='activity-detail-container'>
      <my-navi title="活动详情" :isFixed="true"></my-navi>
      <div class="content-wrapper" v-if="detailInfo">
          <activity-info-header @rule="startRule" @showRedDialog="showDialog = true" :info="detailInfo" @invite="invite" @show-code-dialog="showCodeDialog"></activity-info-header>
          <activity-info-swiper-list :users="users"></activity-info-swiper-list>
          <activity-info-progress :info="detailInfo"></activity-info-progress>
          <activity-info-goods-list :info="detailInfo"></activity-info-goods-list>
          <activity-info-reward></activity-info-reward>
          <activity-info-wall :info="detailInfo"></activity-info-wall>
          <activity-info-use></activity-info-use>
          <activity-info-bottom @rule="startRule" @invite="invite"></activity-info-bottom>
          <activity-red-pack-dialog :showDialog="showDialog" @dismiss="showDialog = false" :info="detailInfo" @invite="invite"></activity-red-pack-dialog>
          <activity-info-share-code :showCode="showCode" @dismiss-code="showCode = false" :url="detailInfo.url"></activity-info-share-code>
      </div>
  </div>
</template>

<script>
import ActivityInfoHeader from './components/ActivityInfoHeader'
import ActivityInfoProgress from './components/ActivityInfoProgress'
import ActivityInfoGoodsList from './components/ActivityInfoGoodsList'
import ActivityInfoReward from './components/ActivityInfoReward'
import ActivityInfoWall from './components/ActivityInfoWall'
import ActivityInfoUse from './components/ActivityInfoUse'
import ActivityInfoBottom from './components/ActivityInfoBottom'
import ActivityRedPackDialog from './components/ActivityRedPackDialog'
import ActivityInfoShareCode from './components/ActivityInfoShareCode'
import ActivityInfoSwiperList from './components/ActivityInfoSwiperList'
export default {
  name: 'activityNewDetail',
  components: {
    ActivityInfoHeader,
    ActivityInfoSwiperList,
    ActivityInfoProgress,
    ActivityInfoGoodsList,
    ActivityInfoReward,
    ActivityInfoWall,
    ActivityInfoUse,
    ActivityInfoBottom,
    ActivityRedPackDialog,
    ActivityInfoShareCode
  },
  data () {
    return {
      detailInfo: null,
      showDialog: false,
      showCode: false,
      users: []
    }
  },
  methods: {
    getData () {
      this.$http(this.$urlPath.activityDetails, {
        id: this.$route.query.aid
      }, '', (data) => {
        this.detailInfo = data.data
        this.detailInfo.user.forEach(item => {
          item.rebate = Number(this.detailInfo.money) + Number(item.rebate)
        })
        this.users = this.detailInfo.user
      }, (errorCode, error) => {
        this.$toast(error)
      })
    },
    startRule () {
      this.$router.push({name: 'activityRule', query: {id: this.$route.query.aid}})
    },
    invite () {
      this.$router.push({name: 'shareShop'})
    },
    showCodeDialog () {
      this.showCode = true
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
        background-color #ffb169
        padding-top $headerHeight
        padding-bottom rem(.43)
</style>
