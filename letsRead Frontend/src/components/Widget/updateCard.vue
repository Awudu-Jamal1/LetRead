<script>
import posting from '../../services/posting';
import { useStore } from '../../store';
import PostHome from './Post designs/postHome.vue';

export default {
    setup() {
        const store = useStore();
        return {
            user_id: store.user
        };
    },
    async mounted() {
        console.log(this.user_id)
        if(this.user_id !== null){
        const getpost = (await posting.show({ user_id: this.user_id.id })).data;
        }
    },
    components: { PostHome }
}
</script>


<template>
  

<div class="mt-5"><PostHome/></div>





</template>


<style scoped>
.mains{
    font-size: 1rem;
    border-bottom: 1px solid #f1f1f1;
    margin-bottom: 20px;
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
}
.number{
 padding-left: 15px;
    padding-right: 10px;
    margin-right:5px;
    border-right: 1px solid black;
    font-size: 14px;
    letter-spacing: 1px;
    
}
.numB{
    border-right: none;
}
.rate{
    padding-bottom: 15px;
}
</style>
