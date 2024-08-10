import {resolve} from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers:[ElementPlusResolver()],
    }),
      Components({
        resolvers: [ElementPlusResolver()],
      })
  ],
  build:{
    outDir:"dist",
    lib:{
        entry:resolve(__dirname,"packages/index.ts"),
        name:"TagInput",
        fileName:"index"
    },
    rollupOptions:{
      external:["vue","element-plus"],
      output:{
        globals:{
          vue:"Vue",
          "element-plus":"ElementPlus"
        }
      }
    }
  },

})
