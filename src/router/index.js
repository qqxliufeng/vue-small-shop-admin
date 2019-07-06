import Vue from 'vue'
import Router from 'vue-router'
import LoginContainer from '@/pages/login/LoginContainer'
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
import LeaveMessageInfo from '@/pages/scenic/detail/leavemessage/LeaveMessageInfo'
import RegisterSeller from '@/pages/register/RegisterSeller'

import OrderInfoPay from '@/pages/order/OrderInfoPay'

import Message from '@/pages/home/other/Message'

import OrderList from '@/pages/order/OrderList'
import OrderRufundList from '@/pages/order/components/OrderRefundListItem'
import OrderInfo from '@/pages/order/OrderInfo'
import OrderBackMoney from '@/pages/order/OrderInfoBackMoney'

import MyRebate from '@/pages/rebate/MyRebate'
import RebateList from '@/pages/rebate/RebateList'
import RebateDetails from '@/pages/rebate/RebateDetails'
import RebateToBalance from '@/pages/rebate/RebateToBalance'
import MyBalance from '@/pages/balance/MyBalance'
import RechargeBalance from '@/pages/balance/RechargeBalance'
import WithdrawBalance from '@/pages/balance/WithdrawBalance'
import BalanceDetails from '@/pages/balance/BalanceDetails'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        auth: true
      }
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    // },
    {
      path: '/login',
      name: 'login',
      component: LoginContainer
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
      path: '/teamflow',
      name: 'teamFlow',
      component: () => import('@/pages/partner/TeamFlow')
    },
    {
      path: '/goodslist',
      name: 'goodsList',
      component: GoodsList
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
      path: '/leavemessageinfo',
      name: 'leaveMessageInfo',
      component: LeaveMessageInfo
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
      path: '/orderpayresult',
      name: 'orderPayResult',
      component: () => import('@/pages/order/OrderPayResult')
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/messagedetail',
      name: 'messageDetail',
      component: () => import('@/pages/home/other/NoticeDetail')
    },
    {
      path: '/orderlist',
      name: 'orderList',
      component: OrderList
    },
    {
      path: '/ordercodeinfo',
      name: 'orderCodeInfo',
      component: () => import('@/pages/order/OrderCodeInfo'),
      props: true
    },
    {
      path: '/orderbackprogress',
      name: 'orderBackProgress',
      component: () => import('@/pages/order/OrderBackProgress')
    },
    {
      path: '/orderrufundlist',
      name: 'orderRufundList',
      component: OrderRufundList
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
      path: '/myrebate',
      name: 'myRebate',
      component: MyRebate
    },
    {
      path: '/rebatelist',
      name: 'rebateList',
      component: RebateList
    },
    {
      path: '/rebatedetails',
      name: 'rebateDetails',
      component: RebateDetails
    },
    {
      path: '/rebatetobalance',
      name: 'rebateToBalance',
      component: RebateToBalance
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
      path: '/customservice',
      name: 'customService',
      component: () => import('@/pages/home/CustomService')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('@/pages/city/City'),
      props: true
    },
    {
      path: '/protocol',
      name: 'protocol',
      component: () => import('@/pages/protocol/Protocol'),
      props: true
    },
    {
      path: '/gallary',
      name: 'gallary',
      component: () => import('@/common/components/gallary/Gallary'),
      props: true
    },
    {
      path: '/accountSet',
      name: 'accountSet',
      component: () => import('@/pages/account/AccountSet')
    },
    {
      path: '/personalinfo',
      name: 'personalInfo',
      component: () => import('@/pages/account/PersonalInfo')
    },
    {
      path: '/authinfo',
      name: 'authInfo',
      component: () => import('@/pages/account/AuthInfo'),
      meta: {
        keepAlive: true
      }
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
