<template>
     <div class="ratin">
    <h2 class="mb-5 text-center ">Ratings & reviews</h2>
      <div class="d-flex flex-column text-center  justify-content-center   align-self-center mb-4">
        <div class=" rate align-self-center"><Rating :bookid="bookid"/></div>
        <div>
          <p>Rate this book</p>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Write Review
</button>
       
        </div>
        
      </div>
     </div>
     <div>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  
        <review-page :bookin="bookid"/>
      
</div>
     </div>
</template>

<script>
import Rating from '../../Widget/rating.vue';
import ReviewPage from '../review/reviewPage.vue';
export default {
    methods:{
      review(route){
        this.$router.push(route);
      }
    },
    components: { Rating, ReviewPage},
    props:['bookid']
}
</script>
<style scoped>

.s span{
  border:none;
}
</style>