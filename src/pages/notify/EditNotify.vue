<template>
<div class='n-edit-container'>
  <my-navi title="发布公告">
    <template slot="rightAction">
      <p @click="notifyList">
        <span class="el-icon-tickets record">  记录</span>
      </p>
    </template>
  </my-navi>
  <div class="content">
    <el-input type="textarea" placeholder="请输入您要发布的店铺公告内容……" :rows="10"></el-input>
  </div>
  <div class="submit">
    发布公告
  </div>
</div>
</template>

<script>

export default {
  name: 'editNotify',
  components: {},
  data () {
    return {
    }
  },
  methods: {
    notifyList () {
      this.$router.push({name: 'notifyList'})
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.n-edit-container
    .record
        color $primary
    .content
        padding rem(.2)
        & input
            background #E8EDED
            border 1px solid #DCE0E2
            width 100%
            height rem(3)
            padding rem(.2)
            box-sizing border-box
    .submit
        position fixed
        bottom 0
        right 0
        left 0
        height $headerHeight
        line-height $headerHeight
        background $primary
        text-align center
        color #ffffff
        font-size rem(.32)
</style>
