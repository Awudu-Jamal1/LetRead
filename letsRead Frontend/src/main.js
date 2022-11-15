import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import   {createPinia} from "pinia"
import "./store"


const pinia = createPinia()


import "./assets/main.css";



const app = createApp(App);
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router);



app.mount("#app");
