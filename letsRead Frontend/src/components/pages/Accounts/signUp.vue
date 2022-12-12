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
        <div class="container-fluid mside" >
         
    <div class=' side2 me-5 d-flex align-items-center justify-content-center ' >
        <div class=" Je  ">
            <h3 class="text-center">Sign up to LetRead</h3>
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
                <div class="mt-1">
                        <div class="form-group">
                            <label for="Email">Email</label>
                            <input id="iput" v-model="Registration.email" class="form-control">
                        </div>
                    </div>
                    <div class="mt-1">
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
<div class=" mt-5 text-center" ><button @click.prevent="register" class="btns"> Create Account</button></div>
<div class="side3 p-4">
        <p>Already a member? <a href="/session/new">Sign In</a></p>
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
    
    .mside{
        display: flex;
        color: #704D69;
        
    }
    
.side2{
  min-height: 90vh;
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
    max-width: 480px;
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
