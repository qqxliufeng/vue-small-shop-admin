import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import Home from '@/pages/home/Home'
import ScenicPostList from '@/pages/scenic/post/ScenicPostList'
import SelectScenicPostList from '@/pages/scenic/post/SelectScenicPostList'
import ShareShop from '@/pages/share/ShareShop'
import SharePartner from '@/pages/share/SharePartner'
import ShareScenic from '@/pages/share/ShareScenic'
import ShareTicket from '@/pages/share/ShareTicket'
import EditNotify from '@/pages/notify/EditNotify'
import NotifyList from '@/pages/notify/NotifyList'
import PartnerList from '@/pages/partner/PartnerList'
import AddPartner from '@/pages/partner/AddPartner'
import GoodsList from '@/pages/goods/GoodsList'
import ScenicDetail from '@/pages/scenic/detail/ScenicDetail'
import TicketDetail from '@/pages/scenic/detail/TicketDetail'
import ReseveDetail from '@/pages/reseve/ReseveDetail'
import ScenicInfo from '@/pages/scenic/detail/ScenicInfo'
import CommentList from '@/pages/scenic/detail/comment/CommentList'
import LeaveMessageList from '@/pages/scenic/detail/leavemessage/LeaveMessageList'
import RegisterSeller from '@/pages/register/RegisterSeller'

import OrderInfoPay from '@/pages/order/OrderInfoPay'

import CustomService from '@/pages/home/other/CustomService'
import Message from '@/pages/home/other/Message'

import OrderList from '@/pages/order/OrderList'
import OrderInfo from '@/pages/order/OrderInfo'
import OrderBackMoney from '@/pages/order/OrderInfoBackMoney'

import RebateList from '@/pages/rebate/RebateList'
import MyBalance from '@/pages/balance/MyBalance'
import RechargeBalance from '@/pages/balance/RechargeBalance'
import WithdrawBalance from '@/pages/balance/WithdrawBalance'
import BalanceDetails from '@/pages/balance/BalanceDetails'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        auth: true,
        keepAlive: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/forgetpassword',
      name: 'forgetPassword',
      component: () => import('@/pages/login/ForgetPassword')
    },
    {
      path: '/fastlogin',
      name: 'fastLogin',
      component: () => import('@/pages/login/FastLogin')
    },
    {
      path: '/scenicpostlist',
      name: 'scenicPostList',
      component: ScenicPostList
    },
    {
      path: '/selectscenicpostList',
      name: 'selectScenicPostList',
      component: SelectScenicPostList
    },
    {
      path: '/shareshop',
      name: 'shareShop',
      component: ShareShop
    },
    {
      path: '/sharepartner',
      name: 'sharePartner',
      component: SharePartner
    },
    {
      path: '/sharescenic',
      name: 'shareScenic',
      component: ShareScenic
    },
    {
      path: '/shareselectscenic',
      name: 'shareSelectScenic',
      component: () => import('@/pages/share/ShareSelectScenic')
    },
    {
      path: '/shareticket',
      name: 'shareTicket',
      component: ShareTicket
    },
    {
      path: '/editnotify',
      name: 'editNotify',
      component: EditNotify
    },
    {
      path: '/notifylist',
      name: 'notifyList',
      component: NotifyList
    },
    {
      path: '/partnerlist',
      name: 'partnerList',
      component: PartnerList
    },
    {
      path: '/addpartner',
      name: 'addPartner',
      component: AddPartner
    },
    {
      path: '/goodslist',
      name: 'goodsList',
      component: GoodsList,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/scenicdetail',
      name: 'scenicDetail',
      component: ScenicDetail
    },
    {
      path: '/ticketdetail',
      name: 'ticketDetail',
      component: TicketDetail
    },
    {
      path: '/resevedetail',
      name: 'reseveDetail',
      component: ReseveDetail
    },
    {
      path: '/scenicinfo',
      name: 'scenicInfo',
      component: ScenicInfo,
      props: true
    },
    {
      path: '/commentlist',
      name: 'commentList',
      component: CommentList
    },
    {
      path: '/leavemessagelist',
      name: 'leaveMessageList',
      component: LeaveMessageList
    },
    {
      path: '/registerseller',
      component: RegisterSeller,
      children: [
        {
          path: 'stepone',
          name: 'stepOne',
          component: () => import('@/pages/register/components/StepOne')
        },
        {
          path: 'steptwo',
          name: 'stepTwo',
          component: () => import('@/pages/register/components/StepTwo')
        },
        {
          path: 'stepthree',
          name: 'stepThree',
          component: () => import('@/pages/register/components/StepThree')
        },
        {
          path: '',
          name: 'registerDefault',
          component: () => import('@/pages/register/components/StepOne')
        }
      ]
    },
    {
      path: '/orderInfopay',
      name: 'orderInfoPay',
      component: OrderInfoPay
    },
    {
      path: '/customservice',
      name: 'customService',
      component: CustomService
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/orderlist',
      name: 'orderList',
      component: OrderList
    },
    {
      path: '/orderinfo/:orderId/:orderType',
      name: 'orderInfo',
      component: OrderInfo,
      props: true
    },
    {
      path: '/orderbackmoney',
      name: 'orderBackMoney',
      component: OrderBackMoney
    },
    {
      path: '/rebatelist',
      name: 'rebateList',
      component: RebateList
    },
    {
      path: '/mybalance',
      name: 'myBalance',
      component: MyBalance
    },
    {
      path: '/rechargebalance',
      name: 'rechargeBalance',
      component: RechargeBalance
    },
    {
      path: '/withdrawbalance',
      name: 'withdrawBalance',
      component: WithdrawBalance
    },
    {
      path: '/balancedetails',
      name: 'balanceDetails',
      component: BalanceDetails
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('@/pages/city/City'),
      props: true
    }
  ],
  scrollBehavior (to, from, saveTop) {
    if (saveTop) {
      return saveTop
    } else {
      return {x: 0, y: 0}
    }
  }
})
