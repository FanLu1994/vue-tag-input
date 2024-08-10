<script setup lang="ts">
import {computed, ref, nextTick, onMounted,watch} from "vue";
import {onClickOutside,useVModel} from "@vueuse/core";

const props = withDefaults(defineProps<{
  value: string[];
  tagColor: string;
  width: string;
  placeholder: string;
  options: string[];
}>(),
    {
      width: '100%',
      placeholder: 'Add a tag',
    }
);

const emit = defineEmits(['update:value']);
const selectData = useVModel(props, 'value', emit,{passive: true})

const isEdit = ref(false);
const inputRef = ref(null);
const selectRef = ref(null);

// compute the tag input style
const tagInputStyle = computed(()=>{
  return {
    width: props.width,
  }
})

// compute the tag item style
const tagItemStyle = computed(()=> {
  return {
    color: props.tagColor,
    backgroundColor: getLightenColor(props.tagColor, 90),
  }
})

// compute the lighten color
const getLightenColor = (color, percent) => {
  // 将 #rrggbb 转换为 RGB
  let r = parseInt(color.substring(1, 3), 16);
  let g = parseInt(color.substring(3, 5), 16);
  let b = parseInt(color.substring(5, 7), 16);

  // 计算新的 RGB 值，增加亮度
  r = Math.round(r + (255 - r) * (percent / 100));
  g = Math.round(g + (255 - g) * (percent / 100));
  b = Math.round(b + (255 - b) * (percent / 100));

  // 将 RGB 转换回 #rrggbb 格式
  const rHex = r.toString(16).padStart(2, '0');
  const gHex = g.toString(16).padStart(2, '0');
  const bHex = b.toString(16).padStart(2, '0');

  return `#${rHex}${gHex}${bHex}`;
}

const onClick = async () => {
  isEdit.value = true;
  await nextTick(); // 等待 DOM 更新
  selectRef.value?.focus(); // 聚焦到 select 输入框
}


// click outside event
onClickOutside(inputRef, (evt)=>{
  // isEdit.value = false;
  const selectDropdown = document.querySelector('.el-select-dropdown');
  if (!inputRef.value?.contains(evt.target) &&
      (selectDropdown && !selectDropdown.contains(evt.target as Node))) {
    isEdit.value = false;
  }
})


// Method to handle Enter key for adding a new tag
const addTag = (e) => {
  if (e.target.value) {
    if (selectData.value.includes(e.target.value)) {
      selectRef.value?.blur();
      return;
    }

    selectData.value.push(e.target.value);
    setTimeout(() => {
      e.target.value = '';
      selectRef.value?.blur();
    }, 0);
  }
};

</script>

<template>
  <div class="el-tag-input" :style="tagInputStyle" >
    <div class="tag-item-wrapper" v-show="!isEdit" @click="onClick">
      <span v-show="selectData.length==0" class="placeholder">{{placeholder}}</span>
      <span v-for="tag in selectData" :key="tag" class="tag-item" :style="tagItemStyle">{{tag}}</span>
    </div>
    <div ref="inputRef"
         v-show="isEdit"
         class="tag-input">
      <el-select v-model="selectData"
                 ref="selectRef"
                 multiple
                 filterable
                 allow-create
                 @keyup.enter="addTag"
                 :placeholder="placeholder">
        <el-option v-for="tag in options"
                   :key="tag" :label="tag" :value="tag">
        </el-option>
      </el-select>
    </div>



  </div>

</template>

<style scoped >
.el-tag-input {
  display: flex;
  align-content: center;
  margin: 2px;
  gap: 5px;
  padding: 5px;
  border-radius: 5px;
  height: 30px;
}

.tag-item-wrapper{
  display: flex;
  gap: 2px;
  width: 100%;
  border-radius: 5px;
  padding: 2px;
  border: 1px solid transparent;
  cursor: pointer;
  overflow: hidden;
}

.tag-item-wrapper:hover{
  border: 1px solid #ddd;
}

.placeholder{
  color: #888888;
}

.tag-item{
  padding: 2px ;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.tag-input{
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  height: 30px;
}
</style>
