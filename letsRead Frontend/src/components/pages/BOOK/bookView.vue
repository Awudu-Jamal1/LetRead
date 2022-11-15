<template>
    <div class="main container" >
     <div class="  bookimg">
      <img  style="height:312px; width: 208px; " :src="book.img_Url"/>
      <div><button class="btn">Want to Read</button></div>
      <div><AddButton :bookid="book.id"/></div>
     </div>
     <div class="px-5" style="height:100vh;">
     <div>
      <h1 style="    font-size: 3.6rem;
    line-height: 4.6rem;" >{{book.title}}</h1>
      <p style="font-size:20px; font-weight: 400;">{{book.author}}</p>
      <div><Rated :rate="rating"/></div> <span>{{book.review}}</span><div>
        <div class="desc" :class="{ show:active}">
    {{book.description}}
      </div>
      <p @click="showM" style="font-weight:bold;">show more</p>
      </div>
      <div >
        <p  style="font-size:14px;">Genre <span>{{book.genre}}</span></p>
      <p  style="font-size:14px;">{{book.pages}}</p>
      <p  style="font-size:14px;">Published By: <span>{{book.publisher}}</span></p>
      <p class="bold">Book Details & editions</p>
      <div></div>
      </div>
     
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
     <div  class="author">
      <h2>About Author</h2>
      <div class="d-flex">
        <div>
          <img  :src="author.img_Url" alt="">
      </div>
      <div class="align-self-center m-3">
  <a href="">{{author.name}}</a> <br>
  <p>{{author.no_Books}}books 13.3k followers</p></div>
        </div>
         </div>
     <div class="oedition">
      <BookSlider/>
     </div>
     <hr>
    <ReviewRating :bookid="ids"/>
     <hr>
     <ReviewsBox :bookid ="ids"/>
    
  
     </div>
    </div>
  </template>
  
  <script>
  import BookList from "../../../services/BookList";
import ReviewsBox from '../../Widget/reviewsBox.vue';
import BookSlider from '../../Widget/bookSlider.vue';
import Rated from "../../Widget/rated.vue";
import ReviewRating from "./reviewRating.vue";
import AddButton from "../../Widget/addButton.vue";
  export default {
    setup() {
    },
    async mounted() {
        this.books = (await BookList.index()).data;
       // console.log(this.books);
        const bookID= this.$route.params.bookId
        this.ids=bookID
        this.book = (await BookList.show(bookID)).data
        this.author=(await BookList.show(bookID)).data.Author

       const review = this.book.review
this.rating=`${(review/5)* 100}%`
    
    },
    data() {
        return {
            books: null,
            book:{},
            author:{},
            ids: null,
            rating:null,
            active:true
        };
    },
    components: { ReviewsBox, BookSlider, Rated, ReviewRating, AddButton },
   methods:{
    showM(){
      this.active = false
    }
   }
}
  </script>
  
  <style scoped>
    .desc{
      font-size:16px;
      line-height: 1.8;
    
    }
    .show{
     height: 152px; 
     overflow: hidden;

    }
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
      width: 72px;
    height: 72px;
      display: block;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
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
  