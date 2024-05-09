---
outline: deep
---

::: tip 提示
本文档用来记录一些实际面试遇到的而且之前没有接触过的问题
:::

## 一、实际面试遇到的问题

### 1、分栏布局（两栏或三栏）

#### 两栏

实现一个左侧固定宽度，右侧自适应宽度的两栏布局可以使用多种方法，其中弹性盒子布局（Flexbox）和 CSS 网格布局是两个常用的选择。以下是使用这两种方法的示例：

**使用 Flexbox 布局：**

HTML 结构：

```html
<div class="container">
  <div class="left-column">左侧固定宽度</div>
  <div class="right-column">右侧自适应宽度</div>
</div>
```

CSS 样式：

```css
.container {
  display: flex;
}

.left-column {
  width: 200px; /* 左侧固定宽度 */
  background-color: #ccc;
}

.right-column {
  flex: 1; /* 右侧自适应宽度 */
  background-color: #f0f0f0;
}
```

上述示例中，`.container` 使用了 Flexbox 布局，`.left-column` 的宽度被固定为 200px，而 `.right-column` 使用 `flex: 1` 来占据剩余可用宽度，实现了右侧的自适应宽度。

**使用 CSS 网格布局：**

HTML 结构：

```html
<div class="container">
  <div class="left-column">左侧固定宽度</div>
  <div class="right-column">右侧自适应宽度</div>
</div>
```

CSS 样式：

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr; /* 左侧固定宽度和右侧自适应宽度 */
  grid-gap: 10px; /* 可选的间距 */
}

.left-column {
  background-color: #ccc;
}

.right-column {
  background-color: #f0f0f0;
}
```

这里，`.container` 使用了 CSS 网格布局，通过 `grid-template-columns` 属性定义了两列，第一列宽度固定为 200px，第二列使用 `1fr` 来占据剩余可用宽度，从而实现右侧的自适应宽度。

你可以根据具体的设计和需求选择其中一种方法来创建左侧固定宽度，右侧自适应宽度的两栏布局。

#### 三栏

要实现一个三栏布局，其中左右两侧宽度固定，而中间部分自适应宽度，你可以使用 CSS Flexbox 或者 CSS Grid 布局来实现。以下是两种不同的方法示例：

**使用 Flexbox 布局：**

HTML 结构：

```html
<div class="container">
  <div class="left-column">左侧固定宽度</div>
  <div class="middle-column">中间部分自适应宽度</div>
  <div class="right-column">右侧固定宽度</div>
</div>
```

CSS 样式：

```css
.container {
  display: flex;
}

.left-column,
.right-column {
  width: 200px; /* 左右两侧固定宽度 */
  background-color: #ccc;
}

.middle-column {
  flex: 1; /* 中间部分自适应宽度 */
  background-color: #f0f0f0;
}
```

在这个示例中，`.container` 使用 Flexbox 布局，`.left-column` 和 `.right-column` 的宽度都被固定为 200px，而 `.middle-column` 使用 `flex: 1` 来占据剩余可用宽度，从而实现中间部分的自适应宽度。

**使用 CSS Grid 布局：**

HTML 结构：

```html
<div class="container">
  <div class="left-column">左侧固定宽度</div>
  <div class="middle-column">中间部分自适应宽度</div>
  <div class="right-column">右侧固定宽度</div>
</div>
```

CSS 样式：

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px; /* 左右两侧固定宽度，中间部分自适应宽度 */
  grid-gap: 10px; /* 可选的间距 */
}

.left-column,
.right-column {
  background-color: #ccc;
}

.middle-column {
  background-color: #f0f0f0;
}
```

在这个示例中，`.container` 使用 CSS Grid 布局，通过 `grid-template-columns` 属性定义了三列，其中左右两侧的列宽度为 200px，中间部分使用 `1fr` 来占据剩余可用宽度，实现了中间部分的自适应宽度。

你可以选择其中一种方法，具体取决于你的项目需求和个人喜好。这两种方法都能有效实现左右两侧宽度固定，中间部分自适应宽度的三栏布局。

### 2、让变量 a 和 b 的值互换

在 ES6 中，你可以使用解构赋值来交换变量 `a` 和 `b` 的值。这可以通过以下方式实现：

```javascript
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log("a:", a); // 应该输出 10
console.log("b:", b); // 应该输出 5
```

上述代码首先创建了变量 `a` 和 `b`，然后使用数组的解构赋值来交换它们的值。通过将它们放在一个数组中 `[b, a]` 并将其赋给 `[a, b]`，变量 `a` 和 `b` 的值会被交换。

### 3、浏览器的垃圾回收机制

浏览器的垃圾回收机制是一种自动管理内存的过程，用于释放不再使用的内存资源，以避免内存泄漏和提高性能。主要策略包括：

1. 标记-清除：标记当前活动对象，然后清除未标记的对象。

2. 引用计数：根据对象引用数来回收不再使用的对象。不再常用。

3. 分代回收：将对象分为新生代和老年代，根据对象寿命分别进行垃圾回收。

浏览器不断改进垃圾回收机制，开发者可编写高效代码和使用开发者工具来优化性能。

### 4、Promise 是什么

Promise（承诺）是 ES6 新增的一种异步编程模式，用于处理异步操作。它表示一个尚未完成但最终会成功或失败的操作，允许你更容易地管理异步代码的流程和处理异步操作的结果。

Promise 有三种状态：

1. **Pending（等待）**：初始状态，表示操作尚未完成。
2. **Fulfilled（已完成）**：表示操作成功完成，并返回了一个值。
3. **Rejected（已拒绝）**：表示操作失败，并返回一个错误原因。

在 JavaScript 中，你可以使用 Promise 如下：

1. **创建 Promise**：使用 Promise 构造函数创建一个 Promise 对象，传递一个执行器函数，该函数包含异步操作的代码。例如：

```javascript
const myPromise = new Promise((resolve, reject) => {
  // 异步操作
  if (/* 操作成功 */) {
    resolve("成功时的结果");
  } else {
    reject("失败时的原因");
  }
});
```

2. **处理 Promise**：你可以使用`.then()`方法来处理 Promise 的成功结果，以及使用`.catch()`方法来处理 Promise 的失败结果。例如：

```javascript
myPromise
  .then((result) => {
    // 处理成功结果
    console.log("成功：" + result);
  })
  .catch((error) => {
    // 处理失败结果
    console.error("失败：" + error);
  });
```

3. **Promise 链**：你可以将多个 Promise 链接在一起，依次处理它们的结果。这在处理多个异步操作时非常有用。例如：

```javascript
promise1()
  .then((result1) => {
    return promise2(result1);
  })
  .then((result2) => {
    return promise3(result2);
  })
  .then((result3) => {
    console.log("最终结果：" + result3);
  })
  .catch((error) => {
    console.error("出错：" + error);
  });
```

Promise 是一种强大的工具，可帮助你更清晰地组织和处理异步操作，避免了回调地狱（Callback Hell），提高了代码的可读性和可维护性。在现代 JavaScript 中，Promise 已成为标准的异步编程模式，而且它也被 async/await 语法所支持，进一步简化了异步代码的编写。

### 5、重复提交问题

防止短时间内重复提交请求是一项重要的前端开发任务，特别是在涉及到用户点击按钮多次触发请求的情况下。以下是一些方法来防止短时间内重复提交请求：

1. **按钮禁用和 Loading 状态：** 当用户点击提交按钮时，立即禁用按钮，并显示一个"加载中"状态，以防止用户多次点击。这可以通过在点击时设置按钮的 `disabled` 属性和使用一个状态变量来实现。

```vue
<template>
  <button @click="submitForm" :disabled="isSubmitting">
    {{ isSubmitting ? "提交中..." : "提交" }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      isSubmitting: false,
    };
  },
  methods: {
    async submitForm() {
      if (this.isSubmitting) return;
      this.isSubmitting = true;

      try {
        // 执行请求逻辑
        await this.makeApiRequest();

        // 请求成功后重置状态
        this.isSubmitting = false;
      } catch (error) {
        // 处理请求失败
        this.isSubmitting = false;
        // 可以显示错误消息
      }
    },
    async makeApiRequest() {
      // 发送请求到后端
    },
  },
};
</script>
```

2. **防抖（Debounce）：** 使用 lodash 或其他防抖库来延迟处理请求，以确保在一段时间内只执行一次。

```vue
<template>
  <button @click="debouncedSubmitForm">提交</button>
</template>

<script>
import _ from "lodash";

export default {
  methods: {
    debouncedSubmitForm: _.debounce(async function () {
      try {
        // 执行请求逻辑
        await this.makeApiRequest();
      } catch (error) {
        // 处理请求失败
        // 可以显示错误消息
      }
    }, 1000), // 1秒内只执行一次
  },
};
</script>
```

3. **请求拦截器：** 如果你使用 Axios 或其他 HTTP 请求库，可以在请求拦截器中检查是否有正在进行的相同请求，如果有，可以取消当前请求。这需要根据具体库的文档来实现。

```javascript
import axios from "axios";

const api = axios.create();
const pendingRequests = new Map();

api.interceptors.request.use((config) => {
  // 生成唯一标识请求的 key
  const requestKey = config.url + JSON.stringify(config.params);

  if (pendingRequests.has(requestKey)) {
    // 取消重复请求
    return Promise.reject(new Error("Duplicate request"));
  }

  // 将请求保存在 pendingRequests 中
  config.cancelToken = new axios.CancelToken((cancel) => {
    pendingRequests.set(requestKey, cancel);
  });

  return config;
});

api.interceptors.response.use(
  (response) => {
    // 请求成功后从 pendingRequests 中移除
    removePending(response.config);
    return response;
  },
  (error) => {
    // 请求失败后从 pendingRequests 中移除
    removePending(error.config);
    return Promise.reject(error);
  }
);

function removePending(config) {
  const requestKey = config.url + JSON.stringify(config.params);
  if (pendingRequests.has(requestKey)) {
    const cancel = pendingRequests.get(requestKey);
    cancel("Duplicate request cancelled");
    pendingRequests.delete(requestKey);
  }
}

export default api;
```

这些方法可以帮助你在 Vue 项目中有效地防止短时间内重复提交请求。你可以根据具体需求选择其中一种或多种方式来实现请求的防重复机制。

### 6、使用 js 实现 1 到 100 求和

你可以使用 JavaScript 来实现 1 到 100 的求和，以下是使用 for 循环和递归两种方法的示例：

使用 for 循环：

```javascript
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("使用for循环求和结果为: " + sum);
```

使用递归：

```javascript
function sumRecursive(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumRecursive(n - 1);
  }
}

const result = sumRecursive(100);
console.log("使用递归求和结果为: " + result);
```

这两种方法都可以得出 1 到 100 的求和结果，使用 for 循环更直观和高效，而递归方法更具教育性，但在实际应用中可能不如 for 循环高效，因为递归可能导致栈溢出。

### 7、代码实现 vue2 响应式数据的原理

Vue2 的响应式数据原理是基于`Object.defineProperty`的，下面是一个简单的示例，演示如何手动实现一个类似 Vue 响应式数据的机制。

```javascript
// 定义一个响应式对象
function defineReactive(obj, key, value) {
  let internalValue = value;

  Object.defineProperty(obj, key, {
    get() {
      console.log(`访问属性 ${key}: ${internalValue}`);
      return internalValue;
    },
    set(newValue) {
      console.log(`设置属性 ${key} 为: ${newValue}`);
      internalValue = newValue;
    },
  });
}

// 创建一个对象并定义响应式属性
const data = {};
defineReactive(data, "count", 0);

// 通过访问和修改属性来触发get和set方法
data.count; // 会触发get方法
data.count = 1; // 会触发set方法

// 输出结果：
// 访问属性 count: 0
// 设置属性 count 为: 1
```

这个示例中，`defineReactive` 函数接受一个对象 `obj`、一个属性名 `key` 和初始值 `value`。它使用 `Object.defineProperty` 来定义属性 `key` 的 getter 和 setter 方法，每当访问或修改属性时，将触发相应的方法。

在实际的 Vue 中，响应式系统更加复杂，支持嵌套对象、数组等多种数据结构，并且有更多功能，如依赖追踪和派发更新。但这个简单的示例演示了 Vue 响应式数据的基本原理，即通过拦截属性的访问和修改来实现数据的响应性。



## 二、项目问题

### 1、在项目中遇到了什么问题

**浙江解纷码**

- 在做浙江解纷码的时候之前没接触过`angularjs`的项目，所以刚开始做的时候遇到的问题比较多 指令和数据请求方式等都和 vue 不一样
- 当事人登记页面实时校验清单，首先是表单比较复杂，可以手动增减表单项。然后要求是表单实时验证输入项，并把结果显示在右侧的实时校验清单。并且点击校验清单的某一项时，表单会自动滚动到错误项的位置

**行政诉讼 E 监督**

- 数字驾驶舱的适配：rem+font.js; 驾驶舱地图的下钻
- 上架到浙政钉，需要使用专有钉钉的 API，比如说文件的下载和预览。
- 没有登录页面，借助钉钉的用户 token 信息。

**小 U 智选**

- 小程序使用了分包加载，实现按需加载，减小小程序的初始加载时间
  - 在根目录`app.json`文件中配置`subPackages`分包信息，包括各个分包的名称、路径等
- 小程序登录和支付
  - 登录：`wx.login()`获取 code 将 code 发送给后台服务器，服务器验证 code 并返回返回登录态信息，前端保存登录态信息
  - 获取昵称和头像：之前是`wx.getUserInfo()`,2021 年 4 月更新为`wx.getUserProFile()`
- 小程序跳转：URL Scheme 和 URL Link
  - URL Scheme 通过服务端接口或在小程序管理后台生成后，自行开发中转 H5 页面
  - 通过服务端接口生成 URL Link，直接使用。

**试剂管理系统**

- 使用滴滴的LogicFlow绘制流程图
  - 在流程审批业务中需要使用流程图的形式。
  - LogicFlow基于HTMl+SVG实现，可以设置图上所有元素的样式，还可以通过API 拓展功能，同时内置数据转换的能力
- 使用Vue3+Vite+TypeScript，需要使用eslint+stylelint+prettier来对我们的代码质量做检测和修正

## 三、小程序面试题

### 1、微信小程序的登录流程

- 登录流程时序

![An image](/img/wx-login.jpg)

- 说明

  - 调用 `wx.login()` 获取 临时登录凭证`code` ，并回传到开发者服务器。

  - 开发者服务器调用微信 `auth.code2Session` 接口，换取用户唯一标识 `OpenID`、用户在微信开放平台账号下的唯一标识`UnionID`和会话密钥`session_key`。

  - 之后开发者服务器可以根据用户标识来生成自定义登录态，用于后续业务逻辑中前后端交互时识别用户身份。

- 注意事项

  - 会话密钥 `session_key` 是对用户数据进行加密签名的密钥。
  - 临时登录凭证 code 只能使用一次


### 2、如何获取用户昵称头像

> 该功能微信不断调整，最初是wx.getUserInfo，然后更改为getUserProfile，目前这两个都已被弃用。目前的版本不支持通过接口自动获取，需要用户自己填写！

- 头像选择

需要将 `button` 组件 `open-type` 的值设置为 `chooseAvatar`，当用户选择需要使用的头像之后，可以通过 `bindchooseavatar` 事件回调获取到头像信息的临时路径。

- 昵称填写

需要将 `input` 组件 `type` 的值设置为 `nickname`，当用户在此`input`进行输入时，键盘上方会展示微信昵称。

```html
<button class="avatar-wrapper" open-type="chooseAvatar" bind:chooseavatar="onChooseAvatar">
  <image class="avatar" src="{{avatarUrl}}"></image>
</button> 
<input type="nickname" class="weui-input" placeholder="请输入昵称"/>
```

```js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/...'

Page({
  data: {
    avatarUrl: defaultAvatarUrl,
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
  }
})
```

### 3、如何实现小程序的支付功能？

要在微信小程序中实现支付功能，通常需要遵循以下步骤：

1. **申请商户号和开通支付功能：** 首先，你需要拥有一个微信支付商户号，并在微信支付平台上开通支付功能。这通常需要你的企业信息和银行账户。

2. **设置支付参数：** 在小程序中，你需要配置支付参数，包括商户号、密钥、证书等信息。这些参数将用于生成支付签名和进行支付请求。

3. **获取用户授权：** 在进行支付前，你需要获取用户的授权，以便访问其支付信息。你可以使用`wx.requestPayment` API 来触发微信支付授权页面，用户确认后，你将获得一个支付凭证（prepay_id）。

4. **生成支付签名：** 使用获取的 prepay_id，你需要在服务器端生成支付签名。签名通常基于你的商户号、密钥以及其他必要参数。签名的生成方法通常依赖于你的后端语言和框架。

5. **发起支付请求：** 将生成的签名和其他支付参数传递给`wx.requestPayment` API，以触发支付。示例代码如下：

```javascript
wx.requestPayment({
  timeStamp: "", // 时间戳
  nonceStr: "", // 随机字符串
  package: "", // 统一下单接口返回的 prepay_id
  signType: "MD5", // 签名算法
  paySign: "", // 签名
  success(res) {
    // 支付成功回调
  },
  fail(res) {
    // 支付失败回调
  },
});
```

6. **处理支付结果：** 在支付完成后，`wx.requestPayment` API 的回调函数将返回支付结果。你需要根据支付结果来更新用户的订单状态和提供相应的反馈。

7. **安全性和异常处理：** 确保支付过程的安全性，包括校验支付结果、防止重放攻击等。还需要处理各种异常情况，例如用户取消支付、支付超时等。

8. **日志和记录：** 记录支付交易，以便后续的支付管理和报告。

需要注意的是，支付功能牵涉到用户隐私和金钱，因此在实现支付功能时必须非常谨慎，遵循微信支付的最佳实践和安全要求。另外，建议参考微信官方文档以获取最新的支付接口和安全建议。

### 4、用户取消支付如何处理

当用户取消支付时，你需要在微信小程序中进行适当的处理，以提供友好的用户体验。以下是一些处理用户取消支付的方法：

1. **提示用户取消支付：** 在支付页面上，可以显示一个友好的提示，告知用户支付已取消，同时提供重新支付的选项。

2. **监听支付回调：** 使用`wx.requestPayment` API 时，可以监听支付回调函数，包括支付成功和支付失败。如果用户取消支付，会触发支付失败回调，你可以在这个回调中处理取消支付的情况。

```javascript
wx.requestPayment({
  // ...其他支付参数
  success(res) {
    // 支付成功回调
  },
  fail(res) {
    if (res.errMsg === "requestPayment:fail cancel") {
      // 用户取消支付，处理取消支付的逻辑
    } else {
      // 其他支付失败情况，处理支付失败的逻辑
    }
  },
});
```

3. **订单状态更新：** 如果用户已经创建了订单或交易，但支付被取消，你应该更新订单状态以反映支付取消的情况。这可以包括将订单标记为未支付、将库存还原、取消预订等。

4. **提供重新支付选项：** 如果用户取消支付后仍然有兴趣购买商品或服务，你可以提供重新支付的选项。这可以是一个按钮或链接，允许用户再次触发支付操作。

5. **记录取消支付：** 记录支付被取消的情况，以便进行分析和监测。这有助于你了解用户取消支付的原因，并采取措施来改善用户体验。

6. **退款政策：** 如果你的业务涉及退款政策，确保用户了解如何申请退款或取消订单，并提供相应的支持。

处理用户取消支付是支付流程中的一部分，它有助于提供更好的用户体验，并确保用户在需要时可以重新支付或取消订单。不同的小程序可能有不同的业务需求，所以你可以根据实际情况进行适当的定制和处理。

### 5、小程序分包的使用

小程序分包加载是一种用于改善小程序性能和加载速度的技术。它允许你将小程序的一部分代码和资源打包成独立的分包，从而实现按需加载，减小小程序的初始加载时间。这对于大型小程序或需要动态加载功能的小程序非常有用。

以下是如何使用小程序分包加载的基本步骤：

1. **创建分包目录：** 首先，在小程序的根目录下，创建一个子目录，用于存放分包的代码和资源文件。例如，你可以在根目录下创建一个名为"subPackage"的目录。

2. **配置分包信息：** 在小程序的配置文件（`app.json`）中，需要添加分包的配置信息。在`subPackages`字段下，定义各个分包的名称、路径、以及需要分包的页面。例如：

```json
{
  "subPackages": [
    {
      "root": "subPackage1",
      "pages": ["page1", "page2"]
    },
    {
      "root": "subPackage2",
      "pages": ["page3", "page4"]
    }
  ]
}
```

在上面的示例中，定义了两个分包，每个分包有一个根目录和包含的页面列表。

3. **将页面移动到分包目录：** 将相应的页面文件（WXML、JS、JSON、WXSS 等）和资源文件（如图片）移到各个分包的目录下。

4. **在代码中加载分包：** 在小程序的代码中，可以使用`wx.loadSubPackage` API 来动态加载分包。例如：

```javascript
// 在需要加载分包的地方
wx.loadSubPackage({
  name: "subPackage1", // 分包的名称，即配置中定义的名称
  success(res) {
    // 分包加载成功后的回调
  },
  fail(res) {
    // 分包加载失败后的回调
  },
});
```

这将触发分包的加载过程，成功加载后，分包中的页面就可以在小程序中访问了。

5. **分包预加载（可选）：** 你还可以使用分包的预加载功能，以提前加载分包中的内容，而不需要在运行时再加载。预加载可以通过配置实现，以加速页面加载。

小程序分包加载有助于提高小程序的性能，尤其是在需要加载大量页面或资源的情况下。然而，需要注意合理划分分包，以避免过度细分，造成不必要的复杂性。同时，小程序分包功能通常需要小程序基础库的较新版本支持，所以确保你的小程序基础库版本兼容分包加载。

### 6、跳转到小程序

跳转到小程序有以下几种方式：

1. 利用服务端接口或小程序管理后台生成`URL Scheme`：这是实现短信打开小程序的较常见方式。通过服务端接口或在小程序管理后台生成 URL Scheme 后，开发者可以自行开发中转 H5 页面，然后将带有中转 H5 链接的短信内容通过开发者自有的短信发送能力或服务商的短信服务进行投放。用户收到短信并点击链接时，就能直接进入微信小程序页面。
   生成的 URL Scheme 如下所示：

```js
weixin://dl/business/?t= *TICKET*
```

2. 使用`URL Link`：这是另一种方式实现短信打开小程序。通过服务端接口生成 URL Link，直接将带有 URL Link 的短信内容通过开发者自有的短信发送能力或服务商的短信服务进行投放。当用户收到短信并点击链接时，也能直接进入微信小程序页面。
   生成的 URL Link 如下所示：

```js
https://wxaurl.cn/*TICKET* 或 https://wxmpurl.cn/*TICKET*
```

综上所述，URL Scheme 和 URL Link 虽然都是实现从外部应用程序或短信等渠道打开特定目标网址的方式，但在实现方式和应用场景上存在差异。URL Scheme 更适合在某些特定场景下使用，例如微信小程序中；而 URL Link 更加灵活和易用，适合在多种渠道推广和营销活动中使用
