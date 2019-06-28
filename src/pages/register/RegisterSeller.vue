<template>
    <div class='r-seller-container'>
      <my-navi title="分销商申请" :isFixed="true" :isShowBack="false"></my-navi>
      <!-- <div class="tab-wrapper">
          <p
          class="tab-item"
          :class="{'active': item.isActive}"
          v-for="(item, index) of tabItems"
          :key="index">
              <i class="num" :class="{'num-active': item.isActive}">{{index+1}}</i>
              <span>{{item.name}}</span>
          </p>
        </div> -->
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>

export default {
  name: '',
  components: {},
  data () {
    return {
      tabItems: [
        {
          id: 'stepOne',
          name: '注册账号',
          isActive: true
        },
        {
          id: 'stepTwo',
          name: '身份认证',
          isActive: false
        },
        {
          id: 'stepThree',
          name: '店铺信息',
          isActive: false
        }
      ]
    }
  },
  mounted () {
    if (this.$router.history.current.name === 'registerDefault') {
      this.tabItems[0].isActive = true
    } else {
      this.tabItems.forEach(element => {
        element.isActive = element.id === this.$router.history.current.name
      })
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.tabItems.forEach(element => {
      element.isActive = element.id === to.name
    })
    next()
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.active
    box-sizing border-box
    border-bottom 2px solid $orangeColor
.r-seller-container
    .tab-wrapper
        position fixed
        top $headerHeight
        left 0
        right 0
        display flex
        align-items center
        height $headerHeight
        line-height $headerHeight
        background #ffffff
        border-bottom 1px solid #f5f5f5
        .tab-item
            flex 1
            text-align center
            .num
                vertical-align middle
                display inline-block
                background #ccc
                width rem(.4)
                height rem(.4)
                line-height rem(.4)
                font-size rem(.25)
                border-radius 50%
                margin-right rem(.2)
                color #fff
                font-size 12px
            .num-active
                background $orangeColor
    .content
        contentFixed()
        // top $headerHeight * 2
</style>
