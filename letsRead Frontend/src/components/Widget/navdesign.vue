<template>
   <div>
    <header class="p-3 text-">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <router-link to="/" class="d-flex me-5 align-items-center mb-2 mb-lg-0 text-dark text-decoration-none " id="logo">
       LetsRead
        </router-link>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 justify-self-center">
          <li><router-link to="" id="nav" class="nav-link px-2 text-secondary">Home</router-link></li>
          <li><router-link to="/review/list" id="nav" class="nav-link px-2 text-dark">My Books</router-link></li>
          <li class="nav-item dropdown">
          <a id="nav" class="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Browse
          </a>
          <ul class="dropdown-menu menus">
         <GenreCard/>
         </ul>
        </li>
        </ul>

       <SearchBar/>

        <div class="text-end">
          <router-link to="/session/new">
            <button type="button" v-show="!store.login" class=" login ">Login</button>
          </router-link>
          
          <router-link v-show="!store.login" to="/SignUp"> <button type="button" class="bot">Sign-up</button></router-link> 
          
        </div>
        <dropdown v-show="store.login" />
      </div>
    </div>
  </header>
   </div>
</template>

<script>
import {useStore} from "../../store"
  import dropdown from './dropdown.vue'
import SignUpCard from './signUpCard.vue';
import GenreCard from './genreCard.vue';
import SearchBar from './searchBar.vue';
export default {
    setup() {
      const store =useStore()
      return{
        store}
    },
    components: { SignUpCard, GenreCard, SearchBar,dropdown },
   
}
</script>

<style scoped>
  #nav{font-size: 16px;}
  #id{
    font-size: 18px;
 
  }
  #logo{
    font-family: "Lobster Two", cursive;
  font-size: 25px;
  }

  .bot{
    border-radius: 15px;
  background-color: var(--subtitle-color);
  border: none;
  color: #fff;
  text-align: center;
  padding: 13px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);
 /* margin: 35px;*/
  font-size: 16px;
  }

  .bot:hover{
    color: var(--subtitle-color);
    background: #fff;
  }
 
  .login{
    border-radius: 4px;
  background-color: #fff;
  border: none;
  color: black;
  text-align: center;
  padding: 13px;
  width: 150px;
  transition: all 0.5s;
  cursor: pointer;
 /* box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);*/
 /* margin: 35px;*/
 font-size: 16px;
  }
  .login:hover{
    color: var(--subtitle-color);
  }
  .menus{
    border: 1px solid #f1f1f1;
    background-color: #fff;
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
  }

</style>