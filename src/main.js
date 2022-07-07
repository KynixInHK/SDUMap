import { createApp } from 'vue'
import App from './App.vue'
import "minireset.css"
import VueCookies from 'vue-cookies'
// import axios from 'axios'

import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'

// import router from "./router";

const app = createApp(App);
app.use(OpenLayersMap);
app.use(VueCookies);
// app.use(axios);
// app.use(router);
app.config.globalProperties.$cookies = VueCookies;

const vm = app.mount('#app');
