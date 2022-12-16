import Api from '@/services/Api'

export default{
    post (fellow){
    return  Api().post("/user/fellow", fellow)
    }
}