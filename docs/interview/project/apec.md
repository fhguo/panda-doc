---
outline: deep
---
# APEC

::: info 项目概述
- APEC是实行包括谈判、调解和仲裁在内的网上争议解决（ODR）程序，为企业间（B2B）跨境小额商事争议提供快捷、低成本的ODR服务，以增强跨境商业互信，推动亚太地区营商环境的健康发展。
- APEC ODR程序启动后分为谈判、调解、仲裁三个阶段，全程在ODR服务机构的ODR平台上进行。
:::

## 一、项目截图
- [项目地址](https://casettle.odrcloud.cn/)

### 1. APEC-首页

 ![An image](/item/APEC-首页.png)

### 2. APEC-纠纷登记页

 ![An image](/item/APEC-纠纷登记页.png)

### 3. APEC-管理员页

 ![An image](/item/APEC-管理员页.png)


## 二、技术归纳

> 技术栈：vue2 + vue-cli 2.0 + vue-router + elementUI + ES6/7 + axios + sass + vue-i18n

​	这是一个前端和后台管理类混合的项目，项目类型为法院在线调解平台,

此项目大大小小共 60 个页面，涉及注册、登录、新增调解、用户中心、在线咨询、管理员分配、后台分配调解、视频调解等，是一个完整的流程。此项目业务逻辑稍显复杂，能正常进行调解功能，视频调解为此项目与别的平台区别中的突出功能。



## 三、我的工作
主要参与该项目的后期项目优化及新增需求，主要工作有以下几点：

- 原功能调整及优化
- 争议登记页面修改
- 新增使用指南模块
- 新增平台新闻模块
- 新增咨询服务模块

## 四、重难点

### 1. 实现导航栏滚动吸顶效果



要实现导航栏滚动吸顶效果，可以通过以下步骤使用Vue来完成：

1. 在Vue组件中，定义一个变量`isSticky`，初始值为`false`，用于控制导航栏的固定状态。
2. 在导航栏组件的`mounted`生命周期中，使用`window.addEventListener()`监听滚动事件，一旦页面滚动，就判断当前滚动位置是否超过导航栏的位置。如果超过，就将`isSticky`变量设为`true`，表示需要固定导航栏。
3. 在导航栏组件的`template`中，使用`v-bind:class`指令来动态绑定导航栏的`class`属性。当`isSticky`为`true`时，添加一个固定样式，使导航栏固定在页面顶部。

下面是一个示例代码，用于实现导航栏滚动吸顶效果：

```html
<template>
  <nav :class="{ sticky: isSticky }">
    <!-- 导航栏内容 -->
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const navbar = document.querySelector('nav');
      const navbarPosition = navbar.getBoundingClientRect().top;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > navbarPosition) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
};
</script>

<style scoped>
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  /* 固定导航栏的样式 */
}
</style>
```

在上述示例中，我们在`handleScroll`方法中，获取了导航栏的位置和当前页面滚动位置，比较二者的大小，从而判断是否需要固定导航栏。在模板中，我们使用了`v-bind:class`指令，根据`isSticky`变量的值来动态绑定导航栏的`class`属性，实现了导航栏的滚动吸顶效果。



### 2. 实现返回页面顶部的功能


要在Vue 2中实现返回页面顶部的功能，你可以使用以下代码：

首先，在你的Vue组件中，你需要定义一个`data`属性来追踪滚动位置和控制返回顶部按钮的显示与隐藏：

```javascript
data() {
  return {
    showButton: false, // 控制返回顶部按钮的显示与隐藏
  };
},
```

然后，你需要在`mounted`生命周期钩子中添加一个滚动事件监听器，以便在滚动时更新滚动位置并控制返回顶部按钮的显示与隐藏：

```javascript
mounted() {
  window.addEventListener('scroll', this.handleScroll);
},
```

接下来，你需要在`methods`中定义`handleScroll`方法来处理滚动事件：

```javascript
methods: {
  handleScroll() {
    // 获取滚动位置
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    // 根据滚动位置判断是否显示返回顶部按钮
    this.showButton = scrollTop > 100; // 当滚动位置超过100px时显示按钮，你可以根据需要调整这个值
  },
},
```

最后，在模板中添加返回顶部按钮，并根据`showButton`属性来控制其显示与隐藏：

```html
<template>
  <div>
    <!-- 页面内容 -->

    <!-- 返回顶部按钮 -->
    <button v-if="showButton" @click="scrollToTop">返回顶部</button>
  </div>
</template>
```

在模板中，我们使用了`v-if`指令来根据`showButton`属性的值来决定是否渲染返回顶部按钮。当`showButton`为`true`时，按钮会显示出来。

最后，你还需要在`methods`中定义`scrollToTop`方法来处理返回顶部按钮的点击事件：

```javascript
methods: {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 使用平滑滚动效果
    });
  },
},
```

这样，当用户点击返回顶部按钮时，页面会平滑滚动回顶部位置。

以上就是在Vue 2中实现返回页面顶部功能的具体代码。记得在组件销毁时移除滚动事件监听器，以避免内存泄漏：

```javascript
beforeDestroy() {
  window.removeEventListener('scroll', this.handleScroll);
},
```

### 3. vue-i18n实现国际化
详见  [文档链接](/note/guide/I18n.md)