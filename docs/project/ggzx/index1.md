---
outline: deep
---

#                    试剂管理系统

## 前言

[试剂管理系统](https://gitee.com/gfh_he/bxrms.git)，是**Vue3后台管理项目**。项目采用`Vue3`版本+组合式API的流行写法，同时使用了前端下一代构建化工具`Vite`、对类型限制更为严格的`TypeScript`、路由的新版本`vue-router4`、新一代状态仓库管理工具`Pinia`、UI组件库`Element-plus`、前后端交互工具`Axios`以及可视化大屏工具`ECharts`。


## 一、vue3组件通信

> 当我们需要封装组件和复用组件时，了解组件的通信方式至关重要。


**vue组件通信方式有以下几种：**

- **props：** 可以实现父子组件通信

- **自定义事件：** 可以实现子父组件通信

- **全局事件总线$bus：** 可以实现任意组件通信

- **pubsub：** 发布订阅模式实现任意组件通信

- **vuex/pinia：** 集中式状态管理容器，实现任意组件通信

- **ref：** 父组件获取子组件实例VC，获取子组件的响应式数据以及方法

- **slot：** 插槽分为默认插槽、具名插槽、作用域插槽，实现父子组件通信........

### 1.1 props

`props`可以实现父子组件通信，在vue3中我们可以通过`defineProps`获取父组件传递的数据。且在组件内部不需要引入`defineProps`方法可以直接使用。

**父组件给子组件传递数据**

```vue
<Child info="我爱祖国" :money="money"></Child>
```

**子组件获取父组件传递数据:**

- **方式1：**

```js
let props = defineProps({
  info:{
   type:String,//接受的数据类型
   default:'默认参数',//接受默认数据
  },
  money:{
   type:Number,
   default:0
}})
```

- **方式2：**

```js
let props = defineProps(["info",'money']);
```

>  子组件获取到props数据就可以在模板中使用了，但是切记props是只读的(只能读取，不能修改)

### 1.2 自定义事件

在vue框架中事件分为两种：一种是原生的DOM事件，另外一种自定义事件。

>  原生DOM事件可以让用户与网页进行交互，比如click、dbclick、change、mouseenter、mouseleave....

#### 1.2.1 原生DOM事件

代码如下:

```vue
 <pre @click="handler">
      我是祖国的老花骨朵
 </pre>
```

当前代码级给`pre`标签绑定原生DOM事件点击事件，默认会给事件回调注入`event`事件对象。

当然点击事件想注入多个参数可以按照下面操作，但是切记注入的事件对象务必叫做`$event`。

```vue
  <div @click="handler1(1,2,3,$event)">我要传递多个参数</div>
```

在vue3框架`click`、`dbclick`、`change`(这类原生DOM事件)，不管是在标签、自定义标签上(组件标签)都是原生DOM事件。

vue2中却不是这样的，在vue2中组件标签需要通过**native修饰符**才能变为原生DOM事件

```vue
 <div @click.native="handler1($event)">vue2写法</div>
```

#### 1.2.2 自定义事件

>  自定义事件可以实现子组件给父组件传递数据，在项目中是比较常用的。

比如在父组件内部给子组件(Event2)绑定一个自定义事件

```vue
<Event2 @xxx="handler3"></Event2>
```

在Event2子组件内部触发这个自定义事件

```vue
<template>
  <div>
    <h1>我是子组件2</h1>
    <button @click="handler">点击我触发xxx自定义事件</button>
  </div>
</template>

<script setup lang="ts">
let $emit = defineEmits(["xxx"]);
const handler = () => {
  $emit("xxx", "法拉利", "茅台");
};
</script>
<style scoped>
</style>
```

我们会发现在script标签内部，使用了`defineEmits`方法，此方法是vue3提供的方法，不需要引入直接使用。

`defineEmits`方法执行，传递一个数组，数组元素即为将来组件需要触发的自定义事件类型，此方法执行会返回一个`$emit`方法用于触发自定义事件。

当点击按钮的时候，事件回调内部调用`$emit`方法去触发自定义事件，第一个参数为自定义事件名，第二个、三个、N个参数即为传递给父组件的数据。

需要注意的是:代码如下

```vue
<Event2 @xxx="handler3" @click="handler"></Event2>
```

正常说组件标签书写`@click`应该为原生DOM事件，但是如果子组件内部通过`defineEmits`定义就变为自定义事件了

```js
let $emit = defineEmits(["xxx",'click']);
```

### 1.3 全局事件总线

全局事件总线可以实现任意组件通信，在vue2中可以根据VM与VC关系推出全局事件总线。

但是在vue3中没有Vue构造函数，也就没有`Vue.prototype`以及没有this。

如果想在Vue3中使用全局事件总线功能，可以使用插件`mitt`实现，[mitt官网](https://www.npmjs.com/package/mitt)

```js
import mitt from 'mitt'
const emitter = mitt()
// 监听事件
emitter.on('foo', e => console.log('foo', e) )
// 触发事件
emitter.emit('foo', { a: 'b' })
```

### 1.4 v-model

`v-model`指令可用于收集表单数据(数据双向绑定)，除此之外它也可以实现父子组件数据同步。

而`v-model`通信原理利用`props[modelValue]`与自定义事件`[update:modelValue]`实现的。

相当于给组件Child传递一个`props(modelValue)`与绑定一个自定义事件`update:modelValue`来实现父子组件数据同步。

```vue
<Child v-model="msg"></Child>
// 相当于
<Child :modelValue="msg" @update:modelValue="handle"></Child>

<script setup>
  import {ref} from 'vue'
  let msg = ref(100)
  const handle = (num)=>{
    msg.value = num
}
</script>
// 子组件省略
```

在vue3中一个组件可以通过使用多个`v-model`，让父子组件多个数据同步。

```vue
<Child v-model:pageNo="msg1" v-model:pageSize="msg2"></Child>
```

上面代码相当于给组件Child传递两个`props`分别是`pageNo`与`pageSize`，以及绑定两个自定义事件`update:pageNo`与`update:pageSize`实现父子数据同步

### 1.5 useAttrs

在Vue3中可以利用`useAttrs`方法获取组件所有的的属性与事件(包含:原生DOM事件或者自定义事件)，此函数功能类似于Vue2框架中`$attrs`属性与`$listeners`方法。

比如在父组件内部使用一个子组件`my-button`

```vue
<my-button type="success" size="small" title='标题' @click="handler"></my-button>
```

子组件内部可以通过`useAttrs`方法获取组件属性与事件。它类似于props，可以接受父组件传递过来的属性与属性值。

如果`defineProps`接受了某一个属性，`useAttrs`方法返回的对象身上就没有相应属性与属性值，可用于组件二次封装。

```typescript
<script setup lang="ts">
import {useAttrs} from 'vue';
let $attrs = useAttrs();
</script>
```

### 1.6 ref与$parent

提及到`ref`可能会想到它可以获取元素的DOM或者获取子组件实例的VC(VueComponent)。

既然可以在父组件内部通过`ref`获取子组件实例VC，那么子组件内部的方法与响应式数据父组件也应该可以使用的。

父组件内部代码:

```vue
<template>
  <div>
    <h1>ref与$parent</h1>
    <Son ref="son"></Son>
  </div>
</template>
<script setup lang="ts">
import Son from "./Son.vue";
import { onMounted, ref } from "vue";
const son = ref();
// 父组件挂载完毕获取组件实例
onMounted(() => {
  console.log(son.value);
});
</script>
```

但是需要注意，如果想让父组件获取子组件的数据或者方法需要通过`defineExpose`对外暴露。

```vue
<script setup lang="ts">
import { ref } from "vue";
//数据
let money = ref(1000);
//方法
const handler = ()=>{
}
defineExpose({
  money,
  handler
})
</script>
```

`$parent`可以获取某一个组件的父组件实例VC，因此可以使用父组件内部的数据与方法。

子组件内部必须拥有一个按钮点击获取父组件实例，当然父组件的数据与方法需要通过`defineExpose`方法对外暴露

```vue
// 子组件
<button @click="handler($parent)">点击我获取父组件实例</button>
```

### 1.7 provide与inject

vue3提供两个方法`provide`与`inject`，可以实现隔辈（爷孙）组件传递参数。

`provide`方法用于提供数据，此方法执行需要传递两个参数，分别是数据的key和数据的value。

```js
<script setup lang="ts">
import {provide} from 'vue'
provide('token','admin_token');
</script>
```

后代组件可以通过`inject`方法获取数据，通过key获取存储的数值

```vue
<script setup lang="ts">
import {inject} from 'vue'
let token = inject('token');
</script>
```

同理，后代组件也可以直接修改祖辈的数据。

### 1.8 pinia

> [Pinia](https://pinia.web3doc.top/)基于Vue 3的响应式系统和Composition API构建，提供了一种灵活而强大的方式来管理应用程序的状态。

- 安装Pinia并注册

```bash
npm i pinia
```

```javascript
import { createPinia } from 'pinia'

const app = createApp(App)
// 以插件的形式注册
app.use(createPinia())
```

- 实现pinia

> 核心步骤：
>
> 1. 定义store
> 2. 组件使用store

1. 定义store

```javascript
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', ()=>{
  // 数据 （state）
  let count = ref(0)

  // 修改数据的方法 （action）
  const increment = ()=>{
    count.value++
  }

  // 以对象形式返回
  return {
    count,
    increment
  }
})

```

2. 组件使用store

```vue
<script setup>
  // 1. 导入use方法
	import { useCounterStore } from '@/stores/counter'
  // 2. 执行方法得到store store里有数据和方法
  const counterStore = useCounterStore()
</script>

<template>
	<button @click="counterStore.increment">
    {{ counterStore.count }}
  </button>
</template>
```

### 1.9 slot插槽

插槽（Slot）允许你在组件的模板中预留一些位置，以便在父组件中传递内容到这些位置。

插槽可以用于动态组件构建，允许父组件自定义子组件的部分内容，使组件更加灵活和可重用。

插槽（Slot）有三种主要类型：默认插槽、具名插槽和作用域插槽。

#### 1.9.1 默认插槽

在子组件内部的模板中书写slot全局组件标签

```vue
<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
</style>
```

在父组件内部提供结构：Todo即为子组件,在父组件内部使用的时候，在双标签内部书写结构传递给子组件。注意开发项目的时候默认插槽一般只有一个

```vue
<Todo>
  <h1>我是默认插槽填充的结构</h1>
</Todo>
```

#### 1.9.2 具名插槽

顾名思义，此插槽带有名字在组件内部留多个指定名字的插槽。

下面是一个子组件内部，模板中留两个插槽:

```vue
<template>
  <div>
    <h1>todo</h1>
    <slot name="a"></slot>
    <slot name="b"></slot>
  </div>
</template>
<script setup lang="ts">
</script>

<style scoped>
</style>
```

父组件内部向指定的具名插槽传递结构。需要注意`v-slot:`可以替换为`#`

```vue
<template>
  <div>
    <h1>slot</h1>
    <Todo>
      <template v-slot:a>  //可以用#a替换
        <div>填入组件A部分的结构</div>
      </template>
      <template v-slot:b>//可以用#b替换
        <div>填入组件B部分的结构</div>
      </template>
    </Todo>
  </div>
</template>

<script setup lang="ts">
import Todo from "./Todo.vue";
</script>
<style scoped>
</style>
```

#### 1.9.3 作用域插槽

- 作用域插槽允许子组件向父组件传递数据，使父组件能够在子组件中渲染数据。
- 子组件可以将数据绑定到作用域插槽中，然后在父组件中使用这些数据。

子组件Todo代码如下:

```vue
<template>
  <div>
    <h1>todo</h1>
    <ul>
     <!--组件内部遍历数组-->
      <li v-for="(item,index) in todos" :key="item.id">
         <!--作用域插槽将数据回传给父组件-->
         <slot :$row="item" :$index="index"></slot>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
defineProps(['todos']);//接受父组件传递过来的数据
</script>
<style scoped>
</style>
```

父组件内部代码如下:

```vue
<template>
  <div>
    <h1>slot</h1>
    <Todo :todos="todos">
      <template v-slot="{$row,$index}">
         <!--父组件决定子组件的结构与外观-->
         <span :style="{color:$row.done?'green':'red'}">{{$row.title}}</span>
      </template>
    </Todo>
  </div>
</template>

<script setup lang="ts">
import Todo from "./Todo.vue";
import { ref } from "vue";
//父组件内部数据
let todos = ref([
  { id: 1, title: "吃饭", done: true },
  { id: 2, title: "睡觉", done: false },
  { id: 3, title: "打豆豆", done: true },
]);
</script>
<style scoped>
</style>
```

