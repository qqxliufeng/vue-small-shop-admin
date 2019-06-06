<template>
<div class='home-container'>
  <home-navigation></home-navigation>
  <div class="tip-wrapper">
      <p class="tip-content" v-if="showTip" @click="tipClick">
        温馨提示：更多功能敬请登录电脑端进行查看。
        <span class="el-icon-error close-tip"></span>
      </p>
      <home-header :amount="amount"></home-header>
  </div>
  <home-order-info @orderClick="orderClick" :orderInfo="amount.my_order" v-if="amount"></home-order-info>
  <home-menu :menu="menus.myTeam" v-if="Number(this.$root.userInfo.state.rank) < 3"></home-menu>
  <home-menu :menu="menus.makeMoney"></home-menu>
  <home-menu :menu="menus.mySetting"></home-menu>
  <p class="pc">更多功能请登录电脑端：http://www.test.youdaike.com/distributor/dashboard?ref=addtabs</p>
</div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeNavigation from './components/HomeNavigation'
import HomeTools from './components/HomeTool'
import HomeOrderInfo from './components/HomeOrderInfo'
import HomeMenu from './components/HomeMenu'
import HomeBottomNavigation from './components/HomeBottomNavigation'
export default {
  name: 'home',
  components: {
    HomeNavigation,
    HomeHeader,
    HomeTools,
    HomeOrderInfo,
    HomeBottomNavigation,
    HomeMenu
  },
  data () {
    return {
      msg: '',
      showTip: true,
      amount: null,
      authInfo: null,
      menus: {
        makeMoney: {
          title: '我要赚钱',
          menus: [
            {
              icon: '&#xe7d6;',
              iconColor: '#EC8E8B',
              title: '分享小店',
              callBack: () => {
                this.$router.push({name: 'shareShop'})
              }
            },
            {
              icon: '&#xe652;',
              iconColor: '#EC8E8B',
              title: '分享海报',
              callBack: () => {
                this.$router.push({name: 'scenicPostList'})
              }
            },
            {
              icon: '&#xe670;',
              iconColor: '#EC8E8B',
              title: '商品列表',
              callBack: () => {
                this.$router.push({name: 'goodsList'})
              }
            }
          ]
        },
        myTeam: {
          title: '我的团队',
          menus: [
            {
              icon: '&#xe654;',
              iconColor: '#99DCFB',
              title: '如何发展团队',
              callBack: () => {
                this.$router.push('teamFlow')
              }
            },
            {
              icon: '&#xe63f;',
              iconColor: '#99DCFB',
              title: '发展团队',
              callBack: () => {
                if (this.authInfo && this.authInfo.auth_set && this.authInfo.auth_set.indexOf('3') !== -1) {
                  this.$router.push({name: 'sharePartner'})
                } else {
                  this.$toast('当前帐号暂无此权限')
                }
              }
            },
            {
              icon: '&#xe655;',
              iconColor: '#99DCFB',
              title: '团队列表',
              callBack: () => {
                this.$router.push({name: 'partnerList'})
              }
            },
            {
              icon: '&#xe619;',
              iconColor: '#99DCFB',
              title: '返利订单',
              callBack: () => {
                this.$router.push({name: 'rebateList'})
              }
            }
          ]
        },
        mySetting: {
          title: '我的设置',
          menus: [
            {
              icon: '&#xe63e;',
              iconColor: '#6CCABC',
              title: '发布公告',
              callBack: () => {
                this.$router.push({name: 'editNotify'})
              }
            },
            {
              icon: '&#xe603;',
              iconColor: '#6CCABC',
              title: '个人信息',
              callBack: () => {
                this.$router.push({name: 'accountSet'})
              }
            },
            {
              icon: '&#xe614;',
              iconColor: '#6CCABC',
              title: '联系客服',
              callBack: () => {
                this.$router.push({name: 'customService'})
              }
            }
          ]
        }
      }
    }
  },
  methods: {
    tipClick () {
      this.showTip = false
    },
    getData () {
      this.$http(this.$urlPath.getAmount, {
      }, null, (data) => {
        this.amount = data.data
        this.authInfo = this.amount
        this.$root.userInfo.setUserInfoBalance(this.amount.balance)
        this.$root.userInfo.setUserInfoRebate(this.amount.rebate)
        let canShareTicket = false
        let canFloorBuyTicket = false
        if (this.authInfo) { // 是否获取到数据了
          let authSet = this.authInfo.auth_set
          canShareTicket = authSet && authSet.indexOf('1') !== -1 // 是不是能分享图片
          canFloorBuyTicket = authSet && authSet.indexOf('2') !== -1 // 是不是能低价购买
        }
        this.$root.state.saveCanShareTicket(canShareTicket)
        this.$root.state.saveCanFloorBuyTicket(canFloorBuyTicket)
        // end************根据接口返回来的数据判断是不是有对应的权限************
      }, (errorCode, error) => {
        this.$toast(error)
      })
    },
    orderClick (type) {
      this.$router.push({name: 'orderList', query: { type: type.type }})
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.tip-wrapper
    margin-top $headerHeight
    .tip-content
        background #F9EFC4
        padding rem(.1)
        textStyle($orangeColor, .25)
    .close-tip
        float right
        font-size rem(.28)
.logout
    width 70%
    background $primary
    border-radius rem(.5)
    margin rem(1.2) auto rem(.3) auto
    text-align center
    line-height rem(.8)
    color #fff
.pc
    text-align center
    textStyle(#aaa, .25)
    margin rem(.8) 0 rem(.3) 0
    line-height rem(.5)
</style>
