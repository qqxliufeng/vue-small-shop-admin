
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

export function getShareScenicUrl () {
  return ''
}

export function getTicketUrl () {
  return 'http://192.168.0.103:8080/ticketDetail?s_id=2&identity=1&storeId=1&goods_id=3'
}

export function getRegisterUrl () {
  return ''
}

export function getShopUrl () {
  return ''
}
