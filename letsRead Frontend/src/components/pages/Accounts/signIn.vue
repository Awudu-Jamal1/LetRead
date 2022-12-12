<script>
import AuthenticationService from '../../../services/AuthenticationService';
import { useStore } from '../../../store';

export default {
    methods:{
        async Login(){
            try{
                const responds = (await AuthenticationService.login(this.login)).data
         this.store.setUser(responds.user)
         this.store.setToken(responds.token)
        this.$router.push('/')
            }
            catch(error){
                console.log(error)
            }
         

        }
    },
    data(){
        return{
            login:{
                email:"",
                password:""
            }
        }
    },
    setup(){
        const store = useStore()
        
    
        return{
            store
        
        }
    }

}
</script>

<template>
    <div  >
        <div class="container-fluid mside" >
         
    <div class=' side2 me-5 d-flex align-items-center justify-content-center ' >
        <div class=" Je  ">
            <h3 class="text-center">Sign In to LetdRead</h3>
            <form  >
                <div class="mt-1">
                        <div class="form-group">
                            <label for="Email">Email</label>
                            <input id="iput" v-model="login.email" class="form-control">
                        </div>
                    </div>
                    <div class="mt-5">
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input id="iput" type="password" v-model="login.password" class="form-control">
                        </div>
                    </div>
<div class=" mt-1 text-center" ><button @click.prevent="Login" class="btns"> SignIn</button></div>
<div class="side3 p-4">
        <p>Not a member? <a href="/session/new">Sign Up</a></p>
    </div>
            </form>
        </div>

    </div>
        </div>
    
    </div>
</template>

<style scoped>
 label{
    font-size: 16px;
    font-weight:bold;
  }
  h3{
    margin-bottom: 48px;
  }
    
    .mside{
        display: flex;
        color: #704D69;
        
    }
    
.side2{
  min-height: 70vh;
    padding: 20px;
    height: auto;
    width: 100vw;
    max-width: 100%;
    max-height: 100%; 
}
.Je{
    border: 1px solid #f1f1f1;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
    padding: 40px;
    margin-bottom: 10px;
    min-width: 100px;
    max-width: 380px;
}
#iput{
    border: 1px solid transparent;
    background-color: #f3f3f4;
}

.btns {
  border-radius: 4px;
  background-color: #09BC8A;
  border: none;
  color: #fff;
  text-align: center;
  padding: 13px;
  width: 150px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 35px;
}

.btns:hover{
    background-color: #004346;
}


</style>
