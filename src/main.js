import { createApp } from 'vue'
import App from './App.vue'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'

import "./assets/reset.css";
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

// app.use(Vuetify)

app.mount('#app')