import { createApp } from 'vue'
import App from './App.vue'

import VueSidebarMenu from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'

import "./assets/reset.css";
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

// app.use(Vuetify)
app.use(VueSidebarMenu)

app.mount('#app')