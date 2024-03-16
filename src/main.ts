import './assets/main.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import App from './App.vue'

const app = createApp(App)
registerPlugins(app)
app.mount('#app')
