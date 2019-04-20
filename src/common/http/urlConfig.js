
export const baseIP = 'http://www.test.youdaike.com/'

export const baseUrl = 'distributor_api/'

export const distributorModuleUrl = baseUrl + 'distributor/'

export const baseUrl2 = 'store_api/v1/'

const scenicDetailModuleUrl = baseUrl2 + 'details/'

export const scenicDetailUrl = scenicDetailModuleUrl + 'scenic_details'

const orderModuleUrl = baseUrl2 + 'order/'

// 获取商品详情（日期，价格等）
export const orderReserve = orderModuleUrl + 'reserve'

// 创建订单
export const orderCreate = distributorModuleUrl + 'create'

export const imageUrl = baseIP

const commonModuleUrl = baseUrl + 'common/'

export const imageActionUrl = commonModuleUrl + 'upload'

export const registerImageActionUrl = commonModuleUrl + 'upload_register'

export const loginUrl = distributorModuleUrl + 'login'

export const logoutUrl = distributorModuleUrl + 'logout'

export const shareShopUrl = distributorModuleUrl + 'share_shop'

export const shareReigsterUrl = distributorModuleUrl + 'share_register'

export const register = distributorModuleUrl + 'register'

export const getCaptcha = distributorModuleUrl + 'get_captcha'

export const fastLogin = distributorModuleUrl + 'mobilelogin'

export const modifyPassword = distributorModuleUrl + 'resetpwd'

export const partnersList = distributorModuleUrl + 'partners'

export const scenicPosterList = distributorModuleUrl + 'scenic_poster'

export const selectScenicPosterList = distributorModuleUrl + 'scenic_poster2'

export const scnicPosterDetail = distributorModuleUrl + 'share_scenic_poster'

export const selectScenicPosterDetail = distributorModuleUrl + 'share_scenic_poster2'

export const ticketPosterDetail = distributorModuleUrl + 'share_goods'

export const goodsList = distributorModuleUrl + 'category'

export const withdrawCash = distributorModuleUrl + 'withdraw_cash'

export const balanceLog = distributorModuleUrl + 'balance_log'

const orderUrl = baseUrl + 'order/'

export const createOrder = orderUrl + 'create_order'

export const orderList = orderUrl + 'order_list'

export const orderDetails = orderUrl + 'details'

export const orderCancel = orderUrl + 'cancel'

export const orderDelete = orderUrl + 'del'

export const orderRefundDetail = orderUrl + 'refund_details'

export const orderRefund = orderUrl + 'refund'

export const orderRefundList = orderUrl + 'afer_sales_list'

export const orderRefundAfterDetail = orderUrl + 'afer_sales_details'

export const orderCancelRefund = orderUrl + 'cancel_refund'

const payModuleUrl = baseUrl2 + 'payment/'

export const orderPayUrl = payModuleUrl + 'run_pay'

export const orderPay = payModuleUrl + 'do_pay'

export function getShareScenicUrl (identity, storeId, sid) {
  return 'http://192.168.0.103:8080/scenicdetail?scenicId=' + sid + '&identity=' + identity + '&storeId=' + storeId
}

export function getShareTicketUrl (identity, storeId, sid, goodsId) {
  return 'http://192.168.0.103:8080/ticketDetail?s_id=' + sid + '&identity=' + identity + '&storeId=' + storeId + '&goods_id=' + goodsId
}

export function getShareRegisterUrl (pid) {
  return 'http://192.168.0.103:8888/registerseller?pid=' + pid
}

export function getShareShopUrl (identity, storeId) {
  return 'http://192.168.0.103:8080/index/' + identity + '/' + storeId
}
