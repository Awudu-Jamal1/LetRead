<template>
   <div class="container-fluid">
    <div class="container">
      <div class="row  row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
        <div class="col  text-center img-container">
          <div class="mb-4"> <img class="img-fluid"  :src="book.img_Url"/></div>
          <button class="firstBtn">Want To Read</button>
        </div>
        <div class="col borders">
          <Bookinfo :rate ="rating" :book="book"/>
        </div>
      </div>
      
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
import Bookinfo from './bookinfo.vue';
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
    components: { ReviewsBox, BookSlider, Rated, ReviewRating, AddButton, Bookinfo },
   methods:{
    showM(){
      this.active = false
    }
   }
}
  </script>
  
  <style scoped>
  .img-container{
   width:300px;
  }
  .firstBtn{
    height: 40px;
    width:150px;
    font-size: 1rem;
    background: green;
    color: #fff;
    border: 1px solid #fff;
    transition: ease-in 0.5s;
  }

  .firstBtn:hover{
    background: grey;
  }
.borders{
  width: 1000px;
  padding-left: 20px;
}
  </style>
  