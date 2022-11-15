import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('SignUp', credentials)
  },
  login (credentials) {
    return Api().post('/session/new', credentials)
  },
  update(updates){
    return Api().put('/account', updates)
  },
  changeP(passwords){
    return Api().put('/account/password',passwords)
  }
}
