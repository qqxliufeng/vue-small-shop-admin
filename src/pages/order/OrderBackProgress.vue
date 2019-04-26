<template>
  <div class='o-b-progress-container'>
    <my-navi title="退款进度" :isFixed="true"></my-navi>
    <div class="content-container">
      <ul>
        <li>
          <el-card :body-style="{padding : '.2rem'}" class="el-card">
            <p class="title">退款审核中……</p>
            <p class="time">退款申请时间：2019-4-12</p>
            <div class="line"></div>
            <div class="money-wrapper">
              <span class="money">退款金额<i>￥1900</i></span>
              <span class="open" @click="openInfo">展开<i :class="{'el-icon-arrow-down' : !opened, 'el-icon-arrow-up' : opened}"></i></span>
            </div>
            <div v-show="opened">
              <p class="time">退款账户：原路退回</p>
              <p class="time">退款流水号：1223344546</p>
              <div class="time-line-wrapper">
                <el-timeline>
                    <el-timeline-item
                      v-for="(activity, index) in activities"
                      :key="index"
                      :icon="activity.icon"
                      :type="activity.type"
                      :color="activity.color"
                      :size="activity.size"
                      :timestamp="activity.timestamp">
                      {{activity.content}}
                    </el-timeline-item>
                </el-timeline>
              </div>
            </div>
            <span class="index-tag">1</span>
          </el-card>
        </li>
        <li>
          <el-card :body-style="{padding : '.2rem'}" class="el-card">
            <p class="title">退款审核中……</p>
            <p class="time">退款申请时间：2019-4-12</p>
            <div class="line"></div>
            <div class="money-wrapper">
              <span class="money">退款金额<i>￥1900</i><strong>（1张）</strong></span>
              <span class="open" @click="openInfo">{{opened ? '收起' : '展开'}}<i :class="{'el-icon-arrow-down' : !opened, 'el-icon-arrow-up' : opened}"></i></span>
            </div>
            <div v-show="opened">
              <p class="time">退款账户：原路退回</p>
              <p class="time">退款流水号：1223344546</p>
              <div class="time-line-wrapper">
                <el-timeline>
                    <el-timeline-item
                      v-for="(activity, index) in activities"
                      :key="index"
                      :icon="activity.icon"
                      :type="activity.type"
                      :color="activity.color"
                      :size="activity.size"
                      :timestamp="activity.timestamp">
                      {{activity.content}}
                    </el-timeline-item>
                </el-timeline>
              </div>
            </div>
            <span class="index-tag">1</span>
          </el-card>
        </li>
        <li>
          <el-card :body-style="{padding : '.2rem'}" class="el-card">
            <p class="title">退款审核中……</p>
            <p class="time">退款申请时间：2019-4-12</p>
            <div class="line"></div>
            <div class="money-wrapper">
              <span class="money">退款金额<i>￥1900</i></span>
              <span class="open" @click="openInfo">展开<i :class="{'el-icon-arrow-down' : !opened, 'el-icon-arrow-up' : opened}"></i></span>
            </div>
            <div v-show="opened">
              <p class="time">退款账户：原路退回</p>
              <p class="time">退款流水号：1223344546</p>
              <div class="time-line-wrapper">
                <el-timeline>
                    <el-timeline-item
                      v-for="(activity, index) in activities"
                      :key="index"
                      :icon="activity.icon"
                      :type="activity.type"
                      :color="activity.color"
                      :size="activity.size"
                      :timestamp="activity.timestamp">
                      {{activity.content}}
                    </el-timeline-item>
                </el-timeline>
              </div>
            </div>
            <span class="index-tag">1</span>
          </el-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderBackProgress',
  data () {
    return {
      opened: false,
      activities: [
        {
          content: '支持使用',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-success'
        },
        {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        },
        {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        },
        {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46'
        }
      ]
    }
  },
  methods: {
    openInfo () {
      this.opened = !this.opened
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.o-b-progress-container
    padding-top $headerHeight
    padding-bottom rem(.5)
    .el-card
        margin rem(.2)
        position relative
        .title
            textStyle(#333, .35)
        .time
            textStyle(#555, .28)
            margin rem(.3) 0
        .line
            background #f5f5f5
            height 1px
            width 100%
            margin rem(.2) 0
        .money-wrapper
            display flex
            justify-content space-between
            align-items center
            .money
                textStyle(#333, .3)
                & i
                  color $orangeColor
                & strong
                  color #aaa
                  font-size rem(.25)
            .open
                textStyle($primary, .3)
        .time-line-wrapper
            margin-top rem(.5)
        .index-tag
            background $primary
            display inline-block
            width rem(.5)
            line-height rem(.5)
            text-align center
            position absolute
            right 0
            top 0
            color #fff
            font-size rem(.28)
</style>
