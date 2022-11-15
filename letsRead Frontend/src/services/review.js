import Api from "@/services/Api"

export default{
    post(review){
        return Api().post( "/reviews",review)
    },
    show(bookid){
        return Api().get(`/reviews/${bookid}`)
    }
}