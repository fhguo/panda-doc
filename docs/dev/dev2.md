---
outline: deep
---

## 一、Vue 问题

### 1.1 Vue 组件封装和复用

- 子传父

  ```js
  总结:
  1.父组件:  通过自定义属性传递数据
  2.子组件:	通过props选项接受数据   props的接受结果是一个[]
  props接受值:
  		1.[]  #通过数组的形式接受数据
  		2.{}  #通过对象的形式接受数据   可以做校验

  常见的校验类型: String Number  Array  Object function  Symbol
  type[类型]
  default[默认值]
  required[必填项]
  validator[校验]
  ```

- 父传子

  ```js
  子传父:
  父组件: 通过自定义事件接收参数
  子组件: 通过$emit函数来触发自定义事件,并且传递参数
  // 如何触发自定义事件?
      /**
       * 通过$emit函数来触发自定义事件
       * 参数一:接受参数为:event(自定义事件名称)
       * 参数二: 传递的数据
      */
      this.$emit('message',10)
   <!-- 事件自定义:  @自定义事件名称="事件函数" -->
      <!--
        通过自定义事件接受参数的形式方式:
        1.显示接受: $event
        2.隐士接受: 不传
      -->
   <v-child @message="message($event)" :msg="msg"></v-child>
  ```

- Vue3 组件通信参见 [文档链接](/note/vue3#组合式api-父子通信)

### 1.2 Vue-i18n 实现国际化

- Vue-i18n 实现国际化详见 [文档链接](/dev/I18n.md)

### 1.3 Vue 项目文件上传

- 普通上传(见[elementUI 文档](https://element.eleme.io/#/zh-CN/component/upload))

- 自定义上传

  ```js
  <template>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="上传文件">
        <el-upload
          :action="uploadUrl"
          :http-request="uploadFile"
          :on-success="onSuccess"
          :on-error="onError"
          :file-list="fileList"
          multiple>
          <el-button slot="trigger">选择文件</el-button>
          <el-button slot="tip" type="primary">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">仅支持单个文件上传</div>
        </el-upload>
      </el-form-item>
    </el-form>
  </template>

  <script>
  import axios from 'axios'
  import { ElMessage } from 'element-ui'

  export default {
    data() {
      return {
        form: {
          file: null
        },
        fileList: []
      }
    },
    computed: {
      uploadUrl() {
        // 这里可以设置文件上传的URL
        return '/upload'
      }
    },
    methods: {
      uploadFile(file) {
        // 创建FormData对象，用于上传文件
        const formData = new FormData()
        formData.append('file', file)

        // 使用axios发送POST请求上传文件
        return axios.post(this.uploadUrl, formData).then(response => {
          return response.data
        }).catch(error => {
          throw error
        })
      },
      onSuccess(response, file, fileList) {
        ElMessage.success('上传成功')
        this.fileList = fileList
      },
      onError(error, file, fileList) {
        ElMessage.error('上传失败')
      }
    }
  }
  </script>
  ```

  在上面的代码中，`el-upload`组件使用了`http-request`属性，这个属性可以覆盖默认的上传行为。我们在`uploadFile`方法中使用 axios 发送一个 POST 请求来上传文件。在成功和失败的回调函数中，使用 ElementUI 的 Message 组件显示上传结果，并更新 fileList 属性，以便显示上传成功的文件。

  需要注意的是，我们使用`FormData`对象来创建一个包含文件的表单，以便将文件上传到服务器。此外，需要在服务器端进行文件上传处理，以便将上传的文件保存到服务器上的某个位置。

### 1.4 单个 HTML 页面使用 vue

在单个 HTML 页面中使用 Vue.js、Element UI 和 Axios，你需要按照以下步骤进行设置。在这里，我将提供一个简单的例子，涵盖了 Vue 实例、Element UI 组件以及 Axios 的基本用法。

首先，确保你已经引入 Vue.js、Element UI 和 Axios 的相关文件。你可以通过以下方式引入它们：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue + Element UI + Axios</title>

    <!-- 引入Vue.js -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>

    <!-- 引入Element UI 样式 -->
    <link
      rel="stylesheet"
      href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"
    />

    <!-- 引入Element UI 组件库 -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>

    <!-- 引入Axios -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>
  <body>
    <!-- 添加一个具有 id 属性的元素，它将用作 Vue 实例的挂载点 -->
    <div id="app">
      <div>
        <el-alert
          title="Element UI 示例"
          type="success"
          :closable="false"
          show-icon
        >
        </el-alert>

        <p>{{ message }}</p>

        <el-card>
          <div slot="header" class="clearfix">
            <span>使用 Axios 获取数据</span>
          </div>
          <div>
            <p v-if="responseData">{{ responseData.title }}</p>
            <p v-else>Loading...</p>
          </div>
        </el-card>
      </div>
    </div>

    <script>
      // 创建 Vue 实例
      new Vue({
        el: "#app",
        data() {
          return {
            // 在这里定义你的数据
            message: "Hello Vue!",
            responseData: null,
          };
        },
        mounted() {
          // 在挂载后执行的代码块中使用 Axios 获取数据
          axios
            .get("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => {
              // 请求成功后更新数据
              this.responseData = response.data;
            })
            .catch((error) => {
              console.error("Axios请求出错：", error);
            });
        },
      });
    </script>
  </body>
</html>
```

请注意，这只是一个简单的例子，你可能需要根据你的具体需求进行修改。此外，你还可以将 Vue、Element UI 和 Axios 下载到本地并引入，以避免依赖于 CDN。

### 1.5 点击父组件的按钮 子组件的列表会被刷新

要在 Vue 项目中实现点击父组件按钮时刷新子组件列表，你可以通过以下步骤来实现：

1. 在父组件中创建一个方法，用于处理点击按钮事件，并在点击时触发一个事件或者改变一个状态，通知子组件需要刷新列表。
2. 在子组件中监听父组件发出的事件或者监视父组件的状态变化，一旦收到通知，就触发列表刷新的逻辑。

下面是一个简单的示例代码：

父组件（ParentComponent.vue）：

```vue
<template>
  <div>
    <button @click="refreshList">刷新列表</button>
    <child-component :refresh="refresh"></child-component>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      refresh: false, // 用于通知子组件是否需要刷新
    };
  },
  methods: {
    refreshList() {
      this.refresh = !this.refresh; // 反转状态来触发子组件刷新
    },
  },
};
</script>
```

子组件（ChildComponent.vue）：

```vue
<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    refresh: Boolean, // 接收父组件传递的刷新信号
  },
  data() {
    return {
      items: [], // 子组件的列表数据
    };
  },
  watch: {
    refresh(newVal) {
      this.fetchData(); // 如果父组件发出刷新信号，则刷新列表
    },
  },
  created() {
    this.fetchData(); // 组件创建时立即加载数据
  },
  methods: {
    fetchData() {
      // 这里可以发送请求获取数据，这里只是一个示例
      this.items = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
      ];
    },
  },
};
</script>
```

这样，当你点击父组件中的按钮时，子组件的列表就会被刷新。

## 二、Git 问题

### 2.1 常用的复杂命令

- 更换远程仓库地址

  ```
  git remote set-url origin URL
  ```

- 设置(新)远程仓库地址

  ```
  git remote add origin URL
  ```

- git 仓库版本回退

  ```
  git reset --hard 版本号
  ```

- git 仓库强制推送

  ```
  git push -f
  ```

- 拉取远程仓库所有更改

  ```
  git fetch --all
  ```

- 强制覆盖本地分支

  ```
  git reset --hard origin/分支名
  ```

- 撤销合并

  ```
  git merge --abort
  ```

### 2.2 有未保存的修改 想要切换到其他分支

> 当本地某个分支有未保存的修改 同时不想保存修改 想要直接切换到其他分支进行相关操作

- 使用 git stash 命令将当前分支的修改保存到一个临时区域：

  ```git
  git stash save "your stash message"
  ```

- 切换到其他分支，完成后可以切换回原来的分支

  ```git
  git checkout other_branch
  git checkout original_branch
  ```

- 使用 git stash pop 命令将之前保存的修改重新应用原来的分支上：

  ```git
  git stash pop
  ```

### 2.3 识别文件名大小写

git 默认是不区分文件名大小写的。这意味着如果你修改了文件名的大小写，git 会认为文件没有变化，从而导致本地和远程仓库不一致，甚至出现运行错误。

- 配置不忽略大小写

```bash
git config core.ignorecase false
```

## 三、HTTP 问题

### 3.1 Content-Type 的使用

在 HTTP 请求中，`Content-Type` 头部字段用于指示请求体中的数据类型。以下是 HTTP 请求中最常用的 `Content-Type` 类型及其含义：

1. **`application/json`**

   - **描述**：JSON（JavaScript Object Notation）格式的数据。
   - **用途**：适用于大多数 API 调用和数据交换场景。

2. **`application/x-www-form-urlencoded`**

   - **描述**：URL 编码过的表单数据。
   - **用途**：通常用于提交表单时，将键值对转换为查询字符串形式。

3. **`multipart/form-data`**

   - **描述**：多部分数据，用于文件上传和包含多个部分的数据传输。
   - **用途**：当表单包含文件字段时使用。

4. **`text/plain`**

   - **描述**：纯文本数据。
   - **用途**：用于发送简单的文本数据。

5. **`application/xml`**

   - **描述**：XML 格式的数据。
   - **用途**：虽然不如 JSON 流行，但在某些系统中仍然被使用。

6. **`application/octet-stream`**
   - **描述**：二进制数据。
   - **用途**：当数据类型未知或不确定时使用。

这些是最常见的 `Content-Type` 值，在前端开发中处理 HTTP 请求时经常用到。了解这些类型对于正确构造请求和确保数据被正确解析非常重要。

- axios 使用示例

```js
// 引入axios模块
import axios from "axios";

// 定义要发送的数据
const data = {
  name: "John Doe",
  age: 30,
};

// 发送POST请求
axios
  .post("https://api.example.com/users", data, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    console.log("Success:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```
