<template>
  <div class='a-i-container' style="height:100%; position:relative">
    <my-navi title="认证信息" :isFixed="true">
        <slot slot="rightAction" v-if="canModify"><span class="p-i-submit" @click="submit">提交</span></slot>
    </my-navi>
    <ul class="p-i-ul">
        <p class="important-info" v-if="canModify"><span class="el-icon-warning-outline"></span>请认真仔细填写认证信息，此信息设置后不可更改</p>
          <li>
              <div class="p-i-item">
                  <span class="p-i-left">联系人姓名</span>
                  <span class="p-i-right p-i-text" v-if="info.linkname">{{info.linkname}}</span>
                  <input type="text" v-else class="p-i-input" placeholder="请输入联系人姓名" maxlength="6" v-model="name">
              </div>
          </li>
          <li>
              <div class="p-i-item">
                  <span class="p-i-left">所在城市</span>
                  <span class="p-i-right p-i-text" v-if="info.city">{{info.city}}</span>
                  <span class="p-i-right p-i-text" v-else @click="selectArea">{{selectedCity || '请选择城市'}}</span>
              </div>
          </li>
          <li>
              <div class="p-i-item">
                  <span class="p-i-left">身份类别</span>
                  <span class="p-i-right p-i-text" v-if="info.distributor_type !== 0">{{info.distributor_type === 1 ? '社会' : '学生'}}</span>
                  <div v-else>
                    <el-radio v-model="distributorType" label="1" @change="change">社会</el-radio>
                    <el-radio v-model="distributorType" label="2" @change="change">学生</el-radio>
                  </div>
              </div>
          </li>
          <li>
              <div class="p-i-item">
                  <span class="p-i-left">学校/单位名称</span>
                  <span class="p-i-right p-i-text" v-if="info.schoolName_companyName">{{info.schoolName_companyName}}</span>
                  <input type="text" v-else class="p-i-input" placeholder="请输入学校/单位名称" maxlength="20" v-model="workName">
              </div>
          </li>
          <li>
              <div v-if="distributorType !== 0">
                  <span class="p-i-left" style="display: block;padding: 0 .2rem; line-height: 1rem; color: #333333; font-size: .32rem">证件信息</span>
                  <div v-if="distributorType == 1" class="image-wrapper">
                      <img :src="$utils.image.getImagePath(info.ID_card_Front)" alt="" v-if="info.ID_card_Front">
                      <el-upload
                        v-else
                        class="avatar-uploader"
                        :action="$urlPath.registerImageActionUrl"
                        :show-file-list="false"
                        :before-upload="beforeUpload"
                        :on-success="uploadSuccess"
                        @click.native="uploadIndex(0)"
                        :on-error="uploadError">
                        <img :src="$utils.image.getImagePath(selectIdFront)" alt="" v-if="selectIdFront" class="uploader-img">
                        <i class="el-icon-plus avatar-uploader-icon" v-else></i>
                      </el-upload>
                      <img :src="$utils.image.getImagePath(info.ID_card_Reverse)" alt="" v-if="info.ID_card_Reverse">
                      <el-upload
                        v-else
                        class="avatar-uploader"
                        :action="$urlPath.registerImageActionUrl"
                        :show-file-list="false"
                        :before-upload="beforeUpload"
                        :on-success="uploadSuccess"
                        @click.native="uploadIndex(1)"
                        :on-error="uploadError">
                        <img :src="$utils.image.getImagePath(selectIdBack)" alt="" v-if="selectIdBack" class="uploader-img">
                        <i class="el-icon-plus avatar-uploader-icon" v-else></i>
                      </el-upload>
                   </div>
                   <div v-else  class="image-wrapper">
                       <img :src="$utils.image.getImagePath(info.student_identity_card)" alt="" v-if="info.student_identity_card">
                       <el-upload
                            v-else
                            class="avatar-uploader"
                            :action="$urlPath.registerImageActionUrl"
                            :show-file-list="false"
                            :before-upload="beforeUpload"
                            :on-success="uploadSuccess"
                            @click.native="uploadIndex(2)"
                            :on-error="uploadError">
                            <img :src="$utils.image.getImagePath(selectIdStudent)" alt="" v-if="selectIdStudent" class="uploader-img">
                            <i class="el-icon-plus avatar-uploader-icon" v-else></i>
                        </el-upload>
                   </div>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'authInfo',
  data () {
    return {
      info: {},
      name: '',
      workName: '',
      city: null,
      selectedCity: null,
      selectIdFront: null,
      selectIdBack: null,
      selectIdStudent: null,
      selectIndex: 0,
      distributorType: 0
    }
  },
  computed: {
    canModify () {
      return !this.info.linkname || Number(this.info.distributor_type) === 0 || !this.info.schoolName_companyName || !this.info.city
    }
  },
  methods: {
    change (value) {
      this.selectIdFront = null
      this.selectIdBack = null
      this.selectIdStudent = null
    },
    uploadIndex (index) {
      this.selectIndex = index
    },
    selectArea () {
      this.$router.push({name: 'city', params: {backName: 'authInfo'}})
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
        if (this.selectIndex === 0) {
          this.selectIdFront = response.data.url
        } else if (this.selectIndex === 1) {
          this.selectIdBack = response.data.url
        } else {
          this.selectIdStudent = response.data.url
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
    },
    submit () {
      if (!this.name) {
        this.$toast('请输入联系人姓名')
        return
      }
      if (!this.selectedCity) {
        this.$toast('请选择所在城市')
        return
      }
      if (this.distributorType === 0) {
        this.$toast('请选择身份类别')
        return
      }
      if (!this.workName) {
        this.$toast('请输入学校/单位名称')
        return
      }
      if (Number(this.distributorType) === 1) {
        if (!this.selectIdFront) {
          this.$toast('请上传身份证正面照片')
          return
        }
        if (!this.selectIdBack) {
          this.$toast('请上传身份证反面照片')
          return
        }
      } else if (Number(this.distributorType) === 2) {
        if (!this.selectIdStudent) {
          this.$toast('请上传学生证照片')
          return
        }
      }
      this.$http(this.$urlPath.identityAuthentication, {
        name: this.name,
        city: JSON.stringify(this.city),
        id_card_front: this.selectIdFront,
        id_card_back: this.selectIdBack,
        student_card: this.selectIdStudent,
        work_name: this.workName,
        distributor_type: this.distributorType
      }, '正在上传…', (data) => {
        this.$route.meta.keepAlive = false
        this.info.linkname = this.name
        this.info.city = this.selectedCity
        this.info.distributor_type = this.distributorType
        this.info.schoolName_companyName = this.workName
        this.$toast('提交成功')
      }, (errorCode, error) => {
        this.$toast(error)
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (from.name === 'city' && to.params.city) {
        vm.city = to.params.city
        vm.selectedCity = to.params.city.province.value + ' ' + to.params.city.city.value
      } else {
        vm.$http(vm.$urlPath.getInformation, {}, '', (data) => {
          vm.info = data.data
          vm.distributorType = vm.info.distributor_type
          vm.name = vm.info.linkname
          vm.selectedCity = vm.info.city
          vm.workName = vm.info.schoolName_companyName
        }, (errorCode, error) => {
          vm.$toast(error)
        })
      }
    })
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.p-i-ul
    margin-top rem(.3) + $headerHeight
    .important-info
        textStyle($orangeColor, .3)
        text-align center
        border-bottom 1px solid #f5f5f5
        padding-bottom rem(.2)
        & > span
            color red
            padding-right rem(.2)
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
        .p-i-input
            text-align right
    .image-wrapper
        padding 0 rem(.2)
        & > img
            width 100%
            height 178px
            object-fit cover
            margin-bottom rem(.2)
.p-i-submit
    height .8rem
    margin 0 auto
    margin-top 1rem
    color #333
    font-size .32rem
.avatar-uploader
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin rem(.2) 0
    text-align center
    .uploader-img
        height 100%
        width 100%
        height 178px
        object-fit cover
.avatar-uploader-icon
    font-size: rem(.8);
    color: #8c939d;
    width: 100%;
    height: 178px;
    text-align center
    line-height: 178px
</style>
