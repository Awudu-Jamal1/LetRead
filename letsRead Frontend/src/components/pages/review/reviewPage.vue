<template>
    <div class="d-flex justify-content-center">
        <section>
           
            <div mb-3><h3><a href="">{{book.title}}</a></h3></div>
            <div class="d-flex">
                <div>
                    <img  style="width:50px; height:73px;" :src="book.img_Url" alt="">
                </div>
                <div>
                    <p class="h5">{{book.title}}</p>
                <p>{{book.author}}</p></div>
            </div>
            <div class="separator"></div>
            <div style="display:inline-block;">My rating: <span class="px-1" style="display:inline-block;"> <Rated :rate='book.review'/></span> <span>Clear</span></div>
            <div class="separator"></div>
            <form action="">
                <p>What did you think?</p>
                <textarea v-model="reviews" name="" id="" cols="124" rows="15"></textarea>
                <div class="separator"></div>
                <button class="btn" @click.prevent="post">Post</button>
            </form>
        </section>

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
                body:this.reviews,
                user_id:this.store.user.id,
                book_id:this.id
            })

        }
    },
    async mounted(){
        const bookID= this.$route.params.bookid
        this.id=bookID
        this.book= (await BookList.show(bookID)).data
        console.log(this.book)
    },data(){return{
    reviews:"",book:{},id:null
}},
}
</script>

<style scoped>
a{
    text-decoration: none;
    color: #000;
}
.separator {
    border-bottom: 1px solid #eee;
    margin-top: 14px;
}
</style>