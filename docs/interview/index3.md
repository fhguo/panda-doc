---
outline: deep
---

## 一、Vue


### 1、vue常用的指令有哪些

Vue.js提供了一些常用的指令（Directives），用于操作DOM、数据绑定以及控制应用程序的行为。以下是一些常见的Vue指令以及示例：

1. **v-bind**：用于动态绑定HTML元素的属性。

2. **v-model**：用于实现双向数据绑定，将表单元素的值与数据模型关联。

3. **v-for**：用于循环渲染列表数据。


4. **v-if / v-else**：用于条件性地渲染元素。

5. **v-show**：类似于v-if，但是通过CSS样式来控制元素的显示和隐藏。

6. **v-on**：用于监听DOM事件，并触发相应的方法。

7. **v-pre**：跳过元素和其子元素的编译过程，用于静态内容。

8. **v-cloak**：用于防止页面闪烁，通常与CSS一起使用。

9. **v-once**：只渲染元素和组件一次，不再进行响应式更新。

这些是Vue.js中一些常用的指令。每个指令都有不同的用途，可根据需要选择使用。指令使Vue应用程序更具交互性和动态性，能够根据数据的变化来更新页面内容。

### 2、vue实现双向绑定的原理是什么

Vue是通过数据劫持（Object.defineProperty）结合发布-订阅模式（Observer和Watcher）来实现响应式数据/双向绑定的。以下是Vue双向绑定的工作原理：

![An image](/img/vue1.png)

1. **数据劫持**：
   - Vue会遍历数据对象的每个属性，通过`Object.defineProperty`方法为每个属性添加`getter`和`setter`方法。
   - 当访问数据属性时，`getter`方法会被触发，用于收集依赖，将观察者（Watcher）添加到订阅者列表中。
   - 当修改数据属性时，`setter`方法会被触发，通知订阅者更新视图。

2. **Observer（观察者）**：
   - Observer负责监听数据对象，当数据发生变化时，通知订阅者进行更新。
   - Observer可以递归地监听嵌套对象的属性，确保整个数据对象都被劫持。

3. **Watcher（订阅者）**：
   - Watcher订阅数据的变化，每个Watcher实例与一个表达式（通常是模板中的表达式）相关联。
   - 当数据变化时，Watcher负责更新视图。

4. **Dep（依赖管理器）**：
   - Dep用于管理Watcher，每个数据属性都有一个对应的Dep实例。
   - 当数据属性被访问时，Watcher被添加到Dep的订阅者列表中。
   - 当数据属性被修改时，Dep通知订阅者（Watcher）进行更新。

5. **虚拟DOM**：
   - Vue使用虚拟DOM来提高性能。当数据发生变化时，Vue首先将变化应用到虚拟DOM上，然后通过比对虚拟DOM和实际DOM的差异，最小化DOM操作，从而提高性能。

通过上述机制，Vue实现了数据变化自动同步到视图，实现了双向绑定。当数据属性发生变化时，会触发setter，setter通知对应的Dep，Dep通知订阅了该数据属性变化的所有Watcher进行视图更新。这样就实现了数据和视图之间的双向绑定，使得应用程序的状态和界面保持同步。

### 3、v-if和v-show的区别

`v-if` 和 `v-show` 是 Vue.js 中用于控制元素显示和隐藏的两个指令，它们之间的主要区别在于：

1. **编译时判断 vs. 运行时判断**：
   - `v-if`：元素是否被渲染（包括子元素）是在编译阶段进行判断的。如果条件为假，元素及其子元素都不会被渲染到DOM中。
   - `v-show`：元素始终会被渲染到DOM中，但是它的 CSS `display` 属性会在运行时进行切换。如果条件为假，元素的 `display` 属性会被设置为 `none`，元素仍然存在于DOM中，只是不可见。

2. **性能**：
   - `v-if`：适用于在不需要显示的情况下完全删除元素，可以减少 DOM 节点数量，适用于切换频率较低的情况。
   - `v-show`：适用于频繁切换显示和隐藏的元素，因为它不会造成元素的重新渲染，但元素始终存在于DOM中。

3. **初始化开销**：
   - `v-if`：在条件为真时，初始化元素及其子元素的开销较大，因为它们需要在DOM中创建。
   - `v-show`：在初始化时，元素及其子元素都会被渲染到DOM中，但它们的 `display` 属性可能被设置为 `none`，因此初始化开销相对较小。

4. **适用场景**： 
   - 使用 `v-if` 当你需要在条件满足时完全添加或删除元素，或者在条件切换频率较低的情况下。
   - 使用 `v-show` 当你需要频繁切换元素的可见性而不想造成大量的 DOM 重新渲染，或者在元素的初始状态是可见的情况下。

总之，选择使用 `v-if` 还是 `v-show` 取决于具体的需求和性能考虑。如果需要频繁切换可见性并且元素的渲染开销较小，可以考虑使用 `v-show`。如果在条件不满足时希望彻底删除元素，或者条件切换频率较低，可以使用 `v-if`。

### 4、data为什么是一个函数

在Vue.js中，`data` 选项为函数的原因是为了确保每个组件实例都有自己的数据副本，而不是共享同一个数据对象。

当 `data` 是一个对象时，所有组件实例将共享同一个数据对象，这可能会导致意外的数据修改和不可预测的行为。通过将 `data` 定义为函数，每次创建组件实例时都会调用该函数返回一个新的数据对象，从而确保数据的独立性和组件的可预测性。

### 5、vue生命周期有哪些

Vue.js组件的生命周期是一系列特定的阶段，它们代表了组件从创建到销毁的整个过程。Vue.js的生命周期包括以下阶段：

1. **创建阶段（Creation）**：
   - `beforeCreate`: 组件实例被创建之前，此时组件的选项（如`data`、`methods`）还未初始化。
   - `created`: 组件实例已经被创建，可以访问`data`、`methods`等选项，但DOM元素尚未被挂载。

2. **挂载阶段（Mounting）**：
   - `beforeMount`: 在模板编译之后，但在DOM元素挂载之前被调用。
   - `mounted`: 组件已经挂载到DOM上，此时可以访问DOM元素。通常在这个阶段进行异步操作和数据获取。

3. **更新阶段（Updating）**：
   - `beforeUpdate`: 数据发生变化，但DOM尚未更新，此时可对数据进行处理。
   - `updated`: 数据已经更新，DOM已经重新渲染，此时可以执行DOM操作。

4. **销毁阶段（Destruction）**：
   - `beforeDestroy`: 在组件销毁之前调用，可以执行一些清理工作。
   - `destroyed`: 组件已经销毁，所有事件监听和定时器都已经被移除。

5. **错误处理阶段（Error Handling）**（Vue 2.x中的错误处理）：
   - `errorCaptured`: 当子组件的一个错误被捕获时触发，用于处理子组件中出现的错误。

这些生命周期钩子允许你在不同的阶段执行代码，以满足组件的需求。例如，在`created`中初始化数据，`mounted`中进行DOM操作，`beforeDestroy`中清理资源等。了解这些生命周期可以帮助你更好地管理和优化Vue组件。

- 拓展：[vue3生命周期](/note/vue3#组合式api-生命周期函数)

### 6、vue中组件之间是如何通信的

在Vue中，组件之间可以通过以下方式进行通信：

1. **Props（父子组件通信）**：
   - 父组件通过属性向子组件传递数据。
   - 子组件通过props接收父组件传递的数据。
   - 这是一种单向数据流，父组件向子组件传递数据。

2. **自定义事件（子父组件通信）**：
   - 子组件可以通过`$emit`方法触发自定义事件，传递数据给父组件。
   - 父组件可以使用`v-on`或`@`监听子组件触发的事件，并在事件处理程序中获取数据。
   - 这是一种从子组件到父组件的通信方式。

3. **Vuex（中央状态管理）**：
   - Vuex是Vue的官方状态管理库，用于管理应用中的共享状态。
   - 组件可以通过dispatch触发action，修改全局的状态。
   - 其他组件可以通过getter获取全局状态。
   - 适用于大型应用或需要多个组件之间共享状态的情况。

4. **事件总线（非父子组件通信）**：
   - 通过创建一个事件总线实例，组件可以通过事件总线进行通信。
   - 一个组件可以触发事件，而其他组件可以监听这些事件并做出响应。

选择通信方式取决于组件之间的关系和需求。一般来说，应该尽量避免直接修改父组件的数据，而是通过props和自定义事件来实现数据的传递和响应。当需要跨越多个组件的通信或全局状态管理时，考虑使用Vuex。

- 拓展：[Vue3事件通信](/project/ggzx/index1#一、vue3组件通信)

### 7、v-for中key值的作用

`v-for` 中的 `key` 属性的作用是帮助 Vue 跟踪每个节点的变化，从而更高效地更新虚拟 DOM。

通过使用key给每个节点做一个唯一标识，Diff算法就可以正确识别此节点，找到正确的位置插入新的节点。如果没有 `key`，有可能会出现数据混乱的情况。


### 8、Computed 和 Watch 的区别

`computed`和`watch`是Vue.js中用于响应数据变化的两种不同方式，它们的主要区别如下：

**Computed（计算属性）**：

1. **自动追踪依赖**：`computed`属性会自动追踪其依赖的响应式数据，只有依赖数据发生变化时，计算属性才会重新计算。

2. **缓存**：计算属性的结果会被缓存起来，只有当依赖发生变化时才会重新计算，多次访问同一计算属性不会重复计算，这有助于提高性能。

3. **声明式**：计算属性以声明式的方式定义，类似于普通的对象属性，而不是方法。

4. **用于派生数据**：通常用于派生或计算基于已有数据的属性，例如计算总价、过滤数据等。

**Watch（监听）**：

1. **手动设置监听**：`watch`属性允许你手动设置要监听的数据，并在数据变化时执行自定义的回调函数。

2. **无缓存**：`watch`没有缓存机制，每次数据变化都会触发回调函数执行。

3. **适用于副作用操作**：常用于需要执行副作用操作的情况，例如异步操作、数据持久化、动画等。

4. **更灵活**：相对于计算属性，`watch`更灵活，因为你可以在回调函数中执行任何操作，不仅限于返回一个计算结果。

在选择使用`computed`还是`watch`时，取决于你的需求和具体场景。如果你需要派生数据、自动追踪依赖并且有缓存需求，通常会选择`computed`。如果需要监听数据变化执行自定义操作或需要更灵活的控制，可以选择`watch`。有时，你可能会同时使用两者，以满足不同的需求。

### 9、Mixin是什么

`Mixin`（混入）是一种在Vue.js中用于共享组件选项的技术。它允许你定义可复用的组件选项，然后将这些选项混入到多个组件中，以实现代码重用和组件配置的共享。

当一个组件使用了 mixin，它会合并 mixin 中的选项到自身的选项中，从而扩展了组件的功能。如果 mixin 和组件本身具有相同的选项，组件选项会覆盖 mixin 的选项。

使用Mixin的优点包括：

1. **代码重用**：Mixin 允许你将常用的功能和逻辑抽象为可复用的组件选项，减少了重复编写相似代码的工作。

2. **组件配置共享**：多个组件可以共享相同的配置和行为，从而保持一致性。

3. **灵活性**：Mixin 可以在不同的组件中组合使用，使你可以根据需要自由组合不同的功能。

4. **可维护性**：将相似的功能提取到 Mixin 中，使代码更易于维护和更新。

Mixin 的使用示例：

```javascript
// 定义一个名为 myMixin 的 mixin
const myMixin = {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}

// 在组件中使用 mixin
export default {
  mixins: [myMixin],
  created() {
    this.increment()
  }
}
```

在上述示例中，`myMixin` 包含了 `data` 和 `methods` 选项，然后将它混入了一个组件中。这个组件继承了 `myMixin` 的 `count` 数据和 `increment` 方法。

需要注意的是，如果 mixin 和组件本身具有相同的选项，组件选项会覆盖 mixin 的选项。如果有冲突，组件选项将具有更高的优先级。

总之，Mixin 是一种强大的代码复用和组件配置共享机制，可帮助开发者更有效地组织和管理Vue.js应用程序中的代码。

### 10、v-if和v-for为什么不建议一起使用

在 Vue 中，`v-if` 和 `v-for` 可以一起使用，但需要注意一些潜在的问题和注意事项，因为它们在模板中的交互可能会导致一些意外的结果或性能问题。

主要的问题是：当你同时在同一个元素上使用 `v-if` 和 `v-for` 时，`v-for` 的优先级高于 `v-if`。这意味着 `v-for` 会在 `v-if` 之前执行，这可能导致不必要的渲染或遍历。在某些情况下，这可能会影响性能。

考虑以下示例：

```vue
<ul>
  <li v-for="item in items" v-if="item.isActive">
    {{ item.text }}
  </li>
</ul>
```

在这个示例中，`v-for` 会对数组 `items` 进行遍历，但在遍历之后，`v-if` 才会检查 `item.isActive` 的条件。这意味着即使 `item.isActive` 为 `false`，`v-for` 也会渲染 `<li>` 元素，然后通过 `v-if` 将其隐藏。

为了解决这个问题，可以考虑使用计算属性或过滤器来筛选数据，而不是在模板中同时使用 `v-for` 和 `v-if`。这将确保只有满足条件的数据会被渲染，提高了性能和代码的可读性。

示例：

```vue
<ul>
  <li v-for="item in filteredItems">
    {{ item.text }}
  </li>
</ul>

// 在组件中定义计算属性 filteredItems
computed: {
  filteredItems() {
    return this.items.filter(item => item.isActive);
  }
}
```

这样做可以更有效地筛选数据，并确保只有满足条件的数据被渲染，避免了不必要的渲染和遍历。

### 11、简单谈谈你对vue3.0的理解

1. vue3运行速度比vue2快，配合Vite代码编译速度非常快
2. vue3使用`vue-create`或者`vite`创建项目，而vue2使用`vue-cli`
3. 数据双向绑定从`Object.defineProperty`变成了`new Proxy`，不再使用`$set`和`this`了     [ˈprɒksi]
4. 写法上由选项式API变为组合式API，同时兼容选项式API
5. vue3生命周期函数没有`beforecreate`和`created`了，改为`setup`了，其他的生命周期函数在vue2的基础上加了一个on的前缀
6. Vue3可以更好的支持`TypeScript`

在 Vue 3 中，组合式 API 基本上都会配合 `<script setup>` 语法在单文件组件中使用。下面是一个使用组合式 API 的组件示例：

```js
<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 更改状态、触发更新的函数
function increment() {
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log(`计数器初始值为 ${count.value}。`)
})
</script>

<template>
  <button @click="increment">点击了：{{ count }} 次</button>
</template>

```

## 二、VueRouter&Vuex

### 1、路由传递参数的方式

在Vue.js的路由中，你可以使用多种方法传递参数给路由，并在目标路由组件中获取这些参数。以下是传递参数和获取参数的方法：

**传递参数的方法**：

1. **路由动态参数（Dynamic Route Parameters）**：
   - 在路由配置中使用占位符来定义路由参数，例如：`/user/:userId`。
   - 在路由链接或编程式导航时，通过`params`属性传递参数。
   - 示例：
     ```html
     <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
     ```
     或
     
     ```javascript
     this.$router.push({ name: 'user', params: { userId: 123 }})
     ```

2. **查询参数（Query Parameters）**：
   - 在URL中使用查询参数传递数据，例如：`/user?userId=123`。
   - 通过`query`属性传递参数。
   - 示例：
     ```html
     <router-link :to="{ name: 'user', query: { userId: 123 }}">User</router-link>
     ```
     或  

     ```javascript
     this.$router.push({ name: 'user', query: { userId: 123 }})
     ```

3. **路由元信息（Route Meta Fields）**：
   - 在路由配置中使用`meta`字段来定义元信息，然后将数据存储在元信息中，供路由组件访问。
   - 示例：
     ```javascript
     // 路由配置
     { path: '/user', component: User, meta: { userId: 123 } }
     ```

**获取参数的方法**：

1. **通过`$route`对象获取路由参数**：
   - 在路由组件中，你可以通过`this.$route.params`来访问路由参数。
   - 示例：
     ```javascript
     // 在路由组件中获取路由参数
     const userId = this.$route.params.userId
     ```

2. **通过`$route`对象获取查询参数**：
   - 如果你使用了查询参数，可以通过`this.$route.query`来访问查询参数。
   - 示例：
     ```javascript
     // 在路由组件中获取查询参数
     const userId = this.$route.query.userId
     ```

3. **通过`$route`对象获取路由元信息**：
   - 如果参数存储在路由元信息中，你可以通过`this.$route.meta`来访问元信息中的参数。
   - 示例：
     ```javascript
     // 在路由组件中获取路由元信息中的参数
     const userId = this.$route.meta.userId
     ```

这些方法允许你在Vue路由中传递和获取参数，具体的选择取决于你的应用程序的需求和设计。路由参数通常用于表示资源的标识符，查询参数通常用于过滤、排序或其他操作，而路由元信息通常用于存储与路由相关的数据。

### 2、路由守卫有哪些

Vue Router提供了一系列的路由守卫，用于在导航过程中控制路由的行为。这些路由守卫包括以下几种：

1. **全局前置守卫（Global Before Guards）**：
   - `beforeEach(to, from, next)`：在每次路由跳转前调用，用于全局的导航守卫。
   - `beforeResolve(to, from, next)`：在导航被确认之前，同时在所有组件被解析之后调用。

2. **路由独享守卫（Per-Route Guard）**：
   - `beforeEnter(to, from, next)`：在单个路由配置中定义的守卫，仅适用于该路由。

3. **组件内守卫（In-Component Guard）**：
   - `beforeRouteEnter(to, from, next)`：在路由进入该组件前调用，不能访问`this`上下文，但可以通过`next`回调访问组件实例。
   - `beforeRouteUpdate(to, from, next)`：在当前路由改变，但该组件被复用时调用，也不能访问`this`上下文。
   - `beforeRouteLeave(to, from, next)`：在路由离开该组件时调用，用于阻止离开或确认是否离开。

这些路由守卫的作用包括：

- **全局前置守卫**用于全局的导航守卫，可以用于验证用户身份、权限等。
- **路由独享守卫**用于单个路由配置中，可以用于特定路由的验证。
- **组件内守卫**用于在组件内部进行特定路由的验证，例如在进入组件前验证数据加载。

通过使用这些路由守卫，你可以实现诸如身份验证、权限控制、数据加载、页面跳转等各种导航控制逻辑，以满足应用程序的需求。每个守卫都有其特定的用途和时机，允许你对路由的各个方面进行精细的控制。

### 3、hash和history模式的区别

Vue Router支持两种路由模式：Hash 模式（Hash Mode）和 History 模式（History Mode）。它们之间的主要区别在于 URL 的显示方式和对浏览器的兼容性。

1. **Hash 模式**：
   - URL 格式：`http://example.com/#/your-route`
   - 使用 `#` 符号来分隔基础 URL 和路由路径。
   - 在不支持 HTML5 History API 的老旧浏览器中也能正常工作，因为路由信息存储在 URL 的哈希部分，不会导致页面刷新。
   - 好处是兼容性好，可以在大多数环境中使用。
   - 缺点是 URL 显示不够友好，且带有 `#` 符号。

2. **History 模式**：
   - URL 格式：`http://example.com/your-route`
   - 使用 HTML5 History API，不带 `#` 符号。
   - URL 显示更友好，更类似传统网站的 URL。
   - 需要服务器端配置以支持在路由路径上的刷新，否则会导致404错误。
   - 不支持HTML5 History API的老浏览器可能无法正常工作。

选择使用哪种路由模式取决于项目的需求和对浏览器兼容性的要求。如果需要在老浏览器中使用或不想进行服务器配置，可以选择 Hash 模式。如果希望URL更友好，并且可以在支持HTML5 History API的环境中工作，可以选择 History 模式。

在Vue Router中，你可以使用以下方式来配置路由模式：

```javascript
const router = new VueRouter({
  mode: 'history', // 使用History模式
  routes: [...]
})
```

或者使用 Hash 模式：

```javascript
const router = new VueRouter({
  mode: 'hash', // 使用Hash模式
  routes: [...]
})
```

无论你选择哪种模式，Vue Router都会提供相应的路由功能来管理你的应用程序的导航。

### 4、$router和$route的区别

在 Vue Router 中，`$router` 和 `$route` 都是与路由相关的属性，但它们有不同的作用和用法：

1. **$router**：
   - `$router` 是 Vue Router 的路由实例，它提供了导航和路由跳转的方法。
   - 通过 `$router`，你可以访问诸如 `push`、`replace`、`go` 等方法，用于在不同路由之间进行导航。
   - `$router` 还提供了路由信息，包括当前的路由路径、参数、查询参数等。
   - 通常在组件中通过 `this.$router` 来访问路由实例。

示例：
```javascript
// 在组件中使用 $router
methods: {
  goToAboutPage() {
    this.$router.push('/about');
  }
}
```

2. **$route**：
   - `$route` 是当前活动路由的路由信息对象，它包含了当前路由的各种属性，如路径、参数、查询参数、哈希值等。
   - 通过 `$route`，你可以访问当前路由的信息，以便在组件中根据路由信息进行逻辑处理。
   - `$route` 是只读的，不能用于导航，只用于获取当前路由的信息。
   - 通常在组件中通过 `this.$route` 来访问当前路由信息。

示例：
```javascript
// 在组件中使用 $route
computed: {
  currentRouteInfo() {
    return this.$route.path; // 获取当前路由的路径
  }
}
```

总结：
- `$router` 是路由实例，用于路由导航和跳转。
- `$route` 是当前活动路由的信息对象，用于获取当前路由的各种属性。
### 5、Vuex是什么？

Vuex是一个用于Vue.js应用程序的状态管理库，它用于管理和共享应用程序中的数据状态。Vuex的主要目的是解决Vue组件之间共享数据、状态管理和通信的复杂性，特别是在大型单页应用中。

Vuex的核心概念包括：

1. **State（状态）**：应用程序中的数据状态，以对象的形式存储。所有需要共享的数据都存储在state中。

2. **Mutation（变更）**：用于修改状态的方法，通常是同步的。Mutations是唯一允许修改state的地方。

3. **Action（动作）**：用于触发异步操作和提交Mutations，它们可以包含业务逻辑、数据获取等操作。

4. **Getter（获取器）**：用于从state中派生数据，可以像计算属性一样使用。

5. **Module（模块）**：用于将store拆分成多个模块，每个模块可以拥有自己的state、mutations、actions等。

要修改状态，你通常会使用mutations或actions，具体取决于操作的同步或异步性质。下面是如何使用mutations和actions来修改状态的示例：

**使用mutations修改状态**：

```javascript
// 定义mutation
const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  }
};

// 在组件中提交mutation
this.$store.commit('increment');
```

**使用actions修改状态**：

```javascript
// 定义action
const actions = {
  async fetchData({ commit }) {
    try {
      const response = await fetchDataFromServer();
      commit('setData', response.data);
    } catch (error) {
      commit('setError', error.message);
    }
  }
};

// 在组件中分发action
this.$store.dispatch('fetchData');
```

在上述示例中，mutations用于同步操作，而actions用于处理异步操作。通过提交mutation或分发action，你可以修改Vuex中的状态数据。

- 拓展：[pinia用法](/project/ggzx/index1#_1-8-pinia)

## 三、微信小程序

### 1、简述一下微信小程序的文件类型

微信小程序包含多种类型的文件，每种文件类型在小程序的开发和运行过程中有不同的用途和限制。以下是微信小程序的主要文件类型：

1. **JSON 文件**：
   - `.json` 文件用于配置小程序的全局配置信息，如页面路径、窗口设置、导航栏样式等。
   - `app.json` 是小程序的全局配置文件，每个小程序至少有一个。
   - 页面配置文件（如`page.json`）可以单独配置某个页面的特定属性。

2. **WXML 文件**：
   - `.wxml` 文件用于编写小程序的页面结构，类似于HTML。
   - WXML 支持数据绑定、条件渲染、列表渲染等功能。

3. **WXSS 文件**：
   - `.wxss` 文件用于编写小程序的页面样式，类似于CSS。
   - WXSS 支持类似 CSS 的选择器和属性，但也有一些微信小程序特定的样式语法。

4. **JS 文件**：
   - `.js` 文件用于编写小程序的逻辑层代码，包括页面的交互逻辑、数据处理等。
   - 小程序中的 JavaScript 代码遵循 CommonJS 规范，可以使用 `require()` 导入模块。

5. **WXS 文件**：
   - `.wxs` 文件是小程序的模块脚本文件，用于处理一些复杂的逻辑和计算，类似于 JavaScript。
   - WXS 代码在运行时独立于页面的事件处理函数运行，可以提高性能。


小程序的文件类型和规范可以根据开发需要逐一了解和使用。不同文件类型有不同的用途和约束，开发者需要遵守微信小程序的文件命名规则和目录结构要求。

### 2、小程序的生命周期函数

微信小程序有一系列生命周期函数，它们用于管理小程序的生命周期事件，允许开发者在不同阶段执行特定的逻辑。以下是主要的小程序生命周期函数：

- `onLoad()` 页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数
- `onShow()` 页面显示/切入前台时触发。
- `onReady()` 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互
- `onHide()` 页面隐藏/切入后台时触发。 如 navigateTo 或底部 tab 切换到其他页面，小程序切入后台等
- `onUnload()` 页面卸载时触发。如 redirectTo 或 navigateBack 到其他页面时

### 3、列举微信小程序常用组件和api函数
以下是微信小程序中常用的5个组件和5个API函数：

常用组件：

1. **`<view>` 组件**：
   - `<view>` 组件用于创建一个视图容器，可以包含其他组件和文本。
   - 它类似于HTML中的 `<div>`，用于布局和样式控制。

2. **`<text>` 组件**：
   - `<text>` 组件用于显示文本内容，支持文本样式设置。
   - 可以用于显示静态文本或动态文本内容。

3. **`<button>` 组件**：
   - `<button>` 组件用于创建按钮，用户可以点击来触发事件。
   - 可以通过绑定事件监听器实现按钮的交互功能。

4. **`<image>` 组件**：
   - `<image>` 组件用于显示图片，支持本地图片和网络图片。
   - 可以用于显示头像、图标、广告等图片内容。

5. **`<input>` 组件**：
   - `<input>` 组件用于创建输入框，允许用户输入文本。
   - 可以通过监听输入事件来获取用户输入的内容。

常用API函数：

1. **`wx.navigateTo`**：
   - `wx.navigateTo` 用于页面跳转，将页面入栈到页面栈中。
   - 可以用于实现页面之间的导航。

2. **`wx.request`**：
   - `wx.request` 用于发送网络请求，支持GET、POST等HTTP请求方式。
   - 可以用于获取远程数据，如接口数据或JSON数据。

3. **`wx.showToast`**：
   - `wx.showToast` 用于显示轻量级的提示框，如成功提示、错误提示等。
   - 可以用于给用户反馈信息。

4. **`wx.getStorageSync`**：
   - `wx.getStorageSync` 用于同步获取本地缓存的数据。
   - 可以用于存储和读取小程序的本地数据。

5. **`wx.getLocation`**：
   - `wx.getLocation` 用于获取用户的地理位置信息。
   - 可以用于实现位置相关的功能，如地图、附近的店铺等。

这些组件和API函数是微信小程序开发中经常使用的一些基本元素，用于构建小程序界面和实现功能。开发者可以根据具体的需求和场景来选择合适的组件和API函数。

### 4、小程序页面间有哪些传递数据的方法?

- 使用全局变量实现数据传递

在 app.js 文件中定义全局变量 `globalData`， 将需要存储的信息存放在里面

```js
// app.js
App({
     // 全局变量
  globalData: {
    userInfo: null
  }
})
```
> 使用的时候，直接使用 getApp() 拿到存储的信息

- 传参

使用 `wx.navigateTo` 与 `wx.redirectTo` 的时候，可以将部分数据放在 url 里面，并在新页面 onLoad 的时候初始化

```js
// Navigate
wx.navigateTo({
  url: '../pageD/pageD?name=raymond&gender=male',
})

// Redirect
wx.redirectTo({
  url: '../pageD/pageD?name=raymond&gender=male',
})

// pageB.js
...
Page({
  onLoad: function(option){
    console.log(option.name + 'is' + option.gender)
    this.setData({
      option: option
    })
  }
})
```
> 需要注意的问题：wx.navigateTo 和 wx.redirectTo 不允许跳转到 tab 所包含的页面，onLoad 只执行一次

- 使用本地缓存

### 5、如何优化首次加载小程序的速度？

1. 包体积优化

- 分包加载（优先采用，大幅降低主包体积）。
- 图片优化（1.使用tinypng压缩图片素材； 2.服务器端支持，可采用webp格式）。
- 组件化开发（易维护）。
- 减少文件个数及冗余数据。



2. 请求优化

- 关键数据尽早请求(onLoad()阶段请求,次要数据可以通过事件触发再请求)；整合请求数据，降低请求次数。
- 采用cdn缓存静态的接口数据（如判断用户登录状态，未登录则请求缓存接口数据），cdn稳定且就近访问速度快（针对加载总时长波动大）。
缓存请求的接口数据。



3. 首次渲染优化

- 图片懒加载（节省带宽）。
- setData优化（不要一次性设置过多的数据等）。
- DOM渲染优化（减少DOM节点）

### 6、拓展

- 详见 [小程序面试题](/interview/index5#三、小程序面试题)







