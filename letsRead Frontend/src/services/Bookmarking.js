import Api from '@/services/Api'

export default {
  show(bookmark) {
    return Api().get("/review/readlist/show", {
      UserId: bookmark
    })
  },
  post (listid) {
    return Api().post("/review/readlist", listid)
  },
  delete (bookmarkId) {
    return Api().delete("/review/readlist",{params:bookmarkId})
  }
}
