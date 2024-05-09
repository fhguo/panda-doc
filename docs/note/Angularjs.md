# AngularJS基础

## 1. AngularJS是什么
AngularJS是一个开源的JavaScript框架，由Google开发和维护，用于构建Web应用程序。它是一种用于前端开发的MVC（模型-视图-控制器）框架，旨在使开发者能够更轻松地构建复杂的单页Web应用程序（SPA）。

以下是AngularJS的一些关键特点和概念：

1. MVC架构：AngularJS采用MVC架构，它将应用程序分为三个主要部分：
   - 模型（Model）：用于表示应用程序的数据和业务逻辑。
   - 视图（View）：用户界面的呈现部分，通常使用HTML模板来定义。
   - 控制器（Controller）：用于处理用户输入、管理模型和视图之间的交互。

2. 双向数据绑定：AngularJS引入了双向数据绑定的概念，这意味着当模型的状态发生变化时，视图会自动更新，反之亦然。这大大简化了处理用户界面和数据同步的任务。

3. 指令（Directives）：AngularJS引入了指令，允许开发者通过自定义HTML标签和属性来扩展HTML语言。例如，ng-model指令用于双向数据绑定，ng-repeat用于重复元素，ng-click用于处理点击事件等。

4. 依赖注入（Dependency Injection）：AngularJS提供了强大的依赖注入机制，使得组件之间的协作和测试变得更加容易。通过依赖注入，你可以轻松地管理组件之间的依赖关系。

5. 模块化：AngularJS支持将应用程序拆分为模块，每个模块都可以包含控制器、服务、过滤器等组件。这有助于代码的组织和维护。

6. 服务（Services）：AngularJS提供了一种用于封装可复用逻辑的机制，称为服务。服务可以用于处理数据、HTTP请求、身份验证等任务，并可以通过依赖注入在不同部分之间共享。

7. 路由（Routing）：虽然AngularJS核心库中没有提供路由功能，但可以使用第三方库（如UI Router）来实现单页应用程序的路由管理，以便在不同视图之间进行导航。


需要注意的是，虽然AngularJS在过去非常流行，但自从Angular 2发布以来，Angular框架经历了重大变化，并且不再向后兼容AngularJS。

## 2. 常用的指令

AngularJS是一个JavaScript框架，提供了许多内置指令来扩展HTML的功能。以下是一些常用的AngularJS指令及其示例：

1. **ng-app**：定义AngularJS应用程序的根元素。
   示例：
   ```html
   <div ng-app="myApp">
     <!-- 应用程序内容 -->
   </div>
   ```

2. **ng-controller**：定义控制器，控制器用于管理应用程序的逻辑。
   示例：
   ```html
   <div ng-controller="myController">
     <!-- 控制器的内容 -->
   </div>
   ```

3. **ng-model**：将表单元素的值与AngularJS模型绑定。
   示例：
   ```html
   <input type="text" ng-model="name">
   <p>Hello, {{ name }}</p>
   ```

4. **ng-repeat**：用于迭代数组或对象，并生成重复的HTML内容。
   示例：
   ```html
   <ul>
     <li ng-repeat="item in items">{{ item }}</li>
   </ul>
   ```

5. **ng-click**：定义点击事件处理程序。
   示例：
   ```html
   <button ng-click="doSomething()">点击我</button>
   ```

6. **ng-show**和**ng-hide**：根据表达式的值显示或隐藏元素。
   示例：
   ```html
   <div ng-show="isVisible">这个元素可见</div>
   <div ng-hide="isHidden">这个元素隐藏</div>
   ```

7. **ng-if**：根据表达式的值创建或销毁元素。
   示例：
   ```html
   <div ng-if="shouldDisplay">显示这个元素</div>
   ```

8. **ng-class**：动态设置元素的CSS类。
   示例：
   ```html
   <div ng-class="{ 'highlight': isHighlighted, 'italic': isItalic }">应用CSS类</div>
   ```

9. **ng-style**：动态设置元素的内联样式。
   示例：
   ```html
   <div ng-style="{ 'color': textColor, 'font-size': fontSize }">应用内联样式</div>
   ```

10. **ng-submit**：定义表单的提交事件处理程序。
    示例：
    ```html
    <form ng-submit="submitForm()">
      <!-- 表单内容 -->
      <input type="submit" value="提交">
    </form>
    ```

这些只是AngularJS中一些常见的指令示例。AngularJS还有许多其他指令，用于处理路由、HTTP请求、过滤器等。要使用这些指令，你需要首先将AngularJS添加到你的项目中，并定义相应的模块和控制器。

## 3. AngularJS中的控制器是什么

在AngularJS中，控制器（Controller）是一种JavaScript函数，用于管理视图层的逻辑和数据。控制器的主要作用是将数据绑定到视图并处理用户交互。它们充当了MVC（模型-视图-控制器）架构中的"控制器"部分。

要将控制器与页面绑定，你需要遵循以下步骤：

1. **定义控制器**：首先，在AngularJS应用中定义一个控制器。这通常在模块中完成。示例代码如下：

   ```javascript
   angular.module('myApp', [])
     .controller('MyController', function($scope) {
       $scope.message = 'Hello, AngularJS!';
     });
   ```

   在上面的示例中，我们创建了一个名为"MyController"的控制器，并将一个变量`message`绑定到$scope对象中。

2. **在HTML中使用ng-controller指令**：在HTML模板中，使用`ng-controller`指令将控制器与特定的DOM元素关联起来。这样，控制器的作用域将限定在这个DOM元素内部。

   ```html
   <div ng-app="myApp" ng-controller="MyController">
     <p>{{ message }}</p>
   </div>
   ```

   在上面的示例中，`ng-controller`指令告诉AngularJS在`<div>`元素内使用"MyController"控制器的作用域。因此，`{{ message }}`将显示控制器中定义的`message`变量的值。

3. **数据绑定**：一旦控制器与DOM元素关联，你可以在HTML模板中使用双花括号`{{ }}`或其他指令（如`ng-model`、`ng-bind`）来将控制器中的数据绑定到视图。这意味着数据的变化将自动反映在视图中，反之亦然。

   在上面的示例中，`{{ message }}`用于显示控制器中的`message`变量的值。当控制器中的`message`变量发生变化时，视图中的文本也会相应地更新。

通过以上步骤，你成功将控制器与页面进行了绑定，使控制器能够管理页面的逻辑和数据。AngularJS的双向数据绑定机制确保了视图和控制器之间的同步，这使得开发更加高效和便捷。


## 4. 如何进行数据请求

在AngularJS中进行数据请求通常涉及使用内置的$http服务（或者更现代的$http替代方案，如Axios），它使你能够发送HTTP请求并处理响应。以下是一个基本的数据请求过程的示例：

1. **引入$http服务**：首先，确保你的AngularJS应用中引入了`$http`服务，通常在控制器或服务中注入它。例如：

```javascript
angular.module('myApp', [])
  .controller('MyController', function ($scope, $http) {
    // 控制器代码
  });
```

2. **发起HTTP请求**：使用`$http`服务发起HTTP请求，可以使用GET、POST、PUT、DELETE等HTTP方法。以下是一个简单的GET请求的示例：

```javascript
$http.get('/api/data')
  .then(function(response) {
    // 请求成功时的处理逻辑
    $scope.data = response.data;
  })
  .catch(function(error) {
    // 请求失败时的处理逻辑
    console.error('请求失败：', error);
  });
```

3. **处理响应**：使用`.then()`方法来处理请求成功的情况，通常会将响应数据存储在控制器的作用域中以供视图使用。同时，你也可以使用`.catch()`方法来处理请求失败的情况。

4. **发送带数据的POST请求**：如果需要发送POST请求并包含数据（例如表单数据），你可以这样做：

```javascript
var postData = {
  name: 'John',
  email: 'john@example.com'
};

$http.post('/api/submit', postData)
  .then(function(response) {
    // 请求成功时的处理逻辑
  })
  .catch(function(error) {
    // 请求失败时的处理逻辑
  });
```

这只是一个非常简单的数据请求示例。在实际应用中，你可能需要更多的错误处理、请求头配置、拦截器等功能，以满足特定的需求。

另外，AngularJS也支持Promise API，因此你可以使用`.then()`和`.catch()`来处理请求的异步结果。要确保请求成功后更新UI，通常需要在`.then()`块中更新$scope中的数据，从而触发视图的重新渲染。

## 5. Angularjs与vue的区别

AngularJS和Vue.js是两种不同的JavaScript前端框架，它们有一些显著的区别，以下是一些主要的区别：

1. 开发公司和历史：
   - AngularJS是由Google开发和维护的，于2010年首次发布，是第一个流行的前端框架之一。
   - Vue.js是由尤雨溪（Evan You）创建的开源项目，于2014年首次发布，尽管起源相对较晚，但它在开发者社区中迅速赢得了广泛的认可。

2. 架构和设计哲学：
   - AngularJS采用MVC（Model-View-Controller）架构，使用指令（Directives）来扩展HTML。
   - Vue.js采用MVVM（Model-View-ViewModel）架构，通过数据绑定和组件化来实现应用程序的组织。

3. 学习曲线：
   - AngularJS相对复杂，学习曲线较陡峭，因为它引入了许多概念和概念，如依赖注入、控制器、服务等。
   - Vue.js设计简洁，容易上手，因为它的API和概念相对较少，更容易理解。

4. 数据绑定：
   - AngularJS使用双向数据绑定，这意味着模型（数据）和视图（UI）之间的变化会自动同步。
   - Vue.js也支持双向数据绑定，但你可以选择单向数据绑定，使其更灵活。

5. 模板语法：
   - AngularJS使用类似于标记的模板语法，通过指令来扩展HTML。
   - Vue.js使用声明式的模板语法，将模板直接嵌套在HTML中，使得模板更易读。

6. 生态系统：
   - AngularJS拥有强大的生态系统，包括大量的第三方库和插件，以及广泛的文档。
   - Vue.js虽然生态系统相对较小，但也有一些社区维护的插件和工具，文档和社区活跃度不断增加。

7. 大规模应用：
   - AngularJS在大型企业级应用程序中表现出色，适合复杂的需求。
   - Vue.js也可以用于大规模应用程序，但它的轻量性和简单性更适合小型和中型项目。

选择使用AngularJS还是Vue.js取决于你的项目需求、团队的技能和个人偏好。如果你需要更多的控制和功能，以及一个成熟的生态系统，AngularJS可能是一个好的选择。如果你想要一个更轻量级、易于学习和上手的框架，Vue.js可能更适合你。