---
outline: deep
---
# 行政诉讼E监督

::: info 项目概述
- ​本项目是为浙江省天台县人大机构开发的行政诉讼项目，行政诉讼即“民告官”，是为了人民更方便地监督各个行政机关，从而维护自己的合法权益。
- 该项目分为PC端和移动端，两端功能基本相同，PC端与移动端最明显的差异点是PC端有驾驶舱，方便各行政机关更直观地查看案件相关数据。
- 项目的使用角色有法院、被诉行政机关、人大、司法局、检察院、社会治理中心、信访局、超管等，每个角色看到的页面和使用的功能不同。开发完成会上架浙政钉，方便政府工作人员使用。
:::

## 一、项目截图

### 1. PC-行政机关-工作台

 ![An image](/item/工作台-行政机关.png)

### 2. PC-驾驶舱-首屏

 ![An image](/item/驾驶舱-首屏.jpg)

### 3. H5-法院-首页

 ![An image](/item/首页-法院.png)


## 二、技术归纳

​	移动端和PC端前端都是使用的主流的Vue2.0技术，项目路由使用vue-router，网络请求使用axios技术，身份验证使用token ，图标使用iconfont图标库。两端使用的UI组件库不同，PC端使用ElementUI，移动端使用Vant。PC端大屏使用的是百度的echarts库。

​	因为项目需要在浙政钉上架，与以往做的项目稍有不同。
- 一是该项目没有登录界面，身份验证需要借助浙政钉的用户信息，所以在本地开发的时候需要频繁地向后端人员要指定身份的token，以调用有权限的接口和打开有权限的页面。
- 二是需要考虑浙政钉的适配问题，浙政钉平台里面的应用界面并不是全屏的，与本地浏览器开发的尺寸不同，所以需要保证在浙政钉平台的应用页面正常显示。
- 三是部分功能需要借助浙政钉的官方API，比如文档的下载功能。

## 三、我的工作
主要参与该项目的中后期工作，涉及PC端和移动端，主要工作有以下几点：

- 原功能调整及优化
- PC端驾驶舱搭建
- 新增信访局角色及信访相关功能开发
- 新增案例库模块

## 四、重难点

#### 1.PC端大屏适配

- 在设计界面时，使用百分比单位来定义元素的宽度和高度，或者使用自适应单位（例如vw和vh）来使元素相对于视口大小进行调整

- 使用采用**font.js+rem**的组合

  在main.js引入一个屏幕适配的font.js文件，动态改变根字体大小。大屏所有像素单位使用rem。

  ```js
  setFontSize();
  // 浏览器发生变化后 自动执行function 调用setFontSize
  window.onresize = function () {
      setFontSize();
  }
  function setFontSize () {
      // 获取当前的设备宽度
      var dwidth = document.documentElement.clientWidth;
      // 代表的是我们 1920 设计稿中 1rem 的像素
      var rem = 16;
      if (dwidth > 1920) {
          dwidth = 1920;
      }
      // 根据窗口大小计算比率
      var f_size = 16 / (1920 / dwidth);
      // 设置浏览器根字体大小
      document.documentElement.style.fontSize = f_size + 'px';
  }
  
  ```


#### 2.大屏列表滚动

- vue-seamless-scroll组件的使用(参照文档)

  *支持上下左右无缝滚动，单步滚动，以及支持水平方向的手动切换功能*

```js
npm install vue-seamless-scroll --save
```

#### 3.移动端1px边框

> 目前主流的屏幕DPR=2 （iPhone 678）,或者3 （iPhone 8 Plus）。拿2倍屏来说，设备的物理像素要实现1像素，而DPR=2，所以css 像素只能是 0.5。以DPR=2为例，使用scale缩放解决

```css{11}
position: relative;
&::after {
  position: absolute;
  box-sizing: border-box;
  content: ' ';
  pointer-events: none;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 1px solid #ebedf0;
  transform: scaleY(0.5);
}
```

#### 4.使用第三方图标库iconfont

- 拷贝项目下面生成的fontclass代码(需下载字体包引入项目中)：

```js
//at.alicdn.com/t/font_8d5l8fzk5b87iudi.css
```

- 挑选相应图标并获取类名，应用于页面：

```css
<i class="iconfont icon-xxx"></i>
```

#### 5.移动端文件上传类型问题

```js
iphone上传图片和视频的时候会压缩文件，导致文件格式变化。
图片会转化为.jpeg，视频会转化为.mov格式，上传类型需要加上.jpeg和.mov文件类型
```

#### 6.移动端的适配方案

一、使用 [lib-flexible](https://github.com/amfe/lib-flexible) 动态设置 REM 基准值（html 标签的字体大小）

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
      propList: ['*'] //  *代表作用全部元素
    }
  }
}

```

3、配置完毕，重新启动服务
