import Api from '@/services/Api'

export default{
    post (fellow){
    return  Api().post("/user/fellow", fellow)
    },
    delete(data){
        return Api().delete("/user/fellow",{params:data} )
    },
    show(data){
        return Api().get("/user/fellow",{params:data} )
    }
}