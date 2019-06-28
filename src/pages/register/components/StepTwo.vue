<template>
  <!-- <div class='r-s-two-container'>
    <p class="title">请填写您的身份信息</p>
    <div class="info-wrapper">
      <div class="info-item-wrapper">
        <p class="info-title">真实姓名：</p>
      </div>
      <div class="info-content-wrapper">
        <input type="text" class="input" placeholder="请输入真实姓名" maxlength="6" v-model="registerInfo.realName">
      </div>
    </div>
    <div class="info-wrapper">
      <div class="info-item-wrapper">
        <span class="info-title">您的身份:</span>
      </div>
      <div class="info-code-wrapper">
        <el-radio-group v-model="registerInfo.idCard" @change='onChange'>
          <el-radio :label="1">社会</el-radio>
          <el-radio :label="2">学生</el-radio>
        </el-radio-group>
      </div>
    </div>
    <div class="info-wrapper">
      <div class="info-item-wrapper">
        <p class="info-title">单位/学校名称：</p>
      </div>
      <div class="info-content-wrapper">
        <input type="text" class="input" placeholder="请输入单位/学校名称" v-model="registerInfo.workName">
      </div>
    </div>
    <p class="image-title-wrapper" v-show="showIdCard">身份证上传（可选）：<span>（正反照各一张）</span></p>
    <div class="upload-wrapper" v-show="showIdCard">
      <el-upload
        :action="$urlPath.registerImageActionUrl"
        list-type="picture-card"
        :before-upload="beforeUpload"
        :on-success="uploadSuccess"
        :on-error="uploadError"
        :on-exceed="onExceed"
        :limit="2">
        <i class="el-icon-plus"></i>
      </el-upload>
    </div>
    <p class="image-title-wrapper" v-show="!showIdCard">学生证上传（可选）：</p>
    <div class="upload-wrapper" v-show="!showIdCard">
      <el-upload
        :action="$urlPath.registerImageActionUrl"
        list-type="picture-card"
        :before-upload="beforeUpload"
        :on-success="uploadSuccess"
        :on-error="uploadError"
        :on-exceed="onExceed"
        :limit="1">
        <i class="el-icon-plus"></i>
      </el-upload>
    </div>
    <el-button class="next-step" @click="nextStep">下一步</el-button>
  </div> -->
  <div class="r-s-two-container">
    <div class="info-wrapper">
      <span class="info-title">密码：</span>
      <div class="info-content-wrapper">
        <input type="password" class="input" placeholder="请输入密码" v-model="registerInfo.password" maxlength="16">
      </div>
    </div>
    <div class="info-wrapper">
      <span class="info-title">确认密码：</span>
      <div class="info-content-wrapper">
        <input type="password" class="input" placeholder="请再次输入密码" v-model="registerInfo.confirmPassword">
      </div>
    </div>
    <el-button class="next-step" @click="nextStep">下一步</el-button>
  </div>
</template>

<script>
export default {
  name: 'stepTwo',
  components: {},
  data () {
    return {
      registerInfo: this.$root.state.registerInfo,
      showIdCard: true,
      selected: 1
    }
  },
  methods: {
    nextStep () {
      // if (!this.registerInfo.realName) {
      //   this.$toast('请输入真实姓名')
      //   return
      // }
      // if (!this.registerInfo.workName) {
      //   this.$toast('请输入单位/学校名称')
      //   return
      // }
      if (!this.registerInfo.password) {
        this.$toast('请输入密码')
        return
      }
      if (this.registerInfo.password.length < 6) {
        this.$toast('请输入至少6位数密码')
        return
      }
      if (this.registerInfo.password !== this.registerInfo.confirmPassword) {
        this.$toast('两次密码不一致')
        return
      }
      this.$router.replace({name: 'stepThree'})
    },
    onChange (index) {
      this.selected = index
      this.showIdCard = index === 1
    },
    beforeUpload (file) {
      let checkResult = this.$utils.image.beforeUploadImageCheck(this.$root, file, 2)
      if (checkResult) {
        this.$loading('正在上传…')
      }
      return checkResult
    },
    uploadSuccess (response, file, fileList) {
      if (response.data) {
        if (this.registerInfo.idCard === 1) {
          if (this.registerInfo.idFront) {
            this.registerInfo.idBack = response.data.url
          } else {
            this.registerInfo.idFront = response.data.url
          }
        } else {
          this.registerInfo.studentCard = response.data.url
        }
        this.$toast('上传成功')
        this.$loading.close()
      } else {
        this.$toast(response.msg)
      }
    },
    uploadError (err, file, fileList) {
      this.$toast('上传失败' + err)
      this.$loading.close()
    },
    onExceed (files, fileList) {
      this.$toast('最多上传' + fileList.length + '张图片')
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.r-s-two-container
    background #ffffff
    padding rem(.4)
    padding-bottom 0
    height auto
    min-height 90%
    overflow hidden
    position relative
    .info-wrapper
        display flex
        align-items center
        padding rem(.4) 0
        .info-title
            width 25%
            textStyle(#333, .3)
            & i
                textStyle(#888, .25)
        .info-content-wrapper
            width 75%
            display flex
            justify-content space-between
            .input
                border-radius rem(.02)
                background #fff
                border 1px solid #EDEEEE
                padding rem(.2)
                padding rem(.1)
                font-size 12px
                flex 1
          .info-code-wrapper
                width 75%
                display flex
                justify-content space-between
                .input
                    width 50%
                    border-radius rem(.02)
                    background #fff
                    border 1px solid #EDEEEE
                    padding rem(.1)
                    font-size 12px
                    flex 1
                .bt-code
                    font-size 12px
                    padding 0 rem(.1)
                    background $primary
                    border-radius rem(.1)
                    color #fff
                    margin-left rem(.2)
                    white-space nowrap
                    min-width rem(1.5)
    .next-step
        background $primary
        color #fff
        width 90%
        display block
        margin 0 auto
        position absolute
        bottom rem(.5)
// .r-s-two-container
//     background #ffffff
//     padding rem(.4) rem(.4) $headerHeight rem(.4)
//     box-sizing border-box
//     height auto
//     min-height 100%
//     .title
//         textStyle(#888, .3)
//     .info-wrapper
//         display flex
//         align-items center
//         padding rem(.4) 0
//         .info-item-wrapper
//             width 35%
//             .info-title
//                 textStyle(#333, .28)
//             .info-tag
//                 textStyle(#888, .25)
//         .info-content-wrapper
//             width 65%
//             .input
//                 display inline-block
//                 width 100%
//                 border-radius rem(.02)
//                 background #fff
//                 border 1px solid #EDEEEE
//                 padding rem(.1)
//                 box-sizing border-box
//                 font-size 12px
//     .image-title-wrapper
//         textStyle(#333, .28)
//         margin-top rem(.2)
//         & span
//             textStyle(#888, .25)
//     .next-step
//         background $primary
//         color #fff
//         width 80%
//         display block
//         margin rem(1) auto
//     .upload-wrapper
//         margin rem(.5) 0
//         & >>> .el-upload--picture-card
//         & >>> .el-upload-list__item
//             width 30%
//             height 27vw
//             line-height 27vw
//         & >>> .el-upload-list__item-status-label
//             height 0
//             & i
//                 font-size 0
</style>
