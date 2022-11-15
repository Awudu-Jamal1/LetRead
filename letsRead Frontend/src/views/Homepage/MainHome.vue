<template>
    <div>
        <HomeView v-show="!store.login"/>
        <LoginHome v-show="store.login"/>
        {{store.login}}
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