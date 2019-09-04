<template>
  <div class='activity-list-container'>
    <my-navi title="红包/福利" :isFixed="true"></my-navi>
    <div class="list-content">
      <el-tabs :stretch="true" value="first" @tab-click="tabClick">
         <el-tab-pane label="进行中" name="first">
          <ul v-if="processActivityList && processActivityList.length > 0">
            <li v-for="(item, index) of processActivityList" :key="index">
              <list-item :item="item"></list-item>
            </li>
          </ul>
          <div v-else class="empty-activity-list">
            暂无列表
          </div>
         </el-tab-pane>
         <el-tab-pane label="已结束" name="second">
           <ul v-if="finishActivityList && finishActivityList.length > 0">
            <li v-for="(item, index) of finishActivityList" :key="index">
              <list-item :item="item"></list-item>
            </li>
          </ul>
          <div v-else class="empty-activity-list">
            暂无列表
          </div>
         </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import ListItem from './components/ListItem'
export default {
  name: 'activityList',
  components: {
    ListItem
  },
  data () {
    return {
      processActivityList: [],
      finishActivityList: [],
      activityType: 1
    }
  },
  methods: {
    getData () {
      this.$http(this.$urlPath.activityList, {
        type: this.activityType
      }, '', (data) => {
        if (this.activityType === 1) {
          this.processActivityList = data.data
        } else {
          this.finishActivityList = data.data
        }
      }, (errorCode, error) => {
        this.$toast(error)
      })
    },
    tabClick (tab) {
      this.activityType = tab.name === 'first' ? 1 : 2
      if (this.processActivityList.length === 0 && this.activityType === 1) {
        this.getData()
      }
      if (this.finishActivityList.length === 0 && this.activityType === 2) {
        this.getData()
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
.activity-list-container
    .list-content
        padding-top $headerHeight
    & >>> .el-tabs__header
        margin-bottom 0
    .empty-activity-list
        color #888
        text-align center
        padding-top rem(1)
</style>
