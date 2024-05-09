---
outline: deep
---
# vue进阶

## 一、Vue Router

### 1、路由入门

Vue Router（或简称Vue路由器）是Vue.js官方提供的用于处理路由的库，它允许你在Vue.js应用中实现客户端路由。Vue Router的主要功能是管理应用程序的URL和视图之间的映射关系，从而允许你构建单页面应用（SPA）以及多页面应用（MPA）。

以下是使用Vue Router的一般步骤：

**1. 安装Vue Router**

首先，确保你的Vue.js项目已经创建。然后，你可以使用npm或yarn来安装Vue Router。

```bash
npm install vue-router
# 或者
yarn add vue-router
```

**2. 创建Vue Router实例**

在Vue项目的根目录下，通常会创建一个名为`router.js`的文件来配置和创建Vue Router实例。在该文件中，你需要引入Vue和Vue Router，然后创建一个新的Vue Router实例，并配置路由规则。

```javascript
// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入路由对应的组件
import Home from './components/Home.vue';
import About from './components/About.vue';

// 使用Vue Router插件
Vue.use(VueRouter);

// 创建Vue Router实例并配置路由规则
const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
});

export default router;
```

**3. 集成Vue Router**

在Vue项目的入口文件（通常是`main.js`）中，导入Vue Router实例并将其集成到Vue根实例中。

```javascript
// main.js
import Vue from 'vue';
import App from './App.vue';
import router from './router'; // 引入Vue Router实例

new Vue({
  render: h => h(App),
  router, // 集成Vue Router
}).$mount('#app');
```

**4. 使用路由**

现在，你可以在Vue组件中使用路由了。在模板中，你可以使用`<router-link>`来创建链接，使用`<router-view>`来渲染匹配的组件。

```vue
<!-- App.vue -->
<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    
    <router-view></router-view>
  </div>
</template>
```

在上述代码中，`<router-link>` 用于导航到不同的路由，`<router-view>` 用于渲染匹配当前路由的组件。

这只是Vue Router的基本用法示例。你可以根据具体需求配置更复杂的路由规则，包括嵌套路由、路由参数、导航守卫等。

总之，Vue Router是Vue.js应用中用于处理路由的核心库，它提供了强大的工具和API来管理应用程序的路由。通过上述步骤，你可以轻松地集成和使用Vue Router来构建具有多页面导航的Vue应用。

### 2、路由重定向

路由的重定向是指将一个路由重定向到另一个路由，这意味着当用户访问某个特定的路由时，应用程序会自动将用户重定向到另一个路由，而不是展示原始路由对应的组件。路由重定向通常用于导航控制和路由管理中，以确保用户访问正确的页面或视图。

在Vue Router中，你可以使用路由重定向来实现这一功能。以下是一个示例，说明如何在Vue Router中进行路由重定向的配置：

```javascript
const router = new VueRouter({
  routes: [
    // 将根路径重定向到 /home
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    // 当用户访问 /profile 时，重定向到 /about
    { path: '/profile', redirect: '/about' },
  ]
});
```

在上述示例中：

1. 第一个路由规则 `{ path: '/', redirect: '/home' }` 将根路径 `/` 重定向到 `/home`。这意味着当用户访问应用的根路径时，会自动跳转到 `/home` 路由。

2. 第二个路由规则 `{ path: '/profile', redirect: '/about' }` 将 `/profile` 路由重定向到 `/about`。这意味着当用户访问 `/profile` 时，会自动跳转到 `/about` 路由，展示 `/about` 对应的组件。

路由重定向非常有用，它可以用于多种场景，如：

- 保证旧的路由路径仍然可以被访问，但会重定向到新的路径。
- 为了统一用户体验，将某个路径的访问重定向到默认页面。
- 处理用户访问权限，如果用户没有权限访问某个路由，可以将其重定向到登录页面或其他适当的页面。

通过配置路由重定向，你可以更灵活地控制和管理应用程序的导航和路由跳转。
### 3、路由传参

通过路由传递和接收参数在Vue Router中有多种方式，取决于你的需求和应用的设计。以下是一些常见的方法：

**1. 路由参数（Route Parameters）**

路由参数是将参数直接包含在路由路径中的一种方式。你可以在路由规则中定义参数，然后在URL中通过占位符来传递这些参数。在接收参数时，你可以在组件中通过 `$route.params` 来访问它们。

首先，在路由配置中定义参数：

```javascript
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: UserProfile },
  ]
});
```

然后，在接收参数的组件中通过 `$route.params` 来访问路由参数：

```vue
<template>
  <div>
    <p>User ID: {{ $route.params.id }}</p>
  </div>
</template>
```

当用户访问 `/user/123` 时，`$route.params.id` 将包含值 `123`。

**2. 查询参数（Query Parameters）**

查询参数是将参数作为键值对添加到URL的一种方式。通常用于传递可选参数。在接收参数时，你可以在组件中通过 `$route.query` 来访问它们。

在接收参数的组件中通过 `$route.query` 来访问查询参数：

```vue
<template>
  <div>
    <p>User ID: {{ $route.query.id }}</p>
    <p>User Name: {{ $route.query.name }}</p>
  </div>
</template>
```

URL示例：`/user?id=123&name=John`

**3. 使用路由对象（Route Objects）**

你可以在编程式导航时，通过路由对象来传递参数。这种方式适用于需要在组件之间传递数据而不仅仅是在URL中传递的情况。

在组件内部，你可以使用 `$router.push` 或 `$router.replace` 来导航，并在路由对象的 `params` 或 `query` 属性中传递参数：

```javascript
// 在组件内部
this.$router.push({ name: 'user', params: { id: 123 } });
// 或者
this.$router.push({ path: '/user', query: { id: 123 } });
```

在接收参数的组件中，你可以通过 `$route.params` 访问路由参数，通过 `$route.query` 访问查询参数。

**4. 使用props传递参数**

在路由配置中，你可以使用 `props` 选项将路由参数作为组件的props传递给目标组件。这种方式适用于希望在组件内部访问参数而不是在路由路径中显示参数的情况。

在路由配置中启用props传递：

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id',
      component: UserProfile,
      props: true, // 启用props传递
    },
  ],
});
```

在接收参数的组件中，你可以直接接收参数作为props：

```vue
<template>
  <div>
    <p>User ID: {{ id }}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
};
</script>
```

这些方法提供了不同的选项，以满足不同的需求和场景。你可以根据具体的应用程序需求选择最适合的方法来传递和接收路由参数。
### 4、命名路由

命名路由是Vue Router中的一项功能，它允许你为路由规则分配一个名称（名称路由），以便在代码中引用该名称，而不仅仅是依赖于路由路径。这对于构建具有复杂路由结构的应用非常有用，因为它使路由配置更加清晰和可维护。

要使用命名路由，首先在路由配置中为每个路由规则指定一个`name`属性。以下是一个示例：

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home', // 命名路由为 'home'
    },
    {
      path: '/about',
      component: About,
      name: 'about', // 命名路由为 'about'
    },
    {
      path: '/contact',
      component: Contact,
      name: 'contact', // 命名路由为 'contact'
    },
  ]
});
```

在上述示例中，每个路由规则都分配了一个名称，分别是 `'home'`、`'about'` 和 `'contact'`。

接下来，你可以在Vue组件内部或通过编程式导航使用这些命名路由。

**在Vue组件内部使用命名路由**：

```vue
<template>
  <div>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'contact' }">Contact</router-link>
  </div>
</template>
```

上述示例中，`<router-link>` 中使用了 `:to` 属性来引用命名路由，从而生成相应的链接。

**通过编程式导航使用命名路由**：

```javascript
// 在组件内部
this.$router.push({ name: 'about' });
```

上述示例中，`this.$router.push` 使用命名路由来导航到 `'about'` 路由。

使用命名路由有助于提高代码的可读性和可维护性，特别是在具有复杂路由结构的应用中。它使得在多个地方引用相同的路由规则变得更加容易，同时也有助于减少硬编码路由路径的情况，使得代码更具灵活性和可维护性。
### 5、路由懒加载

在Vue Router中，你可以使用路由懒加载来延迟加载路由组件。通常，你会使用Webpack的代码分割（Code Splitting）功能来实现路由懒加载，Webpack会将每个路由组件打包为单独的文件，只有在访问相关路由时才会加载相应的文件。

以下是如何在Vue Router中实现路由懒加载的示例：

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: () => import('./views/Home.vue') // 使用import函数进行懒加载
    },
    {
      path: '/about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/contact',
      component: () => import('./views/Contact.vue')
    }
  ]
});
```

在上述示例中，每个路由规则都使用了 `component` 属性的函数形式，并在函数中使用 `import` 函数来动态导入路由组件。这样，当用户首次访问某个路由时，相关的组件才会被下载和渲染，而不是一开始就加载所有路由组件。

使用路由懒加载可以显著减小初始加载时的文件大小，因此加速了应用程序的启动速度。这对于大型应用或包含许多路由的应用来说尤其重要，因为它避免了一次性下载和解析大量JavaScript代码，而只加载用户实际需要的部分。

需要注意的是，路由懒加载依赖于Webpack或其他打包工具的代码分割功能，因此在使用时，你需要确保项目中已经配置了适当的构建工具和插件。
### 6、路由元信息

路由元信息（Route Meta Information）是Vue Router中的一个概念，它允许你向路由规则添加自定义的数据信息，这些信息不会影响路由的匹配和导航，但可以在导航守卫、路由钩子函数以及组件内部访问，以便在路由导航过程中执行一些逻辑或控制。

路由元信息通常包含一些额外的数据，例如页面的标题、页面权限、布局信息等。你可以根据需要在每个路由规则中添加元信息，并在组件内部或导航守卫中使用这些信息。

以下是一个示例，演示如何在Vue Router中使用路由元信息：

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: '首页', // 页面标题
        requiresAuth: true, // 是否需要身份验证
      },
    },
    {
      path: '/about',
      component: About,
      meta: {
        title: '关于我们',
        requiresAuth: false,
      },
    },
  ]
});
```

在上述示例中，每个路由规则都有一个`meta`属性，其中包含了路由元信息。`meta`属性可以存储任意自定义的数据。

然后，你可以在导航守卫、路由钩子函数或组件内部访问路由元信息。以下是一些示例：

**在导航守卫中使用元信息**：

```javascript
router.beforeEach((to, from, next) => {
  // 获取元信息中的requiresAuth值，判断是否需要身份验证
  const requiresAuth = to.meta.requiresAuth;

  if (requiresAuth && !isAuthenticated) {
    // 如果需要身份验证但未登录，导航到登录页面
    next('/login');
  } else {
    // 否则继续导航
    next();
  }
});
```

**在组件内部使用元信息**：

```vue
<template>
  <div>
    <h1>{{ $route.meta.title }}</h1>
    <!-- 显示页面标题 -->
    <!-- 其他组件内容 -->
  </div>
</template>
```

上述示例中，`$route.meta.title` 用于在组件中显示页面的标题。

路由元信息是一种强大的工具，它可以帮助你在应用程序中添加和管理额外的路由数据，从而更好地控制和定制应用的行为。你可以根据需要为每个路由规则定义不同的元信息，以满足应用程序的需求。
### 7、路由模式

路由模式（Route Mode）是指在使用Vue Router（Vue.js的路由管理器）时，用于控制URL的显示和处理的一种配置方式。Vue Router支持两种主要的路由模式：哈希模式（Hash Mode）和历史模式（History Mode）。

1. **哈希模式（Hash Mode）**：

   - 默认情况下，Vue Router使用哈希模式，URL中的路由路径前会有一个 `#` 符号，例如：`http://example.com/#/about`。
   - 哈希模式的优点是它在大多数情况下无需特殊的服务器配置，并且可以在不同的浏览器中正常运行。
   - 哈希模式的缺点是URL中有 `#` 符号，不太美观，且不太利于搜索引擎优化（SEO）。

   在Vue中配置哈希模式路由：

   ```javascript
   const router = new VueRouter({
     mode: 'hash',
     routes: [
       // 路由规则
     ],
   });
   ```

2. **历史模式（History Mode）**：

   - 历史模式使用常规的URL路径，不带 `#` 符号，例如：`http://example.com/about`。
   - 历史模式的优点是URL更加友好和美观，更符合传统的Web应用程序URL风格，有利于SEO。
   - 历史模式的缺点是需要服务器配置以确保在不同的路由访问时返回正确的页面，否则会导致404错误。

   在Vue中配置历史模式路由：

   ```javascript
   const router = new VueRouter({
     mode: 'history',
     routes: [
       // 路由规则
     ],
   });
   ```

你可以根据应用的需求和服务器配置的能力来选择使用哪种路由模式。哈希模式是默认的模式，适用于简单的单页应用。历史模式更适合需要更友好URL以及SEO的应用，但需要服务器配置支持。注意，在使用历史模式时，需要确保服务器配置了类似的重定向规则，以避免刷新页面时出现404错误。

### 8、导航守卫

路由导航守卫是Vue Router中的一种功能，允许你在路由导航过程中拦截、控制和执行一些操作。导航守卫提供了一些钩子函数，可以在导航到不同路由时执行特定的逻辑，例如验证用户权限、跳转前确认等。以下是一些常见的导航守卫钩子函数以及示例：

**1. `beforeEach` 钩子**

`beforeEach` 钩子会在每个路由切换前执行，用于全局的路由守卫逻辑。你可以在这里进行路由权限验证或其他操作。

```javascript
const router = new VueRouter({
  routes: [
    // 路由规则
  ],
});

router.beforeEach((to, from, next) => {
  // 在切换路由前执行的逻辑
  if (to.meta.requiresAuth && !isAuthenticated) {
    // 如果需要身份验证但未认证，取消导航并跳转到登录页面
    next('/login');
  } else {
    // 放行路由
    next();
  }
});
```

**2. `beforeResolve` 钩子**

`beforeResolve` 钩子在导航被确认之前调用，但在渲染路由组件之前执行，用于在路由组件渲染前获取数据或进行数据处理。

```javascript
router.beforeResolve((to, from, next) => {
  // 在导航被确认之前执行的逻辑
  // 通常用于异步获取数据或数据处理
  fetchData().then(() => {
    next();
  });
});
```

**3. `afterEach` 钩子**

`afterEach` 钩子在每个路由切换完成后被调用，通常用于执行一些全局的操作，如页面滚动或记录访问日志。

```javascript
router.afterEach((to, from) => {
  // 在路由切换完成后执行的逻辑
  // 可以用于页面滚动或访问日志记录等操作
  window.scrollTo(0, 0);
  logPageVisit(to);
});
```

**4. 路由独享的守卫**

除了全局守卫，你还可以在路由规则中使用 `beforeEnter` 字段定义独立的守卫函数，这些守卫函数只会在特定路由规则下触发。

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/admin',
      component: Admin,
      beforeEnter: (to, from, next) => {
        // 在/admin路由独享的守卫中执行的逻辑
        if (isAdmin) {
          next(); // 放行路由
        } else {
          next('/login'); // 未认证时跳转到登录页面
        }
      },
    },
  ],
});
```

**5. 组件内的守卫**

在Vue组件内部，你可以定义以下钩子函数来处理路由导航守卫逻辑：

- `beforeRouteEnter`: 在路由进入组件前被调用。
- `beforeRouteUpdate`: 在当前路由改变，但组件被复用时被调用。
- `beforeRouteLeave`: 在离开当前组件的路由时被调用。

```vue
<template>
  <!-- 组件内容 -->
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    // 在路由进入组件前执行的逻辑
    if (/* 条件满足 */) {
      next(); // 放行路由
    } else {
      next('/error'); // 不满足条件时跳转到错误页面
    }
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变但组件被复用时执行的逻辑
  },
  beforeRouteLeave(to, from, next) {
    // 在离开当前组件的路由时执行的逻辑
  },
};
</script>
```

这些导航守卫钩子函数可以帮助你在路由导航过程中执行各种操作，从而实现更高级的路由控制和应用程序逻辑。根据需要，你可以选择使用全局守卫、路由独享守卫或组件内的守卫来满足特定的需求。

## 二、vuex

### 1、vuex概述

Vuex 是一个用于管理 Vue.js 应用程序中的状态的状态管理库。它是 Vue.js 官方推荐的解决方案之一，用于解决 Vue.js 应用中组件之间共享状态的问题。

![vuex](/img/vuex.png)

Vuex 的核心概念包括：

1. **State（状态）**：存储应用程序的状态数据，通常是一个对象。

2. **Mutations（变更）**：定义用于修改状态的方法，这些方法必须是同步的。Mutations 是 Vuex 中改变状态的唯一方式，确保状态变更的可追踪性。

3. **Actions（动作）**：定义用于触发 Mutations 的方法，可以包含异步操作。Actions 通常用于处理业务逻辑和异步操作，然后再调用 Mutations 来修改状态。

4. **Getters（获取器）**：用于派生状态的方法，允许你根据状态计算出新的数据。

5. **Modules（模块）**：将 Vuex 的状态和逻辑拆分成模块，以便更好地组织和维护大型应用程序。

Vuex 帮助开发者在 Vue.js 应用中实现集中式状态管理，从而使状态的变化可预测和可控。通过将状态存储在单一的数据源中，Vuex 简化了组件之间状态共享的过程，使得应用程序更容易维护和调试。

要使用 Vuex，你需要在你的 Vue.js 应用中安装它，并创建一个 Vuex 的实例，然后将它连接到你的 Vue 组件中，使组件可以访问和修改共享状态。

总之，Vuex 是一个在 Vue.js 中管理应用状态的强大工具，适用于中大型的前端应用，以提高代码的可维护性和可扩展性。

### 2、vuex入门

Vuex 是 Vue.js 官方的状态管理库，用于管理 Vue.js 应用程序中的状态。它通过集中存储和管理应用程序的状态，使得状态在不同组件之间共享和维护更加方便。以下是使用 Vuex 的基本步骤：

1. **安装 Vuex**：首先，确保你的 Vue.js 项目中已经安装了 Vuex。你可以使用 npm 或 yarn 进行安装：

   使用 npm 安装：
   ```bash
   npm install vuex --save
   ```

   使用 yarn 安装：
   ```bash
   yarn add vuex
   ```

2. **创建 Vuex Store**：在你的项目中创建一个 Vuex store 文件，通常命名为 `store.js`，并定义你的应用程序状态、mutations、actions 和 getters。以下是一个简单的示例：

   ```javascript
   // store.js

   import Vue from 'vue';
   import Vuex from 'vuex';

   Vue.use(Vuex);

   export default new Vuex.Store({
     state: {
       count: 0,
     },
     mutations: {
       increment(state) {
         state.count++;
       },
       decrement(state) {
         state.count--;
       },
     },
     actions: {
       incrementAsync({ commit }) {
         setTimeout(() => {
           commit('increment');
         }, 1000);
       },
     },
     getters: {
       getCount: state => state.count,
     },
   });
   ```

3. **连接 Vuex 到 Vue 应用**：在你的主应用程序文件（通常是 `main.js`）中导入 Vuex store 并将其连接到 Vue 实例中：

   ```javascript
   // main.js

   import Vue from 'vue';
   import App from './App.vue';
   import store from './store'; // 导入你的 Vuex store

   new Vue({
     render: h => h(App),
     store, // 连接 Vuex store 到 Vue 实例
   }).$mount('#app');
   ```

4. **在组件中使用 Vuex**：现在，你可以在你的 Vue 组件中使用 Vuex。你可以通过计算属性访问状态，通过触发 mutations 修改状态，通过分发 actions 处理异步操作，以及通过 getters 获取派生状态。以下是一个示例组件：

   ```vue
   <template>
     <div>
       <p>Count: {{ getCount }}</p>
       <button @click="increment">Increment</button>
       <button @click="decrement">Decrement</button>
       <button @click="incrementAsync">Increment Async</button>
     </div>
   </template>

   <script>
   export default {
     computed: {
       getCount() {
         return this.$store.getters.getCount;
       },
     },
     methods: {
       increment() {
         this.$store.commit('increment');
       },
       decrement() {
         this.$store.commit('decrement');
       },
       incrementAsync() {
         this.$store.dispatch('incrementAsync');
       },
     },
   };
   </script>
   ```

这就是基本的 Vuex 使用方法。你可以根据你的应用程序需求来定义状态、mutations、actions 和 getters，以及在组件中使用它们来管理应用程序的状态和逻辑。Vuex 提供了一种有效的方式来组织和管理状态，特别适用于大型应用程序，以提高代码的可维护性和可扩展性。
### 3、vuex进阶

在 Vuex 中，你可以使用一些辅助函数来简化状态管理以及使用模块化的方式来组织你的 Vuex store。以下是关于如何使用 `mapState`、`mapMutations`、`mapActions` 和模块化的示例：

#### 使用辅助函数

`mapState`、`mapMutations` 和 `mapActions` 这些辅助函数可以帮助你在组件中更便捷地访问状态、触发 mutations 和分发 actions。

首先，确保你在组件中导入这些辅助函数：

```javascript
import { mapState, mapMutations, mapActions } from 'vuex';
```

然后，你可以在组件的 `computed` 和 `methods` 选项中使用这些辅助函数：

```vue
<template>
  <div>
    <p>Count: {{ getCount }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="incrementAsync">Increment Async</button>
  </div>
</template>

<script>
export default {
  computed: {
    ...mapState(['count']), // 使用 mapState 辅助函数访问状态
  },
  methods: {
    ...mapMutations(['increment', 'decrement']), // 使用 mapMutations 辅助函数触发 mutations
    ...mapActions(['incrementAsync']), // 使用 mapActions 辅助函数分发 actions
  },
};
</script>
```

#### 使用模块化

在大型应用中，将 Vuex store 模块化是很有帮助的，因为它可以让你更好地组织和管理状态和逻辑。你可以通过使用 `modules` 选项来创建模块。

首先，在 Vuex store 文件中创建一个模块：

```javascript
// store.js

import Vue from 'vue';
import Vuex from 'vuex';
import cartModule from './modules/cart'; // 导入购物车模块
import userModule from './modules/user'; // 导入用户信息模块

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart: cartModule, // 注册购物车模块
    user: userModule, // 注册用户信息模块
  },
});
```

然后，创建购物车模块和用户信息模块，每个模块都有自己的状态、mutations、actions 和 getters：

```javascript
// modules/cart.js - 购物车模块

const state = {
  items: [], // 购物车中的商品列表
};

const mutations = {
  addItem(state, item) {
    state.items.push(item);
  },
};

const actions = {
  addToCart({ commit }, item) {
    commit('addItem', item);
  },
};

const getters = {
  cartItems: state => state.items,
};

export default {
  namespaced: true, // 开启命名空间，确保模块的状态、mutations、actions 和 getters 不会与其他模块冲突
  state,
  mutations,
  actions,
  getters,
};
```

```javascript
// modules/user.js - 用户信息模块

const state = {
  user: null, // 当前登录的用户信息
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

const actions = {
  login({ commit }, user) {
    // 模拟用户登录
    commit('setUser', user);
  },
};

const getters = {
  currentUser: state => state.user,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
```

通过模块化，你可以更好地组织代码并避免命名冲突。在组件中访问模块化的状态、触发模块化的 mutations 和分发模块化的 actions 时，可以使用命名空间来区分不同模块，如下所示：

```javascript
// 在组件中使用模块化的状态和方法
computed: {
  ...mapState('cart', ['cartItems']), // 使用 cart 模块的状态
},
methods: {
  ...mapActions('cart', ['addToCart']), // 使用 cart 模块的 actions
},
```

以上是使用 Vuex 辅助函数和模块化的一些示例，它们可以使你更轻松地管理和组织你的 Vuex store 和组件代码。