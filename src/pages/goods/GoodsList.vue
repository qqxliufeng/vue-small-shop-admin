<template>
<div class='g-list-container'>
  <my-navi title="商品列表" :isFixed="true"></my-navi>
  <div class="content">
      <div class="menu">
        <ul>
         <li v-for="(item, index) of menuList" :key="index" class="menu-item" :style="{color:item.showActiveStyle ? '#64BBAE' : '#333'}" @click="menuItemClick(item)">
           {{item.name}}
         </li>
        </ul>
      </div>
      <div class="content-list" v-if="tempMenu"  @scroll="onScroll">
        <p class="list-title">{{tempMenu.name}}</p>
         <ul v-if="tempMenu.data && tempMenu.data.length > 0">
           <li v-for="(content, index) of tempMenu.data" :key="index" class="content-item">
              <div class="content-item-info-wrapper">
                <div class="item-image-wrapper">
                  <img v-lazy="$utils.image.getImagePath(getPath(content.scenicimages))" :key="getPath(content.scenicimages)">
                </div>
                <div class="item-info-wrapper">
                  <p class="info-title">{{content.s_title}}</p>
                  <p><span class="info-rating">{{content.score}}分</span><span class="info-sale-count">已售{{content.people_num}}</span></p>
                  <!-- <p><span class="info-money">￥89</span><span class="info-money-tag">起</span><span class="info-old-money">￥109</span></p> -->
                  <div class="info-action-wrapper">
                    <button class="info-detail" @click="startScenicDetail(content)">详情</button>
                    <button class="info-share" @click="selectScenicShare(content)" v-if="isCanShare">分享</button>
                  </div>
                </div>
              </div>
           </li>
        </ul>
        <div v-else class="scenic-empty">
          暂无景区
        </div>
      </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'goodsList',
  components: {},
  data () {
    return {
      listTitle: '滑雪',
      tempMenu: null,
      menuList: null
    }
  },
  watch: {
    menuList (newVal, oldVal) {
      if (newVal instanceof Array && newVal.length > 0) {
        this.tempMenu = this.menuList[0]
      }
    }
  },
  computed: {
    isCanShare () {
      return Boolean(this.$root.state.canShareTicket)
    }
  },
  methods: {
    getPath (path) {
      if (path.indexOf(',') === -1) {
        return path
      } else {
        return path.split(',')[0]
      }
    },
    menuItemClick (item) {
      this.menuList.forEach(element => {
        element.showActiveStyle = element === item
      })
      this.tempMenu = item
    },
    startScenicDetail (item) {
      this.$router.push({name: 'scenicDetail', query: {identity: '2', storeId: this.$root.userInfo.state.id, scenicId: item.scenic_id}})
    },
    selectScenicShare (item) {
      this.$router.push({name: 'selectScenicPostList', query: {scenic_id: item.scenic_id}})
    },
    onScroll () {
      console.log(1)
    },
    getData () {
      this.$http(this.$urlPath.goodsList, {}, '', (data) => {
        this.menuList = data.data
        this.menuList.forEach((item, index) => {
          item.showActiveStyle = index === 0
        })
      }, (errorCode, error) => {
        this.$toast(error)
      })
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
.g-list-container
    .content
        padding-top $headerHeight
        display flex
        position relative
        .scenic-empty
            display flex
            justify-content center
            align-items center
            height rem(2)
            textStyle(#888, .28)
        .menu
            position fixed
            top $headerHeight
            left 0
            width rem(1.8)
            height 100%
            border-right 1px solid #f5f5f5
            .menu-item
                height $headerHeight
                line-height $headerHeight
                text-align center
                textStyle(#333, .32)
                ellipsis()
                border-bottom 1px solid #f5f5f5
                .menu-active-style
                    color #64BBAE
        .content-list
            flex 3
            margin-left rem(1.8)
            overflow-y scroll
            box-sizing border-box
            .list-title
                textStyle(#333, .32)
                line-height $headerHeight
                padding 0 rem(.2)
                border-bottom 1px solid #f5f5f5
            .content-item
                padding rem(.2)
                borderBottom()
                .content-item-info-wrapper
                    display flex
                    .item-image-wrapper
                        width rem(1.5)
                        height rem(1.5)
                        overflow hidden
                        border-radius rem(.1)
                        & img
                            width 100%
                            height 100%
                            object-fit cover
                    .item-info-wrapper
                        flex 1
                        display flex
                        justify-content space-between
                        flex-direction column
                        margin-left rem(.2)
                        overflow hidden
                        .info-title
                            ellipsis()
                            textStyle(#333, .3)
                        .info-rating
                            textStyle($primary, .25)
                            &::after
                                content "|"
                                display inline-block
                                margin 0 rem(.2)
                                color #888
                        .info-sale-count
                            textStyle(#888, .25)
                        .info-money
                            textStyle(#EA782F, .35)
                        .info-money-tag
                            textStyle(#aaa, .25)
                            margin-left rem(.05)
                            margin-right rem(.2)
                        .info-old-money
                            textStyle(#aaa, .28)
                            text-decoration line-through
                        .info-action-wrapper
                            display flex
                            justify-content flex-end
                            .info-detail
                                border 1px solid #EA782F
                                border-radius rem(.05)
                                background-color #fff
                                color #EA782F
                                font-size rem(.25)
                                padding 0 rem(.2)
                                box-sizing border-box
                                display inline-block
                                margin-right rem(.2)
                                line-height rem(.35)
                            .info-share
                                border 1px solid #EA782F
                                border-radius rem(.05)
                                background-color #EA782F
                                color #fff
                                font-size rem(.25)
                                padding 0 rem(.2)
                                line-height rem(.35)
</style>
