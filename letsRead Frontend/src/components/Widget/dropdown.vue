<script>
import posting from "../../services/posting";
import { useStore } from "../../store";
export default {
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
  methods: {
    logout() {
      this.store.$reset();
      this.$router.push("/session/new");
    },
     next(id){
                this.$router.push({name:"user",params:{userId:id}})
            }
  },
  data() {
    return {
      name: null,
      notify:{},
      number:0
      
    };
  },
  watch: {
    store: {
      handler() {
        if (this.store.user !== null) {
          this.name = this.store.user.firstName;
          
        } else {
          this.name = null;
        }
        
      },
      immediate: true,
    },
  },async mounted(){
    if(this.store.user !== null){
    let getnot = (await posting.get({
      user_id : this.store.user.id
    })).data
    this.notify = getnot
  this.number =getnot.length}

  }
};
</script>

<template>
  <div class="d-flex justify-content-center ">
    <div class=" bell"
  
    
        
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
    
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
</svg>
<span class="not">{{ number }}</span>
    </div>

    <div class="dropdown-menu border notification" style="position: absolute;" >
      <ul v-for="(note ,i) in notify" :key="i">
        <li  class="nots" @click="next(note.User.id)">
          {{note.User.firstName}} 
        {{ note.Message }}
        </li>
      </ul>
      </div>





    <div class="dropbox" style="position: relative">
      <a
        id="nav"
        class="nav-link text-dark"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span>
          <img
            src="https://s.gr-assets.com/assets/nophoto/user/u_60x60-267f0ca0ea48fd3acfd44b95afa64f01.png"
            alt=""
          />
        </span>
      </a>
      <div class="dropdown-menu" style="position: absolute;" id="dlist">
        <div class="ab">{{ name }}</div>
        
        <div>
            <div class="ab"><a>Profile</a></div>
            <div class="ab"> <a href="/account/profile">Edit Profile</a></div>
           
        </div>
      
        <div class="ab">
            <a href="/account">Account Settings</a>
        </div>
        <div class="ab"><a @click="logout">Sign Out</a></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
 /* display: inline-block;*/
  height: 30px;
  width: 30px;
  border-radius: 16px;
}
span {
 /* display: inline-block;*/
  /*height: 30px;
  margin: 10px 8px;
  vertical-align: middle;*/
  width: 30px;
}
#nav {

  cursor: pointer;
  /*display: inline-block;*/
  height: 50px;
  position: relative;
  /*width: 46px;*/
 /* color: #00635d;*/
  text-decoration: none;
  background: transparent;
  /*margin-left: 50px;*/
  padding-top: 9px;
}
.bell{
 
  position:relative;
  padding-top:15px;
  margin-right:15px;
  cursor: pointer;
  
  
}
.notification li{
  list-style: none;
  font-size: 0.8rem;
}
.notification{
  padding-right: 30px;
  text-align: center;
}
.not{
  position: absolute;
  left: 40%;
  top: 35%;
 font-weight: 600;
 color: #000;
 font-size: 0.7rem;
  width: 10px;
  height: 17px;
  text-align: center;

}
.bell svg{
  color: #e48d8b;
  width: 50px;
}
#dlist {
    font-size: 14px;
padding-top: 15px;
padding-bottom:10px ;
  position: absolute;
  z-index: 70;
  background-color: #fff;
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
    border: 1px solid #f1f1f1;
}
a {
  cursor: pointer;
  text-decoration: none;
  transition: ease 0.1s ;
}
a:hover{
  color: #fff;
}
.ab{padding-top: 8px;
  padding-bottom:8px ;
  padding-left: 8px;
background: #ffffff;
transition: ease 0.8s;
}
.ab:hover{
  color:#fff;
background: #e48d8b;
}
.nots{
  padding-top: 4px;
  border-bottom: 1px solid;
cursor: pointer;
transition: all ease 0.5s;
}
.nots:hover{
  color: #e48d8b;;
}

</style>
