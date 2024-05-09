---
outline: deep
---
# 浙江解纷码

::: info 项目概述
- 浙江解纷码”是浙江省数字法治重要应用之一，目前开通有“我要调解”“咨询服务”“投诉举报”“其他事项”四大功能模块。
- 当事人在线反映纠纷事项后，可选择线上调解或前往线下矛调中心处理。选择线上调解的，平台将根据纠纷发生地、管辖地等，智能流转至属地调解机构，由调解员通过视频聊天等组织当事双方线上调解，在线签署文书。选择线下调解的，平台将指定矛调中心，由当事人线上预约线下办理。
- 浙江解纷码目前有PC端、微信小程序端、浙里办端和浙政钉端。
:::

## 一、项目截图
- [项目地址](https://www.yundr.gov.cn/)

### 1. 浙江解纷码-首页

 ![An image](/item/浙江解纷码-首页.png)

### 2. 当事人-纠纷登记页

 ![An image](/item/当事人-纠纷登记页.png)

### 3. 管理员-诸暨统计报表

 ![An image](/item/管理员-诸暨统计报表.png)


## 二、技术归纳

> 老页面: Angularjs + layer.js；新页面: Vue + ElementUI

​浙江解纷码PC端最早是在2017年开发，前端页面由全栈工程师开发，前后端不分离，所以没有使用当前流行的vue、react等框架，而是大面积地使用原生的js、JSP开发，同时还使用了Angularjs框架。整个项目历经多年、数十个研发修改，同时项目开发的时候几乎没有规范，所以该项目维护起来非常困难，目前体积大约有1.43G。

本项目又分为多个子项目，如诸暨数字诉服、萧山合同纠纷、椒江物业纠纷等多个子系统，子系统共用同一套代码。

本项目目前有PC端、微信小程序端、浙里办端和浙政钉端。PC端见第一段内容。微信小程序使用了微信官方的wepy框架，UI使用了有赞的zent。浙里办端和浙政钉端技术比较新，使用了主流的vue+vant进行开发，这两端是借助于浙里办和浙政钉获取用户信息，所以没有注册登录页。


## 三、我的工作
主要参与该项目的诸暨地区和萧山地区需求，主要工作有以下几点：

### 1、原功能细节调整
- 纠纷登记表单
### 2、诸暨数字诉服项目

- 司法鉴定和司法保全
 ![An image](/item/u0.png)
 
- 诸暨统计报表模块
- 萧山用户操作优化
- 浙江解纷码速度优化

## 四、重难点

### 1. Angualrjs的使用

详见  [文档链接](/note/Angularjs)

### 2. el-form滚动到校验失败的位置

详见  [文档链接](/note/guide/guide2#_6-6-el-form滚动到校验失败的位置)

### 3. 在单个页面中使用vue+elementUI

要在单个页面中使用Vue.js和Element UI，并且使用CDN导入这些包，您需要按照以下步骤操作：

1. 在您的HTML文件中引入Vue.js和Element UI的CDN链接。确保按照正确的顺序引入它们（先引入Vue.js，然后是Element UI）：

```html
<!-- 引入Vue.js -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>

<!-- 引入Element UI CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/element-ui@2.15.6/lib/theme-chalk/index.css">

<!-- 引入Element UI JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/element-ui@2.15.6/lib/index.js"></script>
```

2. 创建一个Vue实例并在其中使用Element UI组件。您可以在页面的 `<script>` 标签中编写JavaScript代码。

```html
<div id="app">
  <el-button @click="showDialog">打开对话框</el-button>
  <el-dialog :visible.sync="dialogVisible">
    <p>这是一个Element UI对话框</p>
  </el-dialog>
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      dialogVisible: false
    },
    methods: {
      showDialog() {
        this.dialogVisible = true;
      }
    }
  });
</script>
```

在这个例子中，我们创建了一个Vue实例，并在实例中使用了一个Element UI按钮和对话框组件。

3. 根据您的需求继续使用Vue和Element UI组件。您可以根据文档以及您的具体需求来使用不同的组件和功能。

这就是在单个页面中使用Vue.js和Element UI的基本步骤。确保在项目中使用正确的CDN链接，并根据文档使用Vue和Element UI的组件和功能。

