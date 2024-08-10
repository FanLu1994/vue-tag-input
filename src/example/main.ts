import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TagInput from '../../packages/index.ts'

createApp(App)
    .use(TagInput)
    .mount('#app')
