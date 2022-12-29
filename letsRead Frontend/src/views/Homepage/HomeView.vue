<template>
  <div>

    <div class="container-fluid mb-3 p-5" id="background">
      <div class="container mt-5">
        <p class="mt-5 pt-4 subtitle d1">Let Get Our Mid Busy With Books</p>
        <p  style="width: 400px" class="mb-4 sub2">
          If you want to get your mind busy and do not what read. This is the
          right place for you
        </p>
        <button class="btn btns">Explore Now</button>
      </div>
    </div>
    <section class="mt-3 pt-5 ">
      <div class="container trend ">
        <div><h4>Trending Books</h4></div>
        
      
      <BookSlider :books="books" />
    
      </div>
      <div class="container info">
        <div class="row row-cols-1  row-cols-sm-2 row-cols-md g-2">
          <div class="col">
            <h1>Get smart personalised recommendations</h1>
            <p>Our machine learning AI is like your trusted go-to friend for book recommendations.
It'll understand your reading preferences and find the best books for you.</p>
          </div>
          <div class="col">
            <img class="img-fluid" src="https://www.thestorygraph.com/assets/feature-recommendations-5cb926e605438803424d783d941a1765b5944e0d5ceaed0c41cf2c0805ad5f5f.png" alt="">
          </div>
        </div>
      </div>
      <div class="container info">
        <div class="row row-cols-1  row-cols-sm-2 row-cols-md g-2">
          
          <div class="col">
            <img class="img-fluid" src="https://www.thestorygraph.com/assets/feature-buddy-reads-f06af15c3ca2dd5f96cebc9de27b04db68fa591b0506c143929b4c5dbace1b5c.png" alt="">
          </div>
          <div class="col">
            <h1>Read with friends</h1>
            <p>Add live reactions to specific parts of the book without fear of spoilers. Comments are locked for other participants until they reach that point in their reading.
Don't have people to read with? We’ve got machine learning-powered suggestions for great reading buddies.</p>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <FooterView />
    </footer>
  </div>
</template>

<script>
import BookList from "../../services/BookList";
import FooterView from "../../components/Widget/FooterView.vue";

import BookSlider from "../../components/Widget/bookSlider.vue";


export default {
  async mounted() {
    this.books =  ((await BookList.index()).data).slice(1,10);
   this.sList = ((await BookList.index()).data).slice(11,20);
 
  },
  data() {
    return {
      books: null,
      sList:null
    };
  },
 
  
  components: {
    FooterView,
    BookSlider
  },
};
</script>

<style scoped>
.subtitle {
  font-family: "Lobster Two", cursive;
  color: #e07a5f;
  font-size: 2.5rem;
}
.sub2{
  color: #fff;
  font-size: 1.5rem;
}
#background{
  background: url("../.././assets/image/Frame 2.jpg");
  background-repeat: no-repeat;
   background-size: cover;

}
.btns:after {
  content: "»";
  position: absolute;
  opacity: 0;
  top: 14px;
  right: -20px;
  transition: 0.5s;
}

.btns:hover {
  padding-right: 24px;
  padding-left: 8px;
  color: var(--subtitle-color);
}

.btns:hover:after {
  opacity: 1;
  right: 10px;
}
.btns {
  border-radius: 4px;
  background-color:#e07a5f;
  border: none;
  color: #fff;
  text-align: center;
  padding: 13px;
  width: 150px;
  transition: all 0.5s;
  cursor: pointer;
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);
  margin: 35px;
}

.btns {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.col {
  padding: 10px;
}
.trend h4{
  background: #fff;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 10px;
  
}


.info img{
  max-height: 700px;
  weight:700px;
}
.info h1{
  font-size: 3rem;
  padding-top: 15px;
  font-weight: 900;
}
.info p{
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.6;
}
.info{
  padding-top: 80px;
  padding-bottom: 20px;
  box-shadow: 1px 1px 6px 0 rgb(0 0 0 / 12%);
  margin-bottom: 50px;

 
}
</style>
