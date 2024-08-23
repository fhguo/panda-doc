---
outline: deep
---

# webAPI

::: tip 提示
学习 DOM 和 BOM 对象的属性和方法,以完成网页常见的交互效果。
:::

## 一、DOM 基础

DOM（Document Object Model，文档对象模型）是一种跨平台且语言无关的接口，它把 HTML 文档结构表示为树结构，使得程序可以通过脚本语言（如 JavaScript）访问和操作文档内容、结构和样式。每一个节点都可以通过编程语言进行访问，从而对其进行增删改查。

### 操作 DOM 的方式

操作 DOM 的主要方式是通过 JavaScript。以下是一些常见的 DOM 操作方法：

1. **查找元素**

   - `getElementById`：通过元素的 ID 查找元素。
     ```javascript
     var element = document.getElementById("myElement");
     ```
   - `getElementsByClassName`：通过类名查找元素。
     ```javascript
     var elements = document.getElementsByClassName("myClass");
     ```
   - `getElementsByTagName`：通过标签名查找元素。
     ```javascript
     var elements = document.getElementsByTagName("div");
     ```
   - `querySelector`：通过 CSS 选择器查找元素，返回第一个匹配的元素。
     ```javascript
     var element = document.querySelector(".myClass");
     ```
   - `querySelectorAll`：通过 CSS 选择器查找元素，返回所有匹配的元素。
     ```javascript
     var elements = document.querySelectorAll(".myClass");
     ```

2. **创建和插入元素**

   - `createElement`：创建一个新的元素节点。
     ```javascript
     var newElement = document.createElement("div");
     ```
   - `appendChild`：将新元素添加为某个元素的子节点。
     ```javascript
     var parentElement = document.getElementById("parent");
     parentElement.appendChild(newElement);
     ```
   - `insertBefore`：在某个元素之前插入新元素。
     ```javascript
     var referenceElement = document.getElementById("reference");
     parentElement.insertBefore(newElement, referenceElement);
     ```

3. **修改元素内容**

   - `innerHTML`：设置或获取 HTML 内容。
     ```javascript
     element.innerHTML = "<p>New Content</p>";
     ```
   - `textContent`：设置或获取纯文本内容。
     ```javascript
     element.textContent = "New Text";
     ```

4. **修改元素属性**

   - `setAttribute`：设置属性值。
     ```javascript
     element.setAttribute("class", "newClass");
     ```
   - `getAttribute`：获取属性值。
     ```javascript
     var className = element.getAttribute("class");
     ```
   - `removeAttribute`：移除属性。
     ```javascript
     element.removeAttribute("class");
     ```

5. **修改元素样式**

   - 直接修改`style`属性。
     ```javascript
     element.style.color = "red";
     element.style.backgroundColor = "blue";
     ```

6. **删除元素**
   - `removeChild`：移除某个子元素。
     ```javascript
     parentElement.removeChild(element);
     ```
   - `remove`：直接移除元素（现代浏览器支持）。
     ```javascript
     element.remove();
     ```

**示例**

假设我们有以下 HTML 结构：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM Example</title>
  </head>
  <body>
    <div id="container">
      <p class="text">Hello, World!</p>
    </div>
    <script src="app.js"></script>
  </body>
</html>
```

我们可以使用以下 JavaScript 代码进行一些 DOM 操作：

```javascript
// 查找元素
var container = document.getElementById("container");
var paragraph = document.querySelector(".text");

// 创建新元素
var newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";

// 插入新元素
container.appendChild(newDiv);

// 修改元素内容
paragraph.textContent = "Hello, DOM!";

// 修改元素属性
newDiv.setAttribute("class", "newClass");

// 修改元素样式
newDiv.style.color = "green";
newDiv.style.fontSize = "20px";

// 删除元素
container.removeChild(paragraph);
```

通过这些方法，我们可以高效地操作和管理 DOM，实现动态更新网页内容的功能。

## 二、DOM 事件

### 1、事件监听

DOM（Document Object Model）事件是 Web 开发中的一个重要组成部分，它们代表了用户与 Web 页面交互的不同方式，例如点击按钮、滚动页面、提交表单等动作。DOM 事件也是浏览器用来通知 Web 开发人员文档或文档中的某个部分发生了某种变化的机制。

#### 事件概念

DOM 事件是由用户操作或浏览器行为触发的一系列预定义的信号。这些信号可以被 JavaScript 监听并作出相应的响应。例如，当用户点击一个按钮时，可以触发一个`click`事件，而开发者可以通过编写事件处理函数来响应这个事件。

#### 如何监听

监听 DOM 事件主要通过以下几种方式：

**1. 行内事件处理程序**
这是最简单但并不推荐的做法，因为它将 HTML 和 JavaScript 混在一起，不利于维护。

```html
<button onclick="handleClick()">Click me</button>
<script>
  function handleClick() {
    alert("Button clicked!");
  }
</script>
```

**2. 传统事件处理程序**
通过将事件处理程序直接赋值给 DOM 元素的事件属性。

```javascript
document.getElementById("myButton").onclick = function () {
  alert("Button clicked!");
};
```

**3. `addEventListener`方法**
这是最常用和推荐的方法，它可以为一个 DOM 元素添加一个或多个事件处理程序。

```javascript
document.getElementById("myButton").addEventListener("click", function () {
  alert("Button clicked!");
});
```

**参数说明**
`addEventListener`方法接受三个参数：

1. **事件类型**（如`'click'`）。
2. **事件处理函数**。
3. **可选的第三个参数**，通常是一个布尔值或一个配置对象，用于控制事件捕获和冒泡阶段。如果传入`true`，则事件监听器会在捕获阶段触发；如果传入`false`（默认），则会在冒泡阶段触发。

**示例**

以下是一个简单的示例，展示如何使用`addEventListener`来监听一个按钮的点击事件：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>DOM Event Example</title>
  </head>
  <body>
    <button id="myButton">Click me!</button>

    <script>
      document
        .getElementById("myButton")
        .addEventListener("click", function () {
          alert("Button clicked!");
        });
    </script>
  </body>
</html>
```

在这个例子中，当用户点击按钮时，会弹出一个警告框显示“Button clicked!”的信息。这就是通过监听 DOM 事件并作出响应的一个基本示例。

通过上述方法，你可以有效地为 Web 页面中的元素添加交互性和动态功能，提升用户体验。

### 2、DOM 事件流

DOM 事件流是指在网页中发生事件时，事件如何在 DOM 树中传播和处理的过程。理解事件流有助于更好地控制事件处理程序的行为，特别是在复杂的 DOM 结构中。DOM 事件流包括三个主要阶段：事件捕获（capturing）、事件目标（targeting）、事件冒泡（bubbling）。

#### 三个阶段

**1. 事件捕获阶段（Event Capturing Phase）**

在事件捕获阶段，事件从文档的根节点向下传播到目标元素。这个阶段的目的是在到达目标元素之前检查每个父元素是否有捕获该事件的处理程序。

```plaintext
Document → HTML → Body → Parent Element → Target Element
```

**2. 事件目标阶段（Event Target Phase）**

在事件目标阶段，事件到达目标元素并触发该元素上注册的事件处理程序。如果目标元素上有对应事件的处理程序，这些处理程序将在这个阶段被执行。

```plaintext
Target Element
```

**3. 事件冒泡阶段（Event Bubbling Phase）**

在事件冒泡阶段，事件从目标元素向上传播回文档的根节点。这个阶段允许祖先元素有机会处理从其子元素冒泡上来的事件。

```plaintext
Target Element → Parent Element → Body → HTML → Document
```

**事件传播示例**

假设有一个嵌套的 HTML 结构，当点击最里面的子元素时，事件传播过程如下：

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="parent">
      <button id="child">Click me</button>
    </div>
  </body>
</html>
```

在 JavaScript 中，可以为不同阶段添加事件处理程序：

```javascript
var parent = document.getElementById("parent");
var child = document.getElementById("child");

// 捕获阶段
parent.addEventListener(
  "click",
  function (event) {
    console.log("Parent capturing");
  },
  true
);

// 目标阶段
child.addEventListener("click", function (event) {
  console.log("Child target");
});

// 冒泡阶段
parent.addEventListener(
  "click",
  function (event) {
    console.log("Parent bubbling");
  },
  false
);
```

点击按钮时，控制台输出的顺序为：

```plaintext
Parent capturing
Child target
Parent bubbling
```

#### 控制事件传播

可以通过以下方法控制事件传播：

1. **`stopPropagation()`**：阻止事件在 DOM 树中的进一步传播（无论是捕获还是冒泡阶段）。

   ```javascript
   child.addEventListener("click", function (event) {
     event.stopPropagation();
     console.log("Child target and stop propagation");
   });
   ```

2. **`stopImmediatePropagation()`**：不仅阻止事件的进一步传播，还阻止同一元素上其他相同事件类型的事件处理程序的执行。

   ```javascript
   child.addEventListener("click", function (event) {
     event.stopImmediatePropagation();
     console.log("Child target and stop immediate propagation");
   });
   ```

3. **`preventDefault()`**：阻止事件的默认行为（如表单提交或链接跳转）。

   ```javascript
   child.addEventListener("click", function (event) {
     event.preventDefault();
     console.log("Child target and prevent default");
   });
   ```

**总结**

DOM 事件流的三个阶段——捕获、目标和冒泡——提供了一种强大的机制来控制事件在网页中的传播。通过理解和利用这些阶段，可以编写更灵活和健壮的事件处理代码，适应复杂的用户交互需求。

### 3、事件委托

事件委托是一种处理 DOM 事件的技巧，通过将事件处理程序添加到一个父元素上，而不是为每一个子元素分别添加处理程序。这种方法利用了事件冒泡机制，允许我们在父元素上捕获和处理子元素的事件。事件委托有助于减少内存占用，提高性能，并使得动态添加和移除子元素更加简便。

#### 为什么使用事件委托

1. **减少事件处理程序数量**：在复杂的 DOM 结构中，为每个子元素添加单独的事件处理程序会导致大量内存占用。事件委托通过在父元素上添加一个处理程序，减少了事件处理程序的数量。
2. **动态内容处理**：当 DOM 结构中的子元素动态添加或移除时，事件委托仍然有效，无需为新添加的子元素重新绑定事件。
3. **简化代码维护**：集中处理事件使代码更加简洁和易于维护。

#### 事件委托的实现

假设我们有一个包含多个按钮的列表，我们希望在点击任意按钮时执行相同的操作。使用事件委托，我们只需将事件处理程序添加到列表的父元素上，而不是为每个按钮单独添加处理程序。

```html
<!DOCTYPE html>
<html>
  <body>
    <ul id="buttonList">
      <li><button class="btn">Button 1</button></li>
      <li><button class="btn">Button 2</button></li>
      <li><button class="btn">Button 3</button></li>
    </ul>
  </body>
</html>
```

在 JavaScript 中，可以使用以下代码实现事件委托：

```javascript
// 获取父元素
var buttonList = document.getElementById("buttonList");

// 添加事件委托
buttonList.addEventListener("click", function (event) {
  // 检查点击的是否是按钮
  if (event.target && event.target.matches("button.btn")) {
    console.log(event.target.textContent + " clicked!");
  }
});
```

#### 事件委托的步骤

1. **选择父元素**：选择一个包含目标子元素的父元素。
2. **添加事件处理程序**：将事件处理程序添加到父元素上，并指定事件类型（如`click`）。
3. **检查事件目标**：在事件处理程序中，使用`event.target`来检查实际触发事件的子元素，并根据需要执行相应操作。

**示例：动态添加子元素**

事件委托的一个重要优势是在处理动态添加的子元素时不需要重新绑定事件。例如，如果我们动态添加一个新的按钮到列表中，之前添加的事件处理程序仍然有效。

```javascript
// 动态添加新按钮
var newButton = document.createElement("li");
newButton.innerHTML = '<button class="btn">Button 4</button>';
buttonList.appendChild(newButton);

// 点击新按钮时，事件处理程序仍然会执行
```

**事件委托的注意事项**

1. **事件冒泡**：事件委托依赖于事件冒泡机制，因此需要确保事件确实会冒泡到父元素。
2. **事件目标匹配**：在事件处理程序中，使用`event.target`和适当的选择器（如`matches`方法）来确保只处理特定的子元素事件。
3. **性能优化**：尽管事件委托减少了事件处理程序的数量，但需要注意避免在父元素上添加过多复杂的逻辑，可能会影响性能。

通过事件委托，可以有效地管理和处理大量子元素的事件，简化代码并提高性能。

## 三、DOM宽高和位置

在JavaScript中，可以通过多种方法获取DOM元素的宽高和位置，以及元素的滚动宽高和位置。以下是常用的方法：

#### 1. offset和client属性

**使用 `getBoundingClientRect()`**

这个方法返回一个包含元素的大小及其相对于视口的位置的 `DOMRect` 对象。

```javascript
var element = document.getElementById("myElement");
var rect = element.getBoundingClientRect();

console.log("Top: " + rect.top);
console.log("Left: " + rect.left);
console.log("Width: " + rect.width);
console.log("Height: " + rect.height);
console.log("Bottom: " + rect.bottom);
console.log("Right: " + rect.right);
```

**使用 `offset` 和 `client` 属性**

- **`offsetWidth`** 和 **`offsetHeight`**：元素的布局宽度和高度（包括内边距和边框，但不包括外边距）。
- **`offsetTop`** 和 **`offsetLeft`**：元素相对于其偏移容器（最近的定位祖先元素）顶部和左边的距离。
- **`clientWidth`** 和 **`clientHeight`**：元素的内部宽度和高度（包括内边距，但不包括边框和滚动条）。

```javascript
var element = document.getElementById("myElement");

console.log("Offset Width: " + element.offsetWidth);
console.log("Offset Height: " + element.offsetHeight);
console.log("Offset Top: " + element.offsetTop);
console.log("Offset Left: " + element.offsetLeft);

console.log("Client Width: " + element.clientWidth);
console.log("Client Height: " + element.clientHeight);
```

#### 2. scroll属性

- **`scrollWidth`** 和 **`scrollHeight`**：元素内容的完整宽度和高度，包括因溢出而不可见的部分。
- **`scrollTop`** 和 **`scrollLeft`**：元素的滚动条位置，表示从元素顶部和左边滚动的像素数。

```javascript
var element = document.getElementById("myElement");

console.log("Scroll Width: " + element.scrollWidth);
console.log("Scroll Height: " + element.scrollHeight);
console.log("Scroll Top: " + element.scrollTop);
console.log("Scroll Left: " + element.scrollLeft);
```

**3. 综合示例**

将上述方法结合起来，可以全面获取元素的各种尺寸和位置信息。

```javascript
var element = document.getElementById("myElement");

// 使用 getBoundingClientRect 获取大小和位置
var rect = element.getBoundingClientRect();
console.log("BoundingClientRect - Top: " + rect.top + ", Left: " + rect.left + ", Width: " + rect.width + ", Height: " + rect.height);

// 使用 offset 和 client 属性获取大小和位置
console.log("Offset - Top: " + element.offsetTop + ", Left: " + element.offsetLeft + ", Width: " + element.offsetWidth + ", Height: " + element.offsetHeight);
console.log("Client - Width: " + element.clientWidth + ", Height: " + element.clientHeight);

// 获取滚动宽高和位置
console.log("Scroll - Width: " + element.scrollWidth + ", Height: " + element.scrollHeight + ", Top: " + element.scrollTop + ", Left: " + element.scrollLeft);
```

通过这些方法，你可以获取到DOM元素的完整尺寸和位置信息，并根据需要进行相应的操作。
## 四、BOM

### 1、BOM的概念

BOM（Browser Object Model，浏览器对象模型）是指浏览器提供的一组对象，用于与浏览器进行交互。BOM为开发者提供了一些可以访问和操作浏览器窗口、文档、历史记录、位置等功能的接口。BOM没有像DOM那样标准化，但它是网页编程中不可或缺的一部分。BOM的主要对象包括`window`、`document`、`navigator`、`location`和`history`等。

**主要BOM对象和属性**

**1. `window` 对象**

`window`对象是BOM的核心对象，表示浏览器窗口或框架。所有BOM对象都是`window`对象的属性和方法。

- **`window.innerWidth`** 和 **`window.innerHeight`**：窗口的内部宽度和高度。
- **`window.open()`**：打开一个新的浏览器窗口或标签页。
- **`window.close()`**：关闭当前窗口。
- **`window.alert()`**、**`window.confirm()`** 和 **`window.prompt()`**：显示警告框、确认框和提示框。
- **`window.setTimeout()`** 和 **`window.setInterval()`**：设置定时器和间隔计时器。

```javascript
console.log("Window inner width: " + window.innerWidth);
console.log("Window inner height: " + window.innerHeight);

window.alert("Hello, BOM!");
```

**2. `document` 对象**

`document`对象是DOM的入口，表示当前文档。它是BOM的一部分，因为它是`window`对象的属性。

- **`document.getElementById()`**：通过ID获取元素。
- **`document.createElement()`**：创建新的HTML元素。
- **`document.body`**：表示文档的`<body>`元素。

```javascript
var element = document.getElementById("myElement");
var newElement = document.createElement("div");
document.body.appendChild(newElement);
```

**3. `navigator` 对象**

`navigator`对象提供有关浏览器的信息，如名称、版本、平台等。

- **`navigator.userAgent`**：返回浏览器的用户代理字符串。
- **`navigator.platform`**：返回浏览器运行的操作系统平台。

```javascript
console.log("User agent: " + navigator.userAgent);
console.log("Platform: " + navigator.platform);
```

**4. `location` 对象**

`location`对象包含有关当前URL的信息，并允许操作URL（如重新加载页面、跳转到新页面）。

- **`location.href`**：返回当前页面的完整URL。
- **`location.hostname`**：返回URL的主机名。
- **`location.pathname`**：返回URL的路径名。
- **`location.search`**：返回URL的查询字符串。
- **`location.hash`**：返回URL的片段标识符（锚点）。
- **`location.assign()`**、**`location.replace()`** 和 **`location.reload()`**：用于导航和重新加载页面。

```javascript
console.log("Current URL: " + location.href);
console.log("Hostname: " + location.hostname);
console.log("Pathname: " + location.pathname);
console.log("Search: " + location.search);
console.log("Hash: " + location.hash);

// 跳转到新页面
location.href = "https://www.example.com";

// 重新加载当前页面
location.reload();
```

**5. `history` 对象**

`history`对象提供了对浏览器会话历史的访问，可以在用户访问的页面之间导航。

- **`history.back()`**：导航到会话历史中的上一页。
- **`history.forward()`**：导航到会话历史中的下一页。
- **`history.go()`**：加载会话历史中的特定页面。

```javascript
// 返回到上一个页面
history.back();

// 前进到下一个页面
history.forward();

// 前进或后退指定的页面
history.go(-1); // 后退一个页面
history.go(1);  // 前进一个页面
```

**总结**

BOM提供了一组对象和方法，使开发者能够与浏览器进行交互和操作，包括控制窗口和文档、获取浏览器和操作系统信息、操作URL和会话历史等。了解和使用BOM是创建动态和交互性网页的关键。

### 2、本地存储

本地存储（Local Storage）是一种Web API，它允许开发者在用户的浏览器中存储键值对数据。与会话存储（Session Storage）不同，本地存储中的数据没有过期时间，数据会一直保留，直到通过代码或用户手动删除。

#### 使用本地存储

本地存储通过`localStorage`对象来访问和操作。以下是一些常用的操作：

**1. 存储数据**

使用`setItem`方法存储数据。数据以键值对的形式存储，键和值都是字符串类型。

```javascript
// 存储字符串数据
localStorage.setItem("username", "JohnDoe");

// 存储对象数据（需要先转换为JSON字符串）
var user = { name: "John Doe", age: 30 };
localStorage.setItem("user", JSON.stringify(user));
```

**2. 读取数据**

使用`getItem`方法读取数据。

```javascript
// 读取字符串数据
var username = localStorage.getItem("username");
console.log(username); // 输出: JohnDoe

// 读取对象数据（需要先解析JSON字符串）
var user = JSON.parse(localStorage.getItem("user"));
console.log(user.name); // 输出: John Doe
console.log(user.age);  // 输出: 30
```

**3. 删除数据**

使用`removeItem`方法删除指定键的数据。

```javascript
// 删除存储的数据
localStorage.removeItem("username");
localStorage.removeItem("user");
```

**4. 清除所有数据**

使用`clear`方法清除所有存储的数据。

```javascript
// 清除所有数据
localStorage.clear();
```

**使用本地存储的示例**

以下是一个完整的示例，展示如何使用本地存储来保存和读取用户偏好设置。

```html
<!DOCTYPE html>
<html>
<body>
  <h1>本地存储示例</h1>
  <label for="theme">选择主题:</label>
  <select id="theme">
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
  <button onclick="savePreferences()">保存偏好设置</button>
  <button onclick="loadPreferences()">加载偏好设置</button>

  <script>
    // 保存偏好设置到本地存储
    function savePreferences() {
      var theme = document.getElementById("theme").value;
      localStorage.setItem("theme", theme);
      alert("偏好设置已保存！");
    }

    // 从本地存储加载偏好设置
    function loadPreferences() {
      var theme = localStorage.getItem("theme");
      if (theme) {
        document.getElementById("theme").value = theme;
        alert("偏好设置已加载！");
      } else {
        alert("没有已保存的偏好设置。");
      }
    }
  </script>
</body>
</html>
```

#### 注意事项

- **容量限制**：大多数浏览器对每个域名的本地存储容量限制在5MB左右。
- **数据类型**：本地存储只能存储字符串类型的数据，其他类型的数据需要使用`JSON.stringify`和`JSON.parse`进行序列化和反序列化。
- **安全性**：本地存储的数据在客户端存储，不适合存储敏感信息。
- **同步性**：本地存储是同步的，操作本地存储会阻塞主线程，因此在大量数据操作时需要谨慎。

### 3、定时器

定时器是JavaScript中用于在指定时间后执行代码的机制。它有两个主要类型：`setTimeout` 和 `setInterval`。这两个方法都可以设置在未来的某个时间点或周期性地执行函数。它们都是基于浏览器的计时器 API，具体的执行时间可能会受到浏览器和系统的影响，因此可能不是精确的。

#### 3.1 setTimeout

`setTimeout` 方法用于在指定的延迟后执行一次函数。

**语法**

```javascript
var timeoutID = setTimeout(function, delay, arg1, arg2, ...);
```

- **`function`**：要执行的函数。
- **`delay`**：延迟时间，单位是毫秒（1秒 = 1000毫秒）。当时间到达指定延迟时，函数将被执行。
- **`arg1, arg2, ...`**：传递给函数的额外参数（可选）。

**示例**

```javascript
// 在2秒后执行一个函数
setTimeout(function() {
    console.log("2 seconds have passed");
}, 2000);
```

**清除定时器**

使用 `clearTimeout` 方法可以取消之前设置的 `setTimeout` 定时器。

```javascript
var timeoutID = setTimeout(function() {
    console.log("This will not run");
}, 2000);

// 取消定时器
clearTimeout(timeoutID);
```

#### 3.2 setInterval

`setInterval` 方法用于每隔指定时间重复执行一个函数。

**语法**

```javascript
var intervalID = setInterval(function, interval, arg1, arg2, ...);
```

- **`function`**：要执行的函数。
- **`interval`**：间隔时间，单位是毫秒（1秒 = 1000毫秒）。每隔该时间间隔，函数将被执行。
- **`arg1, arg2, ...`**：传递给函数的额外参数（可选）。

**示例**

```javascript
// 每1秒执行一次函数
var intervalID = setInterval(function() {
    console.log("1 second passed");
}, 1000);
```

**清除定时器**

使用 `clearInterval` 方法可以取消之前设置的 `setInterval` 定时器。

```javascript
// 停止定时器
clearInterval(intervalID);
```


**注意事项**

- **延迟和间隔时间**：`setTimeout` 和 `setInterval` 的延迟和间隔时间是最小时间，不一定是精确的执行时间。实际执行时间可能会受到浏览器线程和系统调度的影响。
- **性能问题**：过多的定时器或过短的时间间隔可能会影响网页性能和响应能力。合理使用定时器并考虑性能影响。
- **清理定时器**：当不再需要定时器时，确保清理它们以避免不必要的资源占用和潜在的内存泄漏。

通过这些方法，你可以在网页中实现定时任务和周期性操作，提升用户体验和功能的动态交互。

## 五、正则表达式

### 1、正则表达式概念

正则表达式（Regular Expression，简称 **regex** 或 **regexp**）是一种用于匹配和操作字符串的模式。它是一种强大且灵活的文本处理工具，可以用于验证输入、搜索、替换、提取和分割字符串。

正则表达式由字符和符号构成，定义了搜索模式。这个模式可以用于查找字符串中是否存在某种子模式，或用于文本的复杂操作。

#### 基本组成部分

1. **普通字符**：
   - 直接匹配字符本身。
   - 例如：`a` 匹配字母 `a`，`1` 匹配数字 `1`。

2. **特殊字符（元字符）**：
   - 用于匹配特定类型的字符或定义复杂的匹配模式。
   - 常见的元字符：
     - `.` ：匹配任意单个字符（除换行符外）。
     - `^` ：匹配字符串的开头。
     - `$` ：匹配字符串的结尾。
     - `*` ：匹配前面的字符零次或多次。
     - `+` ：匹配前面的字符一次或多次。
     - `?` ：匹配前面的字符零次或一次（非贪婪模式）。
     - `\d`：匹配任何数字，相当于 `[0-9]`。
     - `\D`：匹配任何非数字字符。
     - `\w`：匹配任何字母、数字或下划线字符，相当于 `[a-zA-Z0-9_]`。
     - `\W`：匹配任何非字母、数字或下划线字符。
     - `\s`：匹配任何空白字符（空格、制表符、换行符等）。
     - `\S`：匹配任何非空白字符。

3. **字符集**：
   - 使用方括号 `[]` 定义一个字符集，匹配字符集中任意一个字符。
   - 例如：`[abc]` 匹配 `a`、`b` 或 `c` 中的任意一个字符。

4. **量词**：
   - 指定前面的元素要匹配的次数。
   - 常见的量词：
     - `{n}` ：匹配前面的字符恰好 `n` 次。
     - `{n,}` ：匹配前面的字符至少 `n` 次。
     - `{n,m}` ：匹配前面的字符至少 `n` 次，至多 `m` 次。

5. **分组和引用**：
   - 使用圆括号 `()` 将部分正则表达式组合为一个组，便于应用量词或在匹配后引用。
   - 例如：`(abc)` 匹配字符串 `abc`。

6. **或运算符**：
   - 使用管道符 `|` 表示逻辑或，用于在多个模式之间选择。
   - 例如：`a|b` 匹配 `a` 或 `b`。

#### 常见应用场景

1. **验证输入**：
   - 检查电子邮件格式：`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`
   - 检查电话号码格式：`^\d{3}-\d{3}-\d{4}$`（匹配 `123-456-7890`）

2. **搜索和替换**：
   - 替换文本中的所有数字：`/\d/g`（全局搜索所有数字）
   - 替换字符串中的某些子串：`"Hello, World!".replace(/World/, "Regex")`

3. **分割字符串**：
   - 按空白字符分割：`"Hello World".split(/\s+/)`（结果为 `["Hello", "World"]`）

**例子**

假设你想匹配一个有效的IPv4地址，例如 `192.168.0.1`，你可以使用以下正则表达式：

```regex
^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$
```

解释：
- `\d{1,3}`：匹配1到3位的数字。
- `\.`：匹配一个字面上的点（由于 `.` 是元字符，需要用 `\` 进行转义）。
- `^` 和 `$`：分别匹配字符串的开头和结尾，确保整个字符串是一个IP地址。

正则表达式功能强大，但也因为其语法简洁、灵活而可能显得难以理解。掌握基本的正则表达式后，可以逐渐使用更复杂的模式来完成各种文本处理任务。

### 2、正则匹配方法

在前端开发中，常用的正则匹配方法有几种，它们大多是 JavaScript 提供的用于处理正则表达式的内置方法。这些方法可以用于测试、匹配和替换字符串中的特定模式。下面是常用的正则匹配方法及其详细说明：

**1. `test()`**

- **功能**：用于测试一个正则表达式与某个字符串是否匹配。如果匹配，则返回 `true`，否则返回 `false`。
- **语法**：`regex.test(string)`
- **参数**：
  - `regex`：正则表达式。
  - `string`：要测试的字符串。

**示例**：

```javascript
const regex = /^[a-zA-Z0-9]+$/;
const string = "Hello123";
console.log(regex.test(string)); // 输出: true
```

在这个示例中，正则表达式检查字符串是否仅包含字母和数字。

**2. `match()`**

- **功能**：用于检索一个字符串匹配正则表达式的结果。返回一个数组或 `null`（如果没有匹配项）。如果正则表达式带有全局标志 `g`，`match()` 将返回所有匹配项的数组；否则只返回第一个匹配项的信息。
- **语法**：`string.match(regex)`
- **参数**：
  - `string`：要匹配的字符串。
  - `regex`：正则表达式。

**示例**：

```javascript
const string = "I love JavaScript and Java";
const regex = /Java/g;
const result = string.match(regex);
console.log(result); // 输出: ["Java", "Java"]
```

在这个示例中，正则表达式匹配所有出现的 "Java"。

**3. `replace()`**

- **功能**：用于替换与正则表达式匹配的子串。可以替换为指定的新字符串或根据回调函数的结果替换。
- **语法**：`string.replace(regex, replacement)`
- **参数**：
  - `string`：要进行替换的字符串。
  - `regex`：正则表达式或要替换的字符串。
  - `replacement`：用于替换的字符串或返回替换值的函数。

**示例**：

```javascript
const string = "Hello, World!";
const result = string.replace(/World/, "Regex");
console.log(result); // 输出: "Hello, Regex!"
```

在这个示例中，"World" 被替换为 "Regex"。

**4. `split()`**

- **功能**：使用正则表达式或固定字符串来分割一个字符串。返回一个数组，包含由分隔符分割后的子字符串。
- **语法**：`string.split(regexOrString)`
- **参数**：
  - `string`：要分割的字符串。
  - `regexOrString`：用作分隔符的正则表达式或字符串。

**示例**：

```javascript
const string = "apple, banana, cherry";
const result = string.split(/,\s*/);
console.log(result); // 输出: ["apple", "banana", "cherry"]
```

在这个示例中，字符串按照逗号和可选的空白符分割为多个部分。

**5. `exec()`**

- **功能**：用于在字符串中执行搜索匹配。它返回一个数组（包含匹配的详细信息）或 `null`。与 `match()` 不同，`exec()` 是从正则表达式对象的角度来调用的，可以多次执行以获取下一个匹配结果（如果正则表达式使用了全局标志 `g`）。
- **语法**：`regex.exec(string)`
- **参数**：
  - `regex`：正则表达式。
  - `string`：要搜索的字符串。

**示例**：

```javascript
const regex = /(\d+)/;
const string = "Order number: 12345";
const result = regex.exec(string);
console.log(result); 
// 输出: ["12345", "12345"]
```

在这个示例中，正则表达式匹配字符串中的数字，并返回匹配结果。

**6. `search()`**

- **功能**：用于搜索与正则表达式匹配的值，并返回匹配的第一个子串在字符串中的索引。如果没有找到匹配项，则返回 `-1`。
- **语法**：`string.search(regex)`
- **参数**：
  - `string`：要搜索的字符串。
  - `regex`：正则表达式。

**示例**：

```javascript
const string = "Hello, World!";
const result = string.search(/World/);
console.log(result); // 输出: 7
```

在这个示例中，"World" 的起始位置索引为 `7`。

**总结**

- **`test()`**：用于检查字符串是否符合正则表达式。
- **`match()`**：用于查找所有匹配项并返回数组。
- **`replace()`**：用于替换匹配到的内容。
- **`split()`**：用于根据正则表达式分割字符串。
- **`exec()`**：用于详细的逐一匹配，返回匹配的数组。
- **`search()`**：用于查找匹配项的索引位置。

这些方法在处理和操作字符串时非常有用，特别是在验证输入、解析文本或执行复杂的字符串替换时。

### 3、常用的正则表达式

在前端项目中，正则表达式被广泛应用于各种场景，尤其是表单验证、数据解析和字符串处理。以下是一些常见的正则表达式及其在项目中的应用场景：

**验证邮箱地址**

- **用途**：用户注册、登录或修改个人信息时，经常需要验证邮箱地址的格式。
- **正则表达式**：

    ```regex
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    ```

- **示例**：

    ```javascript
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(userInput);
    ```

**验证手机号**

- **用途**：在用户注册或填写联系信息时，验证手机号格式。
- **正则表达式（中国大陆手机号）**：

    ```regex
    /^1[3-9]\d{9}$/
    ```

- **示例**：

    ```javascript
    const phoneRegex = /^1[3-9]\d{9}$/;
    const isValidPhone = phoneRegex.test(userInput);
    ```

**验证身份证号（中国）**

- **用途**：在某些需要实名验证的场景，验证用户的身份证号是否符合格式。
- **正则表达式**：

    ```regex
    /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])\d{3}[\dXx]$/
    ```

- **示例**：

    ```javascript
    const idCardRegex = /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])\d{3}[\dXx]$/;
    const isValidIDCard = idCardRegex.test(userInput);
    ```

**验证 URL**

- **用途**：在用户输入链接时，验证其是否为有效的 URL 格式。
- **正则表达式**：

    ```regex
    /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
    ```

- **示例**：

    ```javascript
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    const isValidURL = urlRegex.test(userInput);
    ```

**验证邮政编码（中国）**

- **用途**：在用户填写地址信息时，验证邮政编码格式。
- **正则表达式**：

    ```regex
    /^[1-9]\d{5}$/
    ```

- **示例**：

    ```javascript
    const postalCodeRegex = /^[1-9]\d{5}$/;
    const isValidPostalCode = postalCodeRegex.test(userInput);
    ```

**验证日期格式（YYYY-MM-DD）**

- **用途**：在表单中验证日期输入是否符合 `YYYY-MM-DD` 格式。
- **正则表达式**：

    ```regex
    /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
    ```

- **示例**：

    ```javascript
    const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    const isValidDate = dateRegex.test(userInput);
    ```

**密码强度验证**

- **用途**：在用户注册或修改密码时，确保密码的复杂度符合要求（至少8位，包含字母和数字）。
- **正则表达式**：

    ```regex
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    ```

- **示例**：

    ```javascript
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const isValidPassword = passwordRegex.test(userInput);
    ```

**验证数字（整数或小数）**

- **用途**：在需要用户输入数值的场景，验证是否为有效的数字（包括整数和小数）。
- **正则表达式**：

    ```regex
    /^-?\d+(\.\d+)?$/
    ```

- **示例**：

    ```javascript
    const numberRegex = /^-?\d+(\.\d+)?$/;
    const isValidNumber = numberRegex.test(userInput);
    ```

**验证用户名**

- **用途**：在用户注册或登录时，验证用户名是否符合格式要求（通常为字母、数字和下划线，长度在3到16位之间）。
- **正则表达式**：

    ```regex
    /^[a-zA-Z0-9_]{3,16}$/
    ```

- **示例**：

    ```javascript
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    const isValidUsername = usernameRegex.test(userInput);
    ```

**匹配 HTML 标签**

- **用途**：在需要解析或过滤 HTML 内容时，匹配所有的 HTML 标签。
- **正则表达式**：

    ```regex
    /<[^>]*>/
    ```

- **示例**：

    ```javascript
    const htmlRegex = /<[^>]*>/g;
    const strippedText = htmlString.replace(htmlRegex, '');
    ```

**总结**

这些正则表达式在实际项目中非常常用，尤其是在表单验证、数据解析和内容过滤等场景下。根据项目的具体需求，可以对这些正则表达式进行调整和优化。

