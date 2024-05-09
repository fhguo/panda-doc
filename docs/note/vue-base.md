---
outline: deep
---
# vue基础

## 一、vue基础

### 1、MVVM

MVVM（Model-View-ViewModel）是一种用于设计和组织用户界面（UI）的软件架构模式。它是一种演化自MVC（Model-View-Controller）和MVP（Model-View-Presenter）的模式，旨在分离应用程序的用户界面、业务逻辑和数据模型，并提供更好的可维护性和可测试性。

MVVM模式通常包括以下三个核心组件：

1. **Model（模型）**：模型代表应用程序的数据和业务逻辑。它负责管理数据的获取、处理和存储，但不包含关于如何呈现数据的信息。

2. **View（视图）**：视图是用户界面的表示，负责显示数据和接收用户输入。在MVVM中，视图通常是声明性的，意味着它更关注展示数据，而不关心如何获取和处理数据。

3. **ViewModel（视图模型）**：视图模型是连接模型和视图的中间层。它负责将模型的数据格式化为视图可以使用的形式，并处理视图的用户交互。视图模型通常包含应用程序的业务逻辑，并且与视图强相关，但它不依赖于具体的UI平台。

![An image](/img/mvvm.png)

MVVM模式在现代前端开发中得到广泛应用，因为它有助于管理复杂的用户界面和处理大量数据。它提供了一种结构化的方式来管理应用程序的逻辑和界面，使得团队能够更容易地协作和维护应用程序。
### 2、vue入门

Vue是一款用于构建用户界面的JavaScript框架。它是一个流行的前端框架，基于MVVM设计模式，专注于视图层的开发。

Vue的主要目标是使构建用户界面更加简单和高效。它提供了一组工具和模式，让开发者可以轻松地构建交互性强、可维护的单页面应用（SPA）和动态网页。

以下是Vue的一些核心特点和概念：

1. **响应式数据绑定**：Vue允许你将数据模型和DOM元素关联起来，当数据变化时，相关的DOM元素会自动更新，无需手动操作DOM。

2. **组件化开发**：Vue鼓励将UI划分为小组件，每个组件都有自己的状态和行为，这样可以更好地组织代码并提高可维护性。

3. **指令**：Vue提供了一系列内置指令，如`v-if`、`v-for`、`v-bind`、`v-on`等，用于在模板中添加逻辑和数据绑定。

4. **模板引擎**：Vue使用模板来定义视图，模板可以包含插值语法、指令和表达式，用于渲染最终的HTML。

5. **虚拟DOM**：Vue使用虚拟DOM来提高性能，它会在内存中维护一个虚拟DOM树，以减少对实际DOM的直接操作。

6. **路由管理**：Vue可以与Vue Router库集成，用于处理客户端路由导航，从而支持构建SPA。

7. **状态管理**：对于大型应用程序，Vue可以与Vuex集成，提供了一个状态管理模式，用于管理全局状态。

8. **生态系统**：Vue拥有丰富的生态系统，包括各种插件和扩展，可以增强Vue应用的功能和性能。

总之，Vue是一个灵活、易学且功能强大的前端框架，适用于各种Web应用的开发，无论是小型项目还是大型单页面应用。它的简单性和可扩展性使其成为众多开发者的首选工具之一。

### 3、vue指令
Vue.js提供了一些常用的指令（Directives），用于操作DOM、数据绑定以及控制应用程序的行为。以下是一些常见的Vue指令以及示例：

1. **v-bind**：用于动态绑定HTML元素的属性。

```html
<!-- 示例：绑定src属性 -->
<img v-bind:src="imageURL">
<!-- 简写 -->
<img :src="imageURL">
```

2. **v-model**：用于实现双向数据绑定，将表单元素的值与数据模型关联。

```html
<!-- 示例：双向绑定input元素 -->
<input v-model="message">
```

3. **v-for**：用于循环渲染列表数据。

```html
<!-- 示例：渲染一个列表 -->
<ul>
  <li v-for="item in items">{{ item }}</li>
</ul>
```

4. **v-if / v-else**：用于条件性地渲染元素。

```html
<!-- 示例：根据条件渲染不同内容 -->
<div v-if="showMessage">显示消息</div>
<div v-else>显示其他内容</div>
```

5. **v-show**：类似于v-if，但是通过CSS样式来控制元素的显示和隐藏。

```html
<!-- 示例：通过切换CSS样式控制显示 -->
<div v-show="isVisible">显示或隐藏</div>
```

6. **v-on**：用于监听DOM事件，并触发相应的方法。

```html
<!-- 示例：监听按钮点击事件 -->
<button v-on:click="doSomething">点击我</button>
<!-- 简写 -->
<button @click="doSomething">点击我</button>
```

7. **v-pre**：跳过元素和其子元素的编译过程，用于静态内容。

```html
<!-- 示例：跳过编译 -->
<div v-pre>{{ message }}</div>
```

8. **v-cloak**：用于防止页面闪烁，通常与CSS一起使用。

```html
<!-- 示例：防止页面闪烁 -->
<div v-cloak>{{ message }}</div>
```

9. **v-once**：只渲染元素和组件一次，不再进行响应式更新。

```html
<!-- 示例：只渲染一次 -->
<span v-once>{{ staticData }}</span>
```

这些是Vue.js中一些常用的指令。每个指令都有不同的用途，可根据需要选择使用。指令使Vue应用程序更具交互性和动态性，能够根据数据的变化来更新页面内容。


### 4、基本使用

要开始使用Vue.js，需要按照以下步骤来设置和构建Vue应用程序：

1. **引入Vue.js**：首先，在你的HTML文件中引入Vue.js库。你可以通过下载Vue.js文件或使用CDN来引入它。

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
```

2. **创建Vue实例**：在你的JavaScript文件中，创建一个Vue实例，这是Vue应用程序的根实例。你可以指定一个DOM元素作为Vue实例的挂载点，以及一个数据对象来管理应用程序的状态。

```javascript
var app = new Vue({
  el: '#app', // 挂载点的选择器
  data: {
    message: 'Hello, Vue!'
  }
});
```

3. **绑定数据**：使用指令将Vue实例中的数据绑定到HTML模板中。

```html
<div id="app">
  {{ message }}
</div>
```

这里的`message`会被Vue解析为Vue实例中`message`属性的值。

4. **触发事件**：你可以使用`v-on`指令来监听DOM事件，并在触发时执行Vue实例中的方法。

```html
<button v-on:click="sayHello">Click me</button>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, Vue!'
  },
  methods: {
    sayHello: function() {
      alert(this.message);
    }
  }
});
```

5. **条件渲染**：你可以使用`v-if`和`v-else`指令来根据条件渲染不同的内容。

```html
<div v-if="showMessage">显示消息</div>
<div v-else>显示其他内容</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    showMessage: true
  }
});
```

6. **列表渲染**：使用`v-for`指令可以循环渲染数组或对象中的数据。

```html
<ul>
  <li v-for="item in items">{{ item }}</li>
</ul>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    items: ['Apple', 'Banana', 'Cherry']
  }
});
```

7. **双向数据绑定**：通过`v-model`指令，你可以轻松实现表单元素和数据模型之间的双向绑定。

```html
<input v-model="message">
<p>{{ message }}</p>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: ''
  }
});
```

这些是Vue.js的基本用法。你可以根据具体需求，结合Vue的其他特性，如组件化开发、路由管理、状态管理等，来构建更复杂的Vue应用程序。在使用Vue.js时，建议参考Vue.js官方文档，以深入了解更多高级用法和最佳实践。

### 5、事件处理

Vue.js提供了多种方式来处理事件，以下是关于Vue事件处理的主要知识点和示例：

1. **事件绑定**：你可以使用`v-on`指令来监听DOM元素上的事件，并在事件触发时执行相应的方法。

```html
<button v-on:click="doSomething">Click me</button>
```

```javascript
new Vue({
  el: '#app',
  methods: {
    doSomething: function() {
      // 在这里执行你的事件处理逻辑
    }
  }
});
```

2. **事件修饰符**：Vue提供了一些事件修饰符，用于修改事件监听的行为。例如，`.stop`可以阻止事件冒泡，`.prevent`可以阻止默认行为，`.once`可以让事件只触发一次。

```html
<a v-on:click.stop="doSomething">阻止事件冒泡</a>
<form v-on:submit.prevent="submitForm">阻止表单提交</form>
<button v-on:click.once="doSomethingOnce">只执行一次</button>
```

3. **键盘事件**：你可以监听键盘事件，例如按键按下、按键松开等。

```html
<input v-on:keydown="onKeyDown">
```

```javascript
methods: {
  onKeyDown: function(event) {
    if (event.keyCode === 13) {
      // 处理回车键按下事件
    }
  }
}
```

4. **事件参数**：你可以通过事件处理函数的参数来访问事件对象，从而获取事件的相关信息。

```html
<button v-on:click="showEventInfo">点击我</button>
```

```javascript
methods: {
  showEventInfo: function(event) {
    console.log('事件类型：', event.type);
    console.log('触发元素：', event.target);
    // 可以进一步处理事件对象
  }
}
```

5. **自定义事件**：除了监听DOM事件，你还可以使用`$emit`方法来触发自定义事件，用于组件之间的通信。

```html
<!-- 子组件 -->
<button @click="sendMessage">发送消息</button>

<!-- 父组件 -->
<child-component @message="handleMessage"></child-component>
```

```javascript
// 子组件
methods: {
  sendMessage: function() {
    this.$emit('message', 'Hello from child component');
  }
}

// 父组件
methods: {
  handleMessage: function(message) {
    console.log('收到消息：', message);
  }
}
```

这些是关于Vue事件处理的基本知识点和示例。Vue的事件处理使得在应用程序中管理交互和用户输入变得非常方便，同时也支持自定义事件，用于组件通信。根据具体的应用场景，你可以深入学习Vue的事件系统以及更高级的事件处理技巧。

### 6、生命周期

Vue.js的生命周期是指Vue实例从创建到销毁的整个过程，它包括了一系列的钩子函数（也称为生命周期钩子），允许你在不同阶段插入自定义的代码以执行特定的逻辑。Vue的生命周期可以分为以下几个阶段：

1. **创建阶段（Initialization）**：

   - `beforeCreate`：在Vue实例初始化之后，数据观测(data observation)和事件配置(event/watcher setup)之前调用。此时，实例中的数据和方法还未初始化。

   - `created`：在Vue实例创建完成后调用。在这个阶段，实例已经完成了数据的初始化，但尚未挂载到DOM上。通常在这个阶段可以进行一些数据初始化或发起异步请求。

2. **模板编译和挂载阶段（Template Compilation & Mounting）**：

   - `beforeMount`：在挂载开始之前被调用。此时，模板已经编译完成，但尚未将Vue实例挂载到DOM中。

   - `mounted`：在Vue实例挂载到DOM后调用。在这个阶段，Vue实例已经与DOM元素关联，可以执行DOM操作、发起网络请求等。通常，大部分操作应该在这个阶段完成。

3. **更新阶段（Updating）**：

   - `beforeUpdate`：在数据更新之前被调用。在这个阶段，数据已经改变，但尚未更新到视图上。可以用于执行一些操作，例如数据格式化。

   - `updated`：在数据更新完成后被调用。在这个阶段，数据已经同步到视图上，可以进行DOM操作。但需要注意，避免在此时修改数据，以免陷入无限循环更新。

4. **销毁阶段（Destroying）**：

   - `beforeDestroy`：在实例销毁之前被调用。在这个阶段，实例仍然完全可用，可以执行一些清理操作。

   - `destroyed`：在实例销毁之后被调用。在这个阶段，Vue实例及其所有的指令和事件监听器都被清理。通常用于释放资源和取消订阅。

5. **错误捕获阶段（Error Capturing）**：

   - `errorCaptured`：当子组件抛出未捕获的错误时，会在父组件中触发。用于全局错误处理。Vue 2.x中需要使用ErrorHandler进行全局错误处理，而在Vue 3.x中，可以使用errorCaptured来捕获子组件错误。

这些生命周期钩子函数允许你在Vue实例的不同生命周期阶段执行自定义的逻辑，以满足特定的需求。例如，在`created`阶段可以进行数据初始化，`mounted`阶段可以进行DOM操作，`beforeDestroy`阶段可以进行资源清理等。这些生命周期函数是Vue组件的重要部分，有助于管理组件的生命周期和行为。

### 7、watch侦听器

Vue.js中的侦听器（Watcher）是一种用于监听数据变化并执行自定义逻辑的机制。侦听器允许你监测数据属性的变化，当属性发生变化时，可以执行一些特定的操作。它是Vue.js实现响应式的重要组成部分之一。

要使用Vue的侦听器，你可以在Vue组件的选项中添加一个`watch`对象，该对象包含了要侦听的数据属性以及相应的回调函数。当侦听的数据属性发生变化时，Vue会自动执行指定的回调函数。

以下是一个简单的示例，演示了如何使用Vue的侦听器：

```vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="incrementCount">Increment Count</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    count(newValue, oldValue) {
      console.log(`Count changed from ${oldValue} to ${newValue}`);
      // 在count属性发生变化时执行的操作
    },
  },
  methods: {
    incrementCount() {
      this.count++;
    },
  },
};
</script>
```

在上面的示例中，我们定义了一个名为`count`的数据属性，并在`watch`对象中添加了一个侦听器，以监听`count`属性的变化。当`count`属性发生变化时，侦听器中的回调函数会被触发，打印出变化前后的值。

通过这种方式，你可以在数据发生变化时执行自定义的操作，例如在数据变化后更新其他相关数据、发送网络请求、执行动画效果等。

需要注意的是，Vue的侦听器通常用于监听数据变化，如果需要监听其他事件（例如DOM事件），则应该使用Vue的事件监听器（`@event`或`v-on`指令）。

总结一下，Vue的侦听器是一种用于监听数据属性变化并执行自定义操作的机制，通过在`watch`对象中定义侦听器来使用。这使得你可以更灵活地响应数据的变化，从而实现复杂的交互和逻辑。

### 8、计算属性
计算属性（Computed Properties）是Vue.js中的一个重要概念，它允许你在Vue实例中声明一些计算性的属性，这些属性的值是基于其他数据属性计算得出的，而且具有缓存机制，只有依赖的数据发生变化时才会重新计算。计算属性的主要作用是用于处理和计算数据的衍生值，以保持代码更加可读和可维护。

计算属性与普通的数据属性不同，它们不存储实际的数据，而是根据依赖的数据属性动态计算得出的值。当依赖的数据属性发生变化时，计算属性会重新计算，并且缓存计算结果，直到下次访问该计算属性时再次计算。

在Vue组件中，计算属性的声明方式如下：

```vue
<template>
  <div>
    <p>原始价格: {{ price }}</p>
    <p>折扣后价格: {{ discountedPrice }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      originalPrice: 100,
      discount: 0.2,
    };
  },
  computed: {
    price() {
      return this.originalPrice;
    },
    discountedPrice() {
      return this.originalPrice * (1 - this.discount);
    },
  },
};
</script>
```

在上面的示例中，我们有两个计算属性：`price` 和 `discountedPrice`。`price` 计算属性返回了原始价格 `originalPrice`，而 `discountedPrice` 计算属性根据原始价格和折扣值计算折扣后的价格。

计算属性的主要优势包括：

1. **缓存**：计算属性的结果会被缓存，只有在依赖的数据属性发生变化时才会重新计算，这可以提高性能。

2. **可维护性**：将复杂的计算逻辑封装在计算属性中，使代码更加清晰易读。

3. **响应性**：计算属性是响应式的，它们会自动更新当依赖的数据属性发生变化时，无需手动触发更新。

总之，计算属性是Vue中用于处理衍生数据的强大工具，它们使代码更具可读性、可维护性，并且在性能方面也有一定的优势。在开发中，你可以根据需要使用计算属性来处理各种复杂的数据计算和转换。

### 9、过滤器

过滤器（Filters）是Vue.js中的一个功能，它允许你在模板中对文本进行格式化处理，以便在呈现给用户之前对数据进行转换或过滤。过滤器通常用于对文本进行格式化、日期格式化、字符串截取、大小写转换等常见的文本处理任务。

Vue的过滤器可以在两个地方使用：

1. **插值表达式中**：通过在插值表达式中使用管道符（`|`）来应用过滤器。例如：

   ```html
   <p>{{ message | uppercase }}</p>
   ```

   上面的例子中，`uppercase` 是一个过滤器，用于将 `message` 的文本转换为大写字母。

2. **`v-bind` 指令中**：通过在`v-bind`指令中使用过滤器来绑定DOM属性。例如：

   ```html
   <div v-bind:title="message | capitalize"></div>
   ```

   在这个例子中，`capitalize` 是一个过滤器，用于将 `message` 的文本首字母大写。

自定义过滤器也是可能的，你可以在Vue应用中定义自己的过滤器，并在模板中使用它们。定义自定义过滤器的方法是通过`Vue.filter`方法，例如：

```javascript
// 全局定义一个名为 "uppercase" 的过滤器
Vue.filter('uppercase', function(value) {
  if (!value) return '';
  return value.toString().toUpperCase();
});

// 在模板中使用 "uppercase" 过滤器
<p>{{ message | uppercase }}</p>
```

自定义过滤器允许你封装和重用文本处理逻辑，以提高代码的可维护性和可读性。

总结一下，过滤器是Vue.js中用于对文本进行格式化和转换的功能，它可以在插值表达式和`v-bind`指令中使用，也可以自定义过滤器以满足特定需求。过滤器有助于在模板中处理数据的展示，使代码更具可读性。

### 10、Vue Cli脚手架

Vue CLI（Vue Command Line Interface）是一个用于快速开发Vue.js应用的官方命令行工具。它提供了一套命令和脚手架，帮助开发者快速搭建、开发和构建Vue.js应用，同时也集成了一些最佳实践和工具，如Webpack、Babel等，以简化项目的配置和构建流程。

要使用Vue CLI，你需要按照以下步骤进行安装和使用：

**1. 安装Node.js和npm：** 如果你尚未安装Node.js和npm，请前往 [Node.js官网](https://nodejs.org/) 下载并安装它们。Vue CLI需要Node.js版本8以上。

**2. 全局安装Vue CLI：** 打开终端（命令行界面）并运行以下命令来全局安装Vue CLI：

```bash
npm install -g @vue/cli
```

这将安装Vue CLI到你的系统中，使你可以在任何项目中使用它。

**3. 创建新的Vue项目：** 在你的终端中，使用以下命令创建一个新的Vue.js项目：

```bash
vue create my-vue-app
```

这里的 `my-vue-app` 是你的项目名称，你可以根据需要替换为其他名称。运行该命令后，Vue CLI会引导你通过一系列的选项来配置项目，包括选择要安装的特性（如Vue版本、Babel、ESLint等）。

**4. 进入项目目录：** 创建项目后，进入项目的目录：

```bash
cd my-vue-app
```

**5. 启动开发服务器：** 在项目目录下，运行以下命令启动开发服务器：

```bash
npm run serve
```

这将启动一个本地开发服务器，允许你在开发过程中实时预览和编辑你的Vue应用。你会看到一个本地服务器地址，通常是 `http://localhost:8080`，在浏览器中打开它即可访问你的应用。

**6. 开发和构建：** 在项目目录中，你可以编辑Vue组件、模板和样式文件，同时使用Vue CLI提供的命令来构建、打包和测试你的应用。以下是一些常用的命令：

- `npm run build`：构建生产环境版本的应用。
- `npm run lint`：运行ESLint来检查和修复代码风格。
- `npm run test`：运行测试套件来测试你的应用。

这些命令将帮助你管理和维护Vue.js项目。

总之，Vue CLI是一个强大的工具，用于快速创建、开发和构建Vue.js应用。它提供了一系列命令和脚手架，可以大大简化Vue项目的设置和管理，是Vue.js开发的推荐工具。通过上述步骤，你可以轻松开始使用Vue CLI来开发Vue.js应用。
## 二、组件

### 1、基本使用

在Vue.js中，组件是可复用的、自包含的UI单元，用于构建用户界面。组件将一个页面分解为多个独立的、可维护的部分，每个部分都有自己的模板、逻辑和样式，以实现更好的代码组织、复用性和可维护性。

在Vue.js中使用组件的基本步骤如下：

1. **定义组件**：首先，你需要定义一个组件。一个组件通常包含一个模板（template）、JavaScript逻辑（script）和CSS样式（style）。你可以在单独的文件中定义组件，也可以内联定义。

   示例：在单独文件中定义组件

   ```vue
   <!-- MyComponent.vue -->
   <template>
     <div>
       <h1>{{ message }}</h1>
       <button @click="incrementCounter">增加计数器</button>
     </div>
   </template>

   <script>
   export default {
     data() {
       return {
         message: 'Hello, Vue!',
         counter: 0,
       };
     },
     methods: {
       incrementCounter() {
         this.counter++;
       },
     },
   };
   </script>

   <style scoped>
   /* CSS 样式 */
   </style>
   ```

2. **注册组件**：要在Vue应用中使用组件，你需要将其注册。你可以在根Vue实例或其他组件中注册组件。

   示例：在根Vue实例中注册组件

   ```vue
   <template>
     <div>
       <my-component></my-component>
     </div>
   </template>

   <script>
   import MyComponent from './MyComponent.vue'; // 引入组件

   export default {
     components: {
       'my-component': MyComponent, // 注册组件
     },
   };
   </script>
   ```

   在上述示例中，我们通过 `import` 引入了组件，并在根Vue实例的 `components` 选项中注册了它。

3. **使用组件**：一旦组件注册完成，你可以在模板中使用它，就像使用原生HTML元素一样。

   示例：在模板中使用组件

   ```vue
   <template>
     <div>
       <my-component></my-component>
     </div>
   </template>
   ```

   在上述示例中，我们在模板中使用了 `my-component` 组件。

通过以上步骤，你就可以创建、注册和使用Vue组件了。组件可以包含任意复杂的结构和功能，可以嵌套使用，形成组件树，使Vue应用更加模块化和可维护。

Vue组件是Vue.js应用的基本构建块，用于将应用分解为可管理的部分，提高了代码的可复用性和可维护性。组件化是Vue.js的核心概念之一，它让你能够构建强大的用户界面。

### 2、组件通信

在Vue.js中，组件之间可以通过多种方式进行通信，这取决于组件的层级关系和数据传递需求。以下是一些常见的组件通信方式：

1. **父子组件通信**：

   - **Props（属性）**：通过在父组件中使用props向子组件传递数据。子组件可以接受父组件传递的props，并在模板中使用它们。

   ```vue
   <!-- 父组件 -->
   <template>
     <child-component :message="parentMessage"></child-component>
   </template>
   
   <script>
   import ChildComponent from './ChildComponent.vue';
   
   export default {
     components: {
       'child-component': ChildComponent,
     },
     data() {
       return {
         parentMessage: 'Hello from parent!',
       };
     },
   };
   </script>
   
   <!-- 子组件 -->
   <template>
     <p>{{ message }}</p>
   </template>
   
   <script>
   export default {
    // 1. 数组形式
     props: ['message'],
    // 2. 对象形式
     props: {
      message: {
        type: String, // 类型
        required: true, // 必需
        default: '0', // 默认值为0
        validator(value) {
          return value.length >= 18; // 自定义验证器
        },
      }
     },
   };
   </script>
   ```

   - **自定义事件**：子组件可以通过触发自定义事件，向父组件发送信息。父组件可以在模板中监听这些自定义事件。

   ```vue
   <!-- 子组件 -->
   <template>
     <button @click="sendMessage">Send Message</button>
   </template>
   
   <script>
   export default {
     methods: {
       sendMessage() {
         this.$emit('message-sent', 'Hello from child!');
       },
     },
   };
   </script>
   ```

   ```vue
   <!-- 父组件 -->
   <template>
     <child-component @message-sent="handleMessage"></child-component>
   </template>
   
   <script>
   import ChildComponent from './ChildComponent.vue';
   
   export default {
     components: {
       'child-component': ChildComponent,
     },
     methods: {
       handleMessage(message) {
         console.log(`Received message: ${message}`);
       },
     },
   };
   </script>
   ```

2. **非父子组件通信**：

   - **事件总线**：可以创建一个简单的Vue实例来作为事件总线，充当中央事件处理器，允许不直接关联的组件之间进行通信。

   ```javascript
   // 创建一个事件总线
   const bus = new Vue();
   
   // 在组件A中触发事件
   bus.$emit('custom-event', data);
   
   // 在组件B中监听事件
   bus.$on('custom-event', (data) => {
     // 处理数据
   });
   ```

   - **Vuex**：Vuex是Vue.js的状态管理库，允许你在不同组件之间共享状态。通过Vuex，你可以在任何组件中访问和修改共享状态。

   - **本地存储**：本地存储（如LocalStorage或SessionStorage）也可以用于实现组件之间的通信，尤其适用于需要在不同页面或不同标签页之间进行通信的情况。通过本地存储，你可以在一个组件中将数据存储到本地，并在另一个组件中读取这些数据，从而实现通信。

这些是Vue.js中常用的组件通信方式，你可以根据具体的场景和需求选择合适的方式来实现组件之间的通信。
### 3、插槽

插槽（Slot）是Vue.js中的一个重要特性，它允许你在组件的模板中预留一些位置，以便在父组件中传递内容到这些位置。插槽可以用于动态组件构建，允许父组件自定义子组件的部分内容，使组件更加灵活和可重用。

当涉及到Vue.js中的插槽（Slot）时，有三种主要类型：默认插槽、具名插槽和作用域插槽。它们允许父组件与子组件之间传递内容和数据，以实现更灵活的组件通信和自定义渲染需求。

以下是这三种插槽的概述和使用方法：

**1. 默认插槽：**

默认插槽是最简单的插槽类型。在子组件的模板中，使用`<slot></slot>`元素定义默认插槽的位置。父组件可以在子组件标签内放置内容，这些内容将替换子组件的默认插槽位置。

子组件模板示例：

```vue
<template>
  <div>
    <h2>子组件</h2>
    <slot></slot> <!-- 默认插槽 -->
  </div>
</template>
```

父组件使用子组件时，传递内容到默认插槽：

```vue
<template>
  <div>
    <h1>父组件</h1>
    <child-component>
      <p>这是默认插槽内容</p>
    </child-component>
  </div>
</template>
```

**2. 具名插槽：**

具名插槽允许你为插槽分配名称，并在父组件中指定插槽名称以传递内容。这在需要多个插槽的情况下非常有用。

子组件模板示例：

```vue
<template>
  <div>
    <h2>子组件</h2>
    <slot name="header"></slot> <!-- 具名插槽 -->
    <slot></slot> <!-- 默认插槽 -->
  </div>
</template>
```

父组件使用子组件时，为具名插槽分配内容：

```vue
<template>
  <div>
    <h1>父组件</h1>
    <child-component>
      <template v-slot:header>
        <p>这是头部插槽内容</p>
      </template>
      <p>这是默认插槽内容</p>
    </child-component>
  </div>
</template>
```

**3. 作用域插槽：**

作用域插槽允许子组件向父组件传递数据，以便在父组件中自定义渲染内容。在子组件的模板中，使用`<slot>`元素并在插槽内使用`<template>`包裹需要传递的数据。

子组件模板示例：

```vue
<template>
  <div>
    <h2>子组件</h2>
    <slot :data="slotData"></slot> <!-- 作用域插槽 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      slotData: '这是子组件的数据',
    };
  },
};
</script>
```

父组件使用作用域插槽时，使用`v-slot`指令接收数据，并在模板中使用它：

```vue
<template>
  <div>
    <h1>父组件</h1>
    <child-component>
      <template v-slot:default="slotProps">
        <p>子组件传递的数据：{{ slotProps.data }}</p>
      </template>
    </child-component>
  </div>
</template>
```

通过这三种插槽类型，Vue.js提供了强大的机制来实现灵活的组件通信和自定义渲染。你可以根据具体的需求选择适合的插槽类型，以构建更具可重用性和可扩展性的组件。

### 4、Mixin对象

在Vue.js中，Mixin（混入）是一种可重用的对象，它可以包含一组组件选项（如data、methods、computed、created等），这些选项将被混入到多个组件中，以共享相同的逻辑和功能。Mixin是一种非常强大的工具，可以用来提高组件的可复用性和可维护性，特别是当多个组件需要共享某些功能时。

Mixin对象的定义如下：

```javascript
const myMixin = {
  data() {
    return {
      mixinData: 'This data is from mixin',
    };
  },
  methods: {
    mixinMethod() {
      console.log('This method is from mixin');
    },
  },
};
```

要在组件中使用Mixin，可以在组件的选项中引用Mixin对象，如下所示：

```vue
<template>
  <div>
    <p>{{ mixinData }}</p>
    <button @click="mixinMethod">Call Mixin Method</button>
  </div>
</template>

<script>
import myMixin from './myMixin'; // 引入Mixin对象

export default {
  mixins: [myMixin], // 在组件选项中使用Mixin
  data() {
    return {
      componentData: 'This data is in the component',
    };
  },
  methods: {
    componentMethod() {
      console.log('This method is in the component');
    },
  },
};
</script>
```

在上述示例中，我们定义了一个名为`myMixin`的Mixin对象，它包含了一些数据和方法。然后，我们在组件的选项中通过`mixins`属性引用了这个Mixin对象。现在，该组件将继承`myMixin`中定义的数据和方法，可以像本地数据和方法一样使用它们。

使用Mixin的好处是，你可以在多个组件中共享相同的逻辑和功能，而不必重复编写相同的代码。这对于实现跨组件的功能复用非常有用，例如，如果你有多个组件需要进行相同的数据处理或方法调用，可以将这些逻辑提取到一个Mixin中，然后在需要的组件中引用它。

需要注意的是，如果Mixin和组件具有相同的选项（例如data、methods等），Mixin中的选项将覆盖组件中的选项。因此，在使用Mixin时要小心不要发生选项冲突。另外，Mixin的顺序也很重要，如果多个Mixin包含相同名称的选项，后面的Mixin将覆盖前面的Mixin。

总之，Mixin是一种用于共享和重用组件逻辑的强大工具，可以使Vue.js应用更具模块化和可维护性。
### 5、ref属性

`ref` 是Vue.js中的一个特殊属性，它用于在组件内部或在DOM元素上创建一个对组件或DOM元素的引用。通过`ref`属性，你可以在Vue组件中访问组件实例或直接操作DOM元素，而不必依赖于Vue的响应性数据流。

使用 `ref` 的步骤如下：

1. **在模板中添加 `ref` 属性**：在Vue组件的模板中，可以通过添加 `ref` 属性来为组件或DOM元素创建引用。引用的名称可以是任何合法的JavaScript标识符。

    ```vue
    <template>
      <div>
        <button @click="logMessage">点击我</button>
        <child-component ref="childRef"></child-component>
      </div>
    </template>
    ```

    在上述示例中，我们为一个按钮和一个名为 `childRef` 的子组件创建了引用。

2. **在组件实例中访问引用**：在组件的 JavaScript 部分（即 `<script>` 标签）中，你可以通过 `this.$refs` 来访问引用的组件或DOM元素。引用名称将成为 `this.$refs` 对象的属性。

    ```vue
    <script>
    import ChildComponent from './ChildComponent.vue';

    export default {
      components: {
        'child-component': ChildComponent,
      },
      methods: {
        logMessage() {
          // 访问子组件的引用
          this.$refs.childRef.someMethod(); // 调用子组件的方法
        },
      },
    };
    </script>
    ```

    在上述示例中，我们在 `logMessage` 方法中使用 `this.$refs.childRef` 来访问子组件的引用，并调用了子组件的某个方法。

需要注意的是，`ref` 在Vue中的使用需要谨慎，因为它破坏了Vue的响应性数据流模型。通常情况下，应尽量避免直接操作DOM或使用`ref`，而是优先使用Vue的数据绑定和组件通信方式来管理应用状态和行为。

尽管如此，`ref` 可以在某些情况下非常有用，例如在需要访问DOM元素的情况下或在特定场景中执行一些底层操作。但要小心使用它，确保遵循Vue的最佳实践，以维护代码的可维护性和可测试性。
### 6、动态组件

动态组件是Vue.js中的一种特性，允许你在不同的组件之间动态切换和渲染组件，从而实现更灵活的视图控制。动态组件通常在以下场景中使用：

1. 根据用户操作或应用状态动态加载不同的组件。
2. 在多个组件之间进行切换，以构建具有不同功能的页面。
3. 在单页面应用（SPA）中实现路由切换。

要使用动态组件，首先需要在父组件中定义一个容器，然后使用Vue的特殊标签 `<component>` 来包裹这个容器。接下来，你可以使用`is` 属性来指定要渲染的组件。

以下是一个示例，演示如何使用动态组件：

```vue
<template>
  <div>
    <button @click="showComponentA">显示组件A</button>
    <button @click="showComponentB">显示组件B</button>
    
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';

export default {
  data() {
    return {
      currentComponent: null,
    };
  },
  methods: {
    showComponentA() {
      this.currentComponent = ComponentA;
    },
    showComponentB() {
      this.currentComponent = ComponentB;
    },
  },
};
</script>
```

在上述示例中，我们有两个按钮，分别用于显示不同的组件（ComponentA 和 ComponentB）。我们通过 `:is` 属性动态指定了要渲染的组件，`currentComponent` 的值会根据按钮的点击事件而变化。

在这种方式下，Vue会根据 `currentComponent` 的值来动态渲染相应的组件。这允许你在同一个容器中动态切换不同的组件，实现了动态组件的效果。

需要注意的是，在使用动态组件时，你需要提前导入所有可能被渲染的组件，并在需要时将它们赋给 `:is` 属性。这确保了Vue可以在渲染时找到对应的组件定义。

动态组件是Vue.js中非常强大和灵活的功能，它使得构建动态和可配置的用户界面变得更加容易。你可以根据应用的需要动态加载和切换组件，以实现更复杂的交互和导航。
### 7、缓存组件

在Vue.js中，缓存组件是指能够在组件之间进行切换时保留已经渲染的组件实例，而不是每次切换都销毁和重新创建组件实例。这可以提高性能，尤其是在切换频繁的情况下，避免了不必要的重复渲染和组件销毁。Vue提供了内置的 `<keep-alive>` 组件来实现缓存组件的功能。

要使用 `<keep-alive>` 组件，通常需要将它包裹在需要缓存的组件外部，如下所示：

```vue
<template>
  <div>
    <button @click="toggleComponent">切换组件</button>
    
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>
```

在上述示例中，`<keep-alive>` 组件包裹了一个动态组件，通过 `:is` 属性来动态切换不同的组件。当你切换组件时，`<keep-alive>` 会保留之前渲染的组件实例，并在需要时重新渲染它，而不是每次都销毁和创建一个新的实例。

需要注意以下几点关于 `<keep-alive>` 的使用：

1. 缓存的组件必须具有唯一的 `key` 属性，以便Vue可以区分不同的组件实例。你可以通过动态设置 `key` 来实现这一点。

   ```vue
   <keep-alive>
     <component :is="currentComponent" :key="componentKey"></component>
   </keep-alive>
   ```

   在上述示例中，`componentKey` 是一个唯一的值，用于确保每个组件实例都有不同的 `key`。

2. 缓存的组件会触发一些生命周期钩子事件，如 `activated` 和 `deactivated`。你可以在这些钩子中执行一些自定义逻辑，例如在组件激活时加载数据。

   ```vue
   <script>
   export default {
     activated() {
       // 当组件被激活时执行
     },
     deactivated() {
       // 当组件被停用时执行
     },
   };
   </script>
   ```

3. 默认情况下，`<keep-alive>` 会缓存所有子组件。如果你希望只缓存特定组件，可以使用 `include` 和 `exclude` 属性来控制。

   ```vue
   <keep-alive :include="['ComponentA']">
     <component :is="currentComponent"></component>
   </keep-alive>
   ```

   上述示例中，只有名为 `ComponentA` 的组件会被缓存。

缓存组件通过避免不必要的渲染和销毁，提高了应用性能，特别是在涉及复杂视图和频繁切换的情况下。它是Vue.js中非常有用的功能，可以优化用户体验和页面加载速度。


