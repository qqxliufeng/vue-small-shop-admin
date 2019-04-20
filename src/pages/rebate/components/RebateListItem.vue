<template>
  <div class='r-l-item-container' :id="'rebate-list-item-container' + state">
      <mescroll-vue ref="mescroll" :down="mescrollConfig.mescrollDown" :up="mescrollConfig.mescrollUp">
        <ul>
          <li v-for="(item, index) of list" :key="index">
            <el-card shadow="always"  :body-style="{ padding: '.2rem' }" class="item-card">
              <div class="info-container">
                <img src="" class="img">
                <div class="info-wrapper">
                  <p class="title">济南市济南市济南市济南市济南市济南市济南市济南市济南市济南市济南市济南市济南市济南市济南市济南市济南市济南市济南市济南市</p>
                  <p class="vip">会员号：1999</p>
                  <p class="num">购买数量：2张</p>
                  <p class="time">消费时间：2019-1-1 19:10:10</p>
                </div>
              </div>
              <div class="status-wrapper">
                <el-button size="mini" class="status" :type="buttonStateType" round>{{buttonStateTip}}：￥2</el-button>
              </div>
            </el-card>
          </li>
        </ul>
      </mescroll-vue>
  </div>
</template>

<script>
import MescrollVue from 'mescroll.js/mescroll.vue'
import mescrollConfig from 'common/utils/mescrollerConfig'
import listMixin from 'common/mixins/list-mixin'
export default {
  name: 'rebateListItem',
  mixins: [listMixin],
  props: {
    state: String
  },
  components: {
    MescrollVue
  },
  data () {
    return {
      mescrollConfig: mescrollConfig('rebate-list-item-container' + this.state, this.upCallBack),
      list: []
    }
  },
  computed: {
    buttonStateType () {
      switch (this.state) {
        case '1':
          return 'success'
        case '2':
          return 'warning'
        case '3':
          return 'danger'
      }
    },
    buttonStateTip () {
      switch (this.state) {
        case '1':
          return '已返利'
        case '2':
          return '待返利'
        case '3':
          return '未付款'
      }
    }
  },
  methods: {
    upCallBack (page, mescroll) {
      setTimeout(() => {
        this.list = [
          {
            name: 1
          },
          {
            name: 1
          },
          {
            name: 1
          },
          {
            name: 1
          },
          {
            name: 1
          },
          {
            name: 1
          }
        ]
        mescroll.endSuccess(2)
      }, 1000)
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.mescroll
  mescroller()
.r-l-item-container
    padding-left rem(.2)
    padding-right rem(.2)
    .item-card
        margin rem(.2)
        .info-container
            display flex
            flex-direction row
            borderBottom()
            padding-bottom rem(.2)
            .img
                width rem(1.8)
                height rem(1.8)
                border-radius rem(.1)
                background #f5f5f5
                object-fit cover
            .info-wrapper
                flex 1
                margin-left rem(.2)
                display flex
                flex-direction column
                justify-content space-around
                overflow hidden
                .title
                    ellipsis()
                    textStyle(#333, .3)
                    line-height rem(.32)
                .vip
                    textStyle(#888, .25)
                    line-height rem(.28)
                .num
                    textStyle(#888, .25)
                    line-height rem(.28)
                .time
                    textStyle(#888, .25)
                    line-height rem(.28)
        .status-wrapper
            text-align right
            padding-top rem(.2)
</style>
