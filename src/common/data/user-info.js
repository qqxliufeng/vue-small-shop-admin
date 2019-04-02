const userInfo = {
  debug: true,
  state: {
    id: sessionStorage.getItem('id'),
    token: sessionStorage.getItem('token'),
    name: sessionStorage.getItem('name'),
    phone: sessionStorage.getItem('phone'),
    avatar: sessionStorage.getItem('avatar'),
    email: sessionStorage.getItem('email'),
    qq: sessionStorage.getItem('qq'),
    city: sessionStorage.getItem('city'),
    balance: sessionStorage.getItem('balance'),
    rebate: sessionStorage.getItem('rebate'),
    credit: sessionStorage.getItem('credit')
  },
  isLogin () {
    // return this.state.id !== '' && this.state.id !== null && this.state.token !== '' && this.state.token !== null && this.state.phone !== '' && this.state.phone !== null
    return this.state.id && this.state.token && this.state.phone
  },
  setUserInfo (userInfo) {
    this.state.id = userInfo.id
    this.state.token = userInfo.token
    this.state.phone = userInfo.phone
    this.state.name = userInfo.name
    this.state.avatar = userInfo.avatar
    this.state.email = userInfo.email
    this.state.qq = userInfo.qq
    this.state.city = userInfo.city
    this.state.balance = userInfo.balance
    this.state.rebate = userInfo.rebate
    this.state.credit = userInfo.line_of_credit

    sessionStorage.setItem('id', this.state.id)
    sessionStorage.setItem('token', this.state.token)
    sessionStorage.setItem('name', this.state.name)
    sessionStorage.setItem('phone', this.state.phone)
    sessionStorage.setItem('avatar', this.state.avatar)
    sessionStorage.setItem('email', this.state.email)
    sessionStorage.setItem('qq', this.state.qq)
    sessionStorage.setItem('city', this.state.city)
    sessionStorage.setItem('balance', this.state.balance)
    sessionStorage.setItem('rebate', this.state.rebate)
    sessionStorage.setItem('credit', this.state.credit)
  },
  setUserInfoAvatar (avatar) {
    this.state.avatar = avatar
    sessionStorage.setItem('avatar', this.state.avatar)
  },
  setUserInfoName (name) {
    this.state.name = name
    sessionStorage.setItem('name', this.state.name)
  },
  setUserInfoEmail (email) {
    this.state.email = email
    sessionStorage.setItem('email', this.state.email)
  },
  setUserInfoQQ (qq) {
    this.state.qq = qq
    sessionStorage.setItem('qq', this.state.qq)
  },
  setUserInfoCity (city) {
    this.state.city = city
    sessionStorage.setItem('city', this.state.city)
  },
  clearInfoAction () {
    this.state.id = ''
    this.state.token = ''
    this.state.phone = ''
    sessionStorage.clear()
    if (localStorage) {
      localStorage.clear()
    }
  }
}

export default userInfo
