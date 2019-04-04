let token = ''
let identity = '1'
let storeId = '1'
let registerInfo = null
try {
  if (localStorage) {
    token = localStorage.getItem('token')
    identity = localStorage.getItem('identity')
    storeId = localStorage.getItem('storeId')
  }
} catch (error) {
  console.log(error)
}

export default {
  token,
  identity,
  storeId,
  registerInfo,
  saveUserInfo (token) {
    this.token = token
    try {
      localStorage.setItem('token', token)
    } catch (error) {
      console.log(error)
    }
  },
  saveSallerInfo (identity, storeId) {
    this.identity = identity
    this.storeId = storeId
    localStorage.setItem('identity', identity)
    localStorage.setItem('storeId', storeId)
  },
  getSallerInfo () {
    return {
      identity: localStorage.getItem('identity'),
      storeId: localStorage.getItem('storeId')
    }
  },
  getReisterInfo () {
    return registerInfo
  },
  setRegisterInfo (info) {
    registerInfo = info
  }
}
