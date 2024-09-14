---
outline: [1,3]
---
# vue基础

## 一、vue基础

### 1、MVVM

MVVM（Model-View-ViewModel）是一种软件架构模式，常用于构建前端应用，尤其是在像 Vue.js 这样的前端框架中。

#### MVVM的组成部分：

![An image](/img/mvvm.png)

1. **Model（模型）**:
   - **数据**：应用中的数据或业务逻辑，通常与后台 API 进行交互。
   - **状态**：应用的状态管理，例如 Vuex 中的状态。

2. **View（视图）**:
   - **UI界面**：用户看到的界面元素。通常由 HTML 和 CSS 构成，负责展示数据。
   - **用户交互**：用户通过视图与应用程序交互（点击按钮、输入文字等）。

3. **ViewModel（视图模型）**:
   - **双向绑定**：在 Vue.js 中，ViewModel 是 Vue 实例，充当了 View 和 Model 之间的中介。它通过数据绑定（data binding）机制，实现了视图与模型的同步。
   - **数据处理**：ViewModel 从 Model 获取数据，并将其暴露给 View，还可以包含一些视图相关的逻辑，如格式化数据或响应用户交互。

#### 工作原理：
- **双向数据绑定**：在 Vue 中，View 和 ViewModel 之间通过双向数据绑定实现同步。当 Model 中的数据发生变化时，ViewModel 自动更新，视图也随之更新。反之，当用户在视图中进行操作时，ViewModel 也会相应地更新 Model。

#### MVVM的优点：
- **分离关注点**：将视图和业务逻辑分离，使代码更易于维护和测试。
- **提高开发效率**：通过双向数据绑定，减少了手动操作 DOM 的复杂度。
- **简化代码**：减少了控制器代码的数量，因为很多逻辑都被转移到了 ViewModel 中。

在 Vue.js 中，MVVM 模式得到了很好的实现和推广，因此它成为了前端开发中一个非常流行的架构模式。

### 2、vue是什么？

Vue.js（简称 Vue）是一个用于构建用户界面的渐进式JavaScript框架。它的设计理念是让开发者能够逐步采用框架的特性，从而灵活地将其集成到项目中。Vue 的核心库只关注视图层，但它有强大的生态系统，可以轻松扩展为一个功能齐全的前端框架。

#### Vue 的主要特点：

1. **双向数据绑定**:
   - Vue 提供了数据与视图的双向绑定，这意味着当数据发生变化时，视图会自动更新，反之亦然。这大大简化了用户界面开发中的状态管理。

2. **组件化**:
   - Vue 强调组件化开发，允许开发者将 UI 划分为可复用的独立组件。每个组件封装了自己的 HTML、CSS 和 JavaScript，提升了代码的模块化和可维护性。

3. **虚拟DOM**:
   - Vue 使用虚拟DOM技术来提高性能。虚拟DOM是一种轻量级的JavaScript对象，能够快速检测并执行对真实DOM的最小操作。

4. **渐进式框架**:
   - Vue 可以作为一个轻量级的视图库来使用，但同时也提供了丰富的工具和库（如 Vue Router、Vuex 等），可以帮助开发者构建大型复杂的单页应用（SPA）。

5. **易于学习和使用**:
   - Vue 的 API 设计简洁且直观，文档丰富，入门相对容易。它同时支持 HTML、CSS 和 JavaScript，开发者可以在已有的 Web 技术基础上轻松上手。

6. **强大的生态系统**:
   - Vue 生态系统包括 Vue CLI、Vue Router、Vuex 等工具，帮助开发者在不同项目中高效地使用 Vue。

7. **社区活跃**:
   - Vue 拥有一个庞大且活跃的开发者社区，提供了大量的插件、扩展和第三方库，进一步增强了 Vue 的功能。

#### Vue 的典型应用场景：
- **单页应用（SPA）**：Vue 被广泛用于构建单页应用程序，利用 Vue Router 实现客户端路由。
- **组件库**：许多企业和开源项目使用 Vue 开发组件库，以实现 UI 的复用和统一。
- **渐进增强**：在现有项目中，Vue 可以作为一部分功能的增强或替换，而不需要完全重写整个应用。

Vue.js 因其灵活性、可扩展性和易用性而受到了开发者的广泛欢迎，是目前前端开发中最受欢迎的框架之一。

### 3、插值表达式

插值表达式（Interpolation）是 Vue.js 中的一种语法，用于在模板中动态地显示数据。它使用双大括号 <span v-pre style="color: #4a9c5f;">{{ }}</span> 包裹一个 JavaScript 表达式，表达式的结果会自动插入到 HTML 中。

#### 插值表达式的使用方式：

```html
<div>
  {{ message }}
</div>
```

在上面的例子中，`message` 是 Vue 实例中的一个数据属性。假设 `message` 的值为 "Hello, Vue!"，那么在页面渲染时，这个 `<div>` 标签的内容会显示为：

```html
<div>
  Hello, Vue!
</div>
```

#### 插值表达式的特点：

1. **数据绑定**:
   - 插值表达式与 Vue 实例中的数据绑定在一起。当数据发生变化时，插值表达式中显示的内容会自动更新。

2. **表达式支持**:
   - 插值表达式内部不仅可以绑定简单的变量，还可以执行 JavaScript 表达式。例如，可以进行运算、调用方法、访问对象属性等：
   
   ```html
   <div>
     {{ count + 1 }}
   </div>
   <div>
     {{ user.name.toUpperCase() }}
   </div>
   <div>
     {{ formatDate(today) }}
   </div>
   ```

3. **HTML 转义**:
   - Vue 默认会将插值表达式中的内容进行 HTML 转义，以防止 XSS 攻击。这意味着插值表达式输出的内容会被安全地显示为纯文本，而不会被解析为 HTML。例如：

   ```html
   <div>
     {{ '<h1>Hello</h1>' }}
   </div>
   ```

   结果会显示为：`<h1>Hello</h1>` 而不会被渲染为 HTML 标题。

4. **原生 HTML**:
   - 如果需要输出原生 HTML，可以使用 `v-html` 指令而不是插值表达式。不过在使用 `v-html` 时需要小心，因为它会直接插入 HTML 代码，可能带来安全风险。

   ```html
   <div v-html="rawHtml"></div>
   ```

   在这个例子中，`rawHtml` 的内容会被直接插入到 DOM 中并被渲染为 HTML。

#### 注意事项：
- 插值表达式中不能包含控制流语句（如 `if`、`for` 等），这些通常需要在 Vue 模板指令（如 `v-if`、`v-for`）中处理。
- 尽量避免在插值表达式中使用复杂的逻辑，因为这会降低模板的可读性。复杂的逻辑可以放在计算属性或方法中处理。

插值表达式是 Vue.js 模板语法的核心，用于将数据与视图动态绑定，从而实现响应式的用户界面。

### 4、vue指令

Vue 指令是 Vue.js 提供的一种特殊语法，用于在模板中绑定元素的特定行为或属性。指令通常以 `v-` 为前缀，紧跟指令名称，并在模板中用于操作 DOM 元素或绑定数据。

#### Vue 指令的分类与常用指令：

1. **基础指令**:
    - **`v-bind`**: 动态地绑定 HTML 属性或特性。
      ```html
      <a v-bind:href="url">Link</a>
      ```
      可以简写为 `:`，例如 `:href="url"`。

    - **`v-model`**: 在表单元素上创建双向数据绑定。
      ```html
      <input v-model="message">
      ```

    - **`v-if`**: 条件渲染元素，当条件为真时渲染元素，否则不渲染。
      ```html
      <p v-if="isVisible">This is visible</p>
      ```

    - **`v-else`**: 与 `v-if` 一起使用，当 `v-if` 条件为假时渲染。
      ```html
      <p v-if="isVisible">Visible</p>
      <p v-else>Not Visible</p>
      ```

    - **`v-else-if`**: 在 `v-if` 和 `v-else` 之间添加一个 “else if” 条件。
      ```html
      <p v-if="type === 'A'">A</p>
      <p v-else-if="type === 'B'">B</p>
      <p v-else>C</p>
      ```

    - **`v-show`**: 基于条件切换元素的显示状态（通过 `display` 样式）。
      ```html
      <p v-show="isVisible">This is visible</p>
      ```

    - **`v-for`**: 基于一个数组或对象，循环渲染多个元素。
      ```html
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
      ```

    - **`v-on`**: 监听 DOM 事件，并在事件发生时执行 JavaScript 代码。
      ```html
      <button v-on:click="doSomething">Click me</button>
      ```
      可以简写为 `@`，例如 `@click="doSomething"`。

    - **`v-html`**: 将内容作为原生 HTML 插入到元素中。
      ```html
      <div v-html="rawHtml"></div>
      ```

    - **`v-text`**: 绑定文本内容，类似于插值表达式，但不支持 HTML 语法。
      ```html
      <div v-text="message"></div>
      ```

    - **`v-cloak`**: 这个指令不会渲染任何东西，只是为了避免在 Vue 还未渲染完成前模板被显示出来。通常与 CSS 一起使用：
      ```html
      <style>
        [v-cloak] { display: none; }
      </style>
      <div v-cloak>{{ message }}</div>
      ```

2. **条件与循环指令**:
    - **`v-pre`**: 跳过这个元素和它的子元素的编译过程。用于直接展示原始的模板内容。
      ```html
      <span v-pre>{{ raw }}</span>
      ```

    - **`v-once`**: 只渲染一次，之后对这个元素及其子元素的更新不会进行响应式的重新渲染。
      ```html
      <span v-once>{{ message }}</span>
      ```

3. **动态样式与类**:
    - **`v-bind:class`**: 动态绑定一个或多个类名。
      ```html
      <div v-bind:class="{ active: isActive }"></div>
      ```

    - **`v-bind:style`**: 动态绑定一个或多个内联样式。
      ```html
      <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
      ```

4. **自定义指令**:
    - **`v-focus`**: Vue 提供了允许开发者创建自定义指令的功能。自定义指令可以用于处理 DOM 元素的复杂行为，例如自动聚焦输入框：
      ```javascript
      Vue.directive('focus', {
        inserted: function (el) {
          el.focus();
        }
      });
      ```

#### Vue 指令的作用：

- **绑定数据与视图**: 通过指令，可以轻松地将数据绑定到视图上，从而实现数据驱动的用户界面。
- **操作 DOM**: 指令使得在 Vue 模板中直接操作 DOM 变得更容易和直观，而不需要手动编写复杂的 DOM 操作代码。
- **增强模板功能**: 指令扩展了 Vue 模板的能力，使其能够处理各种逻辑和交互。

Vue 指令通过简洁的语法提供了强大的功能，使得 Vue.js 在处理复杂的前端交互时非常高效。

### 5、事件处理

在 Vue.js 中，事件处理是指在用户与页面交互时（如点击按钮、输入文本等）捕获这些事件并执行相应的代码。Vue 提供了简洁且强大的方式来处理事件。以下是事件处理的主要概念及使用方法：

#### 1. **基本事件处理**
   - **使用 `v-on` 指令**：你可以使用 `v-on` 指令来监听 DOM 事件，并在事件触发时调用 Vue 实例中的方法。
   - **缩写语法**：`v-on` 指令可以缩写为 `@`。例如，`v-on:click="handleClick"` 可以写成 `@click="handleClick"`。

   **示例：**
   ```html
   <button v-on:click="handleClick">点击我</button>
   <!-- 缩写形式 -->
   <button @click="handleClick">点击我</button>
   ```

   **在 Vue 实例中定义方法：**
   ```javascript
   new Vue({
     el: '#app',
     data: {
       message: 'Hello Vue!'
     },
     methods: {
       handleClick: function () {
         alert(this.message);
       }
     }
   });
   ```

#### 2. **事件对象**
   - 在事件处理方法中，你可以访问原生的 DOM 事件对象。Vue 会将事件对象作为方法的第一个参数传递。

   **示例：**
   ```html
   <button @click="handleClick($event)">点击我</button>
   ```

   **在方法中使用事件对象：**
   ```javascript
   methods: {
     handleClick: function (event) {
       console.log(event);  // 事件对象
       console.log(event.target);  // 触发事件的元素
     }
   }
   ```

#### 3. **方法内联处理**
   - 你也可以在模板中直接使用内联的 JavaScript 表达式处理事件。

   **示例：**
   ```html
   <button @click="count += 1">点击我增加计数</button>
   ```

#### 4. **事件修饰符**
   - Vue 提供了一些事件修饰符来简化常见的事件处理需求。这些修饰符可以链式使用。

   **常见修饰符：**
   - `.stop`：调用 `event.stopPropagation()` 来阻止事件冒泡。
   - `.prevent`：调用 `event.preventDefault()` 来阻止默认行为。
   - `.capture`：使用事件捕获模式。
   - `.self`：只有事件在该元素本身（而不是子元素）触发时才触发处理函数。
   - `.once`：事件处理器只会触发一次。

   **示例：**
   ```html
   <button @click.stop="handleClick">阻止冒泡</button>
   <form @submit.prevent="onSubmit">阻止表单提交</form>
   <button @click.once="handleClick">只触发一次</button>
   ```

#### 5. **按键修饰符**
   - 处理键盘事件时，Vue 允许你通过按键修饰符（如 `.enter`, `.esc`, `.tab` 等）来监听特定按键。

   **示例：**
   ```html
   <input @keyup.enter="onEnter">  <!-- 按下 Enter 键时触发 -->
   ```

   - **自定义键修饰符**：你还可以通过在 Vue 实例中配置自定义按键修饰符。

#### 6. **鼠标按钮修饰符**
   - 你可以使用 `.left`、`.right`、`.middle` 来处理特定鼠标按钮的点击事件。

   **示例：**
   ```html
   <button @click.left="handleLeftClick">左键点击</button>
   <button @click.right="handleRightClick">右键点击</button>
   ```

#### 7. **按键码修饰符**
   - Vue 也支持使用键码来处理特定按键事件，虽然推荐使用按键修饰符。

   **示例：**
   ```html
   <input @keyup.13="onEnter">  <!-- 使用 Enter 键的键码 13 -->
   ```

#### 8. **自动绑定 this**
   - Vue 会自动将 `this` 绑定到当前 Vue 实例，因此在事件处理方法中，你可以直接使用 `this` 访问组件的数据和方法。

事件处理是 Vue.js 中非常基础且常用的功能，掌握这些知识点后，你可以更高效地处理用户交互事件。

### 6、计算属性

计算属性（Computed Properties）是 Vue.js 中的一种功能，允许你根据现有数据计算出新的属性值，并在这些数据变化时自动更新。计算属性的核心优势在于它们是基于依赖的响应式计算，这意味着只要它依赖的数据发生变化，计算属性就会重新计算，并缓存结果以提高性能。

#### 1. **计算属性的定义**
   - 计算属性通常定义在 `computed` 选项中，它是一个包含多个 getter 函数的对象。每个函数都对应一个计算属性。

   **示例：**
   ```javascript
   new Vue({
     el: '#app',
     data: {
       firstName: 'John',
       lastName: 'Doe'
     },
     computed: {
       fullName: function () {
         return this.firstName + ' ' + this.lastName;
       }
     }
   });
   ```
   **解释：**
   - `fullName` 是一个计算属性，它依赖于 `firstName` 和 `lastName` 两个数据属性。
   - 当 `firstName` 或 `lastName` 发生变化时，`fullName` 会自动重新计算。

#### 2. **计算属性的特性**
   - **缓存**：计算属性会基于它们的依赖进行缓存，只有当依赖的数据发生变化时，才会重新计算。这与普通方法（methods）不同，方法在每次调用时都会重新执行。
   
   **示例对比：**
   ```javascript
   computed: {
     fullName: function () {
       console.log('计算 fullName');
       return this.firstName + ' ' + this.lastName;
     }
   },
   methods: {
     getFullName: function () {
       console.log('调用 getFullName');
       return this.firstName + ' ' + this.lastName;
     }
   }
   ```
   **用法：**
   - 调用 `fullName` 时，只有在依赖属性变化时会输出 "计算 fullName"。
   - 调用 `getFullName` 方法时，每次调用都会输出 "调用 getFullName"。

#### 3. **计算属性的 Setter**
   - 默认情况下，计算属性只有 getter，用于返回计算的值。但你也可以为计算属性提供一个 setter，以响应用户输入或其他操作。

   **示例：**
   ```javascript
   computed: {
     fullName: {
       get: function () {
         return this.firstName + ' ' + this.lastName;
       },
       set: function (newValue) {
         const names = newValue.split(' ');
         this.firstName = names[0];
         this.lastName = names[names.length - 1];
       }
     }
   }
   ```
   **解释：**
   - 在这个示例中，`fullName` 不仅可以读取，也可以通过 `fullName = 'Jane Smith'` 的方式设置。

#### 4. **计算属性 vs 方法**
   - **计算属性**：适用于依赖其他数据的值，需要缓存时使用。它会在依赖的数据改变时自动更新，适合频繁访问但依赖不经常变化的场景。
   - **方法**：适用于每次调用都需要重新计算的情况。适合不需要缓存或依赖不确定的数据。

#### 5. **使用场景**
   - **动态数据展示**：例如根据用户输入自动更新显示内容。
   - **复杂逻辑计算**：如在表单中计算总价、折扣等。
   - **依赖多个数据的组合计算**：如根据多个条件动态生成过滤列表或排序结果。

#### 6. **示例应用**
   **HTML：**
   ```html
   <div id="app">
     <p>{{ fullName }}</p>
     <input v-model="firstName" placeholder="First Name">
     <input v-model="lastName" placeholder="Last Name">
   </div>
   ```
   **JavaScript：**
   ```javascript
   new Vue({
     el: '#app',
     data: {
       firstName: 'John',
       lastName: 'Doe'
     },
     computed: {
       fullName: function () {
         return this.firstName + ' ' + this.lastName;
       }
     }
   });
   ```

在这个例子中，`fullName` 会根据用户在输入框中输入的 `firstName` 和 `lastName` 自动更新，并且不需要在模板中额外调用方法，非常方便。

### 7、侦听器

在 Vue.js 中，`watch` 侦听器用于观察和响应数据属性的变化。当你需要在数据发生变化时执行异步操作、复杂的逻辑处理，或者在依赖的数据变化时执行非计算性的操作时，`watch` 是非常有用的。

#### 1. **`watch` 的基本概念**
   - `watch` 是 Vue 实例中的一个选项，专门用于监听数据属性的变化。当被监听的属性发生变化时，`watch` 会触发相应的回调函数。
   - 主要适用于需要在数据变化时执行异步或复杂的操作，如 API 请求、数据验证、手动数据更新等。

#### 2. **基本用法**
   **定义 `watch`：**
   ```javascript
   new Vue({
     el: '#app',
     data: {
       question: '',
       answer: 'I cannot give you an answer until you ask a question.'
     },
     watch: {
       question: function (newQuestion, oldQuestion) {
         this.answer = 'Waiting for you to stop typing...';
         this.getAnswer();
       }
     },
     methods: {
       // 模拟异步操作
       getAnswer: function () {
         setTimeout(() => {
           this.answer = 'Here is your answer!';
         }, 1000);
       }
     }
   });
   ```

   **解释：**
   - 当 `question` 的值发生变化时，`watch` 侦听器会立即执行回调函数。
   - 在回调函数中，`newQuestion` 是属性的新值，`oldQuestion` 是属性的旧值。
   - 侦听器会在 `question` 变化时调用 `getAnswer` 方法。

#### 3. **`watch` 的特性**
   - **回调参数**：回调函数接收两个参数，分别是新值 (`newVal`) 和旧值 (`oldVal`)。
   - **深度监听**：默认情况下，`watch` 只能监听数据的直接变化。如果需要监听对象或数组内部值的变化，可以通过设置 `deep: true` 来实现深度监听。

   **示例：深度监听**
   ```javascript
   watch: {
     user: {
       handler: function (newUser, oldUser) {
         console.log('user属性发生了变化');
       },
       deep: true
     }
   }
   ```

   **解释：**
   - 如果 `user` 是一个对象，且你想监听对象内部属性的变化，则需要设置 `deep: true`。

#### 4. **立即执行的监听器**
   - 在某些情况下，你可能希望在监听器首次绑定时就立即执行回调函数。这时可以使用 `immediate: true`。

   **示例：**
   ```javascript
   watch: {
     question: {
       handler: function (newQuestion) {
         console.log('监听器触发:', newQuestion);
       },
       immediate: true
     }
   }
   ```

   **解释：**
   - `immediate: true` 表示在监听器初始化时立即执行回调函数。

#### 5. **监听多层次数据**
   - 可以通过为 `watch` 监听的属性指定路径来监听嵌套的数据结构。

   **示例：**
   ```javascript
   watch: {
     'user.profile.name': function (newName) {
       console.log('用户名改变:', newName);
     }
   }
   ```

   **解释：**
   - 这里的 `watch` 监听 `user` 对象下 `profile` 对象中的 `name` 属性的变化。

#### 6. **`watch` vs `computed`**
   - **`computed`**：适合依赖其他数据的值，需要缓存和高效更新时使用。通常用于展示内容。
   - **`watch`**：适合需要在数据变化时执行异步操作或复杂逻辑的情况，通常用于执行操作或触发副作用。

#### 7. **使用场景**
   - **异步数据请求**：如在搜索框输入内容时实时获取相关数据。
   - **数据验证**：在用户输入时验证数据，并在错误时给出提示。
   - **手动数据同步**：如在组件间或与服务器同步数据时进行自定义的处理逻辑。

#### 8. **示例应用**
   **HTML：**
   ```html
   <div id="app">
     <p>{{ answer }}</p>
     <input v-model="question" placeholder="Ask me anything">
   </div>
   ```

   **JavaScript：**
   ```javascript
   new Vue({
     el: '#app',
     data: {
       question: '',
       answer: 'I cannot give you an answer until you ask a question.'
     },
     watch: {
       question: function (newQuestion) {
         this.answer = 'Waiting for you to stop typing...';
         this.getAnswer();
       }
     },
     methods: {
       getAnswer: function () {
         if (this.question.indexOf('?') === -1) {
           this.answer = 'Questions usually contain a question mark. ;-)';
           return;
         }
         this.answer = 'Thinking...';
         setTimeout(() => {
           this.answer = 'Here is your answer!';
         }, 2000);
       }
     }
   });
   ```

在这个示例中，`watch` 侦听器会在 `question` 变化时触发，并且在回调中执行异步操作 `getAnswer`。这样可以在用户输入时动态更新回答。

### 8、过滤器

在 Vue.js 中，过滤器（Filters）是一种用来对数据进行格式化处理的工具，通常用于文本的格式化显示。过滤器可以在双花括号插值表达式和 `v-bind` 表达式中使用，可以链式调用。需要注意的是，Vue 3 不再推荐使用过滤器，因为 Vue 团队认为这种方式不够灵活和直观。不过在 Vue 2 中，过滤器还是非常常用的。

#### 1. **过滤器的基本概念**
   - 过滤器是一个可以对表达式的输出进行处理的函数。
   - 通常用于格式化文本，例如将日期格式化、将文本转换为大写或小写、对数值进行货币格式化等。

#### 2. **过滤器的定义**
   - 过滤器可以在全局或局部定义。

   **全局过滤器：**
   ```javascript
   Vue.filter('capitalize', function (value) {
     if (!value) return '';
     value = value.toString();
     return value.charAt(0).toUpperCase() + value.slice(1);
   });
   ```

   **局部过滤器：**
   ```javascript
   new Vue({
     el: '#app',
     data: {
       message: 'hello world'
     },
     filters: {
       capitalize: function (value) {
         if (!value) return '';
         value = value.toString();
         return value.charAt(0).toUpperCase() + value.slice(1);
       }
     }
   });
   ```

#### 3. **使用过滤器**
   - 过滤器通常在模板中使用，可以与双花括号插值语法或指令绑定一起使用。

   **插值表达式中的过滤器：**
   ```html
   <p>{{ message | capitalize }}</p>
   ```

   **`v-bind` 中使用过滤器：**
   ```html
   <div v-bind:id="rawId | formatId"></div>
   ```

#### 4. **过滤器的链式调用**
   - 过滤器可以链式调用，这意味着一个值可以经过多个过滤器的处理。

   **示例：**
   ```html
   <p>{{ message | capitalize | reverse }}</p>
   ```

   **解释：**
   - `message` 先经过 `capitalize` 过滤器处理，再经过 `reverse` 过滤器处理。

#### 5. **过滤器的使用场景**
   - **文本格式化**：如将文本转换为大写、首字母大写等。
   - **数值格式化**：如将数字格式化为货币形式，四舍五入等。
   - **日期格式化**：如将时间戳转换为特定格式的日期字符串。
   - **条件转换**：如根据布尔值返回不同的文本或样式。

#### 6. **示例：格式化日期**
   **全局定义过滤器：**
   ```javascript
   Vue.filter('formatDate', function (value) {
     if (!value) return '';
     const date = new Date(value);
     return date.toLocaleDateString();
   });
   ```

   **在模板中使用：**
   ```html
   <p>发布日期：{{ publishedAt | formatDate }}</p>
   ```

   **解释：**
   - `formatDate` 过滤器会将日期对象或时间戳格式化为本地化的日期字符串。

#### 7. **在 Vue 3 中的替代方案**
   - 在 Vue 3 中，过滤器已经被移除，推荐使用方法或计算属性来代替过滤器。
   - **方法替代：**
     ```javascript
     <p>{{ capitalize(message) }}</p>
     ```
   - **计算属性替代：**
     ```javascript
     computed: {
       capitalizedMessage() {
         return this.message.charAt(0).toUpperCase() + this.message.slice(1);
       }
     }
     ```

#### 8. **注意事项**
   - **性能**：过滤器适用于简单的格式化操作，但不推荐用于复杂的逻辑处理。
   - **可复用性**：对于复杂或多处使用的逻辑，最好使用方法或计算属性来替代过滤器。

虽然过滤器在 Vue 2 中非常方便，但 Vue 3 中推荐使用其他更灵活的方式，如方法或计算属性，来实现数据格式化和处理。

### 9、生命周期

在 Vue2 中，生命周期（Lifecycle）钩子函数是指在实例的不同阶段自动调用的一系列函数。这些钩子函数让你能够在组件的不同阶段执行特定的代码，从而实现组件的初始化、数据获取、状态更新等操作。

#### 1. **生命周期的整体流程**
   Vue2 的生命周期可以分为四个主要阶段：
   - **创建阶段**（Creation）
   - **挂载阶段**（Mounting）
   - **更新阶段**（Updating）
   - **销毁阶段**（Destruction）

#### 2. **生命周期钩子函数一览**

**创建阶段**

1. **`beforeCreate`**：
   - 组件实例刚刚被创建，数据观察和事件配置都未完成。
   - 此时，`data` 和 `methods` 等都无法使用。

   ```javascript
   beforeCreate() {
     console.log('beforeCreate: 实例创建前');
   }
   ```

2. **`created`**：
   - 实例已创建，`data`、`methods`、`computed` 和 `watch` 都已经初始化完毕，但模板还未编译，`$el` 还不可用。
   - 可以在这里执行数据请求、定时器等操作。

   ```javascript
   created() {
     console.log('created: 实例创建完成');
   }
   ```

**挂载阶段**

3. **`beforeMount`**：
   - 在挂载开始之前调用，相关的 `render` 函数首次被调用。
   - 组件的 DOM 结构还未生成，但虚拟 DOM 已经创建。

   ```javascript
   beforeMount() {
     console.log('beforeMount: 挂载前');
   }
   ```

4. **`mounted`**：
   - 实例挂载完成，真实的 DOM 被创建并插入到页面中。
   - 在这个阶段，可以操作 DOM 元素。

   ```javascript
   mounted() {
     console.log('mounted: 挂载完成');
   }
   ```

**更新阶段**

5. **`beforeUpdate`**：
   - 在数据更新导致的重新渲染开始之前调用。
   - 组件仍然可以访问旧的 DOM 元素。

   ```javascript
   beforeUpdate() {
     console.log('beforeUpdate: 更新前');
   }
   ```

6. **`updated`**：
   - 由于数据更改，组件的 DOM 已完成重新渲染。
   - 组件已更新，可以访问更新后的 DOM。

   ```javascript
   updated() {
     console.log('updated: 更新完成');
   }
   ```

**销毁阶段**

7. **`beforeDestroy`**：
   - 实例销毁之前调用，此时实例仍然完全可用。
   - 常用于清理计时器、解除事件绑定等操作。

   ```javascript
   beforeDestroy() {
     console.log('beforeDestroy: 销毁前');
   }
   ```

8. **`destroyed`**：
   - 实例销毁后调用，所有的事件监听器和子实例都会被销毁，`data` 和 DOM 结构都已经无法访问。

   ```javascript
   destroyed() {
     console.log('destroyed: 实例已销毁');
   }
   ```

#### 3. **生命周期钩子函数的使用场景**
- **`beforeCreate`** 和 **`created`**：适合初始化数据和设置初始状态。例如，在 `created` 中发起 API 请求以获取数据。
- **`beforeMount`** 和 **`mounted`**：适合操作 DOM，或在组件插入页面后执行一些依赖 DOM 的操作。
- **`beforeUpdate`** 和 **`updated`**：用于在数据更新前后执行特定操作，如手动调整 DOM 或依赖更新后的数据。
- **`beforeDestroy`** 和 **`destroyed`**：适合清理资源、移除事件监听器、清除计时器等操作。

### 10、vue脚手架

Vue CLI 是 Vue.js 官方提供的标准工具，用于快速搭建 Vue.js 项目和进行项目的构建。它提供了一套功能丰富的命令行接口，让开发者可以轻松创建、配置和管理 Vue.js 应用程序。Vue CLI 极大地简化了项目的初始化、开发、打包、部署等流程，适用于从小型项目到大型企业级应用的开发。

#### 1. **Vue CLI 的主要功能**
   - **项目初始化**：提供了交互式的项目初始化流程，开发者可以选择预配置的模板，或者根据项目需求自定义配置。
   - **开发服务器**：内置了开发服务器，支持热模块替换（HMR），可以实时预览代码的变更。
   - **插件系统**：Vue CLI 通过插件系统扩展功能，可以方便地添加如 Vue Router、Vuex、TypeScript、ESLint 等常用插件。
   - **多环境配置**：支持基于不同环境（如开发、测试、生产）的配置管理。
   - **脚本命令**：简化了开发、构建、测试、部署等操作，只需执行简单的命令即可。
   - **现代模式**：支持现代模式构建，生成针对现代浏览器的优化代码。

#### 2. **Vue CLI 的安装**
   Vue CLI 是通过 npm（Node 包管理器）或 yarn 安装的。安装命令如下：

   ```bash
   npm install -g @vue/cli
   ```
   或者使用 yarn：
   ```bash
   yarn global add @vue/cli
   ```

   安装完成后，可以通过以下命令验证安装是否成功：

   ```bash
   vue --version
   ```

#### 3. **使用 Vue CLI 创建项目**
   创建一个新的 Vue 项目非常简单，只需运行以下命令：

   ```bash
   vue create my-project
   ```

   - 在执行该命令后，Vue CLI 会引导你进行项目初始化的交互式配置。你可以选择默认的 Vue 2 模板，也可以根据需求自定义配置，如选择是否使用 TypeScript、ESLint、Vue Router 等。

#### 4. **Vue CLI 的核心命令**
   - **`vue create`**：创建一个新的 Vue.js 项目。
   - **`vue serve`**：运行开发服务器（适用于 Vue 单文件组件）。一般使用 `npm run serve` 来启动开发服务器。
   - **`vue build`**：构建 Vue.js 项目。通常使用 `npm run build` 生成用于生产环境的文件。
   - **`vue inspect`**：查看和调试项目的 webpack 配置。
   - **`vue add`**：向现有项目中添加插件，如 `vue add router` 会添加 Vue Router 插件。
   - **`vue ui`**：启动一个图形界面，用于管理和配置 Vue.js 项目。

#### 5. **Vue CLI 插件**
   Vue CLI 提供了强大的插件系统，可以通过插件来扩展项目的功能。常见的插件包括：
   - **@vue/cli-plugin-babel**：用于编译现代 JavaScript。
   - **@vue/cli-plugin-eslint**：用于代码质量检查。
   - **@vue/cli-plugin-typescript**：支持 TypeScript。
   - **@vue/cli-plugin-router**：集成 Vue Router。
   - **@vue/cli-plugin-vuex**：集成 Vuex。

   安装插件的命令为：
   ```bash
   vue add plugin-name
   ```

#### 6. **Vue CLI 配置**
   - Vue CLI 使用 `vue.config.js` 文件来进行项目的高级配置，如自定义 webpack 配置、多环境配置等。
   - 你可以在这个文件中覆盖默认的配置，添加额外的 webpack 插件，或者调整编译选项。

   **示例 `vue.config.js` 文件：**
   ```javascript
   module.exports = {
     devServer: {
       proxy: 'http://localhost:3000'
     },
     configureWebpack: {
       resolve: {
         alias: {
           '@': path.resolve(__dirname, 'src/')
         }
       }
     }
   };
   ```

#### 7. **现代模式**
   - Vue CLI 支持现代模式构建（`vue-cli-service build --modern`），这会生成一套适用于现代浏览器的优化代码，同时保持对老旧浏览器的兼容性。

#### 8. **使用场景**
   - Vue CLI 适用于任何规模的 Vue.js 项目，从小型单页面应用到大型企业级应用都可以使用 Vue CLI 进行开发。
   - 它简化了项目的配置和管理，特别适合希望快速启动项目并进行高效开发的团队。

#### 9. **示例**
   创建一个简单的 Vue.js 应用，并启动开发服务器的命令流程如下：
   ```bash
   vue create my-app
   cd my-app
   npm run serve
   ```

   通过这些命令，你将启动一个配置完备的 Vue.js 开发环境，并在浏览器中实时预览应用。

Vue CLI 是开发 Vue2 项目的强大工具，它提供了灵活的配置和高效的开发体验，是 Vue.js 生态系统的重要组成部分。需要注意的是，Vue 3推荐使用 create-vue 来创建基于 Vite 的新项目。

## 二、组件

### 1、组件的概念

在 Vue.js 中，**组件**是构建应用程序的基本单位。可以把组件看作是可重用的 Vue 实例，它们拥有自己的模板、数据、逻辑和样式。组件的作用类似于函数或模块，它们将页面的不同部分分离出来，使代码更具模块化、可维护性和可复用性。

#### 1. **组件的基本概念**
   - **封装性**：每个组件都封装了自己的模板、逻辑和样式，不影响其他组件。
   - **复用性**：组件可以在多个地方使用，通过参数化可以在不同场景下复用同一个组件。
   - **组合性**：组件可以组合在一起，构成更复杂的 UI 结构。

#### 2. **如何定义和使用组件**

**全局组件**
全局组件可以在整个应用中使用，通常在项目的入口文件 (`main.js`) 中注册。

**定义全局组件：**
```javascript
// main.js
import Vue from 'vue';
import MyComponent from './components/MyComponent.vue';

Vue.component('my-component', MyComponent);

new Vue({
  render: h => h(App),
}).$mount('#app');
```

**使用全局组件：**
```vue
<template>
  <div>
    <my-component></my-component>
  </div>
</template>
```

**局部组件**
局部组件只能在定义它的父组件中使用，通过在组件的 `components` 选项中注册。

**定义局部组件：**
```javascript
// ParentComponent.vue
<template>
  <div>
    <my-component></my-component>
  </div>
</template>

<script>
import MyComponent from './MyComponent.vue';

export default {
  components: {
    MyComponent
  }
}
</script>
```

#### 3. **单文件组件**
在 Vue CLI 项目中，组件通常以 `.vue` 文件的形式存在，这种单文件组件 (Single File Component) 是 Vue 推荐的组件开发方式。

**单文件组件结构：**
```vue
<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello, Vue Component!'
    }
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
```

- **`<template>`**：定义组件的 HTML 模板。
- **`<script>`**：定义组件的逻辑，包括数据、方法、生命周期钩子等。
- **`<style>`**：定义组件的样式，`scoped` 属性表示样式只作用于当前组件。

#### 4. **组件的使用**
- 在父组件中通过注册来使用子组件。
- 使用组件标签（通常是小写加连字符的形式）来插入组件。

#### 5. **传递数据**
通过 `props` 向子组件传递数据，子组件通过 `this.propsName` 访问。

**示例：**
```vue
<!-- ParentComponent.vue -->
<template>
  <div>
    <my-component :message="parentMessage"></my-component>
  </div>
</template>

<script>
import MyComponent from './MyComponent.vue';

export default {
  components: {
    MyComponent
  },
  data() {
    return {
      parentMessage: 'Hello from Parent!'
    }
  }
}
</script>

<!-- MyComponent.vue -->
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: String
  }
}
</script>
```

在上面的例子中，`parentMessage` 通过 `message` 这个 prop 传递给了 `MyComponent`。

通过理解和掌握这些概念和用法，你可以有效地使用 Vue.js 组件来构建复杂的、可维护的应用程序。

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
在 Vue.js 中，插槽（Slots）是一种用于在组件中定义占位内容的方法。它允许父组件向子组件传递结构化的内容，同时保持子组件的封装性和复用性。

#### 插槽的基本用法

插槽的基本用法是通过在子组件中定义一个 `<slot>` 标签，然后在父组件中使用该子组件时，将内容传递到这个插槽中。以下是一个简单的例子：

**子组件 (ChildComponent.vue)：**
```vue
<template>
  <div>
    <slot></slot> <!-- 插槽位置 -->
  </div>
</template>
```

**父组件 (ParentComponent.vue)：**
```vue
<template>
  <ChildComponent>
    <p>这是传递到插槽中的内容。</p>
  </ChildComponent>
</template>
```

在这个例子中，`<slot></slot>` 是子组件中的插槽，占位符的作用。父组件在使用子组件时，可以在 `<ChildComponent>` 标签之间传递内容，这些内容将插入到子组件的插槽位置。

#### 具名插槽

除了默认插槽（不指定名称的插槽），Vue 还支持具名插槽，这允许你在一个组件中定义多个插槽，并通过名称指定内容应该插入到哪个插槽中。

**子组件 (ChildComponent.vue)：**
```vue
<template>
  <div>
    <header>
      <slot name="header"></slot> <!-- 具名插槽 "header" -->
    </header>
    <main>
      <slot></slot> <!-- 默认插槽 -->
    </main>
    <footer>
      <slot name="footer"></slot> <!-- 具名插槽 "footer" -->
    </footer>
  </div>
</template>
```

**父组件 (ParentComponent.vue)：**
```vue
<template>
  <ChildComponent>
    <template v-slot:header>
      <h1>这是头部内容</h1>
    </template>
    <p>这是主体内容，插入到默认插槽中。</p>
    <template v-slot:footer>
      <p>这是尾部内容</p>
    </template>
  </ChildComponent>
</template>
```

#### 作用域插槽

作用域插槽（Scoped Slots）是一种更高级的插槽类型，它允许子组件将数据传递给插入内容的父组件，使得父组件可以动态地根据子组件的数据渲染内容。

**子组件 (ChildComponent.vue)：**
```vue
<template>
  <div>
    <slot :user="user"></slot> <!-- 传递 "user" 数据给父组件 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: { name: 'John Doe', age: 30 }
    };
  }
};
</script>
```

**父组件 (ParentComponent.vue)：**
```vue
<template>
  <ChildComponent>
    <template v-slot:default="slotProps">
      <p>用户名称: {{ slotProps.user.name }}</p>
      <p>用户年龄: {{ slotProps.user.age }}</p>
    </template>
  </ChildComponent>
</template>
```

在这个例子中，`slotProps` 包含了子组件传递过来的数据，父组件可以使用这些数据来渲染内容。

#### 总结

插槽是 Vue.js 提供的一种强大功能，能够增强组件的灵活性和复用性。通过使用默认插槽、具名插槽和作用域插槽，你可以在组件之间灵活传递和处理内容，构建更强大和可维护的 Vue 应用程序。

### 4、Mixin对象

在 Vue.js 中，Mixin 是一种分发可复用功能的方式。它允许你将可复用的代码提取到一个独立的模块中，然后在多个组件中混入这个模块，从而避免重复代码。

#### 主要特点：
- **代码复用**：Mixin 可以包含组件的生命周期钩子、方法、计算属性、数据属性等，这些可以在多个组件中使用。
- **合并策略**：在组件和 Mixin 中定义的选项会合并。例如，如果组件和 Mixin 都有 `created` 钩子函数，两个函数都会被调用，Mixin 中的钩子函数先执行。
- **优先级**：如果 Mixin 和组件本身有同名的选项（例如方法、计算属性等），组件本身的选项会覆盖 Mixin 的。

#### 使用示例：
```javascript
// 定义一个 Mixin
const myMixin = {
  data() {
    return {
      mixinData: '这是 Mixin 中的数据'
    };
  },
  created() {
    console.log('Mixin 的 created 钩子被调用');
  },
  methods: {
    mixinMethod() {
      console.log('这是来自 Mixin 的方法');
    }
  }
};

// 在组件中使用 Mixin
export default {
  mixins: [myMixin],
  data() {
    return {
      componentData: '这是组件中的数据'
    };
  },
  created() {
    console.log('组件的 created 钩子被调用');
  },
  methods: {
    componentMethod() {
      console.log('这是来自组件的方法');
    }
  }
};
```

在这个例子中，组件使用了 `myMixin`。因此，组件在创建时会执行 Mixin 的 `created` 钩子函数，并且可以访问 Mixin 中定义的数据和方法。组件本身的 `created` 钩子函数会在 Mixin 之后执行。

#### Mixin 的优缺点：
- **优点**：
  - 通过复用代码来减少重复，提高代码的可维护性。
  - 可以将与多个组件相关的通用逻辑提取出来，保持组件的专注性。

- **缺点**：
  - 当一个组件使用了多个 Mixin 时，可能会导致代码的可读性降低，因为很难一眼看出这个组件到底有哪些功能。
  - 可能引发命名冲突问题，如果多个 Mixin 中有相同的属性或方法名，可能会覆盖预期之外的功能。

因此，Vue 3 中引入了 Composition API 作为一种更灵活的解决方案，但在 Vue 2 中 Mixin 仍然是一个重要的工具。

### 5、ref属性

在 Vue.js 中，`ref` 属性用于在模板中为 DOM 元素或组件实例创建一个引用，使得你可以在 JavaScript 代码中直接访问这些元素或实例。

#### 基本用法：
1. **为 DOM 元素创建引用**：
   - 通过 `ref`，你可以直接在组件的实例中访问某个 DOM 元素。

2. **为子组件创建引用**：
   - `ref` 也可以用来获取子组件的实例，从而可以访问子组件的公共方法或属性。

#### 示例：

**1. 为 DOM 元素创建引用**
```vue
<template>
  <div>
    <input ref="myInput" type="text" />
    <button @click="focusInput">Focus Input</button>
  </div>
</template>

<script>
export default {
  methods: {
    focusInput() {
      // 使用 this.$refs 访问被 ref 引用的元素
      this.$refs.myInput.focus();
    }
  }
}
</script>
```
在这个例子中，`ref="myInput"` 允许你在 JavaScript 代码中通过 `this.$refs.myInput` 访问 `input` 元素，并调用其 `focus` 方法。

**2. 为子组件创建引用**
```vue
<template>
  <div>
    <child-component ref="child"></child-component>
    <button @click="callChildMethod">Call Child Method</button>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  methods: {
    callChildMethod() {
      // 访问子组件实例并调用其方法
      this.$refs.child.someMethod();
    }
  }
}
</script>
```
在这个例子中，`ref="child"` 允许你通过 `this.$refs.child` 访问 `ChildComponent` 组件实例，并调用其公开的方法 `someMethod`。

#### 注意事项：
- `ref` 只能在组件挂载完成后使用，因此在 `mounted` 钩子或之后的生命周期中使用。
- 如果在模板中有条件渲染的元素或组件，`ref` 可能在特定条件下是 `undefined`，因此在访问前需要进行判断。
- 在 Vue 3 中，`ref` 也作为 Composition API 的一部分被扩展，用于创建响应式数据。

`ref` 是在 Vue 中处理直接 DOM 操作或者与子组件交互时的一个重要工具，尤其是在你需要脱离 Vue 响应式系统，直接操作 DOM 时。

### 6、动态组件

在 Vue.js 中，动态组件是指可以在运行时根据某种条件动态切换的组件。你可以使用 Vue 的内置组件 `<component>` 来实现动态组件的切换。

#### 基本概念：
- **动态组件切换**：通过指定不同的组件名称，Vue 可以在同一位置渲染不同的组件。
- **组件缓存**：如果需要保留组件的状态，可以使用 `keep-alive` 来缓存动态组件，防止组件在切换时被销毁。

#### 使用示例：

**1. 基本的动态组件切换**
```vue
<template>
  <div>
    <!-- 选择要渲染的组件 -->
    <button @click="currentComponent = 'componentA'">显示组件A</button>
    <button @click="currentComponent = 'componentB'">显示组件B</button>

    <!-- 动态组件 -->
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';

export default {
  data() {
    return {
      currentComponent: 'componentA' // 初始显示的组件
    };
  },
  components: {
    componentA: ComponentA,
    componentB: ComponentB
  }
}
</script>
```
在这个例子中，`<component :is="currentComponent">` 用于动态渲染 `ComponentA` 或 `ComponentB`，根据 `currentComponent` 的值来决定渲染哪个组件。

**2. 使用 `keep-alive` 缓存组件**
如果你希望在组件切换时保留组件的状态，可以使用 `<keep-alive>` 标签。

```vue
<template>
  <div>
    <button @click="currentComponent = 'componentA'">显示组件A</button>
    <button @click="currentComponent = 'componentB'">显示组件B</button>

    <!-- 动态组件并缓存 -->
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';

export default {
  data() {
    return {
      currentComponent: 'componentA'
    };
  },
  components: {
    componentA: ComponentA,
    componentB: ComponentB
  }
}
</script>
```
`<keep-alive>` 标签包裹的组件在切换时不会被销毁，而是被缓存下来。这样，当你再次切换回这个组件时，它的状态会被保留。

#### 其他注意事项：
- **异步组件加载**：动态组件也可以与异步组件加载相结合，当组件需要时才加载，减少初始加载的时间。
- **动态属性传递**：可以给动态组件传递属性，使用 `v-bind` 动态绑定组件的属性。

#### 动态组件的应用场景：
- **Tab 切换**：在实现类似 Tab 页切换时，可以用动态组件来切换不同的内容面板。
- **步骤表单**：实现步骤表单时，不同步骤可以是不同的组件，动态切换显示。
- **按需加载**：只有在需要时才加载并显示组件，提高页面性能。

动态组件使得 Vue 的组件系统更加灵活，可以根据应用的需求动态地渲染不同的组件，并且可以结合缓存来优化用户体验。