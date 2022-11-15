import Api from "@/services/Api"
export default {
  show(name) {
    return Api().get(`genres/${name}`)
  }
};