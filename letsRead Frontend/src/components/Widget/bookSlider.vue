<template>
  <swiper
    :slidesPerView="2"
    :spaceBetween="30"
    :freeMode="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="MySwiper "
  >
    <swiper-slide class="swiper-slide" v-for="(book, i) in books" :key="i" >
      
        <router-link class="text-decoration-none ys" :to="{name: 'Book', params: { bookId: book.id }}">
          <div class="d-flex mb-5 links">
      <div>
        <img 
       
        :src="book.img_Url"
        alt="Image 1"
        :title="book.title"
        class="img-fluid me-5"
    
      />
      </div>
      <div class="name">
        <h3 style="font-size:1.8rem;">{{book.title}}</h3>
        <p>{{book.author}}</p>
        <p>{{book.genre}}</p>
      
      </div>
    </div>
      </router-link>

      
      <router-link class="text-decoration-none " :to="{name: 'Book', params: { bookId: book.id }}">
          <div class="d-flex mb-5 links">
      <div>
        <img 
       
        :src="book.img_Url"
        alt="Image 1"
        :title="book.title"
        class="img-fluid me-5"
    
      />
      </div>
      <div class="name">
        <h3 style="font-size:1.8rem;">{{book.title}}</h3>
        <p>{{book.author}}</p>
        <p>{{book.genre}}</p>
      
      </div>
    </div>
      </router-link>
    
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [FreeMode, Pagination],
    };
  },
  props: ["books"],
};
</script>

<style scoped>
.swiper-slide img{
  height:300px ;

}

.name {
  padding-top: 60px;
  padding-left: 10px;
  margin-bottom: none;
  color: #fff;
  word-break:normal;

}
.name p{
  font-size: 1rem;
  
  
}
.links{

  border-radius: 10px;
  padding: 8px;
  background: #1d3557;
  box-shadow: 1px 1px 6px 0 rgb(0 0 0 / 12%);
  transition: ease 0.5s;
}
.links:hover{
  padding: 10px;
}
  @media (max-width: 768px){
    .swiper-slide img{
      height:100px;
    
;
    }  }
</style>
