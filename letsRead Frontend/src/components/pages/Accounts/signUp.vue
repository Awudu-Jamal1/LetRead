<script>
    import authenticate from "../../../services/AuthenticationService"
export default {
    setup() {
        
    },
    data(){
      return{
        Registration:{
          firstName:'',
          userName:'',
          email:'',
          password:''


        },
        error:null
      }
    },
    methods:{
        async register(){
            try{
            const respond =await authenticate.register(this.Registration)
            console.log(respond)}
          
            catch(error){
                this.error=error.response.data.error
                console.log(this.error)
            }
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
    <div class='side2 me-5 d-flex justify-content-center ' >
        <div class="" style="width: 20vw; margin: 50px;">
            <h3>Sign up to LetRead</h3>
            <form  >
                <div class="row mt-5">
                    <div class="col-md">
                        <div class="form-group">
                            <label for="Name">Name</label>
                            <input id="iput" v-model="Registration.firstName" class="form-control">
                        </div>
                        {{Registration.firstName}}
                    </div>
                    <div class="col-md">
                        <div class="form-group">
                            <label for="Username">Username</label>
                            <input id="iput" v-model="Registration.userName" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="mt-5">
                        <div class="form-group">
                            <label for="Email">Email</label>
                            <input id="iput" v-model="Registration.email" class="form-control">
                        </div>
                    </div>
                    <div class="mt-5">
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input id="iput" v-model="Registration.password" class="form-control">
                        </div>
                    </div>
                    <div class="form-check mt-5">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Creating an account means you’re okay with our Terms of Service, Privacy Policy, and our default Notification Settings.
  </label>
</div>
<div class=" mt-5" ><button @click.prevent="register" class="btns"> Create Account</button></div>
                
            </form>
        </div>

    </div>
    <div class="side3 p-4">
        <p>Already a member? <a href="/session/new">Sign In</a></p>
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
