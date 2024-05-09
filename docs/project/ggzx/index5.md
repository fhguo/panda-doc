---
outline: deep
---

## 五、综合配置

### 5.1 主题切换

> 此方案基于elementPlus和css变量实现暗黑和明亮主题切换效果

1. 下载`@vueuse/core`，该包会在HTML添加`.dark`类名

   ```
   pnpm i @vueuse/core
   ```

2. 新建`dark.scss`文件

   ```css
   /* 定义根作用域下的变量 */
   :root {
     --theme-font: #333;
     --theme-light-font: #999;
     --theme-background: #fff;
     --main-background: #f2f3f5;
     --card-border: #e4e7ed;
   }
   
   /* 暗黑模式*/
   /* 更改dark类名下变量的取值 */
   .dark{
     --theme-font: #fff;
     --theme-light-font: #ccc;
     --theme-background: #0a0a0a;
     --main-background: #0a0a0a;
     --card-border: #666;
   }
   ```

3. 导入到main.js入口文件

   ```js
   // elementPlus css变量
   import "element-plus/theme-chalk/dark/css-vars.css";
   // 自定义变量文件
   import "@/styles/dark.scss";
   ```

4. 使用设置的css变量

   ```css
   .card {
       background-color: var(--theme-background);
   }
   ```

5. 触发事件

   ```vue
   <el-switch v-model="layoutStore.isDark" inline-prompt @change="changeDark" :active-icon="Sunny" :inactive-icon="Moon" />
   
   <script setup lang="ts">
   import useLayoutStore from '@/store/modules/setting.ts';
   import { Sunny, Moon } from "@element-plus/icons-vue";
   import { useDark, useToggle } from '@vueuse/core';
   const layoutStore = useLayoutStore();
   //switch开关的chang事件进行暗黑模式的切换
   const isDark = useDark()
   const changeDark = useToggle(isDark)
   </script>
   ```

6. 使用pina共享状态及持久化存储

   ```js
   state: () => {
       return {
         isDark: localStorage.getItem("vueuse-color-scheme") == 'dark' ? true : false, // 控制暗黑主题
       };
   }
   ```

   