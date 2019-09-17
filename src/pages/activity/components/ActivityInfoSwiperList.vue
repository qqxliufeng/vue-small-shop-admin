<template>
  <div class='bottom-friend-list-container'>
    <div class="bg"></div>
    <div class="content-wrapper">
      <div class="content">
        <swiper :options="swiperOption" ref="swiper">
          <swiper-slide v-for="item of tempUsers" :key="item.id">
            <div class="user-info">
              <img :src="$utils.image.getImagePath(item.avatar)">
              {{$utils.common.hiddenMobile(item.phone)}}
              <span>已赚{{Number(item.rebate).toFixed(2)}}元</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'bottomFriendList',
  props: {
    users: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        direction: 'vertical'
      },
      tempUsers: this.users
    }
  },
  watch: {
    users (newVal) {
      this.tempUsers = newVal
    }
  },
  methods: {
    hiddenNickName (nickName) {
      if (nickName) {
        if (nickName.length < 2) {
          return nickName
        } else {
          return nickName.substring(0, 1) + '****' + nickName.substring(nickName.length - 1, nickName.length)
        }
      } else {
        return '暂无'
      }
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.bottom-friend-list-container
    position absolute
    right 0
    left 0
    top rem(3.5)
    z-index 1
    .bg
        background-color red
        height rem(.6)
        width 60%
        margin 0 auto
        border-radius rem(.25)
        opacity .7
    .content-wrapper
        overflow hidden
        position absolute
        top 0
        bottom 0
        left 0
        right 0
        margin 0 auto
        text-align center
        .content
            color #fff
            margin-left rem(.1)
            z-index 1
            line-height rem(.6)
            .user-info
                & > img
                    width rem(.4)
                    height rem(.4)
                    line-height rem(.5)
                    border-radius 50%
                    vertical-align middle
                    background #f5f5f5
                .nick-name
                    vertical-align middle
    .tip
        text-align center
        font-style italic
        font-weight bold
        color #888
        padding-top rem(.2)
        position relative
        z-index 222
        .close
            float right
            margin-right rem(.1)
            width rem(.4)
            height rem(.4)
            font-size rem(.3)
</style>
