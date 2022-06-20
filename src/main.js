import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';
import FontAwesomeIcon from "./fontawasome-icons.ts";


createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    .mount('#app');
