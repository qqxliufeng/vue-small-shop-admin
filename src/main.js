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
import logo from 'images/logo.png'

import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'
import validator from 'common/utils/validator'
import utils from 'common/utils/utils'
import SlideVerify from 'vue-monoplasty-slide-verify'

Vue.config.productionTip = false

Vue.use(Toast)
Vue.use(ElementUI)
Vue.use(MyNavigation)
Vue.use(Loading)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: logo,
  loading: logo,
  attempt: 1
})
Vue.use(SlideVerify)
Vue.prototype.$validator = validator
Vue.prototype.$utils = utils
Vue.prototype.$isWeiXin = navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(m => m.meta.auth)) {
//     next({name: 'login', params: { backName: to.name }})
//   } else {
//     next()
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
