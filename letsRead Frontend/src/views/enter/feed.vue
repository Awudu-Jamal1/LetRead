<template>
  <div class="d-flex text-align-center justify-content-center">
    <form action="">
      <div>
        <label for="">title</label>
        <input type="text" v-model="book.title" />
      </div>
      <div>
        <label for="">description</label>
        <input type="text" v-model="book.description" />
      </div>
      <div>
        <label for="">contribution</label>
        <input type="text" v-model="book.contributor" />
      </div>
      <div>
        <label for="">author</label>
        <input type="text" v-model="book.author" />
      </div>
      <div>
        <label for="">publisher</label>
        <input type="text" v-model="book.publisher" />
      </div>
      <div>
        <label for="">isbn</label>
        <input type="text" v-model="book.isbns" />
      </div>
      <div>
        <label for="">review</label>
        <input type="text" v-model="book.review" />
      </div>
      <div>
        <label for="">Image</label>
        <input type="text" v-model="book.img_Url" />
      </div>
      <div>
        <label for="">Genre</label>
        <input type="text" v-model="book.genre" />
      </div>
      <div>
        <label for="">Page</label>
        <input type="text" v-model="book.page" />
      </div>
      
    </form>

    <button @click="dash" class="btn btn-success">
              Create
            </button>
  </div>
</template>

<script>
    import BookList from '../../services/BookList';
export default {
  data() {
    return {
        book:{
            title: null,
      description: null,
      contribution: null,
      author: null,
      publisher: null,
      isbns: null,
      review: null,
      img_Url: null,
      genre: null,
      page: null,
        }
      
    };
  },
  methods: {
    async dash () {
      try {
         await BookList.post(this.book)
      
      } catch (error) {
        console.log(error)
      }
    }}
};
</script>
