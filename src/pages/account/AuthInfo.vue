<template>
  <div class='a-i-container'>
    <my-navi title="认证信息" :isFixed="false"></my-navi>
    <ul class="p-i-ul">
          <li>
              <div class="p-i-item">
                  <span class="p-i-left">联系人姓名</span>
                  <input class="p-i-right p-i-text" placeholder="请输入用户名" maxlength="10"/>
              </div>
          </li>
          <li>
              <div class="p-i-item">
                  <span class="p-i-left">所在城市</span>
                  <input class="p-i-right p-i-text" placeholder="请输入邮箱" maxlength="20"/>
              </div>
          </li>
          <li>
              <div class="p-i-item">
                  <span class="p-i-left">身份类别</span>
                  <input class="p-i-right p-i-text" placeholder="请输入QQ号" maxlength="12"/>
              </div>
          </li>
          <li>
              <div class="p-i-item">
                  <span class="p-i-left">学校/单位名称</span>
                  <input class="p-i-right p-i-text" placeholder="请输入QQ号" maxlength="12"/>
              </div>
          </li>
          <li>
              <div class="p-i-item">
                  <span class="p-i-left">证件信息</span>
                  <input class="p-i-right p-i-text" placeholder="请输入QQ号" maxlength="12"/>
              </div>
          </li>
      </ul>
      <button class="p-i-submit" @click="submit">确定</button>
  </div>
</template>

<script>

export default {
  name: '',
  components: {},
  data () {
    return {
    }
  },
  methods: {
    submit () {
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.p-i-ul
    margin-top rem(.5)
    .p-i-item
        borderBottom()
        padding 0 rem(.2)
        overflow hidden
        display flex
        flex-direction row
        align-items center
        justify-content space-between
        height rem(1.2)
        .avatar
            width rem(.8)
            height rem(.8)
            object-fit cover
            border-radius 50%
        .p-i-left
            color #333333
            font-size .32rem
        .p-i-right
            font-size 1rem
            text-align right
        .p-i-text
            color #888888
            font-size .3rem
            padding rem(.2) 0
            box-sizing border-box
        .p-i-sex
            float right
            margin-right .2rem
.p-i-submit
    display block
    width 80%
    border-radius 2rem
    background-color $primary
    height .8rem
    margin 0 auto
    margin-top 1rem
    color #ffffff
    font-size .32rem
</style>
