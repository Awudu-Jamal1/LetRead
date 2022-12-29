<template>
    <div>
        <HomeView v-show="!store.login"/>
        <div v-show="store.login"><LoginHome  /></div>
    </div>
</template>
<script>
import LoginHome from './loginHomepage.vue'
import HomeView from './HomeView.vue';
import { useStore } from '../../store';
export default {
    setup() {
        const store = useStore()
        return{
            store
        }
    },
    components: { HomeView ,LoginHome}
}
</script>