---
layout: doc
navbar: true
sidebar: false
aside: false
lastUpdated: false
editLink: false
---

# 测试组件

<script setup>
import CustomComponent from '../components/Custom.vue'
import Tip from '../components/Tip.vue'
import { ref } from "vue";
//父组件内部数据
let todos = ref([
  { id: 1, title: "吃饭", done: true },
  { id: 2, title: "睡觉", done: false },
  { id: 3, title: "打豆豆", done: true },
]);
</script>

## Docs

<Tip title="测试提示标题" :todos="todos">
  <template v-slot="{$row,$index}">
      <!--父组件决定子组件的结构与外观-->
      <span :style="{color:$row.done?'green':'red'}">{{$row.title}}</span>
  </template>
</Tip>

[配置文档](https://vitepress.dev/reference/default-theme-home-page)

<CustomComponent />
