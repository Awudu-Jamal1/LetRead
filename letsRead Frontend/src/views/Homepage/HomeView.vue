<template>
  <div>

    <div class="container-fluid mb-3 p-5" id="background">
      <div class="container mt-5">
        <p class="mt-5 pt-4 subtitle">Let Get Our Mid Busy With Books</p>
        <p style="width: 400px" class="mb-4">
          If you want to get your mind busy and do not what read. This is the
          right place for you
        </p>
        <button class="btn btns">Explore Now</button>
      </div>
    </div>
    <section>
      <div class="container">
        <div class="row">
          <div>
            <div class="p-3">
              <p class="subtitle">Top Trending Books</p>
              <hr />
              <BookSlider :books="books" />
            </div>
            <div class="d-flex align-items-center justify-content-around m-3">
              <div>
                <img
                  src="https://images.booksamillion.com/content/images/042d04073c7eaf97dfa51a18ec62445a.jpg"
                />
              </div>
              <div>
                <img
                  src="https://images.booksamillion.com/content/images/6f787f41d2cb7115f533f98c9b30c88f.jpg"
                />
              </div>
            </div>
            <div class="p-3">
              <p class="subtitle">Monthly Release Book</p>
              <BookSlider :books="sList" />
            </div>
            <div class="p-3">
              <p class="subtitle">Most Reviewed Book</p>
              <BookSlider :books="books" />
            </div>
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
import BookCard from "../../components/Widget/bookCard.vue";
import BookSlider from "../../components/Widget/bookSlider.vue";
import SignUpCard from "../../components/Widget/signUpCard.vue";
import SearchBar from "../../components/Widget/searchBar.vue";
import GenreCard from "../../components/Widget/genreCard.vue";
import Navdesign from "../../components/Widget/navdesign.vue";

export default {
  async mounted() {
    this.books =  ((await BookList.index()).data).slice(1,10);
   this.sList = ((await BookList.index()).data).slice(11,20);
    console.log(this.sList);
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
  color: #123c69;
  font-size: 25px;
}

#background{
  background: url("https://images.pexels.com/photos/2144299/pexels-photo-2144299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-repeat: no-repeat;
  background-position:center;
    background-size: 75% 100%;
    height: 100%;

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
  background-color: var(--subtitle-color);
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
/*.signUp{
  display: flex;
  flex-direction: row;}
@media(min-width: 1200px){
  .signUp{flex-direction : column;
}
}*/
</style>
