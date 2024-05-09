---
outline: deep
---
# 小U智选

::: info 项目概述
- 小U智选基于 uniapp 开发的微信小程序商城项目，拥有首页(home)、分类(cate)、购物车(cart)、我的(my) 这 4 个 tabBar 页面，此外还有商品列表页、搜索页、商品详情页、个人中心等多个页面，包含挑选商品、加入购物车、生成订单、微信支付整个购物流程。
- 该项目使用Vue全家桶+uni-ui组件库，使用HBuilderX开发，在微信开发者工具上实时预览。
:::

## 一、项目截图

### 1. 首页

 ![An image](/item/home.png)
### 2. 分类

 ![An image](/item/cate.png)
### 3. 购物车

 ![An image](/item/car.png)
### 4. 我的

 ![An image](/item/my.png)

 ## 二、重难点

 ### 1、微信支付的流程
**创建订单**

请求创建订单的 API 接口：把（订单金额、收货地址、订单中包含的商品信息）发送到服务器

服务器响应的结果：订单编号

**订单预支付**

请求订单预支付的 API 接口：把（订单编号）发送到服务器

服务器响应的结果：订单预支付的参数对象，里面包含了订单支付相关的必要参数

**发起微信支付**

- 调用 `uni.requestPayment()` 这个 API，发起微信支付；
- 把步骤 2 得到的 “订单预支付对象” 作为参数传递给 `uni.requestPayment()` 方法
- 监听 `uni.requestPayment()` 这个 API 的 success，fail，complete 回调函数

### 2、实现搜索框的防抖处理

- 在 data 中定义防抖的延时器 timerId 如下：
```js
data() {
  return {
    // 延时器的 timerId
    timer: null,
    // 搜索关键词
    kw: ''
  }
}
```
- 修改 input 事件处理函数如下：
```js
input(e) {
  // 清除 timer 对应的延时器
  clearTimeout(this.timer)
  // 重新启动一个延时器，并把 timerId 赋值给 this.timer
  this.timer = setTimeout(() => {
    // 如果 500 毫秒内，没有触发新的输入事件，则为搜索关键词赋值
    this.kw = e.value
    console.log(this.kw)
  }, 500)
}
```

### 3、其它

参见 [黑马优购](http://applet-base-api-t.itheima.net/docs-uni-shop/index.htm)
