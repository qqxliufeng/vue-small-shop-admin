<template>
<div class='h-tool-container'>
  <p class="title">快捷工具</p>
  <div class="tools-wrapper">
    <div v-for="(item, index) of toolsList" :key="index" class="tools-item-wrapper" @click="itemClick(item)">
      <img :src="item.icon" :alt="item.name">
      <p>{{item.name}}</p>
    </div>
  </div>
</div>
</template>

<script>
import imgShareShopIcon from 'images/img_share_shop_icon.png'
import imgScenicPostIcon from 'images/img_scenic_info_icon.png'
import imgShopListIcon from 'images/img_shop_list_icon.png'
import imgNotifyIcon from 'images/img_notify_icon.png'
import imgAddPartnerIcon from 'images/img_add_partner_icon.png'
import imgPartnerListIcon from 'images/img_partner_icon.png'
export default {
  name: 'homeTool',
  components: {},
  data () {
    return {
      toolsList: [
        {
          name: '分享小店',
          icon: imgShareShopIcon,
          actionUrl: 'shareShop'
        },
        {
          name: '景区海报',
          icon: imgScenicPostIcon,
          actionUrl: 'scenicPostList'
        },
        {
          name: '商品列表',
          icon: imgShopListIcon,
          actionUrl: 'goodsList'
        },
        {
          name: '编辑公告',
          icon: imgNotifyIcon,
          actionUrl: 'editNotify'
        },
        {
          name: '发展伙伴',
          icon: imgAddPartnerIcon,
          // actionUrl: 'registerDefault'
          actionUrl: 'sharePartner'
        },
        {
          name: '伙伴列表',
          icon: imgPartnerListIcon,
          actionUrl: 'partnerList'
        }
      ]
    }
  },
  methods: {
    itemClick (item) {
      this.$router.push({name: item.actionUrl})
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.h-tool-container
    .title
        normalTextStyle(#333, .3)
        padding rem(.2)
    .tools-wrapper
        border-bottom rem(.1) solid #f5f5f5
        overflow hidden
        .tools-item-wrapper
            float left
            width 25%
            text-align center
            padding rem(.25) 0
            & img
                width rem(.8)
            & p
                textStyle(#333, .28)
                margin-top rem(.2)
</style>
