---
outline: deep
---

## 四、后台模板

### 4.1 静态路由配置

1. 安装`vue-router`

   ```
   pnpm i vue-router
   ```

2. 根组件添加路由占位符

   ```html
   <!-- App.vue -->
   <!-- 路由占位 -->
   <router-view></router-view>
   ```

3. 创建 router 路由文件

   ```js
   // src/router/index.ts
   import { createRouter, createWebHashHistory } from "vue-router";
   // 创建路由器
   const router = createRouter({
     // 路由模式
     history: createWebHashHistory(),
     routes: [
       {
         // 登录
         path: "/login",
         component: () => import("@/views/login/index.vue"),
         name: "login", // 命名路由
       },
       {
         // 首页
         path: "/",
         component: () => import("@/views/home/index.vue"),
         name: "home", // 命名路由
       },
       {
         // 404
         path: "/404",
         component: () => import("@/views/404/index.vue"),
         name: "404", // 命名路由
       },
       {
         // 上面路由都没匹配
         path: "/:pathMatch(.*)*",
         redirect: "/404",
         name: "any",
       },
     ],
     // 滚动行为
     scrollBehavior() {
       return {
         top: 0,
         left: 0,
       };
     },
   });
   export default router;
   ```

4. 入口文件引入路由文件

   ```js
   // main.ts
   // 引入路由文件
   import router from "./router";
   // 安装router
   app.use(router);
   ```

5. 创建路由对应的页面

   ```vue
   // 404页面
   <template>
     <div>
       <h3>404</h3>
     </div>
   </template>
   <script setup lang="ts"></script>
   <style scoped></style>
   ```

   ### 4.2 登录页

   > 效果图（兼容移动端）

   ![An image](/item/rms-login.png)

   1. 全部代码
      ::: details 点击查看

      ```vue
      <template>
        <div class="login-container flx-center">
          <div class="login-box">
            <div class="login-left">
              <img
                class="login-left-img"
                src="@/assets/images/login_left.png"
                alt="login"
              />
            </div>
            <div class="login-form">
              <div class="login-logo">
                <img class="login-icon" src="@/assets/images/logo.png" alt="" />
                <h2 class="logo-text">RMS试剂管理系统</h2>
              </div>

              <el-form ref="loginFormRef" size="large" :model="loginForm">
                <el-form-item prop="username">
                  <el-input
                    v-model="loginForm.username"
                    placeholder="请输入用户名"
                    :prefix-icon="User"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input
                    v-model="loginForm.password"
                    type="password"
                    placeholder="请输入密码"
                    show-password
                    autocomplete="new-password"
                  >
                    <template #prefix>
                      <el-icon class="el-input__icon">
                        <lock />
                      </el-icon>
                    </template>
                  </el-input>
                </el-form-item>
              </el-form>
              <div class="login-btn">
                <el-button :icon="CircleClose" round size="large">
                  重置
                </el-button>
                <el-button :icon="UserFilled" round size="large" type="primary">
                  登录
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </template>

      <script setup lang="ts">
      import { reactive } from "vue";
      import {
        CircleClose,
        User,
        UserFilled,
        Lock,
      } from "@element-plus/icons-vue";
      const loginForm = reactive({
        username: "",
        password: "",
      });
      </script>

      <style scoped lang="scss">
      .flx-center {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .login-container {
        height: 100%;
        min-height: 550px;
        background-color: #eeeeee;
        background-image: url("@/assets/images/login_bg.svg");
        background-size: 100% 100%;
        background-size: cover;

        .login-box {
          position: relative;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 96.5%;
          height: 94%;
          padding: 0 50px;
          background-color: rgb(255 255 255 / 80%);
          border-radius: 10px;

          .dark {
            position: absolute;
            top: 13px;
            right: 18px;
          }

          .login-left {
            width: 800px;
            margin-right: 10px;

            .login-left-img {
              width: 100%;
              height: 100%;
            }
          }

          .login-form {
            width: 420px;
            padding: 50px 40px 45px;
            background-color: var(--el-bg-color);
            border-radius: 10px;
            box-shadow: rgb(0 0 0 / 10%) 0 2px 10px 2px;

            .login-logo {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 45px;

              .login-icon {
                width: 60px;
                height: 52px;
              }

              .logo-text {
                padding: 0 0 0 25px;
                margin: 0;
                font-size: 30px;
                font-weight: bold;
                color: #34495e;
                white-space: nowrap;
              }
            }

            .el-form-item {
              margin-bottom: 40px;
            }

            .login-btn {
              display: flex;
              justify-content: space-between;
              width: 100%;
              margin-top: 40px;
              white-space: nowrap;

              .el-button {
                width: 185px;
              }
            }
          }
        }
      }

      @media screen and (width <=1250px) {
        .login-left {
          display: none;
        }
      }

      @media screen and (width <=600px) {
        .login-form {
          width: 97% !important;
        }
      }
      </style>
      ```

### 4.3 创建用户 store 仓库

1. 安装`pinia`

   ```
   pnpm i pinia
   ```

2. 引入并使用 pinia

   ```js
   // main.js
   // 引入仓库
   import pinia from "./store/index.ts";
   // 使用store仓库
   app.use(pinia);
   ```

3. 创建 store 仓库入口文件

   ```js
   // src/store/index.ts
   import { createPinia } from "pinia";
   // 创建store仓库
   const pinia = createPinia();
   // 对外暴露仓库
   export default pinia;
   ```

4. 创建用户仓库模块

   ```js
   // store/modules/user.ts
   // 用户相关仓库
   import { defineStore } from "pinia";
   // 引入接口
   import { login } from "@/api/user";
   // 引入数据类型
   import type { loginForm } from "@/api/user/type";
   // 创建用户仓库
   const useUserStore = defineStore("User", {
     // 存储数据的地方
     state: () => {
       return {
         token: localStorage.getItem("TOKEN") || "",
       };
     },
     // 异步/逻辑的地方
     actions: {
       // 用户登录的方法
       async userLogin(data: loginForm) {
         const result: any = await login(data);
         if (result.code == 200) {
           this.token = result.data.token;
           localStorage.setItem("TOKEN", result.data.token);
           return "OK";
         } else {
           return Promise.reject(new Error(result.data.message));
         }
       },
     },
   });
   // 默认导出
   export default useUserStore;
   ```

5. 登录页引用用户仓库

   ```js
   // 引入用户store仓库
   import useUserStore from "@/store/modules/user";
   let userStore = useUserStore();
   // 使用userStore中的方法
   userStore.userLogin();
   ```

### 4.4 首页布局

> 效果图（兼容移动端）

![An image](/item/rms-home.png)

1. 全部代码
   ::: details 点击查看

   ```vue
   <template>
     <el-container>
       <!-- 左侧菜单 -->
       <el-aside :style="{ width: layoutStore.fold ? '65px' : '210px' }">
         <!-- 展示菜单 -->
         <div class="logo">
           <img :src="SetTitle.logo" alt="" />
           <p v-if="!layoutStore.fold" class="title">{{ SetTitle.title }}</p>
         </div>
         <!-- 滚动组件 -->
         <el-scrollbar class="scrollbar">
           <!-- 菜单组件-->
           <el-menu
             :default-active="$route.path"
             background-color="#001529"
             text-color="white"
             :collapse="layoutStore.fold"
             :collapse-transition="false"
           >
             <!--根据路由动态生成菜单-->
             <Menu :menulist="userStore.menuRouters"></Menu>
           </el-menu>
         </el-scrollbar>
       </el-aside>
       <el-container>
         <!-- 顶部导航 -->
         <el-header>
           <!-- layout组件的顶部导航tabbar -->
           <Tabbar></Tabbar>
         </el-header>
         <!-- 内容展示区域 -->
         <el-main>
           <Main></Main>
         </el-main>
         <el-footer v-show="layoutStore.showFooter">
           <Footer></Footer>
         </el-footer>
       </el-container>
     </el-container>
     <!-- 设置抽屉组件 -->
     <Draw></Draw>
   </template>

   <script setup lang="ts">
   import { onMounted } from "vue";
   //获取路由对象
   import { useRoute } from "vue-router";
   import SetTitle from "./setting.ts";
   //引入菜单组件
   import Menu from "./menu/index.vue";
   //右侧内容展示区域
   import Main from "./main/index.vue";
   // 引入tabbar
   import Tabbar from "./tabbar/index.vue";
   // 引入Drawer组件
   import Draw from "./draw/index.vue";
   // 引入footer组件
   import Footer from "./footer/index.vue";
   //获取用户相关的小仓库
   import useUserStore from "@/store/modules/user";
   import useLayoutStore from "@/store/modules/setting.ts";
   // 是否折叠菜单栏
   let layoutStore = useLayoutStore();

   let userStore = useUserStore();

   //获取路由对象
   let $route = useRoute();

   onMounted(() => {
     // 监听窗口大小变化
     window.addEventListener("resize", () => {
       const w = document.documentElement.clientWidth;
       // const h = document.documentElement.clientHeight;
       // console.log('页面大小发生了变化', `宽度：${w}`, `高度：${h}`);
       if (w <= 750) {
         layoutStore.fold = true;
       } else {
         layoutStore.fold = false;
       }
     });
   });
   </script>

   <script lang="ts">
   export default {
     name: "Layout",
   };
   </script>

   <style scoped lang="scss">
   .el-container {
     width: 100%;
     height: 100%;

     .el-aside {
       height: 100vh;
       background-color: #001529;
       color: #fff;
       transition: width 0.3s;

       .scrollbar {
         width: 100%;
         height: calc(100vh - 50px);
       }

       .el-menu {
         border-right: none;
       }
     }

     .logo {
       height: 50px;
       display: flex;
       justify-content: center;
       align-items: center;

       img {
         width: 32px;
       }

       .title {
         margin-left: 10px;
         font-size: 20px;
       }
     }

     .el-container {
       border-left: 1px solid #e4e7ed;

       .el-header {
         border-bottom: 1px solid #e4e7ed;
       }
     }

     .el-main {
       background-color: #f2f3f5;
     }
     .el-footer {
       height: unset;
       padding: 0;
     }
   }
   </style>
   ```

### 4.5 递归渲染菜单

1. 核心菜单组件

   ```vue
   <template>
     <div>
       <template v-for="item in menulist" :key="item.path">
         <!-- 没有子路由 -->
         <template v-if="!item.children">
           <el-menu-item v-if="!item.meta.hidden" :index="item.path">
             <template #title>
               <span>{{ item.meta.title }}</span>
             </template>
           </el-menu-item>
         </template>
         <!-- 有且只有一个子路由 -->
         <template v-else-if="item.children && item.children.length == 1">
           <el-menu-item
             v-if="!item.meta.hidden"
             :index="item.children[0].path"
           >
             <template #title>
               <span>{{ item.children[0].meta.title }}</span>
             </template>
           </el-menu-item>
         </template>
         <!-- 有多个子路由 -->
         <template v-else>
           <el-sub-menu v-if="!item.meta.hidden" :index="item.path">
             <template #title>
               <span>{{ item.meta.title }}</span>
             </template>
             <Menu :menulist="item.children"></Menu>
           </el-sub-menu>
         </template>
       </template>
     </div>
   </template>
   <script setup lang="ts">
   defineProps(["menulist"]);
   </script>
   <script lang="ts">
   export default {
     // 引入递归组件名
     name: "Menu",
   };
   </script>
   <style scoped></style>
   ```

2. 路由示例

   ```js
   // 登录
   path: "/login",
   component: () => import("@/views/login/index.vue"),
   name: "login", // 命名路由
   meta: {
     title: "登录",
     hidden: true, // 是否显示在左侧菜单
     icon: "House", // 菜单图标
   },
   children: [] // 子路由
   ```

3. 全局注册菜单图标

   `Object.entries()` 是用于返回一个给定对象自身可枚举属性的键值对

   ```js
   // src/components/index.ts
   // 引入element-plus提供的全部图标组件
   import * as ElementPlusIconsVue from "@element-plus/icons-vue";
   // 将element-plus提供的全部图标组件注册为全局组件
   for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
     app.component(key, component);
   }
   ```

4. 使用菜单图标

   ```vue
   <el-icon>
   <component :is="item.meta.icon"></component>
   </el-icon>
   ```

### 4.6 路由出口

- 定义二级路由出口

  ```vue
  // src/views/layout/main/index.vue
  <template>
    <!-- 路由组件出口的位置 -->
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <!-- 渲染layout一级路由组件的子路由 -->
        <component :is="Component" />
      </transition>
    </router-view>
  </template>
  <script setup lang="ts"></script>
  <style scoped>
  /* 动画效果 */
  .fade-enter-from {
    opacity: 0;
    transform: scale(0);
  }
  .fade-enter-active {
    transition: all 0.3s;
  }
  .fade-enter-to {
    opacity: 1;
    transform: scale(1);
  }
  </style>
  ```

### 4.7 顶部 tabbar 搭建

1. 左侧面包屑动态导航

   ```vue
   <template>
     <el-icon class="change-icon" @click="changeIcon">
       <!-- 使用动态组件component渲染图标组件 -->
       <component :is="!layoutStore.fold ? 'Fold' : 'Expand'"></component>
     </el-icon>
     <el-breadcrumb separator-icon="ArrowRight">
       <el-breadcrumb-item
         :to="item.path"
         v-for="item in $route.matched"
         v-show="item.meta.title"
       >
         <el-icon class="menu-icon">
           <component :is="item.meta.icon"></component>
         </el-icon>
         <span>{{ item.meta.title }}</span>
       </el-breadcrumb-item>
     </el-breadcrumb>
   </template>

   <script setup lang="ts">
   import { ref } from "vue";
   import useLayoutStore from "@/store/modules/setting.ts";
   import { useRoute } from "vue-router";
   let $route = useRoute();

   // 是否折叠菜单栏
   let layoutStore = useLayoutStore();
   // 折叠菜单栏
   const changeIcon = () => {
     // 图标切换
     layoutStore.fold = !layoutStore.fold;
   };
   </script>
   <script lang="ts">
   export default {
     name: "Breadcrumb",
   };
   </script>

   <style scoped lang="scss">
   // 兼容移动设备 面包屑在移动端不显示
   @media screen and (width <= 750px) {
     .el-breadcrumb {
       display: none;
     }
   }
   </style>
   ```

2. 右侧设置选项

   ```vue
   <template>
     <el-button circle icon="Refresh"></el-button>
     <el-button circle icon="FullScreen"></el-button>
     <el-button circle icon="Setting"></el-button>
     <el-dropdown>
       <div>
         <div class="el-dropdown-link">
           <el-avatar
             :size="24"
             src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
           />
           <span class="name">Admin</span>
           <el-icon class="el-icon--right">
             <arrow-down />
           </el-icon>
         </div>
       </div>
       <template #dropdown>
         <el-dropdown-menu>
           <el-dropdown-item>退出登录</el-dropdown-item>
           <el-dropdown-item divided>个人中心</el-dropdown-item>
         </el-dropdown-menu>
       </template>
     </el-dropdown>
   </template>
   <script setup lang="ts"></script>
   <style scoped lang="scss"></style>
   ```

3. 组件化

   ```vue
   // src/views/layout/tabbar/index.vue
   <template>
     <div class="tabbar">
       <div class="tab-left">
         <BreadCrumb></BreadCrumb>
       </div>
       <div class="tab-right">
         <Setting></Setting>
       </div>
     </div>
   </template>
   <script setup lang="ts">
   import BreadCrumb from "./breadcrumb/index.vue";
   import Setting from "./setting/index.vue";
   </script>
   <style lang="scss">
   .tabbar {
     width: 100%;
     height: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between;
     .tab-left {
       display: flex;
       .el-icon {
         margin: 0 15px;
         cursor: pointer;
       }
     }
     .tab-right {
       display: flex;
       align-items: center;
       margin-right: 20px;
       line-height: 50px;
       .el-avatar {
         margin: 0 5px 0 10px;
       }
       .name {
         color: #666;
       }
       .el-dropdown-link {
         display: flex;
         align-items: center;
         cursor: pointer;
       }
     }
   }
   </style>
   ```

### 4.8 刷新及全屏业务的实现

1. 定义 state 变量

   ```js
   // src/store/modules/setting.ts
   state: () => {
       return {
         fold: false, // 控制菜单折叠收起
         refresh: false, // 控制刷新效果
       };
     },
   ```

2. 刷新功能实现

   ```vue
   // src/views/layout/main/index.vue
   <template>
     <!-- 路由组件出口的位置 -->
     <router-view v-slot="{ Component }">
       <transition name="fade">
         <!-- 渲染layout一级路由组件的子路由 -->
         <component :is="Component" v-if="refreshFlag" />
       </transition>
     </router-view>
   </template>

   <script setup lang="ts">
   import { watch, ref, nextTick } from "vue";
   import useLayoutStore from "@/store/modules/setting";
   let layoutStore = useLayoutStore();
   let refreshFlag = ref(true);
   // 监听是否刷新
   watch(
     () => layoutStore.refresh,
     () => {
       refreshFlag.value = false;
       // 组件渲染完毕
       nextTick(() => {
         refreshFlag.value = true;
       });
     }
   );
   </script>
   ```

3. 触发刷新操作

   ```vue
   <el-button circle icon="Refresh" @click="updateRefresh"></el-button>
   <script setup lang="ts">
   import useLayoutStore from "@/store/modules/setting";
   let layoutStore = useLayoutStore();
   const updateRefresh = () => {
     layoutStore.refresh = !layoutStore.refresh;
   };
   </script>
   ```

4. 全屏实现

   ```js
   // 点击全屏按钮事件
   const fullScreen = () => {
     // 当前页面是否全屏
     let full = document.fullscreenElement;
     if (!full) {
       // 实现全屏
       document.documentElement.requestFullscreen();
     } else {
       // 退出全屏
       document.exitFullscreen();
     }
   };
   ```

### 4.9 获取用户信息

1. 用户仓库引入接口

   ```js
   // src/store/modules/user.ts
   import { login, getUserInfo } from "@/api/user";
   state: () => {
       return {
         token: localStorage.getItem("TOKEN") || "",
         menuRouters: constantRouter, // 菜单路由数组
         username: "", // 用户名
         avatar: "", // 头像
       };
     },
    // 异步/逻辑的地方
   actions: {
       // 获取用户信息的方法
       async getUser() {
         const result: any = await getUserInfo();
         console.log(result);
         if (result.code == 200) {
           this.username = result.data.checkUser.username;
           this.avatar = result.data.checkUser.avatar;
         }
       },
   }
   ```

2. 添加请求拦截器

   ```js
   // src/utils/request.ts
   request.interceptors.request.use((config) => {
     const userStore = useUserStore();
     console.log(userStore.token);
     if (userStore.token) {
       config.headers.token = userStore.token;
     }
     return config;
   });
   ```

3. 渲染用户信息

   ```js
   // 引入用户仓库数据
   import useUserStore from '@/store/modules/user';
   let userStore = useUserStore();
   // 渲染数据
   <el-avatar :size="24" :src="userStore.avatar" />
   <span class="name">{{ userStore.username }}</span>
   ```

### 4.10 退出登录

1. 重置仓库用户信息

   ```js
   // src/store/modules/user.ts
   // 退出登录的方法
   userLogout() {
     // 清除用户信息
     this.token = "";
     this.username = "";
     this.avatar = "";
     localStorage.removeItem("Token");
   },
   ```

2. 触发退出登录操作

   ```ts
   import { useRoute } from "vue-router";
   let userStore = useUserStore();
   import useUserStore from "@/store/modules/user";
   // 获取路由信息对象
   let $router = useRoute();
   // 退出登录
   const exit = () => {
     userStore.userLogout();
     //跳转到登录页面，在URL中保存跳转前的路径
     $router.push({ path: "/login", query: { redirect: $route.path } });
   };
   ```

3. 登录页处理

   ```js
   import { useRouter, useRoute } from "vue-router";
   // 获取路由器对象
   let $router = useRouter();
   // 获取路由信息对象
   let $route = useRoute();
   // 登录回调
   const login = () => {
     // 判断登录的时候,路由路径当中是否有query参数
     let redirect: any = $route.query.redirect;
     // 如果有就往query参数跳转，没有跳转到首页
     $router.push({ path: redirect || "/" });
   };
   ```

### 4.11 进度条

1. 安装 nprogress

   ```
   pnpm i nprogress
   ```

2. 新增路由鉴权文件

   ```js
   // src/router/permission.ts
   // 路由鉴权
   import router from "./index.ts";
   // 引入进度条
   import nprogress from "nprogress";
   import "nprogress/nprogress.css";
   // 全局前置守卫
   router.beforeEach((to, from, next) => {
     // to and from are both route objects. must call `next`.
     console.log(to, from);
     nprogress.start();
     next();
   });
   // 全局后置钩子
   router.afterEach(() => {
     // to and from are both route objects.
     nprogress.done();
   });
   ```

3. 导入入口文件

   ```js
   // 引入路由鉴权文件
   import "./router/permission.ts";
   ```

### 4.12 路由鉴权

1. 核心功能实现

   ```js
   // src/router/permission.ts
   // 导入用户仓库获取token
   import useUserStore from "@/store/modules/user.ts";
   import pinia from "@/store/index.ts";
   import { ElNotification } from "element-plus";
   // 去除小圆圈
   nprogress.configure({ showSpinner: false });
   const userStore = useUserStore(pinia);
   const username = userStore.username;

   // 全局前置守卫
   router.beforeEach((to, from, next) => {
       // 获取token 判断用户是否登录
     const token = userStore.token;
     console.log(token);
     if (token) {
       if (to.path == "/login") {
         next("/");
       } else {
         // 是否有用户信息
         if (username) {
           // 有就放行
           next();
         } else {
           // 获取用户信息
           userStore
             .getUser()
             .then(() => {
               next();
             })
             .catch((err) => {
               // token过期 退出登录
               ElNotification({
                 type: "error",
                 message: err,
               });
               userStore.userLogout();
               next("/login");
             });
         }
       }
     } else {
       if (to.path == "/login") {
         next();
       } else {
         next({ path: "/login", query: { redirect: to.path } });
       }
     }
   }
   ```
