<script>
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
  },
  data() {
    return {
      name: null,
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
        //console.log(this.store)
      },
      immediate: true,
    },
  },
};
</script>

<template>
  <div>
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
  display: inline-block;
  height: 30px;
  width: 30px;
  border-radius: 16px;
}
span {
  display: inline-block;
  height: 30px;
  margin: 10px 8px;
  vertical-align: middle;
  width: 30px;
}
#nav {
  cursor: pointer;
  display: inline-block;
  height: 50px;
  position: relative;
  width: 46px;
 /* color: #00635d;*/
  text-decoration: none;
  background: transparent;
  margin-left: 50px;
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
</style>
