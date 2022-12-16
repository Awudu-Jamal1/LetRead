<template>
     <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Write Review</h5>
        <button type="button" class="s" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
    <div class="container-fluid d-flex justify-content-center ">
        <div class="p-3" style="width:100%;">
 
  <div class="">
<div class="rating">
    <h5>Rating</h5>
    <div class="d-flex">
        <div><Rated :rate='book.review'/></div>
        <div>Clear</div>
    </div>

</div>   
<div >
    <form action="">
        <div class="form-group mb-4">
                            <label >Review Title</label>
                            <input v-model="title" id="iput"  class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="password">Review</label>
                        <div >
                            <div class="svg-area  ">
                                <span>
                                    <button> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-type-bold" viewBox="0 0 16 16">
  <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/>
</svg></button>
                                </span>
                                <span>
                                    <button><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-type-italic" viewBox="0 0 16 16">
  <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"/>
</svg></button>
                                </span>
                                <span>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
</svg>
                                    </button>
                                </span>
                                <span><button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
</svg>
                                </button></span>
                            </div>
                            <div>
                                <textarea v-model="reviews" class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                            </div>
                        </div>
                            
                        </div>
    </form>
</div> 
</div>

 

</div>



    </div>
</div>
      <div class="modal-footer">
        <button type="button" @click="post"  class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" @click="post" class="btn btn-primary">POST</button>
      </div>
    </div>
  </div>
    
</template>

<script>

import BookList from '../../../services/BookList';
import review from '../../../services/review';
import { useStore } from '../../../store';
import Rated from '../../Widget/rated.vue';
export default {setup(){
    const store =useStore()
    return {
        store
    }
},
    components: { Rated },
    methods:{
        async post(){
          
            await review.post({
                title: this.title,
                body:this.reviews,
                user_id:this.store.user.id,
                book_id:this.bookin
            })

        }
    },
    async mounted(){
        const bookID= this.$route.params.bookid
        console.log("HHHHHHH",bookID)
        this.id=bookID
        this.book= (await BookList.show(bookID)).data
    },data(){return{
    reviews:"",book:{},id:null,title:""
}},props:["bookin"]
}
</script>

<style scoped>
.rating{
    margin-bottom: 40px;
}

h5,label{
    font-size: 1rem;
    font-weight: 400;
}

.svg-area button{
    background: none;
    border: none;
    cursor: pointer;
    padding: 3px 5px;
    width: 30px;
    margin-right: 15px;
    height: 30px;
    

}


a{
    text-decoration: none;
    color: #000;
}
.separator {
    border-bottom: 1px solid #eee;
    margin-top: 14px;
}
img{
    max-height: 350px;
}
</style>