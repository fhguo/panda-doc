---
outline: deep
---

# 开始

::: tip 提示
本文档用来记录一些web前端开发工程师高频面试题
:::

## 一、HTML&CSS

### 1、说说对HTML语义化的了解

HTML语义化是指在编写HTML代码时，使用具有语义（含义）的标签来描述网页的结构和内容，以便让浏览器、开发者和机器更容易理解网页的结构。以下是我对HTML语义化的了解：

1. **清晰的结构和内容：** HTML语义化的主要目标是使网页的结构和内容更加清晰和可理解。通过使用语义化标签，我们可以更好地描述页面的各个部分，例如标题、段落、列表、表格、链接等，这有助于提高可维护性和可读性。

2. **提高可访问性：** 使用语义化标签可以提高网站的可访问性。屏幕阅读器和其他辅助技术能够更好地解释和呈现语义化标签，使网站对视力受限的用户更友好。

3. **搜索引擎优化（SEO）：** 搜索引擎使用HTML标记来了解网页的内容。使用语义化标签可以帮助搜索引擎更好地理解页面的结构和内容，从而提高网站在搜索结果中的排名。

4. **跨平台兼容性：** 不同浏览器和设备可能会以不同的方式解释和呈现HTML代码。语义化标签可以提高跨浏览器和跨平台兼容性，确保网页在不同环境下都能正确显示和解释。

5. **代码维护：** 使用语义化标签的代码更容易维护。开发者可以更轻松地理解代码的结构和意图，从而更容易进行修改和更新。

一些常见的HTML语义化标签包括`<header>`、`<nav>`、`<main>`、`<section>`、`<article>`、`<aside>`、`<footer>`等。这些标签有助于描述页面的不同部分，例如页眉、导航、主要内容、侧边栏、文章和页脚。


### 2、src和href的区别

`src` 和 `href` 是两个在HTML中常见的属性，它们有不同的用途和作用：

1. `src`（source）属性：
   - 通常用于指定外部资源，如图像、音频、视频或JavaScript文件的路径。
   - `src` 属性用于在HTML中嵌入外部资源，浏览器会根据这个属性加载并显示资源。
   - 例如，在`<img>`标签中使用`src`来指定图像的路径：`<img src="image.jpg" alt="图片">`。

2. `href`（hypertext reference）属性：
   - 通常用于指定超链接的目标，如链接到其他网页、样式表或锚点的位置。
   - `href` 属性用于创建超链接，用户可以点击链接以导航到其他页面或资源。
   - 例如，`<a>`标签中使用`href`来创建超链接：`<a href="https://www.example.com">访问示例网站</a>`。

总结：
- `src` 用于加载外部资源，通常在嵌入媒体或脚本时使用。
- `href` 用于创建超链接，通常用于导航到其他页面或资源。


### 3、HTML5有哪些新特性

HTML5引入了许多新特性和改进，以丰富Web开发和用户体验。以下是HTML5的一些主要新特性：

1. 新的语义元素：HTML5引入了许多新的语义元素，如 `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>` 等，用于更清晰地定义页面结构，提高可访问性和搜索引擎优化。

2. 视频和音频支持：HTML5引入了 `<video>` 和 `<audio>` 元素，使嵌入多媒体内容更容易，不再需要依赖第三方插件（如Flash）。

3. Canvas绘图：通过 `<canvas>` 元素和JavaScript，开发人员可以实现动态图形和图像处理，用于游戏、图表等。

4. 本地存储：HTML5提供了本地存储选项，包括LocalStorage和SessionStorage，用于在客户端存储数据，以减少对服务器的请求，提高性能。

5. 新的表单元素：HTML5引入了新的表单元素和属性，如 `<input>` 的 `type` 属性的新选项（例如`type="email"`、`type="date"`），以及 `<input>` 的表单验证。

6. WebSocket：WebSocket API允许浏览器和服务器之间实现全双工通信，用于实时应用程序，如聊天和游戏。


这些是HTML5的一些主要新特性，它们共同推动了Web开发的进步，使开发人员能够创建更丰富、更交互性和更可访问的网页应用程序。
### 4、常用的浏览器及内核

以下是一些常用的浏览器以及它们的渲染引擎或内核：

常用的浏览器及其内核包括：

1. **Google Chrome**：
   - 内核：Blink

2. **Mozilla Firefox**：
   - 内核：Gecko

3. **Apple Safari**：
   - 内核：WebKit

4. **Microsoft Edge**（基于Chromium内核的新版）：
   - 内核：Blink

5. **Opera**：
   - 内核：Blink

6. **Internet Explorer**（逐渐被淘汰）：
   - 内核：Trident

这些浏览器的内核有些是开源的，有些则是专有的。在Web前端开发中，需要考虑不同浏览器及其内核的差异，以确保网站或应用在各种浏览器中的兼容性和性能表现。


### 5、行内元素和块级元素有哪些

在HTML中，元素可以分为两种主要类型：块级元素（Block-level Elements）和行内元素（Inline Elements）。它们有不同的特点和用途：

**块级元素（Block-level Elements）**：
1. 块级元素在文档中通常会以新的一行开始，占据其父元素的整个可用宽度。
2. 常见的块级元素包括`<div>`、`<p>`、`<h1>`到`<h6>`、`<ul>`、`<ol>`、`<li>`、`<table>`、`<form>`等。
3. 块级元素可以包含其他块级元素和行内元素。

**行内元素（Inline Elements）**：
1. 行内元素在文档中通常不会导致新的一行开始，它们只占据其内容所需的宽度。
2. 常见的行内元素包括`<span>`、`<a>`、`<strong>`、`<em>`、`<img>`、`<input>`、`<br>`等。
3. 行内元素不能包含块级元素，但可以包含其他行内元素。

**区别**：
1. 块级元素独占一行，而行内元素只占据其内容所需的空间。
2. 块级元素通常用于组织和布局页面的主要结构，而行内元素用于强调文本或内联元素。

**转换**：
有时需要将一个元素的显示方式从块级转换为行内，或从行内转换为块级。可以使用CSS来实现这种转换：

1. 从块级元素转换为行内元素：

   ```css
   div {
       display: inline;
   }
   ```

2. 从行内元素转换为块级元素：

   ```css
   a {
       display: block;
   }
   ```

这些CSS属性可以帮助你控制元素的显示方式，以满足特定的布局需求。

### 6、CSS三大特性

CSS（层叠样式表）具有以下三大特性：

1. **层叠性（Cascading）**：层叠性指的是样式表中定义的样式可以根据一定的规则进行层叠和继承。当多个样式规则应用到同一个元素上时，根据选择器的优先级和特定的层叠顺序，浏览器会确定最终应用的样式。

2. **继承性（Inheritance）**：继承性指的是子元素会继承父元素的部分样式，如字体样式、颜色等。这样可以减少代码量，提高样式的复用性。

3. **优先级（Specificity）**：优先级用于确定在发生冲突时哪个样式规则应该被应用。CSS规定了一套优先级规则，通常是根据选择器的具体性和权重来确定。例如，ID选择器的优先级高于类选择器，类选择器的优先级高于元素选择器等。

这三大特性是CSS的核心概念，了解并合理运用它们可以更好地控制和管理样式，确保网页的外观和行为符合设计要求。

### 7、CSS的优先级

在CSS中，当多个规则应用于同一个元素时，浏览器需要确定哪个规则具有最高的优先级，以决定最终应用哪些样式。CSS优先级是通过计算权重值来确定的，权重值越高的规则优先级越高。

权重值的计算基于选择器的不同部分。权重值计算的规则如下：

1. 内联样式：内联样式使用`style`属性直接在HTML元素上指定的样式，具有最高的优先级。它的权重值为1000。

2. ID选择器：使用ID选择器（如`#myId`）来选择元素，权重值为100。

3. 类选择器、属性选择器和伪类选择器：这包括类选择器（如`.myClass`）、属性选择器（如`[type="text"]`）和伪类选择器（如`:hover`），它们的权重值为10。

4. 元素选择器和伪元素选择器：元素选择器（如`div`、`p`）和伪元素选择器（如`::before`、`::after`）具有最低的权重值，为1。

注意：
- 通用选择器（`*`）、组合器（如空格和`>`）、后代选择器（如`div p`）不影响权重值计算。
- 权重值的计算是按照上述规则相加的，而不是直接比较大小。例如，一个ID选择器和两个类选择器并不等于100+20，而是分别为100和20。

如果多个规则具有相同的权重值，那么最后声明的规则将覆盖之前的规则，这被称为“层叠”。

在需要覆盖其他样式时，可以考虑使用`!important`规则，但要慎重使用，因为它会覆盖所有其他规则。
### 8、如何水平垂直居中一个元素

要水平垂直居中一个元素，可以使用多种方法，取决于您的布局需求和所支持的CSS属性。以下是一些常见的方法：

方法1：使用Flex布局（推荐，现代浏览器支持良好）：
```css
.container {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
}
```
在上述示例中，将`display`属性设置为`flex`，然后使用`justify-content`和`align-items`属性来分别表示水平和垂直居中容器内的内容。

方法2：使用绝对定位和`transform`属性（元素需要已知尺寸）：
```css
.container {
    position: relative;
}

.centered-element {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```
在上述示例中，将父容器的`position`属性设置为`relative`，然后将要居中的元素的`position`属性设置为`absolute`，并使用`top: 50%;`、`left: 50%;`以及`transform`来实现水平和垂直居中。

方法3：使用`display: grid`（现代浏览器支持良好）：
```css
.container {
    display: grid;
    place-items: center; /* 同时水平垂直居中 */
}
```

这些方法都可以实现水平和垂直居中，具体选择哪种方法取决于您的项目需求和浏览器兼容性要求。通常情况下，使用Flex布局是最简单和推荐的方法，因为它在现代浏览器中得到了很好的支持。

### 9、CSS画三角

要使用CSS绘制一个三角形，您可以借助CSS的边框和透明边框技巧。以下是一个示例：

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .triangle {
            width: 0;
            height: 0;
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
            border-bottom: 100px solid red; /* 修改颜色 */
        }
    </style>
</head>
<body>
    <div class="triangle"></div>
</body>
</html>
```

在上述示例中，我们创建了一个带有类名`triangle`的`<div>`元素，并通过设置`border`属性的值来定义三角形的形状和颜色。具体步骤如下：

1. 将`width`和`height`都设置为0，以确保元素没有实际的宽度和高度，只有一个空的矩形区域。

2. 使用`border-left`和`border-right`创建透明的左右边框，使其相互抵消。

3. 使用`border-bottom`创建底边框，并指定其颜色（在这里是红色）以定义三角形的底边。

通过调整`border`属性的值，您可以更改三角形的大小、颜色和角度。这是一个简单而灵活的方法来绘制基本的三角形形状，而不需要使用额外的HTML元素或图像。

### 10、CSS3有哪些新特性

CSS3引入了许多新特性，以扩展和增强CSS（层叠样式表）的功能。以下是一些CSS3的主要新特性：

1. **选择器增强：** CSS3引入了众多新的选择器，如属性选择器（`[attribute=value]`）、伪类选择器（如`:nth-child`、`:hover`等）以及伪元素选择器（如`::before`、`::after`等），使选择元素更加灵活。

2. **圆角边框：** 使用`border-radius`属性可以轻松地创建元素的圆角边框，而不再需要使用背景图片。

3. **阴影：** CSS3引入了`box-shadow`属性，允许在元素周围创建阴影，以及`text-shadow`属性，用于文本阴影。此外，`transform`属性还可以用于创建元素的反射效果。

4. **渐变：** CSS3支持线性渐变（`linear-gradient`）和径向渐变（`radial-gradient`），允许在元素的背景中创建平滑的颜色渐变。

5. **动画和过渡：** CSS3引入了`@keyframes`规则，使动画制作变得更加简单。还有`transition`属性，用于平滑过渡元素的样式变化。

6. **2D和3D转换：** 使用`transform`属性，可以对元素进行2D和3D转换，如平移、旋转、缩放和翻转。

7. **媒体查询：** CSS3的媒体查询允许根据设备属性（如屏幕宽度、分辨率等）应用不同的样式，以创建响应式设计。

8.  **弹性盒布局（Flexbox）：** CSS3引入了弹性盒布局，通过`display: flex`属性，可以轻松地创建灵活的布局。

9.  **栅格布局（Grid）：** 使用`display: grid`属性，可以创建多行多列的网格布局，用于更复杂的页面结构。

10. **滤镜：** CSS3引入了滤镜效果，如模糊、对比度、亮度、饱和度等，通过`filter`属性可以应用到元素上。

这只是CSS3的一些主要特性，还有许多其他特性，它们一起为开发人员提供了更大的样式控制和更多的创造性选项。不同浏览器可能支持这些特性的程度有所不同，因此在使用它们时需要谨慎考虑浏览器兼容性。

### 11、CSS3新增选择器

CSS3 引入了一些新的选择器，使选择元素的方式更加灵活和强大。以下是一些常见的新增选择器：

1. **属性选择器（Attribute Selectors）**：属性选择器允许你选择带有特定属性的元素，可以根据属性值的存在、相等、以某字符串开头或以某字符串结尾等条件来选择元素。

```css
/* 选择所有带有title属性的元素 */
[title] {
  /* 样式 */
}

/* 选择所有class属性以"btn-"开头的元素 */
[class^="btn-"] {
  /* 样式 */
}
```

2. **子元素选择器（:first-child, :last-child, :nth-child()等）**：这些选择器允许你选择元素的第一个、最后一个或特定位置的子元素。

```css
/* 选择每个ul下的第一个li元素 */
ul > li:first-child {
  /* 样式 */
}
```

3. **伪类选择器（Pseudo-classes）**：伪类选择器用于选择元素的特殊状态，例如悬停状态、访问状态等。

```css
/* 选择所有链接的悬停状态 */
a:hover {
  /* 样式 */
}
```

4. **伪元素选择器（Pseudo-elements）**：伪元素选择器用于选择元素的特殊部分。

```css
/* 这两个伪元素用于在元素的内容前面和后面生成虚拟元素 */
a::before {
  content: ">> ";
}

p::after {
  content: " (continued)";
}
```

这些新增的选择器使得CSS更加强大和灵活，可以更精确地选择和样式化文档中的元素。它们在项目中经常用于调整样式以满足特定需求。
### 12、说说对BFC的理解

BFC，即块级格式化上下文（Block Formatting Context），是一个在CSS布局中非常重要的概念，它影响着元素的布局和排列方式。以下是对BFC的理解：

1. **BFC的基本概念：** BFC是一种独立的渲染区域，其中的元素按照一定规则进行布局和渲染。BFC内的元素相对于外部元素是隔离的，它们不会影响到外部元素的布局，也不受外部元素的影响。

2. **创建BFC的条件：** BFC可以通过以下方式创建：
   - 根元素 `<html>`
   - 浮动元素（元素的`float`属性不为`none`）
   - 绝对定位元素（元素的`position`属性为`absolute`或`fixed`）
   - `overflow`属性不为`visible`的元素（例如，`overflow: auto;`或`overflow: hidden;`）

3. **BFC的影响：** BFC对元素的布局和排列有重要影响，主要体现在以下几个方面：
   - 阻止外部浮动元素影响内部元素的布局。
   - 防止内部元素溢出BFC。
   - 计算BFC高度时，会考虑浮动元素的高度。
   - 内部元素垂直排列不会互相重叠，而是按照规则进行排列。

4. **常见应用场景：** BFC在解决一些常见的布局问题时非常有用，例如清除浮动、避免外边距折叠等。一些常见的应用场景包括：
   - 清除浮动：通过在容器元素上创建BFC，可以清除内部浮动元素对父容器高度的影响。
   - 避免外边距折叠：BFC内部的垂直外边距不会与外部元素的外边距发生折叠，有助于更精确地控制元素之间的间距。
   - 制作两栏布局：可以使用BFC来创建一个左右两栏布局，其中一个栏浮动，另一个创建BFC以避免影响浮动栏的布局。

总之，BFC是CSS布局中的一个重要概念，它能够帮助开发者更好地控制元素的布局和排列，解决一些常见的布局问题。理解BFC对于掌握复杂布局和解决一些奇怪的布局行为问题非常重要。

### 13、如何实现移动端1px边框

在移动端实现1px的边框通常涉及到设备像素比（device pixel ratio，DPR）和CSS技巧。由于不同的移动设备具有不同的DPR，以及不同的浏览器支持度，实现1px边框可能需要使用不同的方法。以下是一些常见的实现1px边框的方法：


1. **使用伪元素`::after`：**

   第一种方法是使用伪元素来创建1px边框。这种方法通常更适合在需要精确控制的情况下使用，因为它可以确保边框的精确显示。例如：

   ```css
   .element::after {
     content: '';
     display: block;
     width: 100%;
     height: 1px;
     background: #e5e5e5;
   }
   ```

   这种方法的好处是在高DPR设备上可以获得更清晰的边框效果。

2. **使用`border-image`：**

   `border-image`属性允许您使用图像来定义边框。您可以创建一个像素值为1px的图片，然后将其应用到元素的边框上。这种方法需要一些额外的工作，但可以确保在各种情况下都有一致的1px边框。

   ```css
   .element {
     border-width: 1px;
     border-image: url('1px-border.png') 1 stretch;
   }
   ```

   在这里，`1px-border.png`是一个包含1px宽度的实线的图像。

不同的项目和需求可能需要不同的方法，您可以根据实际情况选择合适的实现1px边框的方法。此外，您可能需要使用媒体查询来根据不同的DPR选择不同的样式。例如，对于高DPR设备，您可以选择使用伪元素或`border-image`来获得更清晰的效果。


## 二、JavaScript

### 1、js数据类型有哪些

JavaScript中有10种主要的数据类型，分为两大类：基本数据类型（Primitive Data Types）和引用数据类型（Reference Data Types）。

**基本数据类型**：

1. **Number（数字）**：表示数字，可以是整数或浮点数。
   
   示例：`let age = 25;`

2. **String（字符串）**：表示文本数据，用单引号或双引号包裹起来。
   
   示例：`let name = "John";`

3. **Boolean（布尔）**：表示逻辑值，只有两个值：`true`和`false`。
   
   示例：`let isStudent = true;`

4. **Undefined（未定义）**：表示声明了变量但没有给它赋值时的默认值。
   
   示例：`let x;`

5. **Null（空）**：表示变量的值为空或不存在。
   
   示例：`let person = null;`

6. **Symbol（符号，ES6新增）**：表示唯一的、不可变的值，通常用于对象属性的键。
   
   示例：`const uniqueKey = Symbol();`

7. **BigInt（大整数，ES11新增）**：用于表示超出 JavaScript 中普通数字范围的整数。
   
   示例：`const bigIntValue = 1234567890123456789012345678901234567890n;`

**引用数据类型**：

8. **Object（对象）**：表示复杂数据结构，可以包含多个键值对。
   
   示例：`let person = { firstName: "John", lastName: "Doe" };`

9. **Array（数组）**：是一种特殊的对象，用于存储有序的数据列表。
   
   示例：`let colors = ["red", "green", "blue"];`

10. **Function（函数）**：是一种特殊的对象，可以执行一段代码。
   
    示例：
    ```javascript
    function greet(name) {
        console.log("Hello, " + name + "!");
    }
    ```

这些数据类型在JavaScript中用于存储和操作不同种类的数据。了解这些数据类型对于编写 JavaScript 代码非常重要，因为它们在变量、函数、对象等方面的使用都有所不同。

### 2、如何检测数据类型

在JavaScript中，您可以使用不同的方法来检测数据类型。以下是一些常用的方法：

1. **typeof 操作符**：`typeof` 操作符用于检测变量或值的数据类型，并返回一个表示数据类型的字符串。

   ```javascript
   typeof 5; // 返回 "number"
   typeof "Hello"; // 返回 "string"
   typeof true; // 返回 "boolean"
   typeof undefined; // 返回 "undefined"
   typeof null; // 返回 "object"（注意这是一个历史遗留问题，null被错误地认为是"object"）
   typeof {}; // 返回 "object"
   typeof []; // 返回 "object"（数组也被错误地认为是"object"）
   typeof function() {}; // 返回 "function"
   ```

   `typeof` 对于大多数数据类型都有效，但对于对象和数组来说，它只会返回 "object"。要进一步检测对象的具体类型，需要使用其他方法。


2. **Array.isArray()**：用于检测一个值是否为数组。

   ```javascript
   Array.isArray([]); // 返回 true
   Array.isArray({}); // 返回 false
   ```

   这是专门用于检测数组的方法。

3. **instanceof 操作符**：`instanceof` 操作符用于检测对象是否是特定构造函数的实例。

   ```javascript
   let d = new Date();
   d instanceof Date; // 返回 true，d是Date对象的实例
   ```

   `instanceof` 主要用于检测自定义的构造函数和实例之间的关系。

这些方法可以根据您的需求来选择使用，根据不同情况来确定数据类型是很重要的，特别是在处理不同类型的数据时。

### 3、null和undefined区别是什么

`null` 和 `undefined` 都是 JavaScript 中表示没有值的特殊值，但它们有一些关键的区别：

1. **undefined**：
   - `undefined` 表示声明了一个变量但没有给它赋值。
   - 当您声明一个变量但没有初始化它时，该变量的值默认为 `undefined`。
   - 也可以用于函数中，表示未传递参数或未返回值。

   示例：
   ```javascript
   let x;
   console.log(x); // 输出 undefined

   function greet(name) {
       if (name === undefined) {
           console.log("Hello, stranger!");
       } else {
           console.log("Hello, " + name + "!");
       }
   }
   greet(); // 输出 "Hello, stranger!"
   ```

2. **null**：
   - `null` 表示一个空值或占位符，表示该变量的值是空的。
   - 当您希望明确表示一个变量没有值时，可以将其赋值为 `null`。
   - `null` 是一个对象数据类型。

   示例：
   ```javascript
   let y = null;
   console.log(y); // 输出 null
   ```

关键区别总结：
- `undefined` 是一个表示变量未初始化或函数未传递参数的默认值。
- `null` 是一个表示变量有一个空值或占位符的值。
- `undefined` 是一个基本数据类型（Undefined），而 `null` 是一个对象数据类型（Null）。
- 在比较上，它们不相等，但都等于自身和 `==` 操作符。
- 在使用时，通常 `undefined` 是 JavaScript 引擎设置的，而 `null` 是开发人员明确设置的。

在代码中，通常建议使用 `null` 来明确表示没有值的情况，而不要将变量设置为 `undefined`。

### 4、数组基本方法

JavaScript 中数组有许多常用的方法，这些方法用于操作和处理数组的元素。以下是一些常见的数组方法，以及每个方法的示例：

1. **`push()` 方法**：向数组末尾添加一个或多个元素，并返回新的数组长度。

   ```javascript
   var fruits = ['apple', 'banana'];
   var newLength = fruits.push('orange', 'cherry');
   console.log(fruits); // ['apple', 'banana', 'orange', 'cherry']
   console.log(newLength); // 4
   ```

2. **`pop()` 方法**：移除数组最后一个元素，并返回移除的元素。

   ```javascript
   var fruits = ['apple', 'banana', 'orange'];
   var removedFruit = fruits.pop();
   console.log(fruits); // ['apple', 'banana']
   console.log(removedFruit); // 'orange'
   ```

3. **`unshift()` 方法**：向数组开头添加一个或多个元素，并返回新的数组长度。

   ```javascript
   var fruits = ['apple', 'banana'];
   var newLength = fruits.unshift('orange', 'cherry');
   console.log(fruits); // ['orange', 'cherry', 'apple', 'banana']
   console.log(newLength); // 4
   ```

4. **`shift()` 方法**：移除数组的第一个元素，并返回移除的元素。

   ```javascript
   var fruits = ['orange', 'cherry', 'apple', 'banana'];
   var removedFruit = fruits.shift();
   console.log(fruits); // ['cherry', 'apple', 'banana']
   console.log(removedFruit); // 'orange'
   ```

5. **`concat()` 方法**：合并两个或多个数组，返回一个新的数组，不会改变原始数组。

   ```javascript
   var fruits1 = ['apple', 'banana'];
   var fruits2 = ['orange', 'cherry'];
   var combinedFruits = fruits1.concat(fruits2);
   console.log(combinedFruits); // ['apple', 'banana', 'orange', 'cherry']
   ```

6. **`join()` 方法**：将数组的所有元素组成一个字符串，并使用指定的分隔符分隔元素。

   ```javascript
   var fruits = ['apple', 'banana', 'cherry'];
   var fruitString = fruits.join(', ');
   console.log(fruitString); // 'apple, banana, cherry'
   ```

7. **`slice()` 方法**：从数组中提取指定范围的元素，并返回一个新的数组，不会改变原始数组。

   ```javascript
   var fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi'];
   var slicedFruits = fruits.slice(1, 4);
   console.log(slicedFruits); // ['banana', 'cherry', 'orange']
   ```

8. **`splice()` 方法**：用于删除、替换或添加数组的元素。

   ```javascript
   var fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi'];
   fruits.splice(2, 1); // 删除从索引 2 开始的 1 个元素
   console.log(fruits); // ['apple', 'banana', 'orange', 'kiwi']

   fruits.splice(1, 2, 'grape', 'melon'); // 替换从索引 1 开始的 2 个元素
   console.log(fruits); // ['apple', 'grape', 'melon', 'orange', 'kiwi']

   fruits.splice(2, 0, 'pear', 'peach'); // 在索引 2 处添加新元素
   console.log(fruits); // ['apple', 'grape', 'pear', 'peach', 'melon', 'orange', 'kiwi']
   ```

9. **`indexOf()` 方法**：返回数组中第一个匹配元素的索引，如果未找到匹配元素则返回 -1。

   ```javascript
   var fruits = ['apple', 'banana', 'cherry', 'orange'];
   var index = fruits.indexOf('cherry');
   console.log(index); // 2
   ```

10. **`lastIndexOf()` 方法**：返回数组中最后一个匹配元素的索引，如果未找到匹配元素则返回 -1。

    ```javascript
    var fruits = ['apple', 'banana', 'cherry', 'orange', 'cherry'];
    var lastIndex = fruits.lastIndexOf('cherry');
    console.log(lastIndex); // 4
    ```

这些是一些常用的数组方法，它们允许您对数组进行添加、删除、合并、提取等操作。根据您的需求，选择适当的方法来处理数组。
### 5、数组遍历方法

JavaScript 数组有多种方法用于遍历数组中的元素。以下是一些常用的数组遍历方法：

1. **`forEach()` 方法**：遍历数组的每一个元素，并对每个元素执行指定的回调函数，没有返回值。

   ```javascript
   var numbers = [1, 2, 3, 4, 5];
   numbers.forEach(function(number) {
       console.log(number);
   });
   ```

2. **`map()` 方法**：遍历数组的每一个元素，并调用指定的函数，最终返回一个新的数组。

   ```javascript
   var numbers = [1, 2, 3, 4, 5];
   var doubled = numbers.map(function(number) {
       return number * 2;
   });
   console.log(doubled); // [2, 4, 6, 8, 10]
   ```

3. **`filter()` 方法**：用于过滤数组的元素，返回一个符合指定条件的新数组，不会改变原始数组。

   ```javascript
   var numbers = [1, 2, 3, 4, 5];
   var evenNumbers = numbers.filter(function(number) {
       return number % 2 === 0;
   });
   console.log(evenNumbers); // [2, 4]
   ```

4. **`reduce()` 方法**：对数组的元素累加应用一个函数，返回一个累加的结果。

   ```javascript
   var numbers = [1, 2, 3, 4, 5];
   var sum = numbers.reduce(function(accumulator, currentNumber) {
       return accumulator + currentNumber;
   }, 0); // 初始值为 0
   console.log(sum); // 15
   ```

5. **`some()` 方法**：检查数组中是否至少有一个元素满足指定条件，如果有则返回 `true`，否则返回 `false`。

   ```javascript
   var numbers = [1, 2, 3, 4, 5];
   var hasEven = numbers.some(function(number) {
       return number % 2 === 0;
   });
   console.log(hasEven); // true
   ```

6. **`every()` 方法**：检查数组中是否所有元素都满足指定条件，如果是则返回 `true`，否则返回 `false`。

   ```javascript
   var numbers = [1, 2, 3, 4, 5];
   var allEven = numbers.every(function(number) {
       return number % 2 === 0;
   });
   console.log(allEven); // false
   ```

7. **`find()` 方法**：返回数组中第一个满足指定条件的元素，如果没有找到则返回 `undefined`。

   ```javascript
   var numbers = [1, 2, 3, 4, 5];
   var firstEven = numbers.find(function(number) {
       return number % 2 === 0;
   });
   console.log(firstEven); // 2
   ```

8. **`findIndex()` 方法**：返回数组中第一个满足指定条件的元素的索引，如果没有找到则返回 `-1`。

   ```javascript
   var numbers = [1, 2, 3, 4, 5];
   var firstEvenIndex = numbers.findIndex(function(number) {
       return number % 2 === 0;
   });
   console.log(firstEvenIndex); // 1 (元素 2 的索引)
   ```

这些数组遍历方法允许您以不同的方式操作和处理数组的元素，根据需要选择适当的方法。

### 6、字符串方法

JavaScript 字符串具有许多内置方法，用于处理和操作字符串。以下是一些常用的字符串方法：

1. **`length` 属性**：返回字符串的长度。

   ```javascript
   var str = "Hello, World!";
   console.log(str.length); // 13
   ```

2. **`charAt()` 方法**：返回指定索引位置的字符。

   ```javascript
   var str = "Hello, World!";
   console.log(str.charAt(0)); // 'H'
   ```

3. **`charCodeAt()` 方法**：返回指定索引位置字符的 Unicode 编码。

   ```javascript
   var str = "Hello, World!";
   console.log(str.charCodeAt(0)); // 72 (字符 'H' 的 Unicode 编码)
   ```

4. **`substring()` 方法**：返回字符串的子字符串，指定起始索引和结束索引。

   ```javascript
   var str = "Hello, World!";
   console.log(str.substring(0, 5)); // 'Hello'
   ```

5. **`slice()` 方法**：返回字符串的子字符串，指定起始索引和可选的结束索引。

   ```javascript
   var str = "Hello, World!";
   console.log(str.slice(0, 5)); // 'Hello'
   ```

6. **`indexOf()` 方法**：返回字符串中第一次出现指定子字符串的索引，如果未找到则返回 -1。

   ```javascript
   var str = "Hello, World!";
   console.log(str.indexOf("World")); // 7
   ```

7. **`lastIndexOf()` 方法**：返回字符串中最后一次出现指定子字符串的索引，如果未找到则返回 -1。

   ```javascript
   var str = "Hello, World!";
   console.log(str.lastIndexOf("o")); // 8
   ```

8. **`replace()` 方法**：替换字符串中的指定子字符串为新的字符串。

   ```javascript
   var str = "Hello, World!";
   var newStr = str.replace("World", "Universe");
   console.log(newStr); // 'Hello, Universe!'
   ```

9. **`toLowerCase()` 和 `toUpperCase()` 方法**：将字符串转换为小写或大写。

   ```javascript
   var str = "Hello, World!";
   console.log(str.toLowerCase()); // 'hello, world!'
   console.log(str.toUpperCase()); // 'HELLO, WORLD!'
   ```

10. **`trim()` 方法**：去除字符串两端的空白字符。

    ```javascript
    var str = "   Hello, World!   ";
    var trimmedStr = str.trim();
    console.log(trimmedStr); // 'Hello, World!'
    ```

11. **`split()` 方法**：将字符串分割为数组，使用指定的分隔符。

    ```javascript
    var str = "apple,banana,cherry";
    var fruits = str.split(",");
    console.log(fruits); // ['apple', 'banana', 'cherry']
    ```

12. **`concat()` 方法**：将多个字符串拼接成一个新字符串。

    ```javascript
    var str1 = "Hello,";
    var str2 = "World!";
    var greeting = str1.concat(" ", str2);
    console.log(greeting); // 'Hello, World!'
    ```

这些是一些常用的字符串方法，它们允许您对字符串进行各种操作，如查找、替换、拆分、转换大小写等。根据您的需求选择适当的方法。

### 7、闭包函数

闭包函数（Closure）是一个函数，它可以访问其包含函数（外部函数）作用域中的变量，即使外部函数已经执行完毕。
闭包函数通常用于以下情况：

1. 保留变量的状态：通过闭包，变量的值可以在外部函数执行完毕后继续存在，不会被垃圾回收。

2. 封装私有数据：通过闭包，可以创建私有变量和方法，这些私有变量和方法对外部代码不可见。

3. 创建工厂函数：通过闭包，可以创建类似于工厂函数的机制，用于生成对象实例。

下面是一些示例，演示了如何创建和使用闭包函数：

- **保留变量的状态：**

```javascript
function counter() {
  let count = 0;

  return function() {
    return ++count;
  };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3
```

在上面的示例中，`counter` 函数返回一个内部函数，该内部函数使用了 `count` 变量，即使 `counter` 函数已经执行完毕，但内部函数依然可以访问并修改 `count` 变量的状态。

### 8、说说对原型、原型链的理解

在JavaScript中，每个对象都有一个内部属性 `Prototype`，通常称为原型（Prototype）。这个原型是一个指向另一个对象的引用，用来实现对象之间的继承关系。

当我们访问一个对象的属性或方法时，如果该对象本身没有这个属性或方法，JavaScript引擎会沿着原型链向上查找，直到找到匹配的属性或方法或者到达原型链的顶端（Object.prototype）。

**原型（Prototype）**：每个对象都有一个原型，它是一个指向另一个对象的引用，用来寻找属性和方法。

**原型链（Prototype Chain）**：当查找属性或方法时，如果当前对象没有，JavaScript引擎会沿着原型链向上查找，直到找到匹配的属性或方法，或者到达原型链的顶端。

以下是对原型和原型链的更详细解释：

1. **原型（Prototype）**：
   - 原型是一个对象，它包含可以被其他对象继承的属性和方法。
   - 在JavaScript中，每个对象都有一个原型，可以通过 `__proto__` 属性访问，或者使用 `Object.getPrototypeOf()` 方法来获取。
   - 当访问一个对象的属性或方法时，如果在对象本身找不到，JavaScript引擎会自动查找该对象的原型，以查找属性或方法。

2. **原型链（Prototype Chain）**：
   - 原型链是一系列连接在一起的对象，每个对象都有一个原型，直到达到原型链的顶端，它的原型是 `null`。
   - 当查找属性或方法时，JavaScript引擎会首先在当前对象本身查找，如果找不到，就会沿着原型链向上查找，直到找到匹配的属性或方法，或者到达原型链的顶端。
   - 原型链允许对象之间共享属性和方法，实现了继承的概念。

示例：

```javascript
// 创建一个对象 person
const person = {
    firstName: "John",
    lastName: "Doe",
};

// person 对象的原型是 Object.prototype
console.log(person.__proto__ === Object.prototype); // true

// Object.prototype 的原型是 null，这是原型链的顶端
console.log(Object.getPrototypeOf(Object.prototype) === null); // true
```

原型和原型链是JavaScript中实现继承和对象共享属性的基础，它们是理解对象之间关系和属性查找的关键概念。


### 9、new操作符都做了什么事情

在JavaScript中，`new` 操作符用于创建对象的实例。当使用 `new` 操作符创建一个对象实例时，它执行以下步骤：

1. 创建一个空对象：首先，`new` 操作符会创建一个新的空对象，这个对象将成为最终的实例。

2. 设置对象的原型：新创建的空对象会被设置一个原型，它用于继承构造函数的属性和方法。

3. 执行构造函数：`new` 操作符会调用构造函数，并将新创建的空对象绑定到构造函数内部的 `this` 上。

4. 返回新对象：如果构造函数没有显式返回一个对象，则 `new` 操作符会自动返回新创建的对象。

下面是一个使用 `new` 操作符创建对象实例的示例：

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 使用 new 操作符创建一个 Person 的实例
const person1 = new Person("Alice", 30);

console.log(person1.name); // 输出 "Alice"
console.log(person1.age); // 输出 30
```

需要注意的是，`new` 操作符不仅用于创建内置对象（如 `Array`、`Date` 等），还用于创建自定义的构造函数（如上面的 `Person` 构造函数）。使用 `new` 操作符可以帮助创建对象实例，并且可以通过构造函数来初始化对象的属性和方法。

### 10、说说你对this的理解

在JavaScript中，`this` 是一个特殊关键字，它代表当前执行上下文中的对象。`this` 的值取决于它在哪里被使用，通常有以下几种情况：

1. **全局上下文中的 `this`：** 在全局作用域中，`this` 指向全局对象，通常是浏览器环境中的 `window` 对象。

2. **函数内部的 `this`：** 在函数内部，`this` 取决于函数的调用方式。以下是一些常见情况：
   - **作为普通函数调用：** 如果函数是作为普通函数调用的，`this` 将指向全局对象（浏览器环境中通常是 `window`）。
   - **作为对象方法调用：** 如果函数作为对象的方法调用，`this` 将指向调用该方法的对象。
   - **使用构造函数：** 如果函数作为构造函数使用（使用 `new` 关键字），`this` 将指向新创建的对象。
   - **使用 `call` 或 `apply` 方法：** 可以使用 `call` 或 `apply` 方法来显式指定函数内部的 `this` 值。

3. **箭头函数中的 `this`：** 箭头函数没有自己的 `this`，它会继承外部函数的 `this` 值。这使得箭头函数在回调函数等情况下非常有用，因为它们不会改变 `this` 的指向。

总之，`this` 的值在 JavaScript 中是动态的，取决于执行上下文。理解 `this` 的关键是了解它是如何绑定的，它可能是全局对象、调用它的对象，或者是通过箭头函数继承的外部 `this`。

### 11、防抖和节流

防抖（Debouncing）和节流（Throttling）都是用于控制事件触发频率的技术，通常在Web前端开发中用来提高性能和用户体验。

1. 防抖（Debouncing）：
   - 防抖是在事件被触发后，会等待一段时间（例如 100ms），如果在这段时间内没有再次触发事件，那么才会执行事件处理函数；如果在这段时间内事件又被触发，则重新开始计时。
   - 主要用于防止短时间内多次触发的事件导致过多的资源消耗，例如输入框输入时的搜索功能，只有在用户停止输入一段时间后才触发搜索请求。

   JavaScript中的一个简单防抖函数示例：
   ```javascript
   function debounce(func, delay) {
     let timer;
     return function() {
       clearTimeout(timer);
       timer = setTimeout(() => {
         func.apply(this, arguments);
       }, delay);
     };
   }
   ```

2. 节流（Throttling）：
   - 节流是在一段时间内只允许执行一次事件处理函数，即使事件在这段时间内被触发多次，也只会执行一次事件处理函数。
   - 与防抖不同，节流不会重新开始计时，而是固定间隔执行事件处理函数。
   - 主要用于频繁触发的事件，以控制事件处理函数的执行频率，例如滚动事件，每隔一定时间触发一次滚动事件处理函数，而不是每次滚动都触发。

   JavaScript中的一个简单节流函数示例：
   ```javascript
   function throttle(func, delay) {
     let timer;
     return function() {
       if (!timer) {
         timer = setTimeout(() => {
           func.apply(this, arguments);
           timer = null;
         }, delay);
       }
     };
   }
   ```

需要注意的是，防抖和节流的具体实现方式可以根据具体的需求和场景进行调整和扩展。选择合适的技术来控制事件触发频率可以提高网页性能，减少不必要的资源消耗。

### 12、为什么0.1+0.2 ! == 0.3

0.1 + 0.2 不等于 0.3 是由于 JavaScript 中的浮点数精度问题导致的。这是由于浮点数在计算机内部以二进制表示，而某些小数无法准确表示为二进制分数，因此可能会出现微小的舍入误差。

要解决这个问题，通常可以使用以下方法之一：

1. **四舍五入或修复小数位数**：
   ```javascript
   const result = (0.1 + 0.2).toFixed(1); // 将结果四舍五入为指定小数位数
   console.log(parseFloat(result) === 0.3); // true
   ```

2. **使用EPSILON比较**：
   这是一种常见的方法，它通过比较两个浮点数的差是否小于一个小的误差值来判断它们是否近似相等。
   ```javascript
   const epsilon = 0.000001; // 定义一个足够小的误差值
   const result = 0.1 + 0.2;
   console.log(Math.abs(result - 0.3) < epsilon); // true
   ```

3. **使用第三方库**：
   一些第三方库，如`decimal.js`或`big.js`，提供了更精确的数学运算，可以避免浮点数精度问题。

总之，要在JavaScript中比较浮点数时，最好使用适当的方法来处理精度问题，以确保得到正确的结果。

### 13、Ts和Js有哪些区别

[TypeScript](/note/ts) 和 JavaScript 是两种不同的编程语言，它们之间有一些显著的区别：

1. **类型系统：**
   - JavaScript 是一种动态类型语言，变量的类型在运行时才确定。
   - TypeScript 是一种静态类型语言，它引入了类型系统，在编译时就能够确定变量的类型。

2. **类型注解：**
   - 在 TypeScript 中，可以使用类型注解来明确变量的类型，例如 `let num: number = 10;`。
   - JavaScript 中没有类型注解的概念，变量的类型是由赋值的值来推断的。

3. **编译环境：**
   - JavaScript 可以在浏览器、Node.js 等环境中直接运行，无需编译。
   - TypeScript 需要通过编译器将 TypeScript 代码转换为 JavaScript 代码，然后才能在浏览器或 Node.js 中运行。

4. **语言功能：**
   - TypeScript 在 JavaScript 的基础上增加了一些功能，如接口、枚举、泛型等，使得代码更加可读性和可维护性更强。

5. **错误检查：**
   - TypeScript 编译器可以在编译时发现一些潜在的错误，例如类型不匹配、未定义的变量等，从而帮助开发者提前发现并修复问题。
   - JavaScript 在运行时才会报错，因此需要更加谨慎地编写代码来避免错误。

总的来说，TypeScript 是 JavaScript 的超集，它在 JavaScript 的基础上添加了类型系统等功能，使得代码更加健壮、可维护。因此，对于大型项目或团队协作来说，使用 TypeScript 可以提高代码质量和开发效率。



