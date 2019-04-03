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
         <ul>
           <li v-for="(item, index) of tempMenu.contentList" :key="index" class="content-item">
              <div class="content-item-info-wrapper">
                <div class="item-image-wrapper">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551767583542&di=c71abe346d8549974662ee3129a1a25f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1c527b891defb0ddfe86302ba7f644b63c53d193e801-yE5WDO_fw658" alt="">
                </div>
                <div class="item-info-wrapper">
                  <p class="info-title">卧虎山滑雪场卧虎山滑雪场卧虎山滑雪场卧虎山滑雪场卧虎山滑雪场卧虎山滑雪场</p>
                  <p><span class="info-rating">4.9分</span><span class="info-sale-count">2012人已售</span></p>
                  <p><span class="info-money">￥89</span><span class="info-money-tag">起</span><span class="info-old-money">￥109</span></p>
                  <div class="info-action-wrapper">
                    <button class="info-detail" @click="startScenicDetail">详情</button>
                    <button class="info-share" @click="selectScenicShare">分享</button>
                  </div>
                </div>
              </div>
           </li>
        </ul>
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
      menuList: [
        {
          name: '滑雪',
          showActiveStyle: true,
          contentList: [
            {
              name: '哈哈'
            },
            {
              name: '哈哈'
            },
            {
              name: '哈哈'
            },
            {
              name: '哈哈'
            },
            {
              name: '哈哈'
            },
            {
              name: '哈哈'
            },
            {
              name: '哈哈'
            },
            {
              name: '哈哈'
            },
            {
              name: '哈哈'
            }
          ]
        },
        {
          name: '滑冰',
          showActiveStyle: false,
          contentList: [
            {
              name: '哈哈'
            }
          ]
        },
        {
          name: '秋千',
          showActiveStyle: false,
          contentList: [
            {
              name: '哈哈'
            },
            {
              name: '哈哈'
            }
          ]
        }
      ]
    }
  },
  methods: {
    menuItemClick (item) {
      this.menuList.forEach(element => {
        element.showActiveStyle = element === item
      })
      this.tempMenu = item
    },
    startScenicDetail () {
      this.$router.push({name: 'scenicDetail'})
    },
    selectScenicShare () {
      this.$router.push({name: 'scenicPostList', params: {type: '1'}})
    },
    onScroll () {
      console.log(1)
    }
  },
  mounted () {
    this.tempMenu = this.menuList[0]
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
        .menu
            position fixed
            top $headerHeight
            left 0
            width rem(1.5)
            height 100%
            border-right 1px solid #f5f5f5
            .menu-item
                height $headerHeight
                line-height $headerHeight
                text-align center
                textStyle(#333, .32)
                border-bottom 1px solid #f5f5f5
                .menu-active-style
                    color #64BBAE
        .content-list
            flex 3
            margin-left rem(1.5)
            overflow-y scroll
            box-sizing border-box
            .list-title
                textStyle(#333, .32)
                line-height $headerHeight
                padding 0 rem(.2)
                border-bottom 1px solid #f5f5f5
            .content-item
                padding rem(.2)
                .content-item-info-wrapper
                    display flex
                    .item-image-wrapper
                        width rem(2)
                        height rem(1.8)
                        overflow hidden
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
