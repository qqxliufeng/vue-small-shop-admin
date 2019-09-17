<template>
  <div class='activity-info-wall-container'>
    <activity-info-title title="分销商财富榜"></activity-info-title>
    <div class="wall-wrapper">
      <div class="wall-total-num-wrapper">共<span>4567745</span>人参加</div>
      <div class="wall-first-wrapper" v-if="tempUserList.length > 0">
        <div class="wall-first-item-wrapper">
          <div class="imga-wrapper">
            <img :src="$utils.image.getImagePath(tempUserList[0].avatar)" class="face">
            <div class="wall-reward">
              <img src="../../../assets/images/activity/img_jin_bei.png" >
            </div>
          </div>
          <p class="phone">{{$utils.common.hiddenMobile(tempUserList[0].phone)}}</p>
          <p class="money">已赚{{Number(tempUserList[0].rebate).toFixed(2)}}元</p>
        </div>
        <div class="wall-first-item-wrapper">
          <div class="imga-wrapper">
            <img :src="$utils.image.getImagePath(tempUserList[1].avatar)" class="face">
            <div class="wall-reward">
              <img src="../../../assets/images/activity/img_yin_bei.png" >
            </div>
          </div>
          <p class="phone">{{$utils.common.hiddenMobile(tempUserList[1].phone)}}</p>
          <p class="money">已赚{{Number(tempUserList[1].rebate).toFixed(2)}}元</p>
        </div>
        <div class="wall-first-item-wrapper">
          <div class="imga-wrapper">
            <img :src="$utils.image.getImagePath(tempUserList[2].avatar)" class="face">
            <div class="wall-reward">
              <img src="../../../assets/images/activity/img_shi_bei.png" >
            </div>
          </div>
          <p class="phone">{{$utils.common.hiddenMobile(tempUserList[2].phone)}}</p>
          <p class="money">已赚{{Number(tempUserList[2].rebate).toFixed(2)}}元</p>
        </div>
      </div>
      <div class="line"></div>
      <ul>
        <li class="wall-item-wrapper" v-for="(item, index) of tempList" :key="item.id">
          <span class="num">{{index + 4}}</span>
          <div class="item-face">
            <img :src="$utils.image.getImagePath(item.avatar)">
          </div>
          <span class="phone">{{$utils.common.hiddenMobile(item.phone)}}</span>
          <span class="money">已赚{{Number(item.rebate).toFixed(2)}}元</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ActivityInfoTitle from './ActivityInfoTitle'
export default {
  name: 'activityInfoWall',
  props: {
    info: Object
  },
  components: {
    ActivityInfoTitle
  },
  data () {
    return {
      tempList: [],
      tempUserList: []
    }
  },
  mounted () {
    if (this.info) {
      let list = []
      this.info.user.forEach(item => {
        list.push(item)
      })
      list.sort((it1, it2) => {
        return it2.rebate - it1.rebate
      })
      this.tempList = list.slice(3, list.length)
      this.tempUserList = list
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.activity-info-wall-container
    width 90%
    margin 0 auto
    margin-top 8%
    .wall-wrapper
        margin-top rem(-.18)
        border-radius rem(.08)
        background #f5f5f5
        padding rem(.4) 0
        .wall-total-num-wrapper
            textStyle(#333, .28)
            text-align center
            & > span
                margin 0 rem(.1)
                textStyle(#f00, .28)
        .wall-first-wrapper
            display flex
            padding rem(.4) 0
            .wall-first-item-wrapper
                text-align center
                flex 1
                .imga-wrapper
                    .face
                        width rem(1.2)
                        height rem(1.2)
                        object-fit cover
                        border-radius 50%
                    .wall-reward
                        position relative
                        margin-top rem(-.5)
                        & > img
                            width rem(.6)
                .phone
                    textStyle(#666, .28)
                    ellipsis()
                    margin-top rem(.2)
                .money
                    textStyle(#666, .25)
                    margin-top rem(.2)
                    ellipsis()
        .line
            border 1px solid #ddd
            margin 0 auto
            width 90%
    .wall-item-wrapper
        display flex
        align-items center
        padding rem(.3) 0
        margin 0 auto
        width 90%
        border-bottom 2px solid #ddd
        .num
            flex 1
            textStyle(#666, .28)
            text-align center
        .item-face
            text-align center
            flex 2
            & > img
                width rem(.8)
                height rem(.8)
                border-radius 50%
        .phone
            flex 2
            text-align center
            textStyle(#666, .25)
        .money
            flex 2.3
            text-align right
            textStyle(#666, .25)
</style>
