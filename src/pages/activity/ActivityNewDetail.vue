<template>
  <div class='activity-detail-container'>
      <my-navi title="活动详情" :isFixed="true"></my-navi>
      <div class="content-wrapper">
          <activity-info-header @rule="startRule" @showRedDialog="showDialog = true" :info="detailInfo"></activity-info-header>
          <activity-info-progress :info="detailInfo"></activity-info-progress>
          <activity-info-goods-list :info="detailInfo"></activity-info-goods-list>
          <activity-info-reward></activity-info-reward>
          <activity-info-wall :info="detailInfo"></activity-info-wall>
          <activity-info-use></activity-info-use>
          <activity-info-bottom @rule="startRule"></activity-info-bottom>
          <activity-red-pack-dialog :showDialog="showDialog" @dismiss="showDialog = false" :info="detailInfo"></activity-red-pack-dialog>
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
export default {
  name: 'activityNewDetail',
  components: {
    ActivityInfoHeader,
    ActivityInfoProgress,
    ActivityInfoGoodsList,
    ActivityInfoReward,
    ActivityInfoWall,
    ActivityInfoUse,
    ActivityInfoBottom,
    ActivityRedPackDialog
  },
  data () {
    return {
      detailInfo: null,
      showDialog: false
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
    startRule () {
      this.$router.push({name: 'activityRule', query: {id: this.$route.query.aid}})
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
