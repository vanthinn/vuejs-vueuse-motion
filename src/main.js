import './assets/main.css'

import { createApp } from 'vue'
import router from '../src/router/index.js'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)

app.mount('#app')
