import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import UUID from 'vue-uuid' 


createApp(App).use(store).mount('#app')
