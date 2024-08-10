# simple-vue3-tags-input

基于vue+vite+elementplus+vueuse实现的一个标签输入器

![img.png](screenshot/img.png)


## 安装

```bash
npm i simple-vue3-tags-input
```

## 使用

```vue
const selectedTags = ref<string[]>(['Vue', 'React', 'Angular']);

...

<tag-input tag-color="#ef4444"
           width="600px"
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
