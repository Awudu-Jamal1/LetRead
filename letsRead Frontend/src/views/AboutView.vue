<template>
  <div class="main container ">
   <div class="  bookimg">
    <img  style="height:312px; width: 208px; " src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631251689i/4214.jpg"/>
    <div><button class="btn">Want to Read</button></div>
    <div><button class="btn btn-success">Want to Read</button></div>
   </div>
   <div class="px-5" style="height:100vh;">
   <div>
    <h1>Title</h1>
    <p style="font-size:18px;">Yann Martel</p>
    <div class=""><img style="height:30px;" src="https://www.pngfind.com/pngs/m/668-6687141_star-rating-png-487848-5-stars-transparent-background.png" alt=""></div>
    <div class="desc" style="font-size:16px;">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aliquid reprehenderit qui voluptas omnis reiciendis atque inventore in iste ducimus corporis vero, error dignissimos cum praesentium blanditiis consequuntur dicta repudiandae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita porro atque autem perferendis eius numquam molestias, reiciendis consequuntur repellendus consequatur perspiciatis harum reprehenderit doloribus. Impedit!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptate deserunt eos, officiis dicta enim nostrum ad, architecto molestiae voluptas perferendis inventore reprehenderit temporibus eaque nam! Sapiente minima impedit rem alias quaerat dicta modi reiciendis unde. Tempora id est accusantium, ducimus consequatur ex rem blanditiis a voluptate doloribus facere cumque. Rerum fugiat quia accusantium velit. Saepe quia libero omnis fuga aut nemo tenetur ducimus incidunt ipsum quam tempore sequi autem perferendis blanditiis asperiores accusantium, eaque quas earum repudiandae quaerat suscipit doloremque dolorum esse! In alias temporibus itaque delectus inventore perferendis recusandae dignissimos sunt? Obcaecati, provident quam. Optio repellat sunt repellendus.

    </div>
    <p>450 pages</p>
    <p>First published in Feb 10, 2010 </p>
    <p class="bold">Book Details & editions</p>
    <div></div>
   </div>
   <hr>
   <div class="people">
    <div class="d-flex">
      <div><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1296686275i/39755._UY200_CR33,0,200,200_.jpg" alt=""></div>
      <div><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1259557649i/1215681._UY200_CR33,0,200,200_.jpg" alt=""></div>
      <div><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1218232979i/1403663._UY200_CR18,0,200,200_.jpg" alt=""></div>
      <span class="m-2">22k.2k people are currently reading</span>
    </div>
   </div>
   <hr>
   <div class="author">
    <h2>About Author</h2>
    <div class="d-flex">
      <div>
        <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1233458107i/1943477._UX200_CR0,50,200,200_.jpg" alt="">
    </div>
    <div class="align-self-center m-3">
<a href="">Kathryn Stockett</a> <br>
<p>3 books 13.3k followers</p></div>
      </div>
       </div>
   <div class="oedition">
    <BookSlider"/>
   </div>
   <hr>
   <div class="ratin">
  <h2 class="mb-5">Ratings & reviews</h2>
    <div class="text-center mb-4">
      <div class=""><img style="height:30px;" src="https://www.pngfind.com/pngs/m/668-6687141_star-rating-png-487848-5-stars-transparent-background.png" alt=""></div>
      <p>Rate this book</p>
      <button class="btn btn-dark">Write Review</button>
    </div>
   </div>
   <hr>
   <ReviewsBox/>
  

   </div>
  </div>
</template>

<script>
import BookSlider from '../components/Widget/bookSlider.vue';
import ReviewsBox from '../components/Widget/reviewsBox.vue';
import BookList from "../services/BookList";
export default {
    setup() {
    },
   
    async mounted() {
    this.books = (await BookList.index()).data;
    console.log(this.books);
  },
  data() {
    return {
      books: null,
    };
  },
}
</script>

<style scoped>
  div{
    font-size: 16px;
  }
  .bookimg{
    display: block;
    height: 100vh;
  }
  h1{
    font-size: 32px;
  }
  .main{
    display: flex;
    justify-content: center;
    align-items:  center;
    height: 100vh;
    
  }
  .people img{
width: 30px;
border-radius:100% ;
  }
  .author img{
    height: 100px;
    border-radius: 100%;
  }
  .symbols .comments{
    margin-bottom: 20px;
    
  }
  @media (max-width: 768px) {
  .main {
    display: flex;
    flex-direction: column;
    
  }
}
</style>
