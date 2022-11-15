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
        const store =useStore()
        
    
        return{
            store
        
        }
    }

}
</script>

<template>
    <div  >
        <div class="mside" style="height:100vh;">
            <div class="side ">
                <div class="top">
                    <a style="margin-bottom:30px;">letsRead</a>
                    <h1 style="color:#704D69;">Discover the worlds top designers & Creatives.</h1>
                </div>
                <div class="mmiddle">
                    <div class="middle">
                    
                </div>
                <p>Art by <span>Peter Tarka</span></p>

                </div>
                
               
        
    </div>
    <div class='side2 me-5 d-flex justify-content-center align-items-center' >
        <div class="" style="width: 20vw; margin: 50px;">
            <h3>Sign In to LetRead</h3>
            <form >
                <div class="mt-5">
                        <div class="form-group">
                            <label for="Email">Email or Username</label>
                            <input id="iput" v-model="login.email" class="form-control">
                        </div>
                        {{login.email}}
                    </div>
                    <div class="mt-5">
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input id="iput" type="password" v-model="login.password" class="form-control">
                        </div>
                    </div>
<div class="mt-5" ><button @click.prevent="Login" class="btns"> SignIn</button></div>
                
            </form>
        </div>

    </div>
    <div class="side3 p-4">
        <p style="font-size:16px;">Not a member? <a href="/session/new">Sign Up</a></p>
    </div>
        </div>
    
    </div>
</template>

<style scoped>
  label{
    font-size: 16px;
    font-weight:bold;
  }
    
    .mside{
        display: flex;
        color: #704D69;
        
    }
    
.side{
    flex: 1;
    background: #A49DAB;
    height:100%;
    width:514px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.side2{
    flex: 3;
}
#iput{
    border: 1px solid transparent;
    background-color: #f3f3f4;
}

.top{
    padding: 64px 64px 30px;
    max-width: 100%;
    text-align: left;
}
.middle{
    background-image: url("../assets/image 3.png" );
    flex-grow: 1;
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
}
.mmiddle{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-end;
}
.mmiddle p{
    margin: 0;
    padding: 25px 64px 35px;
    color: inherit;
    font-size: 14px;
    line-height: 14px;
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
