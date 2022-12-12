<template>
    <div class="container-fluid main">
        <div class="container ">
            <div class="container intro text-center"><h3 class=" pb-3 ">Welcome   {{stores}}</h3></div>
            
            <div class="px-5">
                <div class=" px-5 row row-cols-1 row-cols-sm-2 row-cols-md-5 g-5  text-center">
            <div class="col h "><h5 class="title">Wanting to read</h5><p>0</p></div>
            <div class="col h"><h5 class="title">Books Read</h5><p>0</p></div>
            <div class="col h"><h5 class="title">Books Reviewed</h5><p>0</p></div>
            <div class="col h"><h5 class="title">Followers</h5><p>0</p></div>
            <div class="col d-flex c_r ">
                <div>
                       <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320565186i/765884.jpg" />
                    </div>
                    <div class="pt-2">
                        <h5 class="pb-2">Currently Reading</h5>
                        <p>Busines Man <br> by <span class="author">Carl Sewell</span></p>
                    </div>
            </div>
            </div>
            </div>
            
        </div>

        
       
    </div>
    <div class="container-fluid s_content">
        <div class="container">
            <div class="row g-2">
                <div class="col"><UpdateCard/></div>
                <div class="col"><Rightside/></div>
            </div>
        </div>
    </div>
</template>
<script>
import Rightside from '../../components/Widget/homepageWidget/rightside.vue'
import UpdateCard from "../../components/Widget/updateCard.vue"
export default {
    setup() {},
    components:{ UpdateCard, Rightside },props:["stores"],
}
</script>

<style scoped>
.main{
    padding-top:250px;
    padding-bottom: 50px;
    font-size: 1rem;
    padding-top: 10px;
    background-color: black;
    color: #fff;
}
img{
    max-height: 150px;
}
.h{
    max-width: 180px;
    min-width: 150px;
    padding-top: 40px;
    /*box-shadow: 0 4px 12px 0 rgb(0 0 0 / 15%);*/
   /* background:  #fff;*/
    margin-right: 5px;
}
.title{
    height: 50px;
}
.c_r{
    /*box-shadow: 0 4px 12px 0 rgb(0 0 0 / 10%);*/
    /*background:  #fff;*/
   width: 300px; 
  
}

.s_content{
    background: #fff;
}


</style>