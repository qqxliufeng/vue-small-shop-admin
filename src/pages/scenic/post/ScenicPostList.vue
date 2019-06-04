<template>
<div class='s-p-list-container'>
  <my-navi title="分享海报" :isFixed="true"></my-navi>
  <div class="content">
      <!-- <div class="search-wrapper" v-if="showSearch">
        <input type="text" placeholder="请输入要搜索的内容" class="input-content" v-model="scenicName">
        <button class="button-search" @click="searchPost">搜索</button>
      </div> -->
      <div class="radio-container">
        <el-radio-group size="medium" v-model="selectType" @change="change">
          <el-radio-button label="1">景区海报</el-radio-button>
          <el-radio-button label="2">门票海报</el-radio-button>
        </el-radio-group>
      </div>
      <ul v-if="scenicPostList">
        <li v-for="item of scenicPostList" :key="item.id" class="scenic-post-item-wrapper" @click="startScenicPost(item)">
          <el-card shadow="always" :bodyStyle="{padding: '0'}">
            <img class="item-image" v-lazy="getScenicImage(item)" :key="getScenicImage(item)">
            <div class="item-info-wrapper">
              <p class="item-title">{{item.scenic_name}}</p>
              <p class="item-lvxingshe">{{selectType === '1' ? item.store_name : item.goods_name}}</p>
              <p class="item-info" v-show="selectType === '1'">
                <span>{{item.score}}分</span>
                <span>{{item.number_of_people}}人次</span>
              </p>
            </div>
          </el-card>
        </li>
      </ul>
      <div v-else class="empty-list">
        暂无景区海报
      </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'scenicPostList',
  components: {},
  data () {
    return {
      scenicPostList: null,
      scenicName: '',
      selectType: '1'
    }
  },
  computed: {
    showSearch () {
      return this.$route.params.type !== '1'
    }
  },
  methods: {
    change (item) {
      this.selectType = item
      this.getData()
    },
    startScenicPost (item) {
      if (this.selectType === '1') {
        this.$router.push({name: 'shareScenic', query: {scenic_id: item.scenic_id}})
      } else {
        this.$router.push({name: 'shareTicket', query: {s_id: this.$route.query.scenicId, goods_id: item.goods_id}})
      }
    },
    getData () {
      this.$http(this.$urlPath.scenicPosterList, {
        scenic_name: this.scenicName,
        type: this.selectType
      }, '正在加载…', (data) => {
        this.scenicPostList = data.data
        if (!this.scenicPostList || this.scenicPostList.length === 0) {
          this.$toast('暂无景区海报')
        }
        this.scenicName = ''
      }, (errorCode, error) => {
        this.$toast(error)
        this.scenicName = ''
      })
    },
    searchPost () {
      if (this.scenicPostList) {
        this.scenicPostList.length = 0
        this.scenicPostList = null
      }
      this.getData()
    },
    getScenicImage (item) {
      if (item.poster_image) {
        return this.$utils.image.getImagePath(item.poster_image)
      } else {
        return this.$utils.image.getImagePath(item.share_image)
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
.s-p-list-container
    .content
        // contentFixed()
        padding-top $headerHeight
        .radio-container
            text-align center
            margin rem(.2)
            & >>> .el-radio-button__inner
              padding rem(.2) rem(1)
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
        .empty-list
            height 80vh
            display flex
            align-items center
            justify-content center
            textStyle(#888, .32)
</style>
