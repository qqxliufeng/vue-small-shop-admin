// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'
import './assets/style/iconfont.css'
import ElementUI from 'element-ui'
import '../theme/index.css'
import MyNavigation from 'common/components/MyNavigation'
import Loading from 'common/components/Loading'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueLazyLoad from 'vue-lazyload'

import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'
import utils from 'common/utils/utils'
import SlideVerify from 'common/components/slideverify/index'
import axios from 'common/http/http.js'
import * as urlPath from 'common/http/urlConfig'

import userInfo from 'common/data/user-info'
import state from 'common/data/state'

import loadingImage from 'images/img_loading_list.png'
import loadFailedImage from 'images/img_loading_failed_list.png'
import WebpPlugun from 'vue-webp-plugin'
import 'common/utils/weixin.js'

Vue.use(WebpPlugun)

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(MyNavigation)
Vue.use(Loading)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: loadFailedImage,
  loading: loadingImage,
  attempt: 1
})
Vue.use(SlideVerify)
Vue.use(Toast)
Vue.prototype.$utils = utils
Vue.prototype.$urlPath = urlPath
Vue.prototype.NODE_DEVELOPMENT = process.env.NODE_ENV === 'development'
Vue.prototype.$isWeiXin = navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
Vue.prototype.$isAliPay = navigator.userAgent.toLowerCase().indexOf('alipay') !== -1
Vue.prototype.$isMobile = function () {
  return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
}
Vue.prototype.$http = function (url, params = {}, loadingTip, onRequestSuccess, onRequestFail) {
  try {
    if (!url) {
      this.$toast('url 参数不正确')
      return
    }
    if (loadingTip !== null) {
      this.$loading(loadingTip || '正在加载…')
    }
    if (userInfo.isLogin()) {
      params.token = userInfo.state.token
    }
    if (params.isNoToken) {
      delete params.token
      delete params.isNoToken
    }
    return axios.post(url, params)
      .then(response => {
        // 判断是否是正常的http请求状态
        if (response.status === 200) {
          if (response.data) {
            if (response.data.code === 1) {
              if (this.NODE_DEVELOPMENT) {
                console.log(response.data)
              }
              onRequestSuccess(response.data)
            } else {
              onRequestFail(200, response.data.msg)
            }
          } else {
            onRequestFail(-1, '请求失败，请重试…')
          }
        } else {
          if (onRequestFail) {
            onRequestFail(-1, '请求失败，请重试…')
          }
        }
      })
      .catch((error) => {
        if (this.NODE_DEVELOPMENT) {
          console.log(error)
        }
        if (onRequestFail) {
          onRequestFail(-1, '请求失败，请重试…')
        }
      })
      .then(() => {
        this.$loading.close()
      })
  } catch (error) {
    if (this.NODE_DEVELOPMENT) {
      console.log(error)
    }
    this.$loading.close()
  }
}

let noLoginContainer = [
  'registerDefault',
  'stepone',
  'stepTwo',
  'stepThree',
  'city',
  'forgetPassword',
  'fastLogin',
  'rechargePayResult',
  'orderPayResult'
]

router.beforeEach((to, from, next) => {
  if (noLoginContainer.includes(to.name)) {
    next()
    return
  }
  if (!userInfo.isLogin()) {
    if (to.name !== 'login') {
      next({name: 'login'})
    } else {
      next()
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data () {
    return {
      state,
      userInfo
    }
  }
})
