<template>
    <div class='activity-info-title-container'>
      <div class="img-wrapper">
        <img src="../../../assets/images/activity/img_info_title_bg.png">
      </div>
      <div class="title-wrapper">
        <span class="circle"></span>
        <span class="title">{{title}}</span>
        <span class="circle"></span>
      </div>
    </div>
</template>

<script>

export default {
  name: 'activityInfoTitle',
  props: {
    title: String
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.activity-info-title-container
    text-align center
    margin-top 5%
    position relative
    .img-wrapper
        width 50%
        margin 0 auto
        & > img
            width 100%
    .title-wrapper
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        display flex
        align-items center
        justify-content center
        .circle
            background-color #ffd681
            border-radius 50%
            display inline-block
            width rem(.15)
            height rem(.15)
            border 2px solid #ff6151
        .title
            font-size rem(.3)
            font-weight bold
            color #fff
            margin 0 rem(.3)
</style>
