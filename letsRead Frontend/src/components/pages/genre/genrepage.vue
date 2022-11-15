<script>
    import genreInfo from '../../../services/genreInfo';
export default {

    setup() {
        
    },
    data () {
        return{
            genre:{},
            books:{}
        }
    },
    async mounted (){
    const gName = this.$route.params.name
        this.genre =(await genreInfo.show(gName)).data
        this.books =(await genreInfo.show(gName)).data.Books
        console.log(this.books)
    }
}
</script>
<template>
    <div style="
        margin: 0px auto;
    text-align: left;
    width: 970px;">
        <div class="leftContainer">
            <div>
                <h2>{{genre.name}}</h2>
                <p>{{genre.description}}</p>
            </div>
            <div>
                <h5 class="semi-title">
                    NEW RELEASES TAGGED "{{genre.name}}"
                </h5>
                <div class="d-flex justify-content-around flex-wrap ">
                    <div class="genre-img mb-3" v-for="(book,i) in books" :key="i">
                        <router-link class="text-decoration-none" :to="{name: 'Book', params: { bookId: book.id }}">
                            <img :src="book.img_Url" alt=""></router-link>
                    </div>

                </div>
                
            </div>
            <hr>
            <div>
                <h5 class="semi-title">
                    NEW READ THIS WEEK
                </h5>
                <div class="d-flex justify-content-around flex-wrap"  >
                    <div class="genre-img mb-3" v-for="(book,i) in books" :key="i">
                        <router-link class="text-decoration-none" :to="{name: 'Book', params: { bookId: book.id }}">
                            <img :src="book.img_Url" alt=""></router-link>
                    </div>


                </div>
                
            </div>
            <hr>
            <div>
                <h5 class="semi-title">
                    {{genre.name}} BOOKS
                </h5>
                <div class="d-flex justify-content-around">
                    <div class="genre-img">
                        <img src="https://www.goodreads.com/book/show/59576065-acceptance" alt="">
                    </div>
                    <div class="genre-img">
                        <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1643668989l/59723765.jpg" alt="">
                    </div>
                    <div class="genre-img">
                        <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1644339449l/60254856.jpg" alt="">
                    </div>
                    <div class="genre-img">
                        <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1640550154l/58932375.jpg" alt="">
                    </div>
                    <div class="genre-img">
                        <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1640550154l/58932375.jpg" alt="">
                    </div>
                    <div class="genre-img">
                        <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1640550154l/58932375.jpg" alt="">
                    </div>

                </div>
                
            </div>
            

        </div>

        <div class="rightContainer">
            <div >
                <h5 class="semi-title">
                    RELATED GENRES
                </h5>
                <hr>
                <ul>
                    <li>Nonfiction</li>
                    <li>Memoir</li>
                    <li>Adventures</li>
                    <li>Autobiography</li>
                    <li>Music Biography</li>
                </ul>

            </div>
            <div>
                <h5 class="semi-title">
                    RELATED NEWS
                </h5>
                <hr>
                <div>
                    <img style="width:100%;" src="https://images.gr-assets.com/blogs/1644957752p8/2248.jpg" alt="">
                    <h4>64 Top Nonfiction Books to Read for Women's History Month</h4>
                    <p>March is Women’s History Month, dedicated to the study, observance, and celebration of the vital role of women in American history.   Some...</p>
                <p>Read more...</p>
                </div>
            </div>
            <div>
                <h5 class="semi-title">
                    QUOTES TAGGED "{{genre.name}}"
                </h5>
                <div>
                    <img style="float:left; margin:5px;" src="https://images.gr-assets.com/authors/1587890777p2/8557658.jpg" alt="">
                <p>“ Live your life in such a way that you'll be remembered for your kindness, compassion, fairness, character, benevolence, and a force for good who had much respect for life, in general. <span>...nore</span> ”</p>
            <p>― Germany Kent</p>
            <p>55 likes</p>   
            </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .genre-img{

     margin-left: 5px;   
     
    }
.genre-img img{
    margin-left: auto;
    margin-right: auto;
    height: 175px;
    bottom: 0;

}
.leftContainer{
    float: left;
    width: 625px;
    padding-right: 10px;
    padding-left: 8px;
}
.rightContainer{
    float: left;
    width: 300px;
    display: inline;
    margin-left: 8px;
}
</style>