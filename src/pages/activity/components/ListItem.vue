<template>
  <div class='a-l-i-container' @click="onItemClick" v-if="item">
    <div class="img-wrapper">
      <img :src="$utils.image.getImagePath(item.image)">
    </div>
    <div class="conent-wrapper">
      <div class="title">{{item.title}}</div>
      <p class="sub-title">二次返利活动</p>
      <p class="time">剩余时间:
        <count-down :time="item.status === 3 ? 0 : item.end_time">
            <template slot-scope="props">
                <span class="time-wrapper">
                    {{ props.hours }}:{{ props.minutes }}:{{ props.seconds }}
                </span>
            </template>
        </count-down>
      </p>
      <div class="action-wrapper">
        <span class="detail">查看详情</span>
      </div>
    </div>
  </div>
</template>

<script>
import CountDown from 'common/components/countdown/countdown'
export default {
  name: 'activityListItem',
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  components: {
    CountDown
  },
  data () {
    return {
    }
  },
  methods: {
    onItemClick () {
      this.$router.push({name: 'activityDetail', query: { aid: this.item.id }})
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.a-l-i-container
    display flex
    padding rem(.2)
    border-bottom 1px solid #f5f5f5
    .img-wrapper
        flex 1
        height rem(2)
        & > img
            width 100%
            height 100%
            border-radius rem(.08)
            object-fit cover
    .conent-wrapper
        width 70%
        display flex
        flex-direction column
        justify-content space-around
        padding-left rem(.2)
        .title
            font-size rem(.3)
            color #333
            ellipsis()
        .sub-title
            color $primary
            ellipsis()
        .time
            color #666
            font-size rem(.28)
            .time-wrapper
                color $orangeColor
        .action-wrapper
            overflow hidden
            .detail
                float right
                border-radius rem(.05)
                background-color $orangeColor
                color #fff
                padding rem(.08) rem(.28)
                font-size rem(.28)
</style>
