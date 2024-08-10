# simple-vue3-tags-input

基于vue+vite+elementplus+vueuse实现的一个标签输入器

![img.png](screenshot/img.png)


## 安装

```bash
npm i simple-vue3-tags-input
```



## 使用

```js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'simple-vue3-tags-input/dist/style.css'
import {TagInput} from 'simple-vue3-tags-input'

createApp(App)
    .use(ElementPlus)
    .use(TagInput)
    .mount('#app')
```





```vue
const selectedTags = ref<string[]>(['Vue', 'React', 'Angular']);
const options = ref(['Vue', 'React', 'Angular','svelte','vue3','vite','webpack',]);
...

 <tag-input tag-color="#ef4444"
                  width="400px"
                  v-model:value="selectedTags"
                  :options="options"
                  placeholder="请添加标签"></tag-input>
```

## Props
- `tag-color` 标签颜色
- `width` 宽度
- `placeholder` 占位符
- `v-model:value` 绑定值
- `options` 可选项
