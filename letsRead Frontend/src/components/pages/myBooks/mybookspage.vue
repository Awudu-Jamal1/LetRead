<script>
import Bookmarking from '../../../services/Bookmarking';
import { useStore } from '../../../store';

export default {
  setup() {
    const store =useStore()
    return{store}
    
  },data(){
    return{
      Books:{}
    }
  },
  async mounted (){
    
    this.Books = (await Bookmarking.show(this.store.user.id)).data
    const nice =this.Books.filter(e =>{
      return e.Book === "Book"
      
    })
    console.log(nice)
  },
  methods:{
    async del(e,b){
    const response= await Bookmarking.delete({
      UserId:e,
      BookId:b
    })

    this.Books = (await Bookmarking.show(e)).data

    console.log(this.Books)

    }
  },
  watch:{
    del:{
      handler(){
        console.log("cassh")
      },immediate:true
    }
  }
}
</script>
<template>
  <div>
    <div class="main-container">
      <div class="title">
        <h4>My Books: Want to Read <span>(3)</span>x</h4>
      </div>
      <div class="content">
        <div class="left-col" style="width: 200px">
          <div>
            <p>
              Bookshelves <span><a href="">Edit</a></span>
            </p>
            <p>All <a href="">3</a></p>
            <p>Read <a href="">0</a></p>
            <p>Currently Reading <a href="">0</a></p>
            <p>Want to Read <a href="">(3)</a></p>
          </div>
          <hr />
          <div>
            <p>life <a href="">(0)</a></p>
            <button class="btn">Add shelf</button>
          </div>
        </div>

        <div class="right-col">
          <table style="width: 100%" >
            <thead class="" >
              <tr style="width: 100%">
                <th>cover</th>
                <th style="width: 25%">title</th>
                <th>author</th>
                <th>avg rating</th>
                <th>rating</th>
                <th>shelves</th>
                <th>date read</th>
                <th>date added</th>
              </tr>
            </thead>
            <tbody class="text-align-center" v-for="(book,i) in Books" :key="i" >
              <tr >
                <td>
                  <img
                    :src="book.Book.img_Url"
                    alt=""
                  />
                </td>
                <td>
                  <a href="">{{book.Book.title}}</a>
                </td>
                <td>
                  <a href="">{{book.Book.author}}</a>
                </td>
                <td>{{book.Book.review}}</td>
                <td>4.70</td>
                <td><a href="">to-read</a></td>
                <td>not set</td>
                <td>Sep 05,2022</td>
                <td><a href="">edit view </a> <span @click="del(book.UserId,book.BookId)" style="cursor:pointer;">*<i class="fa-duotone fa-xmark"></i></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.right-col {
  float: right;
  width: 750px;
}
.left-col {
  float: left;
}

td {
  line-height: 18px;
  padding: 12px 5px 5px 0;
}
a {
  color: var(--text-color);
}
tr {
  border-spacing: 2px;
  border-bottom: 1px solid #eee;
}
img{
  width: 56px;
height: 76.52;
}
</style>
