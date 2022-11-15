<script setup>
import { RouterView } from "vue-router";
import Navdesign from "./components/Widget/navdesign.vue";
</script>

<template>
  <div>
    <div><Navdesign v-show="shows"/></div>
    <RouterView />
  </div>
</template>

<style scoped></style>
<script>
export default {
  setup() {
    
  },data(){
    return{
      shows: true
    }
  },
  watch:{
    "$route.name":{
      handler(value){
        console.log(value)
        if(value === "Sign In" || value ==="signup"){
          this.shows= false
        }
      }
    }
  }
}
</script>
