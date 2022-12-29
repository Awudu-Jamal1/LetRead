<script>
import rateAndReviews from '../../services/rateAndReviews'
import { useStore } from '../../store'

    export default {
        setup() {
            const store = useStore()
        
          return{
            store
          }  
        },
        data(){
            return{
                radios:null,
                color:"",
                show:false
            }
        },watch:{
            
           radios:{
                handler(){
                    if(this.radios !== null){
                       this.color = `${(this.radios/5)* 100}%`
                        this.show=true
                    }
                      //  this.color= ""
                        //this.show = false
                    
                },
            }
           
        },async mounted(){
            let response = (await rateAndReviews.get({
                        book_id: this.$route.params.bookId,
                        user_id: this.store.user.id
                    })).data
                    this.radios=response.rate
        },props:["bookid"],methods:{
           async submit(e){
                const bookId= this.$route.params.bookId
                if(this.store.user === null){
                    this.$router.push("/session/new")
                    }
                       this.color = `${(e/5)* 100}%`
                        this.show=true
                    await rateAndReviews.ratings({
                        rate: Math.round(e) ,
                        book_id: bookId,
                        user_id: this.store.user.id,
                        status:'rate'
                    })
                    
                    

            }
        }
    }
    </script>
    <template>
       <div>
        <fieldset class="rating " v-show="!show">{{radios}}
                        <input type="radio" id="star5" v-model="radios" @click="submit(5)" name="rating" value="5"/><label for="star5" class="full" title="Awesome"></label>
                        <input type="radio" id="star4.5" v-model="radios" @click="submit(4.5)" name="rating" value="4.5"/><label for="star4.5" class="half"></label>
                        <input type="radio" id="star4" v-model="radios" @click="submit(4)"  name="rating" value="4"/><label for="star4" class="full"></label>
                        <input type="radio" id="star3.5" v-model="radios"  @click="submit(3.5)" name="rating" value="3.5"/><label for="star3.5" class="half"></label>
                        <input type="radio" id="star3" @click="submit(3)" v-model="radios"  name="rating" value="3"/><label for="star3" class="full"></label>
                        <input type="radio" id="star2.5" v-model="radios" @click="submit(2.5)"  name="rating" value="2.5"/><label for="star2.5" class="half"></label>
                        <input type="radio" id="star2" v-model="radios" @click="submit(2)" name="rating" value="2"/><label for="star2" class="full"></label>
                        <input type="radio" id="star1.5" v-model="radios" @click="submit(1.5)" name="rating" value="1.5"/><label for="star1.5" class="half"></label>
                        <input type="radio" id="star1" v-model="radios" @click.prevent="submit(1)" name="rating" value="1"/><label for="star1" class="full"></label>
                        <input type="radio" id="star0.5" v-model="radios" @click.prevent="submit(0.5)" name="rating" value="0.5"/><label for="star0.5"  class="half"></label>
                    </fieldset>
    
                    <div v-show="show" class="stars-outer">
                <div style="" class="stars-inner " id="nice"></div>
              </div>
       
       </div>
    </template>
    <style scoped>
    @import "https://use.fontawesome.com/releases/v5.0.13/css/all.css";
    #nice{
        width:v-bind(color)
    
    }
    .stars-outer {
      position: relative;
      display: inline-block;
    }
    
    .stars-inner {
      position: absolute;
      top: 0;
      left: 0;
      white-space: nowrap;
      overflow: hidden;
      width: 0;
    }
    
    .stars-outer::before {
      content: "\f005 \f005 \f005 \f005 \f005";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      color: #8e8e97;
    }
    
    .stars-inner::before {
      content: "\f005 \f005 \f005 \f005 \f005";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      color:  #e87400;
    }
    /************************ */
    #rating-value{	
        width: 110px;
        margin: 40px auto 0;
        padding: 10px 5px;
        text-align: center;
        box-shadow: inset 0 0 2px 1px rgba(46,204,113,.2);
    }
    
    /*styling star rating*/
    .rating{
        border: none;
        float: left;
    }
    
    .rating > input{
        display: none;
    }
    
    .rating > label:before{
        content: '\f005';
        font-family: 'Font Awesome 5 free';
        margin: 5px;
        font-size: 30px;
        display: inline-block;
        cursor: pointer;
    }
    
    .rating > .half:before{
        content: '\f089';
        position: absolute;
        cursor: pointer;
    }
    
    
    .rating > label{
        color: #8e8e97;
        float: right;
        cursor: pointer;
         font-weight: 600;
        font-size: 30px;
    }
    
    .rating > input:checked ~ label,
    .rating:not(:checked) > label:hover, 
    .rating:not(:checked) > label:hover ~ label{
        color: #e87400;
        font-weight: 600;
        font-size: 30px;
    }
    
    .rating > input:checked + label:hover,
    .rating > input:checked ~ label:hover,
    .rating > label:hover ~ input:checked ~ label,
    .rating > input:checked ~ label:hover ~ label{
        color: #e87400;
        font-weight: 600;
        font-size: 30px;
    }
    
    
    
    </style>
    
    