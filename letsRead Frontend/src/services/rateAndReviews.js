import Api from "@/services/Api"

export default {
    ratings(rate){
return Api().post("/review/ratings",rate)},
get(rate){
    return Api().get("/review/ratings",{params:rate})}
    
}
