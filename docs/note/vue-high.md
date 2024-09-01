---
outline: [1, 3]
---
# vue进阶

## 一、Vue Router

### 1、路由概念

Vue Router 是 Vue.js 的官方路由管理器，用于在 Vue.js 单页面应用程序（SPA）中管理页面导航和 URL。它允许你定义 URL 和组件之间的映射关系，当用户访问特定的 URL 时，Vue Router 会渲染与该 URL 对应的 Vue 组件。

#### 主要功能：
1. **路由映射**：可以将不同的 URL 映射到不同的 Vue 组件，当用户访问某个 URL 时，渲染相应的组件。
  
2. **嵌套路由**：支持嵌套视图的多级路由结构，可以在一个组件中嵌套多个子路由组件。

3. **动态路由**：支持动态路径参数，可以在路由路径中使用变量（如 `/user/:id`），并根据这些变量渲染不同的内容。

4. **编程式导航**：除了通过 `<router-link>` 组件进行导航外，还可以通过编程方式使用 `this.$router.push` 或 `this.$router.replace` 进行导航。

5. **路由守卫**：提供了全局守卫、路由独享守卫和组件内守卫等功能，可以在路由切换前后执行一些逻辑，如权限验证、数据预加载等。

6. **过渡动画**：与 Vue 的过渡系统集成，允许在路由切换时应用过渡动画。

#### 使用步骤：
1. **安装 Vue Router**：如果使用 Vue CLI 创建的项目，可以选择直接安装 Vue Router，或者在项目中手动安装：
   ```bash
   npm install vue-router
   ```

2. **创建路由**：在项目中定义路由配置，并将它传递给 `VueRouter` 实例：
   ```javascript
   import Vue from 'vue'
   import VueRouter from 'vue-router'
   import Home from './components/Home.vue'
   import About from './components/About.vue'

   Vue.use(VueRouter)

   const routes = [
     { path: '/', component: Home },
     { path: '/about', component: About }
   ]

   const router = new VueRouter({
     routes
   })

   new Vue({
     router,
     render: h => h(App)
   }).$mount('#app')
   ```

3. **在模板中使用 `<router-view>`**：用于渲染匹配到的组件，通常放置在主布局组件中：
   ```html
   <template>
     <div id="app">
       <router-view></router-view>
     </div>
   </template>
   ```

通过这些步骤，你可以在 Vue.js 应用中使用 Vue Router 实现不同组件的切换和导航。

### 2、动态路由

动态路由是指在路由配置中使用路径参数，以实现根据不同参数值动态渲染不同组件或内容的路由。通过使用动态路由，可以在一个路径下处理多个不同的页面或数据视图。

#### 动态路由的定义与使用

**路径参数**

动态路由的路径中可以包含参数，这些参数通常以 `:` 作为前缀。例如，假设你有一个用户详情页，可以为用户 ID 创建一个动态路由：

```javascript
const routes = [
  { path: '/user/:id', component: UserDetail }
]
```

在这个例子中，`:id` 是一个路径参数。无论用户访问 `/user/1`、`/user/2` 或 `/user/123`，该路由都会匹配并渲染 `UserDetail` 组件。

**访问路径参数**

在匹配到动态路由时，路径参数会作为对象存储在 `this.$route.params` 中，你可以在组件中访问它们：

```javascript
export default {
  created() {
    console.log(this.$route.params.id);  // 输出当前路径的 id 参数
  }
}
```

**多个路径参数**

你可以在路径中定义多个参数，例如：
```javascript
const routes = [
  { path: '/user/:id/post/:postId', component: UserPostDetail }
]
```
在这个例子中，路径 `/user/1/post/42` 会匹配 `UserPostDetail` 组件，其中 `id` 为 `1`，`postId` 为 `42`。

**捕获所有路由的通配符**

有时你可能希望捕获所有不匹配的路径。这时可以使用通配符 `*`，例如：
```javascript
const routes = [
  { path: '*', component: NotFound }
]
```
在 Vue Router 3.1+ 中，可以用 `:pathMatch(.*)*` 代替 `*`，更精确地捕获路径：
```javascript
const routes = [
  { path: '/user/:id/:pathMatch(.*)*', component: UserDetail }
]
```

#### 实际应用场景
- **用户详情页**：比如 `/user/:id`，根据用户 ID 渲染不同的用户信息页面。
- **文章详情页**：比如 `/blog/:slug`，根据文章的 `slug` 字段来显示不同的博客文章。
- **分类筛选**：比如 `/shop/:category`，根据不同的商品分类展示不同的商品列表。

动态路由使得在一个应用中管理大量类似结构的页面变得非常方便和灵活，是 Vue Router 中非常重要的一个特性。

### 3、嵌套路由

嵌套路由指的是在 Vue Router 中定义多级路由结构，使得一个组件可以包含多个子路由和视图。通过嵌套路由，用户可以在一个主页面内展示和切换子页面，这样能够更好地组织复杂的页面结构。

#### 3.1 嵌套路由的特点

- **父路由和子路由**：父路由渲染父组件，子路由渲染子组件，子组件通常嵌套在父组件内的某个位置。
- **嵌套的 `<router-view>`**：父组件内可以有多个 `<router-view>`，用于渲染子路由的内容。

#### 3.2 使用嵌套路由

**1. 基本配置**
   
假设我们有一个用户信息页面，里面包含 "用户概览" 和 "用户设置" 两个子页面。可以通过嵌套路由来实现这一需求。

首先，定义路由配置时，可以使用 `children` 属性来指定子路由：

```javascript
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        path: 'profile',  // 子路由路径，无需加 /
        component: UserProfile
      },
      {
        path: 'settings',
        component: UserSettings
      }
    ]
  }
]
```

- `/user/:id` 是父路由。
- `/user/:id/profile` 和 `/user/:id/settings` 是子路由。

**2. 父组件中的 `<router-view>`**

在父组件 `User.vue` 中，需要使用 `<router-view>` 来指定子路由渲染的位置：

```html
<template>
  <div>
    <h2>User {{ $route.params.id }}</h2>
    <router-link to="profile">Profile</router-link>
    <router-link to="settings">Settings</router-link>

    <!-- 子路由内容会在这里渲染 -->
    <router-view></router-view>
  </div>
</template>
```

当用户访问 `/user/1/profile` 或 `/user/1/settings` 时，`<router-view>` 将根据 URL 动态加载 `UserProfile` 或 `UserSettings` 组件。

**3. 默认子路由**

可以为嵌套路由配置一个默认子路由。当访问父路由但不指定子路由时，渲染默认子路由组件。例如：

```javascript
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        path: '',  // 默认子路由
        component: UserProfile
      },
      {
        path: 'settings',
        component: UserSettings
      }
    ]
  }
]
```

当用户访问 `/user/1` 时，会自动加载 `UserProfile` 组件，因为它是默认子路由。

**4. 多层嵌套路由**

嵌套路由不仅可以是一级子路由，还可以继续嵌套子路由。通过这种方式，可以轻松构建多层次页面结构。每一级子路由的组件都可以包含自己的 `<router-view>`，递归渲染子路由内容。

#### 实际应用场景
- **后台管理系统**：通常会有侧边栏的菜单，如用户管理、订单管理等，每个管理项又有子页面。
- **电子商务网站**：用户详情页面中的“个人信息”、“订单记录”、“收藏商品”等功能页面可以通过嵌套路由实现。
- **博客系统**：文章的详情页面内，可能还会包含评论、相关文章等多个子部分，通过嵌套路由可以很好地组织这些子页面。

嵌套路由能帮助你简化复杂页面的组织结构，提升代码的可维护性和可读性。

### 4、编程式导航

编程式导航（Programmatic Navigation）是指通过编写 JavaScript 代码来控制 Vue Router 导航，而不是依赖 `<router-link>` 组件或手动改变 URL。这种方法可以在特定的事件或条件下动态地导航到不同的路由，是在开发复杂交互或条件跳转时常用的技术。

#### 4.1 主要方法

**1. `this.$router.push()`**
   - 用于导航到一个新的路由，并将该路由添加到浏览器的历史记录中，用户可以使用浏览器的返回按钮回到之前的页面。

   **语法：**
   ```javascript
   this.$router.push(location).then(successCallback).catch(errorCallback)
   ```

   **参数：**
   - **`location`**：可以是一个字符串或一个对象，指定目标路由。
   - **`successCallback`** 和 **`errorCallback`**：可选的回调函数，用于处理导航成功或失败的情况。

   **示例：**
   ```javascript
   // 使用字符串路径
   this.$router.push('/home');

   // 使用对象，带有命名路由和参数
   this.$router.push({ name: 'user', params: { id: 123 } });

   // 带查询参数
   this.$router.push({ path: '/search', query: { q: 'vue' } });
   ```

**2. `this.$router.replace()`**

   - 类似于 `push`，但不会在浏览器历史记录中添加新记录，替换当前的 URL。用户无法通过浏览器的返回按钮回到替换前的页面。

   **语法：**
   ```javascript
   this.$router.replace(location).then(successCallback).catch(errorCallback)
   ```

   **示例：**
   ```javascript
   // 替换当前路由
   this.$router.replace('/profile');

   // 使用对象，带有命名路由和参数
   this.$router.replace({ name: 'user', params: { id: 456 } });
   ```

**3. `this.$router.go(n)`**

   - 类似于浏览器的前进和后退功能，`n` 为整数。正数前进，负数后退。

   **语法：**
   ```javascript
   this.$router.go(n)
   ```

   **示例：**
   ```javascript
   // 后退一步
   this.$router.go(-1);

   // 前进一步
   this.$router.go(1);
   ```

#### 4.2 实际应用场景

1. **条件跳转**：当用户完成某个操作或满足特定条件后，可以通过编程式导航跳转到特定页面。例如，用户登录成功后跳转到用户主页。

   ```javascript
   methods: {
     login() {
       // 假设 login 是一个异步操作
       this.performLogin().then(() => {
         this.$router.push({ name: 'dashboard' });
       });
     }
   }
   ```

2. **表单提交后重定向**：在提交表单后，可以使用编程式导航将用户重定向到确认页面或详情页面。

   ```javascript
   methods: {
     submitForm() {
       // 假设 formSubmit 是一个提交表单的操作
       this.formSubmit().then(response => {
         this.$router.replace({ name: 'confirmation', params: { id: response.data.id } });
       });
     }
   }
   ```

3. **基于用户角色的导航**：根据用户角色或权限控制用户访问的页面。例如，管理员登录后跳转到管理面板，而普通用户则跳转到首页。

   ```javascript
   methods: {
     checkUserRole() {
       if (this.user.isAdmin) {
         this.$router.push({ name: 'adminPanel' });
       } else {
         this.$router.push({ name: 'home' });
       }
     }
   }
   ```

#### 编程式导航 vs `<router-link>`

- **编程式导航**：适用于复杂的逻辑控制，比如在事件回调、表单提交、异步操作完成后进行导航。
- **`<router-link>`**：适用于简单的静态导航，例如在导航菜单、侧边栏等场景下。

#### 注意事项

- **导航失败处理**：当路由导航失败时（例如目标路径与当前路径相同，或因为导航守卫的逻辑被阻止），需要处理可能抛出的错误。例如，在 `push` 或 `replace` 的链式调用中，处理 `catch`。

   ```javascript
   this.$router.push('/dashboard')
     .catch(err => {
       if (err.name !== 'NavigationDuplicated') {
         console.error(err);
       }
     });
   ```

- **参数传递**：通过对象方式导航时，确保路径参数与命名路由匹配，否则会导致导航失败。

- **避免重复导航**：尝试导航到当前页面时，Vue Router 会抛出 `NavigationDuplicated` 错误，可以通过捕获并忽略该错误来避免控制台报错。

掌握编程式导航有助于在 Vue.js 应用中实现更加灵活和动态的导航体验。

### 5、命名路由和命名视图

命名路由和命名视图是 Vue Router 中的两个重要概念，主要用于管理复杂的路由和视图布局。它们有助于更灵活地定义和控制路由的行为和组件的渲染位置。

---

#### 5.1 **命名路由（Named Routes）**

##### **概念**
命名路由是为路由定义一个唯一的名称，允许在代码中通过名称而不是路径来导航。这在处理复杂的路由结构或需要多次引用同一路由时非常有用。

##### **使用方法**

##### 1. **定义命名路由**
在定义路由时，通过 `name` 属性为路由指定一个名称：

```javascript
const routes = [
  {
    path: '/user/:id',
    name: 'user', // 路由名称
    component: UserDetail
  }
];
```

##### 2. **使用命名路由进行导航**

可以在编程式导航或 `<router-link>` 中通过 `name` 属性导航到指定路由：

```javascript
// 编程式导航
this.$router.push({ name: 'user', params: { id: 123 } });

// <router-link> 中使用命名路由
<router-link :to="{ name: 'user', params: { id: 123 } }">Go to User</router-link>
```

##### **优点：**
- **可读性强**：通过名称而非路径来导航，使代码更易读，特别是路径发生变化时，无需更新所有引用。
- **路径参数管理**：通过 `params` 管理动态参数，无需手动拼接路径。

**场景**
- **重构路径**：当需要重构或更改路径时，命名路由使得导航逻辑不受影响。
- **多次引用同一路由**：在多个地方需要引用同一个路由时，命名路由简化了导航操作。

---

#### 5.2 **命名视图（Named Views）**

##### **概念**
命名视图允许在同一页面中渲染多个视图（组件），每个视图可以独立命名，并且可以在路由配置中指定不同的组件渲染到不同的视图位置。这使得在同一页面上显示多个内容区域变得更加灵活。

##### **使用方法**

**1. 定义命名视图**

在路由配置中，使用 `components` 属性定义多个命名视图。`default` 是默认视图，其它视图可以通过名称来指定：

```javascript
const routes = [
  {
    path: '/dashboard',
    components: {
      default: DashboardMain,   // 默认视图
      sidebar: DashboardSidebar // 命名视图
    }
  }
];
```

**2. 在模板中使用命名视图**

在组件中，通过 `<router-view>` 的 `name` 属性渲染不同的命名视图：

```vue
<template>
  <div>
    <router-view></router-view> <!-- 渲染 default 视图 -->
    <router-view name="sidebar"></router-view> <!-- 渲染 sidebar 视图 -->
  </div>
</template>
```

**优点：**
- **多视图布局**：允许在同一页面上显示多个视图，如主内容区和侧边栏。
- **灵活的布局控制**：可以根据路由配置灵活地控制各个视图的内容。

 **场景**
- **复杂页面布局**：在后台管理系统或仪表盘中，通常需要同时显示多个模块或组件，如侧边栏、导航栏、主内容区等。
- **动态内容展示**：在一个页面上，根据路由动态加载不同的内容区域。

---

#### **命名路由 vs 命名视图**
- **命名路由**：主要用于通过名称来标识和导航路由，提升代码的可读性和维护性。
- **命名视图**：用于在同一页面中渲染多个视图，增强页面布局的灵活性和可扩展性。

这两者在不同场景下发挥着各自的作用，通过灵活使用命名路由和命名视图，可以更加高效地管理 Vue.js 应用的路由和布局。

### 6、路由元信息（Meta 信息）

路由元信息（Meta 信息）是 Vue Router 中的一种机制，用于为路由添加自定义的属性或信息。通过在路由配置中添加 `meta` 字段，开发者可以将与路由相关的额外信息附加到该路由上，这些信息可以在导航守卫、组件内或其他逻辑中使用。

#### 1. **定义路由元信息**

在定义路由时，`meta` 字段是一个对象，可以包含任何你需要的键值对。

#### **示例：**

```javascript
const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true, title: 'Dashboard' }
  },
  {
    path: '/login',
    component: Login,
    meta: { requiresAuth: false, title: 'Login' }
  }
];
```

在上面的例子中，`meta` 对象为每个路由添加了两个属性：`requiresAuth` 和 `title`。

- **`requiresAuth`**：一个布尔值，指示该路由是否需要身份验证。
- **`title`**：一个字符串，用来设置页面标题。

#### 2. **使用路由元信息**

##### **2.1 在导航守卫中使用**

路由元信息经常用于导航守卫（如 `beforeEach`）中，用来控制访问权限、动态设置页面标题等。

**示例：**

```javascript
router.beforeEach((to, from, next) => {
  // 检查路由是否需要身份验证
  if (to.meta.requiresAuth) {
    // 假设有一个方法来检查用户是否已登录
    if (isLoggedIn()) {
      next(); // 已登录，继续导航
    } else {
      next('/login'); // 未登录，重定向到登录页面
    }
  } else {
    next(); // 不需要身份验证，继续导航
  }
});
```

##### **2.2 在组件中使用**

在组件内，可以通过 `this.$route.meta` 访问当前路由的 `meta` 信息。

**示例：**

```vue
<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <!-- 其他组件内容 -->
  </div>
</template>

<script>
export default {
  computed: {
    pageTitle() {
      return this.$route.meta.title;
    }
  },
  watch: {
    '$route.meta.title'(newTitle) {
      document.title = newTitle; // 动态设置页面标题
    }
  },
  created() {
    document.title = this.pageTitle; // 设置初始页面标题
  }
};
</script>
```

##### **2.3 动态设置页面标题**

通常会结合路由元信息动态设置页面标题，以便用户在浏览器标签中看到正确的页面名称。

**示例：**

```javascript
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});
```

#### 3. **常见的路由元信息用途**

- **身份验证和权限控制**：通过 `requiresAuth` 或 `roles` 等元信息，控制哪些路由需要用户登录或特定权限。
- **页面标题**：使用 `title` 属性设置和动态更新页面标题。
- **过渡动画**：使用 `transitionName` 等元信息，控制页面切换时的动画效果。
- **面包屑导航**：通过 `breadcrumb` 元信息，为面包屑导航提供信息。
- **访问统计**：通过 `analytics` 元信息，标记哪些页面需要进行访问统计或事件追踪。

#### 4. **示例扩展**

假设我们在一个后台管理系统中使用了 Vue Router，我们可以通过 `meta` 信息管理不同用户的访问权限和页面设置：

```javascript
const routes = [
  {
    path: '/admin',
    component: AdminDashboard,
    meta: { requiresAuth: true, roles: ['admin'], title: 'Admin Dashboard' }
  },
  {
    path: '/profile',
    component: UserProfile,
    meta: { requiresAuth: true, title: 'User Profile' }
  },
  {
    path: '/login',
    component: Login,
    meta: { requiresAuth: false, title: 'Login' }
  }
];
```

在这个例子中，`roles` 属性可以用于检查用户角色，并决定是否允许访问 `/admin` 路由。

---

#### **总结**

路由元信息为 Vue Router 提供了灵活的方式来附加和处理与路由相关的额外信息。这使得开发者可以轻松地在全局或局部范围内实现更高级的功能，比如身份验证、权限控制、动态页面标题设置等。在实际开发中，合理利用 `meta` 信息可以极大地提升应用的可维护性和功能性。

### 7、路由懒加载

路由懒加载（Lazy Loading）是 Vue.js 中的一种优化技术，用于按需加载路由对应的组件，而不是在应用初始化时一次性加载所有的组件。这种技术可以显著减少应用的初始加载时间，提升页面性能，尤其是在构建大型单页应用（SPA）时非常有用。

#### **1. 为什么需要路由懒加载？**

在默认情况下，Vue.js 项目中所有的组件在应用初始化时都会被加载到浏览器中。如果应用规模较大，组件数量多，这可能导致：

- **初始加载时间长**：用户首次打开应用时，可能需要等待较长时间才能加载完所有资源。
- **不必要的资源加载**：用户可能只访问应用的一部分页面，但浏览器会加载整个应用的所有组件，浪费带宽和资源。

通过路由懒加载，可以只在用户访问某个路由时才加载对应的组件，从而优化加载性能。

#### **2. 路由懒加载的实现**

在 Vue Router 中，路由懒加载通常通过动态导入（`import()`）语法实现。动态导入会返回一个 Promise，当用户访问该路由时才会加载对应的组件。

##### **2.1 基本实现**

**示例：**

```javascript
const routes = [
  {
    path: '/home',
    component: () => import('./components/Home.vue') // 懒加载 Home 组件
  },
  {
    path: '/about',
    component: () => import('./components/About.vue') // 懒加载 About 组件
  }
];
```

在这个例子中，`Home.vue` 和 `About.vue` 组件只有在用户访问对应的 `/home` 和 `/about` 路由时才会被加载。

##### **2.2 配合 Webpack 的代码分割**

Webpack 会将动态导入的组件分割成单独的代码块（chunk），并在需要时按需加载。这种方式可以有效地减少主包（main bundle）的大小。

**示例：**

```javascript
const routes = [
  {
    path: '/user/:id',
    component: () => import(/* webpackChunkName: "user" */ './components/UserDetail.vue') // 懒加载并指定 chunk 名称
  }
];
```

`webpackChunkName` 注释用于指定生成的 chunk 文件的名称，这样在生成的文件中可以更容易地识别和管理。

##### **2.3 与命名视图结合使用**

懒加载也可以与命名视图结合使用，实现更复杂的视图布局。

**示例：**

```javascript
const routes = [
  {
    path: '/dashboard',
    components: {
      default: () => import('./components/DashboardMain.vue'),
      sidebar: () => import('./components/DashboardSidebar.vue')
    }
  }
];
```

在这个例子中，`DashboardMain.vue` 和 `DashboardSidebar.vue` 组件会在访问 `/dashboard` 路由时分别加载。

#### **3. 路由懒加载的优势**

- **优化性能**：减少初始加载时间，特别是在移动设备或网络较慢的环境中效果显著。
- **提升用户体验**：按需加载组件，减少不必要的资源浪费，用户只加载他们需要的内容。
- **更好的代码管理**：通过代码分割，可以更轻松地管理和维护项目，尤其是在多人协作开发时。

#### **4. 路由懒加载的注意事项**

- **加载时的体验**：因为懒加载会引入额外的网络请求，可能会导致组件加载时的短暂延迟。为此，可以在加载时显示一个加载状态（如 loading spinner）来改善用户体验。
  
  **示例：**
  ```vue
  <template>
    <div>
      <router-view v-slot="{ Component, route }">
        <component :is="Component || LoadingComponent" />
      </router-view>
    </div>
  </template>

  <script>
  import LoadingComponent from './components/LoadingComponent.vue';

  export default {
    components: {
      LoadingComponent
    }
  };
  </script>
  ```

- **SEO**：对于需要进行搜索引擎优化的页面，懒加载可能不利于搜索引擎爬虫的抓取，因为组件在客户端渲染时才加载。如果应用需要进行 SEO 优化，可以考虑使用服务器端渲染（SSR）或预渲染技术。

#### **5. 实际应用场景**

- **大型 SPA**：在大型单页应用中，通过懒加载减少初始加载包的体积，提升加载速度和用户体验。
- **条件性内容**：如果某些内容或功能模块是用户不常访问的，可以使用懒加载避免不必要的资源浪费。

---

**总结**：路由懒加载是 Vue.js 中一种非常有效的性能优化技术，能够按需加载组件，减少初始加载时间，提升用户体验。特别是在构建大型应用时，通过懒加载和代码分割，可以大幅提升应用的性能和可维护性。

### 8、路由模式

在 Vue Router 中，路由模式（Routing Mode）指的是 URL 路径的不同工作方式或显示形式，它决定了如何管理浏览器的 URL 以及如何处理页面导航。Vue Router 支持两种主要的路由模式：**`hash` 模式** 和 **`history` 模式**。此外，还有一种较少使用的 **`abstract` 模式**。

#### 1. **`hash` 模式**

##### **概念**
`hash` 模式基于 URL 的哈希（`#`）部分实现路由。在这种模式下，URL 会带有 `#` 符号，哈希后的内容（例如 `#home`）不会被发送到服务器，它仅用于前端应用的路由识别。

**示例：**
```javascript
const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/home', component: Home },
    { path: '/about', component: About }
  ]
});
```

访问路由时，URL 可能会是这样的：

- `http://example.com/#/home`
- `http://example.com/#/about`

##### **优点：**
- **简单**：适合所有环境，尤其是静态站点，因为它不依赖服务器配置。
- **兼容性好**：由于 `hash` 是前端实现，不需要服务器支持，所以在不支持 HTML5 History API 的老旧浏览器中也能正常工作。

##### **缺点：**
- **不美观**：URL 中的 `#` 符号会显得不那么美观，且对用户体验不够友好。
- **SEO**：`hash` 模式对搜索引擎的抓取不友好，因为哈希部分不会被发送到服务器，搜索引擎无法直接抓取。

#### 2. **`history` 模式**

##### **概念**
`history` 模式使用了 HTML5 History API（`pushState` 和 `replaceState`）来实现路由。它的 URL 是正常的路径结构，不带 `#` 符号。

**示例：**
```javascript
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/home', component: Home },
    { path: '/about', component: About }
  ]
});
```

访问路由时，URL 可能会是这样的：

- `http://example.com/home`
- `http://example.com/about`

##### **优点：**
- **美观**：URL 结构干净，没有 `#` 符号，更符合标准的 URL 规范。
- **SEO 友好**：搜索引擎能够抓取这些 URL，有利于搜索引擎优化。

##### **缺点：**
- **需要服务器支持**：因为没有 `#`，浏览器会向服务器请求这些路径，所以服务器需要配置来处理所有的路由请求，确保都返回 `index.html`，否则会出现 404 错误。

**服务器配置示例：**
如果使用的是 Nginx 作为服务器，可以这样配置：

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

对于 Apache，可以使用 `.htaccess` 文件：

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### 3. **`abstract` 模式**

##### **概念**
`abstract` 模式并不依赖浏览器的 API，它主要用于 Node.js 环境或测试环境中。在这种模式下，应用不会操作 URL 地址栏。

**示例：**
```javascript
const router = new VueRouter({
  mode: 'abstract',
  routes: [
    { path: '/home', component: Home },
    { path: '/about', component: About }
  ]
});
```

##### **场景：**
- **服务端渲染（SSR）**：当在服务端渲染时，可以使用 `abstract` 模式来模拟路由。
- **测试**：在单元测试中，如果不需要实际的 URL，可以使用 `abstract` 模式。

#### 4. **选择路由模式**

- **`hash` 模式**：适合部署在不支持服务器端配置的环境下，比如 GitHub Pages，或者对 SEO 要求不高的项目。
- **`history` 模式**：适合希望有干净 URL 结构并且可以配置服务器端环境的项目，尤其是需要 SEO 的项目。
- **`abstract` 模式**：适合服务端渲染或测试环境，不会实际影响浏览器的 URL。

---

**总结**：Vue Router 提供了三种路由模式，以满足不同场景的需求。`hash` 模式适合简单的客户端应用，`history` 模式则适合更复杂的应用，尤其是需要 SEO 的应用，而 `abstract` 模式则主要用于特殊场景如 SSR 和测试。根据项目的实际需求选择合适的模式，可以优化应用的用户体验和性能。

### 9、路由守卫

路由守卫（Navigation Guards）是 Vue Router 提供的一种用于控制导航行为的机制，它允许你在路由导航的不同阶段拦截、检查或改变导航。这对于权限控制、数据预加载、阻止未保存的更改等场景非常有用。

Vue Router 提供了多种类型的路由守卫，可以在全局、路由配置中或组件内使用。

#### **1. 全局守卫**

##### **1.1 `beforeEach`**

`beforeEach` 是一个全局前置守卫，在每次路由跳转之前触发。它接收三个参数：`to`（目标路由对象）、`from`（来源路由对象）和 `next`（控制导航的函数）。

 **示例：**

```javascript
router.beforeEach((to, from, next) => {
  // 检查路由是否需要身份验证
  if (to.meta.requiresAuth && !isUserLoggedIn()) {
    // 如果用户未登录，重定向到登录页面
    next('/login');
  } else {
    // 否则允许导航
    next();
  }
});
```

##### **1.2 `beforeResolve`**

`beforeResolve` 是在所有组件内守卫和异步路由组件被解析之后，但在导航被确认之前执行的守卫。它的用法类似于 `beforeEach`，但它更接近导航的最后阶段。

**示例：**

```javascript
router.beforeResolve((to, from, next) => {
  // 可以在这里进行最后的检查或准备工作
  next();
});
```

##### **1.3 `afterEach`**

`afterEach` 是一个全局后置守卫，它在路由导航完成后执行，但它不像前置守卫那样能影响导航本身，因为它没有 `next` 函数。

**示例：**

```javascript
router.afterEach((to, from) => {
  // 可以在这里进行一些收尾工作，如设置页面标题
  document.title = to.meta.title || 'Default Title';
});
```

#### **2. 路由独享守卫**

路由独享守卫是在路由配置中定义的守卫，它只会在该路由及其子路由导航时触发。

**示例：**

```javascript
const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      // 仅在进入 /dashboard 路由时执行
      if (isUserLoggedIn()) {
        next();
      } else {
        next('/login');
      }
    }
  }
];
```

#### **3. 组件内守卫**

组件内守卫是在单个组件内定义的路由守卫。它们只在该组件与路由匹配时才会触发。

##### **3.1 `beforeRouteEnter`**

`beforeRouteEnter` 在导航进入该组件的路由之前调用。在这个守卫中，不能直接访问 `this`，因为组件实例还未被创建。

**示例：**

```javascript
export default {
  beforeRouteEnter(to, from, next) {
    // 在导航进入之前，可以执行一些操作，如数据预加载
    next(vm => {
      // 导航完成后可以访问组件实例 `vm`
      vm.loadData();
    });
  },
  methods: {
    loadData() {
      // 加载数据的逻辑
    }
  }
};
```

##### **3.2 `beforeRouteUpdate`**

`beforeRouteUpdate` 在当前路由改变，但依然是同一个组件时调用，例如从 `/user/1` 到 `/user/2`。在这个守卫中可以访问组件实例 `this`。

**示例：**

```javascript
export default {
  beforeRouteUpdate(to, from, next) {
    // 响应路由参数的变化
    this.userId = to.params.id;
    this.fetchUserData();
    next();
  }
};
```

##### **3.3 `beforeRouteLeave`**

`beforeRouteLeave` 在导航离开该组件的路由时调用，可以用于阻止用户离开，比如在表单未保存时提示用户。

**示例：**

```javascript
export default {
  beforeRouteLeave(to, from, next) {
    if (this.hasUnsavedChanges) {
      const answer = window.confirm('你确定要离开吗？未保存的更改将会丢失。');
      if (!answer) next(false);
      else next();
    } else {
      next();
    }
  }
};
```

#### **4. 路由守卫的执行顺序**

1. **全局前置守卫 (`beforeEach`)**。
2. **路由独享守卫 (`beforeEnter`)**。
3. **组件内守卫 (`beforeRouteEnter`)**。
4. **全局解析守卫 (`beforeResolve`)**。
5. **导航被确认**，开始加载异步组件。
6. **全局后置守卫 (`afterEach`)**。

#### **5. 实际应用场景**

- **权限控制**：通过 `beforeEach` 全局守卫检查用户权限或身份，控制访问特定路由的权限。
- **数据预加载**：在 `beforeRouteEnter` 或 `beforeEach` 守卫中预加载数据，确保在组件渲染之前数据已准备好。
- **导航保护**：在 `beforeRouteLeave` 中阻止用户在未保存更改的情况下离开当前页面。

---

**总结**：路由守卫是 Vue Router 强大的功能之一，它为开发者提供了丰富的钩子，可以在路由导航的不同阶段进行拦截、验证和控制。合理使用路由守卫，可以有效提升应用的安全性和用户体验。


## 二、状态管理

### 1、Vuex概述

Vuex 是一个专为 Vue.js 应用设计的状态管理模式和库。它通过集中式的存储和管理全局状态，使得不同组件之间能够方便地共享数据，同时保持数据的一致性和可预测性。

#### Vuex 的核心概念：

![vuex](/img/vuex.png)

1. **集中式存储（Centralized Store）**
   - Vuex 将应用的所有状态保存在一个全局的 store 中，这样你可以在任何组件中访问和修改这些状态。与在各个组件中分别管理状态相比，集中式存储使得状态的管理更加统一和简洁。

2. **单向数据流（One-Way Data Flow）**
   - Vuex 使用单向数据流的模式，即状态的变化是可追溯的。Vuex 将状态管理分为四个核心部分：State、Getters、Mutations 和 Actions。状态的变更过程如下：
     1. **State**：存储应用的状态数据。
     2. **Getters**：类似于 Vue 的计算属性，用于从 State 中派生出新的状态。
     3. **Mutations**：用于同步地更改 State，是唯一可以直接修改 State 的方法。
     4. **Actions**：用于处理异步操作，并通过提交 Mutations 来间接改变 State。

3. **可调试性（Debugging）**
   - 由于状态的变化是通过 Mutations 以可预测的方式发生的，Vuex 可以轻松地与 Vue Devtools 集成，让开发者方便地调试和追踪状态的变化。通过时间旅行调试（Time Travel Debugging）功能，开发者可以回到任何一个状态，查看具体的变更过程。

#### Vuex 的适用场景：

Vuex 主要适用于中大型应用，特别是当应用中有大量的组件需要共享状态时。它解决了以下几个问题：

- **组件间共享状态**：当多个组件需要访问和修改同一个状态时，使用 Vuex 可以避免通过嵌套传递 props 和 events 来共享数据的繁琐操作。
- **集中式状态管理**：将所有状态集中管理，便于维护、调试和开发新功能。
- **数据一致性**：在复杂应用中，保持数据的一致性是个挑战。Vuex 通过单一数据源和单向数据流，保证了数据在各个组件间的一致性。

#### 总结：

Vuex 是 Vue.js 的官方状态管理库，它通过集中化和结构化的方式管理应用状态，使得大型 Vue.js 应用的开发更加简洁和高效。虽然它引入了一些额外的复杂性，但对于需要共享状态的复杂应用，它提供了非常强大的工具和方法。

### 2、Vuex使用

在Vue项目中使用Vuex需要几个步骤，从安装Vuex到在组件中使用它。以下是一个详细的指南，教你如何在Vue项目中集成和使用Vuex：

#### 1. **安装Vuex**
   如果你还没有安装Vuex，可以通过npm或yarn安装：

   ```bash
   npm install vuex@next --save
   ```
   或者
   ```bash
   yarn add vuex@next
   ```

#### 2. **创建Vuex Store**
   创建一个用于存储全局状态的Vuex Store。一般来说，你可以在`src/store`目录下创建一个`store.js`文件来定义这个Store。

   ```javascript
   // src/store/index.js
   import { createStore } from 'vuex';

   export default createStore({
     state: {
       count: 0
     },
     mutations: {
       increment(state) {
         state.count++;
       }
     },
     actions: {
       increment({ commit }) {
         commit('increment');
       }
     },
     getters: {
       doubleCount(state) {
         return state.count * 2;
       }
     },
     modules: {
       // 可以在这里添加模块
     }
   });
   ```

#### 3. **将Store添加到Vue实例**
   在Vue应用的入口文件（通常是`src/main.js`）中，将创建的Store添加到Vue实例中。

   ```javascript
   // src/main.js
   import { createApp } from 'vue';
   import App from './App.vue';
   import store from './store';

   const app = createApp(App);

   app.use(store); // 使用Vuex Store
   app.mount('#app');
   ```

#### 4. **在组件中访问和使用Vuex**

#### 4.1 访问State
   你可以通过`this.$store.state`来访问Vuex中的State。

   ```javascript
   <template>
     <div>
       <p>{{ count }}</p>
     </div>
   </template>

   <script>
   import { mapState } from 'vuex';

   export default {
     computed: {
       ...mapState(['count']) // 将State映射为组件的计算属性
     }
   };
   </script>
   ```

#### 4.2 提交Mutations
   使用`this.$store.commit`提交一个Mutation以改变State。

   ```javascript
   <template>
     <div>
       <button @click="increment">Increment</button>
     </div>
   </template>

   <script>
   import { mapMutations } from 'vuex';

   export default {
     methods: {
       ...mapMutations(['increment']) // 将Mutation映射为组件的方法
     }
   };
   </script>
   ```

#### 4.3 派发Actions
   使用`this.$store.dispatch`来派发一个Action（适合异步操作）。

   ```javascript
   <template>
     <div>
       <button @click="incrementAsync">Increment Async</button>
     </div>
   </template>

   <script>
   import { mapActions } from 'vuex';

   export default {
     methods: {
       ...mapActions(['increment']) // 将Action映射为组件的方法
     }
   };
   </script>
   ```

#### 4.4 使用Getters
   你可以通过`this.$store.getters`来访问Getters。

   ```javascript
   <template>
     <div>
       <p>{{ doubleCount }}</p>
     </div>
   </template>

   <script>
   import { mapGetters } from 'vuex';

   export default {
     computed: {
       ...mapGetters(['doubleCount']) // 将Getters映射为组件的计算属性
     }
   };
   </script>
   ```

#### 5. **使用模块化的Store**
   对于大型项目，可以将Store分割为多个模块，每个模块有自己独立的State、Mutations、Actions和Getters。

   ```javascript
   // src/store/modules/counter.js
   const counter = {
     state: () => ({
       count: 0
     }),
     mutations: {
       increment(state) {
         state.count++;
       }
     },
     actions: {
       increment({ commit }) {
         commit('increment');
       }
     },
     getters: {
       doubleCount(state) {
         return state.count * 2;
       }
     }
   };

   export default counter;
   ```

   然后在主Store中注册模块：

   ```javascript
   // src/store/index.js
   import { createStore } from 'vuex';
   import counter from './modules/counter';

   export default createStore({
     modules: {
       counter
     }
   });
   ```

#### 6. **调试和开发工具**
   使用Vue Devtools可以方便地调试Vuex Store，查看State的变化和Mutations的历史记录。确保在开发时启用严格模式：

   ```javascript
   const store = createStore({
     strict: process.env.NODE_ENV !== 'production',
     state: { ... },
     mutations: { ... },
     actions: { ... },
     modules: { ... }
   });
   ```

#### 总结
通过这些步骤，你就能在Vue项目中成功集成和使用Vuex进行状态管理。掌握了这些基本操作后，你可以根据项目的需求进行更复杂的状态管理配置。
