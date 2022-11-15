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
        <div>{{ name }}</div>
        <hr>
        <div>
            <div><a>Profile</a></div>
            <div> <a href="/account/profile">Edit Profile</a></div>
           
        </div>
        <hr />
        <div>
            <a href="/account">Account Settings</a>
        </div>
        <div><a @click="logout">Sign Out</a></div>
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
  list-style-type: circle;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 10px;

  background-color: #ffffff;
  position: absolute;
  z-index: 70;
  box-shadow: 0 5px 10px rgb(0 0 0 / 15%);
}
a {
  cursor: pointer;
}
</style>
