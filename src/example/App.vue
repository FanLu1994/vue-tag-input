<script setup lang="ts">
import {ref} from "vue";

const selectedTags = ref<string[]>(['Vue', 'React', 'Angular']);

</script>

<template>
  <div class="main">
    {{selectedTags}}
    <tag-input tag-color="#ef4444" width="600px" v-model:value="selectedTags" placeholder="请添加标签"></tag-input>
    <tag-input tag-color="#16a34a" width="300px" v-model:value="selectedTags"></tag-input>
    <tag-input tag-color="#4338ca" width="300px" v-model:value="selectedTags"></tag-input>
  </div>
</template>

<style scoped>
.main{
  justify-content: center;
  align-content: center;
}
</style>
