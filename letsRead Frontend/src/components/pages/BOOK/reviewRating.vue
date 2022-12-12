<template>
     <div class="ratin">
    <h2 class="mb-5 text-center ">Ratings & reviews</h2>
      <div class="d-flex flex-column text-center  justify-content-center   align-self-center mb-4">
        <div class=" rate align-self-center"><Rating :bookid="bookid"/></div>
        <div>
          <p>Rate this book</p>
        <button @click="review({name:'Review', params:{bookid:bookid}})" class="btn btn-dark">Write Review</button>
       
        </div>
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
<style scoped>


</style>