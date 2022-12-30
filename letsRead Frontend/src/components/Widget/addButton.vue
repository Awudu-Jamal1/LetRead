<template>
    <div>
        <div class="btn-group">
  <button  @click="addBook" class="btn btns btn-success btn-sm" type="button" :disabled="isActive">
   {{name}}
  </button>
  <button type="button" class="btn  btn-sm btn-success dropdown-toggle dropdown-toggle-split" id="dropdownMenu2" data-bs-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu  list" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" @click="addBook('Want to Read','added')" type="button">Want to Read</button>
    <button class="dropdown-item" @click="addBook('Currnetly Reading','cr')"  type="button">Currently Reading</button>
    <button class="dropdown-item"  @click="addBook('Read','finish')"  type="button">Read</button>
  </div>
</div>
    </div>
</template>

<script>
import Bookmarking from '../../services/Bookmarking';
import { useStore } from '../../store';

export default {
    setup() {
        const store =useStore()
        return{store}
    },props:["bookid"],methods:{
        async addBook(message,status){
            await Bookmarking.post({
                UserId:this.store.user.id,
                BookId:this.bookid,
                status: `${status}`,
                message:`${message}`,
                
            })
            this.name = `${message}`
            this.isActive=true
        }
    },data(){
        return{
            name:"Want to Read",
            isActive:false
        }
    },
    async mounted(){
        let book = (await Bookmarking.show({
            UserId:this.store.user.id,
        BookId:this.bookid})).data
        if(book.length >0){
            this.isActive =true
            this.name = book[0].message
            console.log(book[0].message)
        }else{
            this.isActive =false
        }
    
    }
}
</script>
<style  scoped>
.list button{
    /*padding-top: 10px;
    padding-bottom: 10px;*/
    height: 25px;
    font-size: 14px;
}
.btns{
    min-width: 150px;
}
</style>