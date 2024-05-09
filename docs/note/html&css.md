---
outline: deep
---

# 开始

<script setup>
import Tip from '../components/Tip.vue'
import { ref } from "vue";
//父组件内部数据
let todos = ref([
  { id: 1, title: "本文档用来记录前端开发的基础知识", done: true },
]);
</script>

<Tip title="提示" :todos="todos">
  <template v-slot="{$row,$index}">
      <!--父组件决定子组件的结构与外观-->
      <span :style="{color:$row.done?'green':'red'}">{{$row.title}}</span>
  </template>
</Tip>

## 一、HTML

### 1、什么是HTML

​	HTML是一种标记语言，用于创建网页结构和内容，通过标签和元素描述页面信息，实现在Web浏览器中的呈现。

### 2、HTML的语义化

​	HTML语义化是指用合理的HTML标记以及其特有的属性去格式化文档内容。（例如标题用 h1-h6、段落用 p 标签，合理得给图片添加alt属性等）
 
### 3、常用的浏览器及内核
浏览器的内核决定了它们如何渲染和呈现网页内容，以下是常用的浏览器、使用的内核以及每个内核的简要描述：


| 浏览器           | 使用的内核          | 描述                                      |
|------------------|---------------------|-------------------------------------------|
| Google Chrome    | Blink (WebKit)      | 由Google开发，性能强大，支持丰富的扩展。   |
| Mozilla Firefox  | Gecko               | 开源浏览器，注重隐私和自由软件理念。     |
| Apple Safari     | WebKit              | 苹果公司开发，提供出色的用户体验。        |
| Microsoft Edge   | Blink (EdgeHTML)    | Windows 10的默认浏览器，以速度和安全性为重。|
| Internet Explorer| Trident (EdgeHTML)  | 微软的旧版浏览器，已不再推荐使用。        |
| Opera            | Blink (Presto)      | 原版Opera使用Presto内核，现代版使用Blink。 |


### 4、HTML标签

HTML（Hypertext Markup Language）是用于构建网页结构的标记语言。以下是一些常用的 HTML 标签，以及它们的作用：

1. **`<!DOCTYPE>` 声明**：定义文档类型和版本。

   ```html
   <!DOCTYPE html>
   ```

2. **`<html>` 标签**：定义 HTML 文档的根元素。

   ```html
   <html>
       <!-- 内容 -->
   </html>
   ```

3. **`<head>` 标签**：包含文档的元信息，如标题、字符集等。

   ```html
   <head>
       <title>我的网页</title>
       <meta charset="UTF-8">
   </head>
   ```

4. **`<meta>` 标签**：定义文档的元信息，如字符集、作者、关键词等。

   ```html
   <meta charset="UTF-8">
   <meta name="author" content="John Doe">
   ```

5. **`<title>` 标签**：定义网页的标题，显示在浏览器标签页上。

   ```html
   <title>我的网页</title>
   ```

6. **`<link>` 标签**：用于链接外部资源，如样式表。

   ```html
   <link rel="stylesheet" href="styles.css">
   ```

7. **`<script>` 标签**：用于引入 JavaScript 代码或链接外部 JavaScript 文件。

   ```html
   <script src="script.js"></script>
   ```

8. **`<style>` 标签**：包含内部样式表。

   ```html
   <style>
       /* CSS 样式 */
   </style>
   ```

9. **`<body>` 标签**：包含网页的主要内容。

   ```html
   <body>
       <!-- 网页内容 -->
   </body>
   ```

10. **`<h1>`, `<h2>`, `<h3>`, ... `<h6>` 标签**：定义标题，级别从大到小。

    ```html
    <h1>主标题</h1>
    <h2>副标题</h2>
    ```

11. **`<p>` 标签**：定义段落。

    ```html
    <p>这是一个段落。</p>
    ```

12. **`<a>` 标签**：创建超链接。

    ```html
    <a href="https://www.example.com">访问示例网站</a>
    ```

13. **`<ul>` 和 `<ol>` 标签**：定义无序列表和有序列表，分别使用 `<li>` 标签定义列表项。

    ```html
    <ul>
        <li>项目1</li>
        <li>项目2</li>
    </ul>

    <ol>
        <li>项目1</li>
        <li>项目2</li>
    </ol>
    ```

14. **`<img>` 标签**：嵌入图像。

    ```html
    <img src="image.jpg" alt="图片描述">
    ```

15. **`<div>` 标签**：定义文档中的一个区块，用于组织内容和应用样式。

    ```html
    <div>
        <!-- 内容 -->
    </div>
    ```

16. **`<span>` 标签**：定义文档中的一个内联区块，用于应用样式或操作文本。

    ```html
    <span>这是一段内联文本。</span>
    ```

17. **`<form>` 标签**：创建表单，包含输入元素和提交按钮。

    ```html
    <form action="/submit" method="post">
        <!-- 输入元素 -->
        <input type="text" name="username">
        <input type="password" name="password">
        <!-- 提交按钮 -->
        <input type="submit" value="提交">
    </form>
    ```

18. **`<input>` 标签**：定义表单中的输入元素，如文本框、单选按钮、复选框等。

    ```html
    <input type="text" name="username">
    <input type="radio" name="gender" value="male"> 男性
    <input type="checkbox" name="subscribe" value="yes"> 订阅
    ```

这些是一些常用的 HTML 标签，它们用于构建网页结构、定义内容和样式、创建表单以及实现各种功能。根据您的需求和网页的结构，您可以使用这些标签来创建丰富的网页。

### 5、table表格

HTML 中的 `<table>` 元素用于创建表格，它是一种常用的方式来展示数据和信息。以下是关于 `<table>` 表格的基本用法的总结：

1. **创建表格**：

   使用 `<table>` 标签来创建表格。

   ```html
   <table>
       <!-- 表格内容 -->
   </table>
   ```

2. **表格行和单元格**：

   - 使用 `<tr>` 标签来定义表格的行。
   - 在每行中，使用 `<td>` 标签来定义单元格（数据单元格）。
   - 使用 `<th>` 标签来定义表头单元格，通常在表格的第一行使用。

   ```html
   <table>
       <tr>
           <th>表头1</th>
           <th>表头2</th>
       </tr>
       <tr>
           <td>数据1</td>
           <td>数据2</td>
       </tr>
   </table>
   ```

3. **表格标题**：

   使用 `<caption>` 标签来定义表格的标题，通常位于表格之上。

   ```html
   <table>
       <caption>这是表格标题</caption>
       <!-- 表格内容 -->
   </table>
   ```

4. **表格边框和样式**：

   - 使用 `border` 属性来定义表格边框的大小。
   - 使用 CSS 样式来自定义表格的外观，如边框颜色、背景色等。

   ```html
   <table border="1">
       <!-- 表格内容 -->
   </table>

   <!-- 使用 CSS 样式 -->
   <style>
       table {
           border-collapse: collapse; /* 合并边框 */
       }
       th, td {
           border: 1px solid #000; /* 定义单元格边框 */
           padding: 5px; /* 单元格内边距 */
           text-align: center; /* 文本居中对齐 */
       }
   </style>
   ```

5. **表格合并单元格**：

   使用 `rowspan` 和 `colspan` 属性来合并单元格，以创建跨行或跨列的单元格。

   ```html
   <table>
       <tr>
           <th rowspan="2">表头1</th>
           <th>表头2</th>
       </tr>
       <tr>
           <td>数据1</td>
           <td>数据2</td>
       </tr>
   </table>
   ```

6. **表格标题和表头**：

   - 表格标题通过 `<caption>` 定义。
   - 表头通常通过 `<th>` 定义，使其在表格中突出显示。

7. **表格内容**：

   - 表格中的数据通常通过 `<td>` 标签定义。
   - 使用多个 `<tr>` 和 `<td>` 元素创建多行和多列的表格。


表格是一个灵活且功能丰富的 HTML 元素，它可以用于各种数据展示需求。以上总结了基本的表格创建和样式化方法，但表格还有更多高级的特性和选项，可以根据具体需求进一步定制。
## 二、CSS

### 1、css选择器

CSS（Cascading Style Sheets）中有许多不同类型的选择器，用于选择要应用样式的 HTML 元素。以下是一些常用的 CSS 选择器：

1. **元素选择器（Element Selector）**：选择特定的 HTML 元素类型。

   ```css
   p {
       color: blue;
   }
   ```

2. **类选择器（Class Selector）**：选择具有指定类名的元素。

   ```css
   .highlight {
       background-color: yellow;
   }
   ```

3. **ID 选择器（ID Selector）**：选择具有指定 ID 的元素。

   ```css
   #header {
       font-size: 24px;
   }
   ```

4. **通用选择器（Universal Selector）**：选择所有 HTML 元素。

   ```css
   * {
       margin: 0;
       padding: 0;
   }
   ```


5. **后代选择器（Descendant Selector）**：选择嵌套在其他元素内部的元素。

   - 选择 `<ul>` 元素内部的所有 `<li>` 元素：

     ```css
     ul li {
         list-style-type: square;
     }
     ```

6. **子元素选择器（Child Selector）**：选择某个元素的直接子元素。

   - 选择 `<ul>` 元素中的直接子元素 `<li>`：

     ```css
     ul > li {
         font-weight: bold;
     }
     ```

7. **伪类选择器（Pseudo-class Selector）**：选择元素的特殊状态或位置。

   - 选择链接的鼠标悬停状态：

     ```css
     a:hover {
         color: red;
     }
     ```

   - 选择第一个子元素：

     ```css
     li:first-child {
         font-weight: bold;
     }
     ```


这些是一些常用的 CSS 选择器，它们允许您有针对性地选择和应用样式到 HTML 元素。通过组合和嵌套这些选择器，可以实现复杂的样式设计，使网页看起来更吸引人且具有良好的用户体验。

### 2、css的显示模式

CSS中的显示模式（display mode）控制了元素在页面上的布局方式和行为。常见的CSS显示模式包括以下几种：

1. **block（块级元素）**：块级元素会在页面上独自占据一行，并从上到下依次排列。它们会尽可能地占用父容器的宽度，可以设置宽度、高度、内外边距等属性。

    示例块级元素：`<div>`, `<p>`, `<h1>`, `<ul>`, `<li>`等。

    ```css
    div {
        display: block;
    }
    ```

2. **inline（内联元素）**：内联元素不会独占一行，它们在一行内水平排列，并根据内容的大小自动调整宽度。内联元素不支持设置宽度、高度等盒模型属性。

    示例内联元素：`<span>`, `<a>`, `<strong>`, `<em>`等。

    ```css
    span {
        display: inline;
    }
    ```

3. **inline-block（内联块级元素）**：内联块级元素具有块级元素和内联元素的特性，它们在一行内水平排列，但可以设置宽度、高度等盒模型属性。

    示例内联块级元素：`<button>`, `<input>`, `<label>`, `<img>`等。

    ```css
    button {
        display: inline-block;
    }
    ```

4. **none（隐藏元素）**：元素的`display`属性设置为`none`时，元素会完全隐藏，不占用页面空间，无法与其他元素交互。

    示例：
    ```css
    .hidden-element {
        display: none;
    }
    ```

5. **flex（弹性盒子）**：弹性盒子布局允许您以更简单的方式进行水平和垂直布局。弹性容器中的子元素可以在一个方向上排列，同时自动调整其大小以填充可用空间。

    示例：
    ```css
    .flex-container {
        display: flex;
    }
    ```

6. **grid（网格布局）**：网格布局是一种更复杂的布局模式，它允许您创建多行多列的网格，以便更精确地控制元素的位置和大小。

    示例：
    ```css
    .grid-container {
        display: grid;
    }
    ```

这些是一些常见的CSS显示模式，您可以根据需要选择合适的显示模式来布局和排列页面元素。不同的显示模式适用于不同的布局需求。

### 3、css的三大特性

CSS（层叠样式表）有三大特性，也被称为"CSS的三大特性"，它们是：

1. **层叠性（Cascading）**：这是CSS的首要特性之一，它允许多个样式规则同时应用于一个元素，并按照一定的优先级顺序决定最终应用哪些样式。通常，样式规则按照以下优先级进行层叠：

    - 内联样式（在HTML元素内部使用`style`属性的样式）具有最高优先级。
    - ID选择器（如`#header`）具有比类选择器（如`.highlight`）更高的优先级。
    - 通用选择器和元素选择器（如`*`和`p`）具有较低的优先级。
    - 样式表中后定义的规则具有较高的优先级。

    示例：
    ```html
    <style>
        p {
            color: red; /* 样式规则1 */
        }
    </style>
    <p style="color: blue;">这是一个段落</p> <!-- 内联样式优先应用，文字颜色为蓝色 -->
    ```

2. **继承性（Inheritance）**：继承性指的是某个HTML元素上定义的样式属性是否会传递给其子元素。不是所有的样式属性都可以继承，但一些常见的属性如颜色、字体等可以继承给子元素。

    示例：
    ```css
    body {
        font-family: Arial, sans-serif;
    }

    p {
        color: blue; /* 子元素继承父元素的字体属性 */
    }
    ```

    ```html
    <body>
        <p>这是一个段落</p> <!-- 文字颜色为蓝色，继承自父元素的字体属性 -->
    </body>
    ```

3. **优先级（Specificity）**：当多个样式规则应用于同一个元素时，优先级决定哪些规则将被最终应用。优先级通常由选择器的种类、数量和权重来决定。通常，以下规则适用于计算选择器的优先级：

    - 内联样式的优先级最高，因为它们直接附加在HTML元素上。
    - ID选择器的优先级高于类选择器和元素选择器。
    - 多个选择器组合在一起时，其权重相加。

    示例：
    ```html
    <style>
        p {
            color: red; /* 权重为：0,0,0,1 */
        }

        #special-paragraph {
            color: blue; /* 权重为：0,0,1,0 */
        }
    </style>
    <p id="special-paragraph">这是一个特殊段落</p> <!-- 文字颜色为蓝色，因为ID选择器具有较高的权重 -->
    ```

这些是CSS的三大特性，它们一起决定了样式规则如何应用于HTML元素，并允许您创建复杂的页面样式。

### 4、overflow的用法

`overflow` 是 CSS 属性，用于控制元素内容溢出时的处理方式。它可以应用于容器元素，如 `<div>`、`<span>`、`<p>` 等，以及一些其他元素，用于处理内容溢出的情况。以下是 `overflow` 的用法和不同取值的含义：

1. **`overflow: visible;`**（默认值）：
   - 当内容溢出容器时，内容将呈现在容器之外，不会被修剪，可能会覆盖其他内容。

   ```css
   .container {
       overflow: visible;
   }
   ```

2. **`overflow: hidden;`**：
   - 当内容溢出容器时，超出的部分将被隐藏，不可见。
   - 常用于创建遮罩效果，确保只显示容器内的内容。

   ```css
   .container {
       overflow: hidden;
   }
   ```

3. **`overflow: scroll;`**：
   - 如果内容溢出容器，会显示滚动条以便用户滚动查看。
   - 适用于当内容太大以适应容器大小时，允许用户滚动查看全部内容。

   ```css
   .container {
       overflow: scroll;
   }
   ```

4. **`overflow: auto;`**：
   - 只有在内容实际溢出时才会显示滚动条，否则将保持正常显示。
   - 类似于 `scroll`，但只在需要滚动时显示滚动条，不需要时保持正常显示。

   ```css
   .container {
       overflow: auto;
   }
   ```

5. **`overflow: inherit;`**：
   - 继承父元素的 `overflow` 属性值。
   - 子元素将采用与父元素相同的溢出行为。

   ```css
   .child {
       overflow: inherit;
   }
   ```

6. **`overflow: initial;`**：
   - 设置属性为默认值，通常默认值是 `visible`。
   - 用于重置 `overflow` 属性为默认值。

   ```css
   .container {
       overflow: initial;
   }
   ```

`overflow` 属性通常用于处理以下情况：

- 滚动容器：允许用户滚动查看容器内溢出的内容。
- 遮罩效果：隐藏多余的内容，确保只显示容器内的内容。
- 防止内容溢出其他元素：通过设置 `hidden` 属性来确保内容不会溢出到其他元素上面。

根据设计需求，选择合适的 `overflow` 属性取值和其他 CSS 样式来实现所需的效果。

### 5、浮动

浮动（float）是CSS中的一种布局属性，它通常用于将元素从正常文档流中移动到其父元素的左侧或右侧，并允许文本和其他内容环绕它。浮动通常用于创建多列布局、图像浮动以及网页中的一些特定布局需求。以下是如何设置浮动的基本方法:

```css
.element {
    float: left; /** 左浮动 **/
}

```

要清除浮动，主要是为了解决浮动元素可能导致的父元素高度塌陷的问题。浮动的元素不会撑开其父元素的高度，这可能导致父元素无法正确包含浮动元素，进而影响页面布局。以下是一些清除浮动的常见方法：

1. **使用`clear`属性**：您可以在父元素中插入一个具有`clear`属性的空元素，以确保其下面不会有浮动元素。例如：

```html
<div style="clear: both;"></div>
```

2. **使用伪元素清除浮动**：这是一种更现代的方法，它不需要额外的HTML元素。您可以通过在父元素上应用CSS来清除浮动，如下所示：

```css
.parent::after {
    content: "";
    display: table;
    clear: both;
}
```

这将在`.parent`元素的末尾创建一个空的伪元素，用于清除浮动。

3. **使用`overflow`属性**：将父元素的`overflow`属性设置为`auto`或`hidden`也可以清除浮动。这将创建一个新的块级格式化上下文，它会包含浮动元素，从而避免高度塌陷问题。例如：

```css
.parent {
    overflow: hidden;
}
```

4. **使用`clearfix`类**：有时，您可以将一个特定的CSS类应用于父元素，该类包含清除浮动的样式规则。这是一种经常使用的约定，例如，Bootstrap框架中有一个`.clearfix`类用于清除浮动。

```css
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}
```

然后，您可以将`.clearfix`类应用于需要清除浮动的父元素。

这些方法中的选择取决于您的具体需求和项目约定。清除浮动是前端开发中一个常见的问题，因为它确保了页面布局的一致性和可靠性。

### 6、BFC

BFC（块级格式化上下文，Block Formatting Context）是CSS中的一个关键概念，它是一种用于控制和规范元素布局和渲染的机制。BFC 定义了一套规则，用于决定块级元素如何放置其子元素以及与其他元素的关系。

以下是 BFC 的一些关键特点和作用：

1. **元素的包含块**：BFC 决定了块级元素的包含块，这是元素布局的基础。元素的包含块通常是最近的块级祖先元素，但在某些情况下，可以通过一些属性（如`float`、`position`、`overflow`）来创建新的包含块。

2. **垂直方向的布局**：在 BFC 中，垂直方向上的布局规则会影响元素如何堆叠和定位。例如，在同一个 BFC 中，两个相邻元素的 margin 可能会合并，从而影响它们之间的垂直间距。

3. **防止浮动元素溢出**：BFC 可以阻止浮动元素溢出其包含块，从而避免了一些常见的布局问题。这通常是通过在 BFC 中包含浮动元素或使用`overflow`属性来实现的。

4. **自适应高度**：BFC 可以让父元素自适应其子元素的高度，即使子元素浮动也可以。这对于创建等高列布局等情况非常有用。

5. **分隔上下文**：每个 BFC 是相互隔离的，它们的内部元素不会影响到外部 BFC 中的元素，从而避免了一些布局冲突问题。

6. **清除浮动**：BFC 可以用来清除浮动，从而避免父元素因浮动元素而塌陷。

要创建一个新的 BFC，可以使用以下方法之一：

- 设置元素的`float`属性为`left`或`right`。
- 设置元素的`position`属性为`absolute`或`fixed`。
- 设置元素的`display`属性为`inline-block`、`table-cell`、`table-caption`。
- 在父元素上设置`overflow`属性为非`visible`值，例如`auto`或`hidden`。
- 创建一个新的块级容器，如使用`display: block;` 或包含`<div>`元素。

BFC 是 CSS 布局中的一个重要概念，它在解决一些复杂布局和浮动问题时非常有用。了解 BFC 如何工作以及如何创建它们可以帮助您更好地掌握 CSS 布局。

### 7、元素的显示和隐藏

以下是CSS中控制元素显示和隐藏的几种方法，以表格的形式呈现：

| 方法                 | 说明                                                         |
|----------------------|--------------------------------------------------------------|
| `display: none;`     | 完全隐藏元素，不占据任何空间，无法通过用户或脚本交互显示。  |
| `visibility: hidden;` | 隐藏元素，但仍然占据空间，可以通过用户或脚本交互显示。    |
| `opacity: 0;`        | 隐藏元素，但仍然占据空间，通过透明度设置来控制元素的可见性。 |

这些方法用于不同的场景和需求，您可以根据具体情况选择最适合的方法来控制元素的显示和隐藏。

### 8、Flexbox布局

Flexbox（Flexible Box布局）是CSS3引入的一种用于创建灵活的、自适应的布局模型的工具。它使得元素在容器中自动对齐和调整大小，无需复杂的浮动或定位。Flexbox适用于一维布局，即一行或一列中的元素排列。

以下是Flexbox布局的一些关键概念和示例：

1. **容器和项目**：
   - **容器（Container）**：包含要布局的一组元素的父元素，通过设置`display: flex;`将其定义为Flex容器。
   - **项目（Item）**：容器内的子元素，它们将根据Flexbox规则进行排列和分布。

2. **主轴和交叉轴**：
   - **主轴（Main Axis）**：Flex容器的主要方向，决定项目的排列方向（水平或垂直）。
   - **交叉轴（Cross Axis）**：与主轴垂直的方向，用于调整项目在主轴上的位置。

3. **属性**：
   - **`display: flex;`**：将一个元素设置为Flex容器。
   - **`flex-direction`**：指定主轴的方向，可以是`row`（水平，默认）、`column`（垂直）、`row-reverse`或`column-reverse`。
   - **`justify-content`**：控制项目在主轴上的对齐方式，例如`flex-start`、`flex-end`、`center`、`space-between`等。
   - **`align-items`**：控制项目在交叉轴上的对齐方式，例如`flex-start`、`flex-end`、`center`、`baseline`等。
   - **`flex`**：定义项目的伸缩比例，可用于自动调整项目的大小。

示例代码：

```css
.container {
  display: flex;
  flex-direction: row; /* 主轴方向：水平 */
  justify-content: space-between; /* 主轴对齐方式：项目之间平均分布 */
  align-items: center; /* 交叉轴对齐方式：垂直居中 */
}

.item {
  flex: 1; /* 项目的伸缩比例，均匀占据可用空间 */
  /* 其他样式规则 */
}
```

HTML结构：

```html
<div class="container">
  <div class="item">项目1</div>
  <div class="item">项目2</div>
  <div class="item">项目3</div>
</div>
```

在这个示例中，Flex容器`.container`包含了三个Flex项目`.item`。通过设置`display: flex;`和一些Flex属性，项目被水平排列在容器内，它们之间均匀分布，并在交叉轴上垂直居中。

Flexbox布局使得创建响应式布局更加容易，特别适用于需要灵活排列和对齐元素的情况，例如导航菜单、网格布局和卡片式布局等。



### 9、过渡和阴影

CSS3中的过渡（Transitions）和阴影（Box Shadow）是用于创建元素动画效果和添加元素阴影效果的强大工具。

#### 过渡（Transitions）

过渡允许您在元素的状态变化时，使属性渐变地过渡到新值，而不是突然变化。这使得页面看起来更平滑和用户友好。

**如何使用过渡：**

1. 选择要添加过渡效果的元素。

```css
.element {
  /* 其他样式规则 */
  transition: property duration timing-function delay;
}
```

- `property`：指定要过渡的CSS属性，例如`color`、`background-color`、`opacity`等。
- `duration`：指定过渡的持续时间，通常以秒（s）为单位。
- `timing-function`：指定过渡的时间函数，控制过渡的速度曲线，常见的有`ease`、`linear`、`ease-in`、`ease-out`等。
- `delay`：指定在过渡开始前要延迟的时间，以秒为单位。

2. 定义元素状态的改变。

```css
.element:hover {
  property: new-value;
}
```

- 在上述示例中，当鼠标悬停在`.element`上时，`property`属性将从其初始值渐变到新值。

**示例：**

```css
.button {
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #2980b9;
}
```

在这个示例中，当鼠标悬停在按钮上时，按钮的背景颜色将平滑地从蓝色渐变到深蓝色。

#### 阴影（Box Shadow）

阴影效果允许您向元素添加立体感，使元素看起来浮在其他元素之上。

**如何使用阴影：**

```css
.element {
  box-shadow: h-shadow v-shadow blur spread color inset;
}
```

- `h-shadow`：水平阴影的位置，可以为正数（右侧阴影）或负数（左侧阴影）。
- `v-shadow`：垂直阴影的位置，可以为正数（下方阴影）或负数（上方阴影）。
- `blur`：模糊半径，值越大，阴影越模糊。
- `spread`：阴影的尺寸，正数会使阴影变大，负数会使阴影变小。
- `color`：阴影的颜色。
- `inset`：可选，如果存在则表示阴影是内部阴影。

**示例：**

```css
.card {
  width: 200px;
  height: 150px;
  background-color: #ffffff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}
```

在这个示例中，`.card`元素具有一个轻微的阴影，使它看起来浮在页面上。阴影的颜色为黑色，模糊半径为5px，水平和垂直位置分别为2px。您可以调整这些值以获得不同的阴影效果。

## 三、HTML5&CSS3

### 1、H5新特性

HTML5是HTML（Hypertext Markup Language）的第五个版本，引入了许多新特性和改进，以提供更丰富的Web体验。以下是一些HTML5的新特性：

1. 语义元素：HTML5引入了一些新的语义元素，如`<header>`、`<nav>`、`<article>`、`<section>`等，以更清晰地定义文档结构，提高可读性和可维护性。

2. 音频和视频支持：HTML5提供了`<audio>`和`<video>`元素，使得嵌入音频和视频变得更容易。它还支持多种音频和视频格式，而不需要第三方插件，如Flash。

3. 本地存储：HTML5引入了本地存储API，包括Web Storage（`localStorage`和`sessionStorage`）和IndexedDB，允许在客户端存储数据，以提高离线应用程序的性能和可用性。

4. 新表单元素：HTML5引入了一些新的表单元素，如`<input>`的`type`属性的增强，`<datalist>`、`<keygen>`（已弃用）等，使得表单设计更加灵活和功能丰富。

5. Canvas绘图：HTML5的`<canvas>`元素允许开发者使用JavaScript在网页上绘制图形和动画，这为创建交互式游戏和数据可视化提供了强大的工具。


请注意，HTML5是一个持续发展的标准，因此可能会有其他新特性和改进，取决于具体的浏览器和实现。确保查看浏览器文档和规范以获取最新信息。

### 2、CSS3新特性

CSS3引入了许多新特性，让开发者能够创建更丰富和交互性更强的网页设计。以下是一些常用的CSS3新特性，它们在项目中经常被使用：

1. **圆角（border-radius）**：使用`border-radius`属性可以创建圆角边框，使元素的边角变得圆滑。这在按钮、卡片和容器等元素的设计中经常使用。

```css
.button {
  border-radius: 10px;
}
```

2. **渐变（gradient）**：CSS3允许创建渐变背景，这对于创建复杂的背景效果非常有用。可以使用线性渐变和径向渐变。

```css
.background {
  background: linear-gradient(to right, #ffcc00, #ff3300);
}
```

3. **过渡（transition）**：通过`transition`属性，可以在元素状态变化时实现平滑的过渡效果，例如在悬停时改变颜色、大小或透明度等。

```css
.button {
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #ff6600;
}
```

4. **动画（animation）**：使用`@keyframes`和`animation`属性，可以创建复杂的动画效果，例如旋转、淡入淡出和平移等。

```css
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  animation: rotate 2s linear infinite;
}
```

5. **阴影（box-shadow）**：`box-shadow`属性用于为元素添加投影效果，使元素看起来更立体。这在卡片和按钮的设计中很常见。

```css
.card {
  box-shadow: 5px 5px 10px #888888;
}
```

6. **多列布局（multicolumn）**：通过`column-count`和`column-width`等属性，可以轻松地创建多列布局，适用于文章和文本内容的排版。

```css
.column-layout {
  column-count: 3;
  column-gap: 20px;
}
```

7. **响应式设计（media queries）**：CSS3允许使用媒体查询来根据不同设备和屏幕大小应用不同的样式，从而实现响应式设计。

```css
@media screen and (max-width: 768px) {
  /* 在小屏幕上应用的样式 */
  .menu {
    display: none;
  }
}
```

这些是CSS3中常见的一些新特性，它们在项目中经常用于创建现代和交互性强的网页设计。请注意，CSS3还有许多其他有用的特性，具体的使用取决于项目的需求和设计目标。

### 3、CSS3选择器

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

5. **通用选择器（Universal Selector）**：通用选择器允许你选择所有元素，不管它们是什么类型。

```css
/* 选择所有元素 */
* {
  /* 样式 */
}
```

这些新增的选择器使得CSS更加强大和灵活，可以更精确地选择和样式化文档中的元素。它们在项目中经常用于调整样式以满足特定需求。
## 四、移动Web开发

### 1、移动端的适配方案一

​在开发移动端Web应用时，适配不同的屏幕尺寸和设备是非常重要的，以确保用户体验一致性和可访问性。以下是一些用于适配不同屏幕的常见策略和示例代码：

1. 使用响应式布局（Responsive Layout）：
   响应式布局是一种根据屏幕尺寸和分辨率自动调整页面布局的方法。您可以使用CSS媒体查询来实现响应式布局。以下是一个简单的示例：

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        /* 默认样式 */
        .box {
            width: 100%;
            padding: 20px;
            text-align: center;
        }
        
        /* 在小屏幕上改变样式 */
        @media screen and (max-width: 600px) {
            .box {
                width: 50%;
            }
        }
    </style>
</head>
<body>

<div class="box">
    <p>This is a responsive box.</p>
</div>

</body>
</html>
```

上述代码中，`.box` 的宽度在小屏幕上会减半，以适应较小的屏幕。

2. 使用弹性布局（Flexbox）和网格布局（Grid）：
   弹性布局和网格布局是现代CSS布局模型，它们可以帮助您更灵活地管理页面中的元素位置和大小。以下是一个简单的示例：

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        .container {
            display: flex;
            flex-wrap: wrap;
        }
        
        .box {
            flex: 1;
            min-width: 200px;
            margin: 10px;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
</div>

</body>
</html>
```

上述代码中，`.box` 元素会根据屏幕尺寸自动调整大小和排列方式。

3. 使用相对单位和百分比：
   在移动端开发中，使用相对单位（例如em、rem、%）而不是固定像素可以帮助页面元素更好地适应不同屏幕。例如：

```css
font-size: 1.2em; /* 使用em相对单位来设置字体大小 */
width: 50%; /* 使用百分比来设置宽度 */
```

4. 图片适配：
   使用`max-width: 100%;` 样式来确保图像在小屏幕上不会溢出其容器。这样可以防止图像在小屏幕上变得过大。

```css
img {
    max-width: 100%;
    height: auto;
}
```

这些是一些常见的移动端屏幕适配策略和示例代码。要实现更复杂的适配和用户体验，您可能还需要考虑JavaScript和移动端特定的功能，如触摸事件处理。总之，响应式设计和相对单位是开发移动端Web应用的关键要素之一。

### 2、移动端的适配方案二

一、使用 [lib-flexible](https://github.com/amfe/lib-flexible) 动态设置 rem基准值（html 标签的字体大小）

1、安装

```shell
# yarn add amfe-flexible
npm i amfe-flexible
```

2、然后在 `main.js` 中加载执行该模块

```javascript
import 'amfe-flexible'
```

最后测试：在浏览器中切换不同的手机设备尺寸，观察 html 标签 `font-size` 的变化。

二、使用 [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 将 `px` 转为 `rem`

1、安装

```shell
# yarn add -D postcss-pxtorem
# -D 是 --save-dev 的简写
npm install postcss-pxtorem -D
 npm i postcss-pxtorem@5.1.1 -D(指定版本安装)
```

2、然后在**项目根目录**中创建 `.postcssrc.js` 文件

```javascript
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 8']
    },
    'postcss-pxtorem': {
      rootValue: 37.5, // 假设设计稿宽度为375px
      propList: ['*']
    }
  }
}
```

3、配置完毕，重新启动服务

### 3、Less

Less是一种CSS预处理器，它扩展了普通CSS的功能，使得样式表的编写更加高效和可维护。Less提供了许多有用的功能，包括变量、嵌套、混合（Mixin）、函数等，以帮助开发者更轻松地管理和组织样式代码。以下是Less的基础语法和概念：

1. **变量**：在Less中，你可以使用变量来存储和复用颜色、字体、尺寸等值。变量以`@`符号开头。

   ```less
   @primary-color: #3498db;
   @font-size: 16px;
   
   body {
     color: @primary-color;
     font-size: @font-size;
   }
   ```

2. **嵌套**：Less允许你嵌套CSS规则，以更清晰地表示样式层次。

   ```less
   nav {
     ul {
       list-style: none;
     }
     
     li {
       display: inline-block;
       margin-right: 10px;
       
       &:last-child {
         margin-right: 0;
       }
     }
   }
   ```

3. **混合（Mixin）**：混合是一种将一组CSS属性集合起来以便复用的方式。

   ```less
   .rounded-corners {
     border-radius: 5px;
   }
   
   button {
     .rounded-corners();
     background-color: #3498db;
     color: #fff;
   }
   ```

4. **函数**：Less支持自定义函数，你可以编写自己的函数来处理样式值。

   ```less
   @base-font-size: 16px;
   
   .calculate-line-height(@size) {
     line-height: @size * 1.5;
   }
   
   p {
     font-size: @base-font-size;
     .calculate-line-height(@base-font-size);
   }
   ```

5. **导入**：你可以使用`@import`指令导入其他Less文件，以便将样式模块化和组织。

   ```less
   @import 'variables.less';
   @import 'layout.less';
   ```

6. **运算**：Less支持数学运算，你可以在样式中执行加法、减法、乘法和除法等操作。

   ```less
   @width: 100px;
   @padding: 10px;
   
   .box {
     width: @width + 2 * @padding;
   }
   ```


这些是Less的基础语法和概念，它们使样式表更加灵活、可维护，并有助于减少样式代码的重复。要使用Less，你需要将Less文件编译为普通的CSS文件，然后将其应用到你的网页上。通常可以使用Less编译工具或构建工具（如Webpack、Gulp）来完成这个过程。

