<template>
<div class='p-list-container'>
  <my-navi title="合作伙伴列表（111）" :isFixed="true"></my-navi>
  <div class="content">
    <el-collapse accordion value="0">
      <el-collapse-item :name="index" v-for="(item, index) of partners" :key="index">
        <template slot="title">
          <div class="item-title-wrapper">
            {{item.title}}
          </div>
        </template>
        <ul class="list-wrapper">
          <li v-for="(item, index) of item.partnerList" :key="index" class="item-wrapper">
            <img src="http://img.pconline.com.cn/images/upload/upc/tx/ladyproduct/1501/08/c0/1616021_1420691838105_100x100.jpg" class="item-face-icon">
            <div>
              <p class="item-name">王大宝</p>
              <p class="item-phone">13512352432434</p>
            </div>
          </li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</div>
</template>

<script>

export default {
  name: 'partnerList',
  components: {},
  data () {
    return {
      partners: [
        {
          title: '这是标题',
          partnerList: [
            {
              name: '王大宝'
            },
            {
              name: '王大宝'
            },
            {
              name: '王大宝'
            },
            {
              name: '王大宝'
            },
            {
              name: '王大宝'
            }
          ]
        },
        {
          title: '这是标题',
          partnerList: [
            {
              name: '王大宝'
            },
            {
              name: '王大宝'
            },
            {
              name: '王大宝'
            },
            {
              name: '王大宝'
            },
            {
              name: '王大宝'
            }
          ]
        },
        {
          title: '这是标题',
          partnerList: [
            {
              name: '王大宝'
            },
            {
              name: '王大宝'
            },
            {
              name: '王大宝'
            },
            {
              name: '王大宝'
            },
            {
              name: '王大宝'
            }
          ]
        },
        {
          title: '这是标题',
          partnerList: [
            {
              name: '王大宝'
            },
            {
              name: '王大宝'
            },
            {
              name: '王大宝'
            },
            {
              name: '王大宝'
            },
            {
              name: '王大宝'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.p-list-container
    .content
        contentFixed()
        .item-title-wrapper
            padding-left rem(.2)
        .list-wrapper
            padding 0 rem(.2)
            .item-wrapper
                display flex
                padding rem(.2) 0
                border-bottom 1px solid #f5f5f5
                .item-face-icon
                    border-radius 50%
                    width rem(1)
                    height rem(1)
                    object-fit cover
                    margin-right rem(.2)
                .item-name
                    textStyle(#333, .3)
                .item-phone
                    textStyle(#888, .28)
</style>
