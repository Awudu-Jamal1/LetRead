<template>
<div class="container ">
    <div><p class="bname" >{{book.title}}</p>
    <p class="bauthor">By <span >{{book.author}}</span></p></div>
    </div>    
    <div class="rate px-4  d-flex align-self-center"> <div ><rated :rate="rate" /></div><div>(1,100)</div></div>
   <div class="number mt-4 d-flex">
<div><span>137</span>Reviews</div>
<div class="inline"><span>25</span>Quotations</div>
<div><span>4</span>Notes</div>
</div>
<div class="genre">
    <h5>Genre</h5>
    <p>{{book.genre}}</p>
</div>
   <div class="desc">
    <h4 class="text-center">Description</h4>
    <div><p>{{book.description}}</p></div>
</div>
<div class="edition">
    <h4>About this Edition</h4>
    <div>
        <div>Publisher <span>{{book.publisher}}</span></div>
        <div>Publication Date <span></span></div>
        <div>Number of Pages <span></span></div>
        <div>ISBN <span class="px-5">{{book.isbns}}</span></div>
    </div>
</div> 
<div class="container">
    <Review-rating :bookid="book.id"/>
     <hr>
</div>
<div>
    <Reviews-box :bookid ="book.ids"/>
</div>
</template>
<script>
import rated from '../../Widget/rated.vue'
import ReviewsBox from '../../Widget/reviewsBox.vue'
import ReviewRating from './reviewRating.vue'
export default {
  components: { rated, ReviewsBox, ReviewRating },
    setup() {
        
    },props:["book", "rate"],
}
</script>
<style scoped>
.bname{
    font-size: 3.5rem;
    font-weight: 700;
}
.bauthor{
    font-size: 1.5rem;
    line-height: 5px;
}

.number div{
    margin-right: 50px;
    font-size: 1rem;

}
.number span{
    margin-right:4px ;
    color: #e48d8b;
}
.genre p{
    font-size: 0.9rem;
    font-weight: 700;
    color: #e48d8b;
    line-height: 4px;
    padding: 4px;
}
.genre{
    padding-top:20px ;
}
.genre h5{
    font-weight: 700;
}
.desc p{
    font-size: 0.9rem;
    font-weight: 500;
}
.desc h4,.edition h4{
    font-weight: 700;
}
.edition{
    padding-top: 20px;
    padding-bottom:20px ;
}
.edition div{
font-size: 1rem;
line-height: 45px;
border-bottom: 1px solid #dbdbdb;

}
.edition span{
margin-left: 150px;
color: #e48d8b;
}

</style>