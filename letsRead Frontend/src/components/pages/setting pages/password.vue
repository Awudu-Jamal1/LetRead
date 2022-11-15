<template>
    <div>
        <form >
                <div class="">
                        <div class="form-group">
                            <label for="Email">Old Password</label>
                            <input id="iput" v-model="old" class="form-control">
                        </div>
                    </div>
                    <div class="mt-5">
                        <div class="form-group">
                            <label for="password">New Password</label>
                            <input id="iput" v-model="news" class="form-control">
                        </div>
                    </div>
<div class="mt-5" ><button  @click.prevent="save" class="btn"> Save Changes</button></div>
                
            </form>
    </div>
</template>

<script>

    import AuthenticationService from "../../../services/AuthenticationService";
    import { useStore } from "../../../store";
    
    export default {
      setup() {
        const store = useStore();
        return {
          store,
        };
      },
      data() {
        return {
          old: null,
          news: null}
        
      },
    /*  watch: {
        store: {
          handler() {
            if (this.store !== null) {
              this.name = this.store.user.firstName;
              // this.email= this.store.user.email
            } else {
              this.name = null;
              this.country = null;
            }
          },
          immediate: true,
        },
      },*/
      methods: {
        async save() {
       const response= await AuthenticationService.changeP({id:this.store.user.id,
            old:this.old,news:this.news})
            //this.store.setUser(response.data)
            console.log(response.data)
    this.old =null
    this.new =null
        },
      },
    };
    </script>

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