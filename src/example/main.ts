import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TagInput from '../packages/index'

createApp(App)
    .use(TagInput)
    .mount('#app')
