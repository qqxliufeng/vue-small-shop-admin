<template>
<div class='s-p-list-container'>
  <my-navi title="景区海报" :isFixed="true"></my-navi>
  <div class="content">
      <div class="search-wrapper" v-if="showSearch">
        <input type="text" placeholder="请输入要搜索的内容" class="input-content">
        <button class="button-search">搜索</button>
      </div>
      <ul>
        <li v-for="(item, index) of scenicPostList" :key="index" class="scenic-post-item-wrapper" @click="startScenicPost(item)">
          <el-card shadow="always" :bodyStyle="{padding: '0'}">
            <img class="item-image" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551767583542&di=c71abe346d8549974662ee3129a1a25f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1c527b891defb0ddfe86302ba7f644b63c53d193e801-yE5WDO_fw658" alt="">
            <div class="item-info-wrapper">
              <p class="item-title">卧虎山滑雪场卧虎山滑雪场卧虎山滑雪场</p>
              <p class="item-lvxingshe">旅行社好</p>
              <p class="item-info">
                <span>4.9分</span>
                <span>1200人次</span>
              </p>
            </div>
          </el-card>
        </li>
      </ul>
  </div>
</div>
</template>

<script>

export default {
  name: 'scenicPostList',
  components: {},
  data () {
    return {
      scenicPostList: [
        {
          name: '1'
        },
        {
          name: '1'
        },
        {
          name: '1'
        },
        {
          name: '1'
        },
        {
          name: '1'
        },
        {
          name: '1'
        },
        {
          name: '1'
        },
        {
          name: '1'
        },
        {
          name: '1'
        },
        {
          name: '1'
        },
        {
          name: '1'
        }
      ]
    }
  },
  computed: {
    showSearch () {
      return this.$route.params.type !== '1'
    }
  },
  methods: {
    startScenicPost (item) {
      this.$router.push({name: 'shareScenic'})
    }
  },
  mounted () {
    console.log('mounted')
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.s-p-list-container
    .content
        // contentFixed()
        padding-top $headerHeight
        .search-wrapper
            background #ffffff
            height $headerHeight
            line-height $headerHeight
            padding 0 rem(.2)
            border-bottom 1px solid #f5f5f5
            .input-content
                background #f5f5f5
                border-radius rem(.05)
                padding rem(.08)
                width 80%
            .button-search
                background $primary
                padding rem(.05) rem(.2)
                color #fff
                border-radius rem(.1)
                margin-left rem(.1)
                width 15%
        .scenic-post-item-wrapper
            width 50%
            float left
            padding rem(.2)
            box-sizing border-box
            .item-image
                width 100%
                height rem(4)
                object-fit cover
            .item-info-wrapper
                padding 0 rem(.2)
                .item-title
                    ellipsis()
                    normalTextStyle(#333, .3)
                .item-lvxingshe
                    normalTextStyle(#888, .28)
                    ellipsis()
                .item-info
                    line-height rem(.5)
                    overflow hidden
                    & span:nth-child(1)
                        float left
                        textStyle($orangeColor, .25)
                    & span:nth-child(2)
                        float right
                        textStyle(#888, .25)
</style>
