---
outline: deep
---

# 开始

::: tip 提示
本文档用来记录项目中遇到的基础问题及解决方法
:::

## 一、HTML 问题

### 1.1 PC 端屏幕适配

:grinning: 在前端开发中，适配不同宽度的屏幕是非常重要的。为了确保网站在不同设备上都能够正常显示，我们需要使用响应式设计.

​ **响应式设计可以通过以下几种方式来实现：**

1. 使用流式布局：将网页元素的宽度设置为相对于父元素百分比，这样当屏幕尺寸改变时，元素的宽度也会相应地改变。这种方式可以通过 CSS 中的百分比单位来实现。

2. 使用 CSS 媒体查询：通过检测屏幕的宽度，根据不同的屏幕尺寸应用不同的 CSS 样式。媒体查询可以在 CSS 中使用@media 规则来实现。

   ```css{1}
   @media screen and (min-width:600px) and (max-width:1000px){
       .box{
    	   column-count:3; // [!code focus]
       }
    }
   ```

3. 弹性布局：使用 CSS Flexbox(弹性盒子)或 Grid(网格)布局来自动调整元素的位置和大小，以适应不同的屏幕尺寸。

4. 使用响应式图片：使用不同分辨率的图片来适应高分辨率的屏幕。

5. 使用响应式框架：使用现成的响应式框架，如 Bootstrap 等，来快速实现响应式设计。

总之，响应式设计是一种能够自动适应不同屏幕尺寸的设计，可以通过多种方式来实现。在实践中，我们可以根据具体的需求和情况选择不同的实现方式。

## 二、CSS 问题

### 2.1 文本省略

- 单行文本

  ```scss
  // 文本省略
  .ellipsis1 {
    overflow: hidden; //超出的文本隐藏
    text-overflow: ellipsis; //溢出用省略号显示
    white-space: nowrap; //溢出不换行
  }
  ```

- 多行文本省略

  ```scss
  .ellipsis2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; //作为弹性伸缩盒子模型显示。
    -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
    -webkit-line-clamp: 2; //显示的行
  }
  ```

### 2.2 移入动画

```scss
/*移入动画的过渡效果*/
.animation {
  transition: all 0.25s ease-in;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 1px 4px 1px rgba(213, 208, 208, 0.41);
  }
}
```

### 2.3 使用深度选择器更改样式

在 Vue 项目中，可以使用深度选择器（也称为 /deep/ 或者 ::v-deep）来局部更改第三方组件库的样式。`scoped`属性会覆盖组件库中的样式，但是不会影响到其他组件。

下面是一个 Vue2 示例，假设你想更改第三方组库 elementUI 中的 col 组件样式：

```css
<style scoped>
/* 使用深度选择器来覆盖 elementUI 中的按钮样式 */
::v-deep .el-col {
	margin-bottom: 20px;
}
</style>
```

在上面的示例中，我们使用了深度选择器`::v-deep .className`来覆盖 elementUI 中的 col 样式。

在 Vue3 中，`::v-deep .className`可以使用但是不推荐使用，官方推荐`v-deep(.className)`

```css
::v-deep(.el-col) {
  margin-bottom: 20px;
}

// 缩写
:deep(.el-col) {
  margin-bottom: 20px;
}
```

### 2.4 居中问题

- 水平居中

  要实现水平居中，可以使用以下两种方法：

  1. 使用 `text-align: center` 属性

  将父元素的 `text-align` 属性设置为 `center`可以使其内部的行内元素水平居中。例如：

  ```html
  <div style="text-align: center;">
    <p>这是一段文</p>
    <img src="your-image-url" alt="Your Image" />
  </div>
  ```

  在上面的示例中，我们将包含文本和图片的 `div` 元素的 `text-align` 属性设置为 `center`，从而使其内部的元素水平居中。

  2. 使用 `margin: 0 auto` 属性

  将元素的左右外边距设置为 `auto`，可以使其在父元素中水平居中。例如：

  ```html
  <div style="width: 200px; margin: 0 auto;">
    <p>这是一段文本</p>
    img src="your-image-url" alt="Your Image">
  </div>
  ```

  注意的是，第二种方法只适用于块级元素，而不适用于行内元素。如果你想要水平居中一个行元素，可以将其包裹在一个块级元素中，然后使用第二种方法来实现水平居中。

- 水平垂直居中

  要实现水平垂直居中，可以使用以下两种方法：

  1. 使用 `flexbox` 布局

  使用 `flexbox` 布局可以轻松实现水平垂直居中。将父元素的 `display` 属性设置为 `flex`，并使用 `justify-content: center` 和 `align-items: center` 属性将其内部的元素水平垂直居中。例如：

  ```html
  <div
    style="display: flex; justify-content: center; align-items: center; height: 200px;"
  >
    <p>这是一段文本</p>
    <img src="your-image-url" alt="Your Image" />
  </div>
  ```

  2. 使用绝对定位和 `transform` 属性

  使用绝对定位和 `transform` 属性也可以实现水平垂直居中。将要居中的元素的 `position` 属性设置为 `absolute`，并使用 `top: 50%` 和 `left: 50%` 属性将其定位父元素的中心。然后，使用 `transform: translate(-50%, -50%)` 属性将其向上和向左移动一半的宽度和高度。例如：

  ```html
  <div style="position: relative; height: 200px;">
    <div
      style="position: absolute; top 50%; left: 50%; transform: translate(-50%, -50%);"
    >
      <p>这是一段文本</p>
      <img src="your-image-url" alt="Your Image" />
    </div>
  </div>
  ```

  需要注意的是，第二种方法需要将要居中的元素的宽度和高度设置为固定值，否则它可能会超出父元素的范围。

### 2.6 图片底部空白缝隙问题

> 图片在页面布局的时候，底侧会有一个空白缝隙，原因是行内块元素会和文字的基线对齐。

![An image](/img/Baseline.png)

主要解决方法有两种：

1. 给图片添加 `vertical-align:middle | top| bottom` 等（提倡使用的）

2. 把图片转换为块级元素 `display: block`;

### 2.7 绘制三角形

要使用 CSS 画一个三角形，您可以使用 CSS 的边框属性来创建一个不带内容的块级元素，并将其中三个边设置为透明，只保留一个边来形成三角形。以下是一个示例：

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .triangle {
        width: 0;
        height: 0;
        border-left: 50px solid transparent; /* 左边透明 */
        border-right: 50px solid transparent; /* 右边透明 */
        border-bottom: 50px solid red; /* 底部形成三角形 */
      }
    </style>
  </head>
  <body>
    <div class="triangle"></div>
  </body>
</html>
```

- 效果图

  ![An image](/img/triangle.png)

在上面的示例中，我们创建了一个没有实际内容的 `div` 元素，并将其样式化为一个红色的三角形。通过设置 `border-left` 和 `border-right` 为透明，我们使左右两侧的边不可见，只有 `border-bottom` 部分有颜色，从而形成了三角形的底边。

您可以根据需要更改 `width`、`height` 和边框的宽度来调整三角形的大小和形状，以及更改 `border-bottom` 的颜色来改变三角形的颜色。这是一种使用纯 CSS 来绘制基本形状的方法。

## 三、JS 问题

### 3.1 常用的工具类

> 项目中的工具类 utils.js

::: details 点击查看

```js
// 常用的工具类

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== "string") {
    // eslint-disable-next-line no-param-reassign
    content = JSON.stringify(content);
  }
  localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
export const getStore = (name) => {
  if (!name) return;
  return localStorage.getItem(name);
};

/**
 * 删除localStorage
 */
export const removeStore = (name) => {
  if (!name) return;
  localStorage.removeItem(name);
};
/**
 * 存储sessionStorage
 */
export const setStoreSession = (name, content) => {
  if (!name) return;
  if (typeof content !== "string") {
    // eslint-disable-next-line no-param-reassign
    content = JSON.stringify(content);
  }
  sessionStorage.setItem(name, content);
};

/**
 * 获取sessionStorage
 */
export const getStoreSession = (name) => {
  if (!name) return;
  // eslint-disable-next-line consistent-return
  return sessionStorage.getItem(name);
};

/**
 * 删除sessionStorage
 */
export const removeStoreSession = (name) => {
  if (!name) return;
  sessionStorage.removeItem(name);
};

/**
 * @date Date类型对象
 * @fmt 格式化字符串  月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 *                   年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * 例子：
 * dateformat(new Date(), "yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 * dateformat(new Date(), "yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
 */
export const dateformat = (date, fmt) => {
  const o = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  // eslint-disable-next-line no-param-reassign
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      `${date.getFullYear()}`.substr(4 - RegExp.$1.length)
    );
  // eslint-disable-next-line no-param-reassign,no-restricted-syntax
  for (const k in o)
    if (new RegExp(`(${k})`).test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length)
      );
  return fmt;
};

/**获取当前URL里的查询参数
 *
 * @param url
 * @returns {{}|*}
 */
export const getUrlParams = (url) => {
  url = url || location.href;
  let queryArray = url.split(/[?&#]/).slice(1);
  let i;
  let args = {};
  for (i = 0; i < queryArray.length; i++) {
    var match = queryArray[i].match(/([^=]+)=([^=]+)/);
    if (match !== null) {
      args[match[1]] = decodeURIComponent(match[2]);
    }
  }
  return args;
};

/**
 *
 *判断是否为数组
 */
export const isArrayFun = (value) => {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
};

/**
 *
 *时间戳转时间格式
 */
export const timestampToTime = (e, type) => {
  let date = new Date(e);
  // 获取年
  let y = date.getFullYear();
  // 获取月
  let m = (date.getMonth() + 1 + "").padStart(2, "0");
  // 获取日
  let d = (date.getDate() + "").padStart(2, "0");
  // 获取小时
  let h = (date.getHours() + "").padStart(2, "0");
  // 获取分钟
  let i = (date.getMinutes() + "").padStart(2, "0");
  // 获取秒
  let s = (date.getSeconds() + "").padStart(2, "0");
  // y-m-d h:i:s
  // y/m/d h:i:s
  // y-m-d
  if (type === "y-m-d h:i:s") {
    return `${y}-${m}-${d} ${h}:${i}:${s}`;
  } else if (type === "y/m/d h:i:s") {
    return `${y}/${m}/${d} ${h}:${i}:${s}`;
  } else {
    return `${y}-${m}-${d}`;
  }
};

/**
 *
 *查找数组是否有对应的item
 */
export const hasPurviewItem = (arr, purviewCode) => {
  if (arr.find((item) => item.menuUrl == purviewCode)) {
    return true;
  } else {
    return false;
  }
};
```

:::

### 3.2 数组对象方法

> 当涉及 JavaScript 中的数组方法时，有许多常用的内置方法。以下是一些常见的数组方法和示例：

1. `push()`: 在数组末尾添加一个或多个元素，并返回新数组的长度。

```javascript
let fruits = ["apple", "banana"];
fruits.push("orange"); // ['apple', 'banana', 'orange']
```

2. `pop()`: 删除并返回数组的最后一个元素。

```javascript
let fruits = ["apple", "banana", "orange"];
let lastFruit = fruits.pop(); // 'orange'; fruits becomes ['apple', 'banana']
```

3. `unshift()`: 在数组开头添加一个或多个元素，并返回新数组的长度。

```javascript
let fruits = ["apple", "banana"];
fruits.unshift("orange"); // ['orange', 'apple', 'banana']
```

4. `shift()`: 删除并返回数组的第一个元素。

```javascript
let fruits = ["orange", "apple", "banana"];
let firstFruit = fruits.shift(); // 'orange'; fruits becomes ['apple', 'banana']
```

5. `concat()`: 连接两个或更多数组，并返回一个新数组。

```javascript
let fruits = ["apple", "banana"];
let moreFruits = ["orange", "grape"];
let allFruits = fruits.concat(moreFruits); // ['apple', 'banana', 'orange', 'grape']
```

6. `slice()`: 返回一个从开始索引到结束索引（不包括结束索引）的新数组。

```javascript
let fruits = ["apple", "banana", "orange", "grape"];
let slicedFruits = fruits.slice(1, 3); // ['banana', 'orange']
```

7. `splice()`: 用于添加、删除或替换数组的元素。

```javascript
let fruits = ["apple", "banana", "orange"];
// splice(start,deleteCount,items) start: 开始位置 deleteCount: 数量 items: 替换的元素
fruits.splice(1, 1, "grape", "kiwi"); // fruits becomes ['apple', 'grape', 'kiwi', 'orange']
```

8. `indexOf()`: 返回指定元素在数组中的第一个索引，如果不存在则返回-1。

```javascript
let fruits = ["apple", "banana", "orange"];
let index = fruits.indexOf("banana"); // 1
```

9. `lastIndexOf()`: 返回指定元素在数组中的最后一个索引，如果不存在则返回-1。

```javascript
let fruits = ["apple", "banana", "orange", "banana"];
let lastIndex = fruits.lastIndexOf("banana"); // 3
```

​ 这些是 JavaScript 中一些常用的数组方法，通过它们，您可以对数组进行增删改查、遍历和转换等操作。

### 3.3 数组遍历方法

> 在 JavaScript 中，有许多常用的数组遍历方法。以下是其中一些常见的方法，以及它们在不同场景中的应用：

1. `forEach`: `forEach` 方法用于遍历数组中的每个元素，并对每个元素执行回调函数。它适用于需要对数组中的每个元素执行相同操作的情况，如输出每个元素或修改数组元素的值。

```javascript
const array = [1, 2, 3, 4];

array.forEach((element) => {
  console.log(element); // 输出每个元素
});
```

2. `map`: `map` 方法用于遍历数组中的每个元素，并根据回调函数的返回值创建一个新的数组。它适用于需要对数组中的每个元素进行转换或映射的情况。

```javascript
const array = [1, 2, 3, 4];

const doubledArray = array.map((element) => {
  return element * 2; // 创建一个新数组，每个元素都是原数组对应元素的两倍
});
```

3. `filter`: `filter` 方法用于遍历数组中的每个元素，并根据回调函数的返回值创建一个新的数组，只包含满足条件的元素。它适用于从数组中筛选出满足特定条件的元素。

```javascript
const array = [1, 2, 3, 4];

const filteredArray = array.filter((element) => {
  return element % 2 === 0; // 创建一个新数组，只包含原数组中的偶数
});
```

4. `reduce`: `reduce` 方法用于遍历数组中的每个元素，并累积它们的值来得到一个结果。它适用于对数组中的元素进行聚合运算，如求和或计算总和。

```javascript
const array = [1, 2, 3, 4];

// accumulator（累积值），element（当前元素值）
const sum = array.reduce((accumulator, element) => {
  return accumulator + element; // 计算数组中所有元素的总和
}, 0); // 0是初始值,如果不设置,默认把数组的第一个元素作为初始值
```

5. `every`: `every` 方法用于检查数组中的每个元素是否满足某个条件。它适用于需要验证数组中的所有元素是否都符合某个条件的情况。

```javascript
const array = [1, 2, 3, 4];

const allGreaterThanZero = array.every((element) => {
  return element > 0; // 检查数组中的所有元素是否都大于0
});
```

6. `some`: `some` 方法用于检查数组中是否有任何一个元素满足某个条件。它适用于需要验证数组中是否存在满足特定条件的元素的情况。

```javascript
const array = [1, 2, 3, 4];

const hasNegativeNumber = array.some((element) => {
  return element < 0; // 检查数组中是否存在负数元素
});
```

这些是常用的数组遍历方法，并且它们在不同的场景中有不同的用途。根据具体的需求，选择合适的方法来处理数组操作可以使代码更加简洁和高效。

### 3.4 嵌套数组扁平化

在 JS 中，可以使用递归或flat函数来将嵌套数组对象扁平化。下面是两种常见的方法：


#### 方法一：递归

```javascript
function flattenArray(arr) {
  // 创建一个空数组用于存储扁平化后的结果
  let result = [];

  // 遍历数组中的每个元素
  arr.forEach(item => {
    // 如果当前元素是数组，递归调用 flattenArray 函数将其扁平化
    if (Array.isArray(item)) {
      // 递归调用，并将结果连接到 result 数组中
      result = result.concat(flattenArray(item));
    } else {
      // 如果当前元素不是数组，直接将其添加到 result 数组中
      result.push(item);
    }
  });

  // 返回扁平化后的结果数组
  return result;
}

// 测试示例
const nestedArray = [1, 2, [3, 4, [5, 6]], 7, [8, [9]]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);

```

#### 方法二：ES6的flat函数

> flat()方法会将所有嵌套数组的元素提取出来，直到数组变成一维的。
```js
const nestedArray = [1, 2, [3, 4, [5, 6]], 7, [8, [9]]];
const flattenedArray = nestedArray.flat(Infinity);
console.log(flattenedArray);

```

这两种方法都能够将嵌套数组对象扁平化。选择哪种方法取决于你的偏好和具体的使用场景。

### 3.5 复制文字到粘贴板

你可以使用 `navigator.clipboard.writeText()` 方法来实现复制文本到剪贴板的操作。这是一个现代浏览器提供的异步 API，更加简洁和方便。

以下是一个使用 `navigator.clipboard.writeText()` 方法的示例代码：

```javascript
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(function () {
      console.log("文本已成功复制到剪贴板");
    })
    .catch(function (error) {
      console.error("复制失败: ", error);
    });
}

// 调用函数复制指定文本到剪贴板
copyToClipboard("要复制的文本内容");
```

在这个例子中，`copyToClipboard()` 函数接受一个参数 `text`，表示要复制的文本内容。函数内部调用了 `navigator.clipboard.writeText()` 方法，并传入要复制的文本内容作为参数。然后，通过 `.then()` 方法来处理复制成功的情况，通过 `.catch()` 方法来处理复制失败的情况。

这种方法很简洁，而且由于是异步操作，可以更好地处理复制过程中的各种情况。但需要注意的是，该方法目前并不被所有浏览器完全支持，因此在实际应用中需要进行兼容性考虑。
