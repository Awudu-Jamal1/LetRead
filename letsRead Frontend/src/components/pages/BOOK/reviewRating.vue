<template>
     <div class="ratin">
    <h2 class="mb-5">Ratings & reviews</h2>
      <div class="text-center mb-4">
        <div class=""><Rating :bookid="bookid"/></div>
        <p>Rate this book</p>
        <button @click="review({name:'Review', params:{bookid:bookid}})" class="btn btn-dark">Write Review</button>
      </div>
     </div>
</template>

<script>
import Rating from '../../Widget/rating.vue';
export default {
    methods:{
      review(route){
        this.$router.push(route);
      }
    },
    components: { Rating},
    props:['bookid']
}
</script>