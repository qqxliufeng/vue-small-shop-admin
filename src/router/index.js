import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import Home from '@/pages/home/Home'
import ScenicPostList from '@/pages/scenic/post/ScenicPostList'
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

Vue.use(Router)

export default new Router({
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
      path: '/scenicpostlist',
      name: 'scenicPostList',
      component: ScenicPostList
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
