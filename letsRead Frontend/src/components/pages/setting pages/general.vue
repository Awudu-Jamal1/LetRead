<template>
    <div>
        <form >
                <div class="">
                        <div class="form-group">
                            <label for="Email">Username</label>
                            <input id="iput" v-model="username" class="form-control">
                        </div>
                    </div>
                    <div class="mt-5">
                        <div class="form-group">
                            <label for="password">Email</label>
                            <input id="iput" v-model="email" class="form-control">
                        </div>
                    </div>
<div class="mt-5" ><button class="btn" @click.prevent="save" > Save Changes</button></div>
                
            </form>
    </div>
</template>

<style scoped>
label{
    font-size: 16px;
    margin-bottom: 5px;
}

#iput{
    height: 48px;
    border-width: 2px;
    border-color: #e7e7e9;
    background-color: #fff;
}
</style>

<script>
import AuthenticationService from '../../../services/AuthenticationService';
import { useStore } from '../../../store';

export default {
    setup() {
        const store = useStore()
        return{
            store
        }
    },data(){
        return{
            email:null,
            username:null

        }
    }, watch: {
    store: {
      handler() {
        if (this.store !== null) {
          this.username = this.store.user.userName
          this.email= this.store.user.email

        } else {
          this.email = null;
          this.username=null
        }
        console.log(this.username)
      },
      immediate: true,
    },
  },methods:{
    async save() {
      console.log(this.name);
   const response= await AuthenticationService.update({id:this.store.user.id,
        email:this.name,userName:this.username})
        this.store.setUser(response.data)
    },
  }
}
</script>