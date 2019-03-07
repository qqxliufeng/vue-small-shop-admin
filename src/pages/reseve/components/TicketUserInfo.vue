<template>
    <div class="r-d-user-info-container">
        <p class="r-d-user-info-title">
            联系人信息
        </p>
        <div class="r-d-user-info-content-wrapper">
          <div class="info-item-wrapper">
            <span class="item-title">姓名：</span>
            <input type="text" placeholder="请输入联系人姓名">
          </div>
          <div class="info-item-wrapper">
            <span class="item-title">手机号：</span>
            <input type="text" placeholder="请输入联系人手机号">
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TicketUserInfo',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.r-d-user-info-container
    border-top rem(.2) solid #f5f5f5
    .r-d-user-info-title
        textStyle(#333, .3)
        padding rem(.3)
        borderBottom()
    .r-d-user-info-content-wrapper
        padding rem(.3)
        .info-item-wrapper
            display flex
            height $headerHeight
            justify-content center
            align-items center
            borderBottom()
            .item-title
                width 18%
                textStyle(#888, .28)
            & input
                flex 1
</style>
