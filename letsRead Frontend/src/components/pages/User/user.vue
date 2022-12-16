<template>
    <div class="container-fluid">
      <div class="container">
        <div class="d-flex container info-container justify-content-center">
          <div class="profile border"></div>
          <div class="container info mx-5">
            <div class="mb-3 name"><h3>{{Userr.firstName}}</h3></div>
            <div class="fellow"><button @click="fellow">Fellow</button></div>
            <div class=" detail">
              <div class="d-flex justify-content-between ">
            <div ><h6>Detail</h6></div>
            <div class=""><p>Age hhjkk</p></div>
              </div>
              <div class="d-flex justify-content-between">
                <div ><h6>Activity</h6></div>
              <div><p>Readingddd</p></div>
              </div>
            </div>
          </div>
        </div>
  
  
  
  
        <div class="content mt-5 ">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
            <div class="col  middle">
              <div class="fav mb-5">
                <h6 class="text-center"><span>{{Userr.firstName}}</span> Favourite Books</h6>
                <div class="d-flex justify-content-center favs">
                  <div class=""><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439049792l/17174._SY75_.jpg" alt=""></div>
                  <div class=""><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439049792l/17174._SY75_.jpg" alt=""></div>
                  <div class=""><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439049792l/17174._SY75_.jpg" alt=""></div>
                  <div class=""><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439049792l/17174._SY75_.jpg" alt=""></div>
                  <div class=""><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439049792l/17174._SY75_.jpg" alt=""></div>
                  <div class=""><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439049792l/17174._SY75_.jpg" alt=""></div>
                  <div class=""><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439049792l/17174._SY75_.jpg" alt=""></div>
                  <div class=""><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439049792l/17174._SY75_.jpg" alt=""></div>
                  <div class=""><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439049792l/17174._SY75_.jpg" alt=""></div>
                  <div class=""><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439049792l/17174._SY75_.jpg" alt=""></div>
                  <div class=""><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439049792l/17174._SY75_.jpg" alt=""></div>
                </div>
                <div><p class="text-right">More</p></div>
              </div>
              <div class=" stats">
                <h6>Currently Reading</h6>
                <div class="container d-flex justify-content-around"><div><p>read <span>5</span></p></div>
                <div><p>read <span>5</span></p></div>
                <div><p>read <span>5</span></p></div>
                <div><p>read <span>5</span></p></div>
              </div>
              </div>
  
  
  
              <div class="currently mt-5">
                <h6><span>{{Userr.firstName}}</span>  IS CURRENTLY READING</h6>
                <div class="c-info">
                  <div class="row row-cols-1  row-cols-sm-1 row-cols-md-2 g-2">
                    <div class="col d-flex "><div class="pe-3"><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389104900l/20482728._SX98_.jpg" alt=""></div>
                    <div class="pt-2"><p><span class="person">Megan</span> is currently reading</p>
                    <h4>The Tibetan Book of the Dead</h4>
                  <p class="author">by <span>Padmasambhava</span></p>
                  <p class="date">- Apr - 17,2022 04:17</p></div>
               
                  </div>
                  <div class="col container-fluid pt-2 r-buttom">
                    <button>Want to read</button>
                    <p>Rate this book</p>
                  </div>
  
  
                  </div>
                </div>
              </div>
            </div>
  
  
            <div class="col right ">
              <h6><span>Megan</span> Friends</h6>
              <div>
                <div class="d-flex">
                  <div><img src="https://images.gr-assets.com/users/1654273379p2/149839351.jpg" alt=""></div>
  <div><p class="e" >Hannah Boundy</p>
  <p ><span>357</span> books | <span>15</span>friends</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </template>
  <style scoped>
  .e{
    margin-top: 8px;
    line-height: 2px;
  }
  .right{
    width: 300px;
    font-size: 0.7rem;
  }
  .right img{
    height: 64px;
    margin-right: 5px;
  }
  
  
  /*Middle*/
  .currently img{
    height: 100px;
  }
  .r-buttom{
    text-align: center;
    padding-left: 150px;
  }
  .currently button{
    width: 150px;
    font-size: 0.9rem;
    background: green;
    color: White;
    border: none;
    height: 35px;
  }
  .currently h4{
    font-size: 1rem;
    font-weight: 600;
    line-height: 2px;
  }
  .c-info{
    font-size: 0.8rem;
  }
  .middle h6,.right h6{
    font-size: 0.85rem;
    font-weight: 600;
    border-bottom: 1px solid #f1f1f1;
  
  }
  .middle{
    width: 800px;
    padding-left: 110px;
  }
  
  .fav img{
    height: 90px;
    padding: 4px;
  }
  .info-container{
    min-width: 600px;
  }
  
  
  
  .name{
    padding-left: 5px;
    border-bottom: 1px solid #f1f1f1;
    max-width: 500px;
    min-width: 300px;
   
  }
  .fellow button{
    width: 120px;
    height: 40px;
    font-size: 1rem;
    background: #e07a5f;;
    color: #fff;
    border: none;
  }
  .profile{width: 250px;
  height: 250px;
  min-width: 180px;}
  .info{
    padding-top: 20px;
    max-width: 700px;
  }
  .detail{
    padding-top:20px ;
    max-width: 200px;
    font-size: 0.9rem;
  }
  .detail h6{
    font-weight: 700;
    font-size: 0.9rem;
    color: #e07a5f;
  }
  
  </style>

  <script>
  import AuthenticationService from "../../../services/AuthenticationService";
  import Userdata from "../../../services/Userdata";
import { useStore } from "../../../store";
  export default {
    setup() {
        let store = useStore()
        return{
            store
        }
    },
    async mounted (){
        let userId= this.$route.params.userId
       
        let Userinfo = (await AuthenticationService.show(userId)).data
        this.Userr = Userinfo
        this.followerId = userId
    },data(){
        return{
            Userr: {},
            followerId:null

        }
    },methods:{
        async fellow (){
  let response = await Userdata.post({
    user_id: this.store.id,
    fellower_id : this.followerId

})

        }
    }
  }
  </script>