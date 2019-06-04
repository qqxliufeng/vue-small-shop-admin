<template>
  <div class='a-i-container'>
    <my-navi title="认证信息" :isFixed="false"></my-navi>
    <ul class="p-i-ul">
          <li>
              <div class="p-i-item">
                  <span class="p-i-left">联系人姓名</span>
                  <span class="p-i-right p-i-text">{{info.linkname}}</span>
              </div>
          </li>
          <li>
              <div class="p-i-item">
                  <span class="p-i-left">所在城市</span>
                  <span class="p-i-right p-i-text">{{info.city}}</span>
              </div>
          </li>
          <li>
              <div class="p-i-item">
                  <span class="p-i-left">身份类别</span>
                  <span class="p-i-right p-i-text">{{info.distributor_type === 1 ? '社会' : '学生'}}</span>
              </div>
          </li>
          <li>
              <div class="p-i-item">
                  <span class="p-i-left">学校/单位名称</span>
                  <span class="p-i-right p-i-text">{{info.schoolName_companyName}}</span>
              </div>
          </li>
          <li>
              <div>
                  <span class="p-i-left" style="display: block;padding: 0 .2rem; line-height: 1rem; color: #333333; font-size: .32rem">证件信息</span>
                  <div v-if="info.distributor_type === 1" class="image-wrapper">
                      <img :src="$utils.image.getImagePath(info.ID_card_Front)" alt="" v-if="info.ID_card_Front">
                      <img :src="$utils.image.getImagePath(info.ID_card_Reverse)" alt="" v-if="info.ID_card_Reverse">
                   </div>
                   <div v-else  class="image-wrapper">
                      <img :src="$utils.image.getImagePath(info.student_identity_card)" alt="" v-if="info.student_identity_card">
                   </div>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>

export default {
  name: '',
  components: {},
  data () {
    return {
      info: {}
    }
  },
  mounted () {
    this.$http(this.$urlPath.getInformation, {}, '', (data) => {
      this.info = data.data
    }, (errorCode, error) => {
      this.$toast(error)
    })
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
    .image-wrapper
        padding 0 rem(.2)
        & img
            width 100%
            object-fit cover
            background-color red
            margin-bottom rem(.2)
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
