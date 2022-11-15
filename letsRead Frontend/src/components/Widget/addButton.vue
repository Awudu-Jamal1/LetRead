<template>
    <div><button @click="addBook" class="btn btn-success">Want to Read</button></div>
</template>

<script>
import Bookmarking from '../../services/Bookmarking';
import { useStore } from '../../store';

export default {
    setup() {
        const store =useStore()
        return{store}
    },props:["bookid"],methods:{
        async addBook(){
            await Bookmarking.post({
                UserId:this.store.user.id,
                BookId:this.bookid
            })
        }
    }
}
</script>