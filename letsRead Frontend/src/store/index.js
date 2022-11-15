import {defineStore} from "pinia"

export const useStore =defineStore('user',{
    state :()=>{
        return{
            token:null,
            login:false,
            user:null
        }
    },
    actions:{
      setToken(token){
        this.token=token
        if (token) {
         this.login = true
       } else {
         this.login = false
       }

      },
         setUser(user){
           this.user =user 
        }
    },persist:true,
})