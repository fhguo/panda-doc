---
outline: deep
---

## 三、项目集成

### 3.1 集成element-plus

试剂管理系统运营平台，UI组件库采用的element-plus，因此需要集成element-plus插件

官网地址:https://element-plus.gitee.io/zh-CN/

```bash
pnpm install element-plus @element-plus/icons-vue
```

**入口文件main.ts全局安装element-plus，element-plus默认支持语言英语设置为中文**

```js
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
app.use(ElementPlus, {
    locale: zhCn
})
```

**Element Plus全局组件类型声明**

```js
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["element-plus/global"]
  }
}
```

配置完毕可以测试element-plus组件与图标的使用。

### 3.2 src别名的配置

在开发项目的时候文件与文件关系可能很复杂，因此我们需要给src文件夹配置一个别名

```js
// vite.config.ts
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
        }
    }
})
```

**TypeScript 编译配置**

```
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
    "paths": { //路径映射，相对于baseUrl
      "@/*": ["src/*"] 
    }
  }
}
```

### 3.3 环境变量的配置

项目开发过程中，至少会经历开发环境、测试环境和生产环境(即正式环境)三个阶段。

不同阶段请求的状态(如接口地址等)不尽相同，若手动切换接口地址是相当繁琐且易出错的。

于是环境变量配置的需求就应运而生，我们只需做简单的配置，把环境状态切换的工作交给代码。

- 开发环境（development）
  顾名思义，开发使用的环境，每位开发人员在自己的dev分支上干活，开发到一定程度，同事会合并代码，进行联调。

- 测试环境（testing）
  测试同事干活的环境啦，一般会由测试同事自己来部署，然后在此环境进行测试

- 生产环境（production）
  生产环境是指正式提供对外服务的，一般会关掉错误报告，打开错误日志。(正式提供给客户使用的环境。)

注意:一般情况下，一个环境对应一台服务器，也有的公司开发与测试环境是一台服务器！！！

项目根目录分别添加 开发、生产和测试环境的文件!

```
.env.development
.env.production
.env.test
```

文件内容

```js
# 变量必须以 VITE_ 为前缀才能暴露给外部读取
NODE_ENV = 'development'
VITE_APP_TITLE = '试剂管理系统运营平台'
VITE_APP_BASE_API = '/dev-api'
```

```js
NODE_ENV = 'production'
VITE_APP_TITLE = '试剂管理系统运营平台'
VITE_APP_BASE_API = '/prod-api'
```

```js
# 变量必须以 VITE_ 为前缀才能暴露给外部读取
NODE_ENV = 'test'
VITE_APP_TITLE = '试剂管理系统运营平台'
VITE_APP_BASE_API = '/test-api'
```

配置运行命令：package.json

```js
 "scripts": {
    "dev": "vite --open",
    "build:test": "vue-tsc && vite build --mode test",
    "build:pro": "vue-tsc && vite build --mode production",
    "preview": "vite preview"
  },
```

通过`import.meta.env`获取环境变量

### 3.4 SVG图标配置

在开发项目的时候经常会用到svg矢量图，而且我们使用svg以后，页面上加载的不再是图片资源。

这对页面性能来说是个很大的提升，而且我们svg文件比img要小的很多，放在项目中几乎不占用资源。

**安装SVG依赖插件**

```
pnpm install vite-plugin-svg-icons -D
```

**在`vite.config.ts`中配置插件**

```js
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
export default () => {
  return {
    plugins: [
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
  }
}
```

**main.js入口文件导入**

```js
import 'virtual:svg-icons-register'
```

#### 3.4.1 svg封装为全局组件

因为项目很多模块需要使用图标，因此可以把它封装为全局组件。

在`src/components`目录下创建一个`SvgIcon`组件：代码如下：

```vue
<template>
  <div>
    <svg :style="{ width: width, height: height }">
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  //xlink:href属性值的前缀
  prefix: {
    type: String,
    default: '#icon-'
  },
  //svg矢量图的名字
  name: String,
  //svg图标的颜色
  color: {
    type: String,
    default: ""
  },
  //svg宽度
  width: {
    type: String,
    default: '16px'
  },
  //svg高度
  height: {
    type: String,
    default: '16px'
  }

})
</script>
<style scoped></style>
```

在src文件夹components目录下创建一个`index.ts`文件：用于注册components文件夹内部全部全局组件。

```js
// 引入项目全部的全局组件
import SvgIcon from "./SvgIcon/index.vue";
import type { App, Component } from "vue";

// 定义全局对象 是一个键值对的集合，其中键是字符串，值是Vue组件类型Component
const allGlobalComponent: { [name: string]: Component } = { SvgIcon };

// 对外暴露插件对象
export default {
  install(app: App) {
    // 遍历allGlobalComponent对象
    Object.keys(allGlobalComponent).forEach((key) => {
      // 注册项目的全局组件
      app.component(key, allGlobalComponent[key]);
    });
  },
};

```

在main.js入口文件引入`src/index.ts`文件，通过`app.use`方法安装自定义插件

```js
import gloablComponent from './components/index';
app.use(gloablComponent);
```

### 3.5 集成sass

我们目前在组件内部已经可以使用scss样式，因为在配置styleLint工具的时候，项目当中已经安装过`sass` `sass-loader`。

因此我们再组件内可以使用scss语法，需要加上`lang="scss"`。

```css
<style scoped lang="scss"></style>
```

接下来我们为项目添加一些全局的样式

在`src/styles`目录下创建一个`index.scss`文件，当然项目中需要用到清除默认样式，因此在`index.scss`引入`reset.scss`

```css
@import './reset.scss'
```

在入口文件引入

```js
// 引入全局样式文件
import '@/styles/index.scss'
```

但是你会发现在src/styles/index.scss全局样式文件中没有办法使用$变量，因此需要给项目中引入全局变量$。

在style/variable.scss创建一个`variable.scss`文件！

在`vite.config.ts`文件配置如下:

```js
export default defineConfig((config) => {
    // 配置scss全局变量
	css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
}
```

**`@import "./src/styles/variable.less";`后面的`;`不要忘记，不然会报错**!

配置完毕你会发现scss提供这些全局变量可以在组件样式中使用了

```scss
$base-color: red;
```

### 3.6 mock数据

Mock.js 是一款模拟数据生成器，旨在帮助前端独立于后端进行开发，帮助编写单元测试。提供了以下模拟功能：

- 根据数据模板生成模拟数据
- 模拟 Ajax 请求，生成并返回模拟数据
- 基于 HTML 模板生成模拟数据

#### 3.6.1 安装依赖

```
pnpm install -D vite-plugin-mock mockjs
```

#### 3.6.2 启用插件

```js
// vite.config.js 
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
export default defineConfig(({ command })=> {
  return {
    plugins: [
      vue(),
      viteMockServe({
        localEnabled: command === 'serve', // 保证开发阶段使用mock接口
      }),
    ],
  }
})
```

#### 3.6.3 创建mock文件夹

在根目录创建mock文件夹，去创建我们需要mock数据与接口。

在mock文件夹内部创建一个`user.ts`文件

```js
//用户信息数据
function createUserList() {
  return [
    {
      userId: 1,
      avatar:
        "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      username: "admin",
      password: "111111",
      desc: "平台管理员",
      roles: ["平台管理员"],
      buttons: ["cuser.detail"],
      routes: ["home"],
      token: "Admin Token",
    },
    {
      userId: 2,
      avatar:
        "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      username: "system",
      password: "111111",
      desc: "系统管理员",
      roles: ["系统管理员"],
      buttons: ["cuser.detail", "cuser.user"],
      routes: ["home"],
      token: "System Token",
    },
  ];
}

export default [
  // 用户登录接口
  {
    url: "/api/user/login", //请求地址
    method: "post", //请求方式
    response: ({ body }) => {
      //获取请求体携带过来的用户名与密码
      const { username, password } = body;
      //调用获取用户信息函数,用于判断是否有此用户
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password
      );
      //没有用户返回失败信息
      if (!checkUser) {
        return { code: 201, data: { message: "账号或者密码不正确" } };
      }
      //如果有返回成功信息
      const { token } = checkUser;
      return { code: 200, data: { token } };
    },
  },
  // 获取用户信息
  {
    url: "/api/user/info",
    method: "get",
    response: (request) => {
      //获取请求头携带token
      const token = request.headers.token;
      //查看用户信息是否包含有此token用户
      const checkUser = createUserList().find((item) => item.token === token);
      //没有返回失败的信息
      if (!checkUser) {
        return { code: 201, data: { message: "获取用户信息失败" } };
      }
      //如果有返回成功信息
      return { code: 200, data: { checkUser } };
    },
  },
];

```

#### 3.6.4 axios测试

- 安装axios

```
pnpm install axios
```

- 测试mock接口

```js
// 测试mock请求
import axios from "axios";
axios({
  url: "/api/user/login",
  method: "post",
  data: {
    username: "admin",
    password: "11111",
  },
});
```

### 3.7 axios二次封装

在开发项目的时候避免不了与后端进行交互，因此我们需要使用axios插件实现发送网络请求。

在开发项目的时候，我们经常会把axios进行二次封装。目的如下：

1. 使用请求拦截器，可以在请求拦截器中处理一些业务(开始进度条、请求头携带公共参数)

2. 使用响应拦截器，可以在响应拦截器中处理一些业务(进度条结束、简化服务器返回的数据、处理http网络错误)

在根目录下创建utils/request.ts

```js
import axios from "axios";
import { ElMessage } from "element-plus";
//创建axios实例
let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000
})
//请求拦截器
request.interceptors.request.use(config => {
    return config;
});
//响应拦截器
request.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    //处理网络错误
    let msg = '';
    let status = error.response.status;
    switch (status) {
        case 401:
            msg = "token过期";
            break;
        case 403:
            msg = '无权访问';
            break;
        case 404:
            msg = "请求地址错误";
            break;
        case 500:
            msg = "服务器出现问题";
            break;
        default:
            msg = "无网络";
    }
    ElMessage({
        type: 'error',
        message: msg
    })
    return Promise.reject(error);
});
export default request;
```

### 3.8 API接口统一管理

在开发项目的时候，接口可能很多需要统一管理。在src目录下去创建api文件夹去统一管理项目的接口。

```js
//统一管理咱们项目用户相关的接口
import request from '@/utils/request'

import type {

 loginFormData,

 loginResponseData,

 userInfoReponseData,

} from './type'

//项目用户相关的请求地址

enum API {

 LOGIN_URL = '/admin/acl/index/login',

 USERINFO_URL = '/admin/acl/index/info',

 LOGOUT_URL = '/admin/acl/index/logout',

}
//登录接口
export const reqLogin = (data: loginFormData) =>
 request.post<any, loginResponseData>(API.LOGIN_URL, data)
//获取用户信息

export const reqUserInfo = () =>

 request.get<any, userInfoReponseData>(API.USERINFO_URL)

//退出登录

export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
```

### 扩展

- 贾成豪老师代码仓库地址:
https://gitee.com/jch1011/vue3_admin_template-bj1.git

- 服务器域名:http://sph-api.atguigu.cn

- swagger文档:

http://139.198.104.58:8209/swagger-ui.html

http://139.198.104.58:8212/swagger-ui.html#/

