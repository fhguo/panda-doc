---
outline: deep
---

## 一、项目问题一

### 1.1 展开收起效果的实现

```html
// 封装成一个组件 在:content中接收内容
<template>
  <div class="text-box">
    <div :class="['txt', { 'over-hidden': !unfold }]" ref="textBox">
      <span ref="spanBox">{{content}}</span>
    </div>
    <div class="btn" v-if="ifOver" @click="handleBtn">{{unfold ? $t('serve.retract') : $t('serve.spread')}}</div>
  </div>
</template>
<script>
export default {
  name: "text-box",
  data() {
    return {
      ifOver: false, // 文本是否超出三行，默认否
      unfold: false // 文本是否是展开状态 默认为收起
    };
  },
  props: {
    content: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleBtn() {
      this.unfold = !this.unfold
    }
  },
  mounted() {
    // 判断是否显示展开收起按钮
    this.ifOver = this.$refs.spanBox.offsetHeight > this.$refs.textBox.offsetHeight
  }
};
</script>
<style lang='scss' scoped>
.txt {
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
  // transition: all 2s;
}
.over-hidden {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.btn {
  font-size: 16px;
  color: #0459c3;
  cursor: pointer;
}
</style>
```

### 1.2 文件下载问题

你可以使用以下方法来下载PDF文件：

- 使用a标签的`download`属性：在谷歌(Chrome)浏览器中，使用a标签属性download下载pdf链接文件，如果是相同域时，可以直接下载；但是如果域不同，则不是下载，而是直接打开页面预览文件。

  ```js
  var link = document.createElement("a");
  link.href = "下载文件URL";
  link.download = "自定义下载文件名";
  link.click(); // 模拟点击操作
  ```

- 使用`window.open()`：仅支持普通文件下载，不支持文件流下载。Word、Excel会直接下载，图片、PDF则会跳转到预览页（需用户手动下载）。

### 1.3 文件上传问题

- 使用`el-upload`组件上传单个文件

  ```js
  <el-upload :action="fileUploads.actionUrl" :accept="fileUploads.acceptType"
      :on-preview="handlePreview" :on-remove="handleRemove" :on-success="handleSuccess"
      :before-upload="handleTypeBefore"
      :headers="fileUploads.authToken" :limit="1"
      :file-list="fileList">
  <el-button class="upload-btn"><i class="el-icon-upload"></i>
    上传</el-button>
  </el-upload>
  
  <script>
      // 上传成功
      handleSuccess(file, fileList) {
        this.isDisabled = false;
        this.fileList.push({
          name: file.data.fileName,
          url: file.data.previewUrl,
        });
      },
      // 移除文件
      handleRemove(file, fileList) {
        this.isDisabled = true;
        this.fileList = [];
        console.log(file, fileList);
      },
      // 上传之前文件类型和大小判断
      handleTypeBefore(file) {
        this.updatabtn = false;
        const isLt10M = file.size / 1024 / 1024 < 100;
        if (!isLt10M) {
          this.$message.error(this.$t('serve.fileLimit'));
          return isLt10M;
        }
  
        let typeArrays = ['pdf', 'jpg', 'jpeg', 'png', 'doc', 'docx'];
        let testmsg =
          typeArrays.indexOf(
            file.name.substring(file.name.lastIndexOf('.') + 1)
          ) > -1;
        if (!testmsg) {
          this.$message({
            message: this.$t('serve.fileLimit'),
            type: 'error',
          });
          return false;
        }
      },
  </script>
  ```

- 使用`el-upload`组件自定义上传单个文件

在使用 `el-upload` 组件时，`http-request` 属性用于指定文件上传的请求方法。您可以使用这个属性来自定义文件上传的行为。以下是一个简单的示例，演示如何使用 `http-request` 自定义上传文件：

```html
<template>
  <el-upload
    class="upload-demo"
    action="/your-upload-api-endpoint"
    :http-request="customHttpRequest"
    :before-upload="beforeUpload"
    multiple
    :limit="3"
    :on-exceed="handleExceed"
    :file-list="fileList"
    list-type="text"
    :on-remove="handleRemove"
    :auto-upload="false"
  >
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
    };
  },
  methods: {
    customHttpRequest(file) {
      // 自定义上传方法
      // 在这里您可以使用任何您喜欢的方式来处理文件上传，例如使用 axios 进行请求
      // 返回一个 Promise 对象以处理上传成功或失败的情况
      const formData = new FormData();
      formData.append('file', file);

      return this.$axios.post('/your-custom-upload-api-endpoint', formData)
        .then((response) => {
          // 处理上传成功的情况
          console.log('File uploaded successfully:', response.data);
        })
        .catch((error) => {
          // 处理上传失败的情况
          console.error('File upload failed:', error);
        });
    },
    beforeUpload(file) {
      // 在上传之前的操作，例如限制文件类型和大小
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJPG) {
        this.$message.error('只能上传jpg/png文件');
      }
      const isLt500K = file.size / 1024 < 500;
      if (!isLt500K) {
        this.$message.error('文件大小不能超过500kb');
      }
      return isJPG && isLt500K;
    },
    handleExceed(files, fileList) {
      // 处理超出文件数量限制的情况
      this.$message.warning(`当前限制选择 3 个文件，您已选择 ${files.length + fileList.length} 个文件`);
    },
    handleRemove(file, fileList) {
      // 处理文件移除的情况
      console.log('File removed:', file);
    },
  },
};
</script>

<style scoped>
.upload-demo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 180px;
}
</style>
```

在这个示例中，`http-request` 属性被设置为指向 `customHttpRequest` 方法。在 `customHttpRequest` 方法中，使用 `axios` 发送了一个 POST 请求来处理文件上传。您可以根据自己的需求自定义上传的逻辑。


### 1.4 如何对数据进行判空

> 在JS中，你可以使用不同的方法对后端返回的数组、对象或字符串进行判空。

1. 对象判空：
```javascript
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

// 使用示例：
const backendObject = { key1: 'value1', key2: 'value2' };
if (isEmptyObject(backendObject)) {
  console.log('后端返回的对象为空');
}
```

2. 数组判空：
```javascript
function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0;
}

// 使用示例：
const backendArray = [1, 2, 3];
if (isEmptyArray(backendArray)) {
  console.log('后端返回的数组为空');
}
```

3. 字符串判空：
```javascript
function isEmptyString(str) {
  return typeof str === 'string' && str.trim() === '';
}

// 使用示例：
const backendString = 'Some text';
if (isEmptyString(backendString)) {
  console.log('后端返回的字符串为空');
}
```

4. 通用判空方法：
有时候你可能不确定后端返回的具体类型，可以使用一个通用的判空方法：
```javascript
function isEmpty(value) {
  if (value === null || value === undefined) {
    return true;
  }
  if (typeof value === 'string') {
    return value.trim() === '';
  }
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  return false;
}

// 使用示例：
const backendData = [1, 2, 3];
if (isEmpty(backendData)) {
  console.log('后端返回的数据为空');
}
```

以上方法中，你可以根据你的需要选择适合的方法进行判空操作。请注意，对于一些特殊情况，你可能需要根据具体业务需求进行自定义判空逻辑。

### 1.6 el-form滚动到校验失败的位置

在 Element UI 的 `el-form` 表单中，可以通过一些属性和方法来实现在校验失败时将页面滚动到校验失败的表单项位置。下面是实现这一功能的步骤：

1. 在 `el-form` 中设置 `ref` 属性，以便在 JavaScript 代码中引用该表单组件。

```vue
<template>
  <el-form
    ref="myForm"
    :model="formData"
    :rules="formRules"
    @submit="submitForm"
  >
    <!-- 表单项内容 -->
  </el-form>
</template>
```

2. 在 `data` 中定义表单数据和校验规则。

```vue
<script>
export default {
  data() {
    return {
      formData: {
        // 表单数据
      },
      formRules: {
        // 表单校验规则
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.myForm.validate((valid) => {
        if (valid) {
          // 校验通过时的操作
        } else {
          // 校验失败时的操作
        }
      });
    },
  },
};
</script>
```

3. 在校验失败的情况下，利用 `this.$refs.myForm.$el` 获取表单的 DOM 元素，并使用 `scrollIntoView` 方法将其滚动到可视区域。

在 Element UI 的 `el-form` 组件中，校验失败的字段会被添加一个 `is-error` 的 class。我们可以利用这个 class 来定位校验失败的表单项。

```vue{14-19}
<script>
export default {
  methods: {
    submitForm() {
      this.$refs.myForm.validate((valid) => {
        if (valid) {
          // 校验通过时的操作
        } else {
          this.scrollToErrorField();
        }
      });
    },
    scrollToErrorField() {
      const firstErrorField = this.$refs.myForm.$el.querySelector('.is-error');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({
          behavior: 'smooth', // 可以选择平滑滚动或auto（瞬间滚动）
          block: 'start',     // 滚动到目标元素顶部 还有center end
        });
      }
    },
  },
};
</script>
```

通过这些步骤，你可以实现在 Element UI 的 `el-form` 表单中，在校验失败时将页面滚动到校验失败的表单项位置。请根据你的实际需求进行适当的调整。

### 1.7 实时校验清单

使用vue+elementUI开发一个实时校验表单 表单右侧悬浮一个表单校验清单 实时展示所有的校验错误清单 当某个表单项失焦报错后 校验清单需要实时更新整个表单校验错误信息 点击提交时也是需要更新错误信息

- 效果图
![效果图](/img/checklist.png)

```vue
<template>
  <div>
    <!-- 表单 -->
    <el-form ref="form" :model="formData" :rules="formRules">
      <!-- 表单项 -->
      <el-form-item label="字段1" prop="field1">
        <el-input v-model="formData.field1" @blur="validateField('field1')"></el-input>
      </el-form-item>
      <!-- 添加更多表单项 -->
    </el-form>

    <!-- 校验错误信息悬浮框 -->
    <div v-if="showErrorList" class="error-list">
      <ul>
        <li v-for="(error, index) in errorList" :key="index">{{ error }}</li>
      </ul>
    </div>

    <!-- 提交按钮 -->
    <el-button type="primary" @click="handleSubmit">提交</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        field1: '',
        // 添加更多表单项
      },
      formRules: {
        field1: [{ required: true, message: '字段1不能为空', trigger: 'blur' }],
        // 添加更多校验规则
      },
      errorList: [],
      showErrorList: false,
    };
  },
  methods: {
    validateField(fieldName) {
      // 校验单个字段
      this.$refs.form.validateField(fieldName);
      this.updateErrorList();
    },
    // 更新错误列表
    updateErrorList() {
      // reduce接受两个参数，它们分别代表累加器和当前元素
      this.errorList = this.$refs.form.fields.reduce((errors, field) => {
        if (field.validateState === 'error') {
          errors.push(field.validateMessage);
        }
        return errors;
      }, []);
      this.showErrorList = this.errorList.length > 0;
    },
    handleSubmit() {
      // 提交按钮点击事件
      this.$refs.form.validate((valid, errors) => {
        if (!valid) {
          // 校验失败，显示错误信息
          this.updateErrorList();
        } else {
          // 校验通过，执行提交逻辑
          // ...
        }
      });
    },
  },
};
</script>

<style>
/* 样式化错误列表的外观，你可以根据需要自定义样式 */
.error-list {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #f56c6c;
  color: #fff;
  padding: 10px;
  z-index: 999;
}
</style>
```
这个Vue组件包含一个`el-form`表单，以及一个悬浮的错误清单区域。当表单项失焦时，通过`@blur`事件触发表单校验，并将错误信息存储在`errorList`中，然后通过`v-if`控制是否显示错误清单。

在上述代码中，我们添加了一个名为`handleSubmit`的方法，当提交按钮被点击时，它会触发整体表单的校验。如果校验失败，会显示错误信息，如果校验通过，则可以执行提交逻辑。这样可以确保在点击提交按钮时实时校验并显示所有验证错误信息。



### 1.8 nodejs版本问题

- **使用不同版本node的原因**

  - vue3+ts、nuxt3版本，node推荐使用node18。
  - vue2版本，node 建议使用node16，如果使用18版本，可能会启动不了项目。

  所以我们本地最好能控制node版本，在需要的时候使用合适的版本。

- **nvm方法安装和切换不同版本nodejs**

  - 下载地址：<a href="https://nvm.uihtm.com/nvm1.1.7-setup.zip" title="nvm 1.1.7-setup.zip">nvm 1.1.7-setup.zip</a>
  - 常用命令

  ```bash
  nvm install <version> [arch] ：安装node，version是特定版本也可以是最新稳定版本latest
  nvm list [available] ：显示已安装的列表
  nvm uninstall <version> ：卸载指定版本node
  nvm use [version] [arch] ：使用指定版本node。
  ```

### 1.9 导出excel表

在Vue.js中，你可以通过Axios库发送HTTP请求与后端进行通信。要通过后端接口导出Excel文件，你可以按照以下步骤进行操作：

1. **后端准备：** 后端需要提供一个接口来生成Excel文件。这可以是一个RESTful API端点，该端点接收请求并返回生成的Excel文件。你可以使用一些后端框架（如Node.js的Express、Python的Django、Flask等）来实现这个功能。

   一个简单的Express.js例子：

   ```javascript
   const express = require('express');
   const exceljs = require('exceljs');
   const app = express();

   app.get('/export-excel', (req, res) => {
     // 生成Excel文件的逻辑
     const workbook = new exceljs.Workbook();
     const worksheet = workbook.addWorksheet('Sheet 1');
     worksheet.addRow(['Name', 'Age']);
     worksheet.addRow(['John Doe', 25]);
     worksheet.addRow(['Jane Doe', 30]);

     res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
     res.setHeader('Content-Disposition', 'attachment; filename=exported.xlsx');

     workbook.xlsx.write(res)
       .then(() => {
         res.end();
       })
       .catch(err => {
         console.log(err);
         res.status(500).json({ error: 'Internal Server Error' });
       });
   });

   app.listen(3000, () => {
     console.log('Server is running on port 3000');
   });
   ```

2. **前端实现：** 在Vue组件中使用Axios发送请求来触发Excel文件的生成和下载。

   ```vue
   <template>
     <div>
       <button @click="exportToExcel">Export to Excel</button>
     </div>
   </template>

   <script>
   import axios from 'axios';

   export default {
     methods: {
       exportToExcel() {
         axios({
           method: 'get',
           url: 'http://your-backend-api/export-excel', // 替换为你的后端API地址
           responseType: 'blob', // 告诉Axios响应的数据类型是二进制流
         })
           .then(response => {
             const url = window.URL.createObjectURL(new Blob([response.data]));
             const link = document.createElement('a');
             link.href = url;
             link.setAttribute('download', 'exported.xlsx');
             document.body.appendChild(link);
             link.click();
           })
           .catch(error => {
             console.error('Error exporting to Excel:', error);
           });
       },
     },
   };
   </script>
   ```

   在这个例子中，当用户点击按钮时，`exportToExcel`方法会通过Axios发送GET请求到后端的`/export-excel`端点。后端返回的二进制数据将被转换成Blob对象，并通过动态创建的`<a>`标签进行下载。

   确保替换示例代码中的后端API地址为你的实际后端地址，并根据实际情况修改生成Excel文件的逻辑。

   此外，根据你的后端实现，可能需要传递额外的参数，例如筛选条件或日期范围。


### 1.10 el-table表格合并

在Element UI中的el-table组件中，要实现合并具有相同数据的列并保证数据不错位，你可以使用`span-method`属性。`span-method`属性允许你指定一个方法来确定每个单元格是否应该合并以及合并的行数和列数。以下是一个简单的例子：

首先，你需要在`el-table`组件中添加`span-method`属性，然后定义一个方法来确定合并的规则。下面是一个例子：

```html
<template>
  <el-table
    :data="tableData"
    :span-method="mergeCells"
    style="width: 100%">
    <!-- 列定义 -->
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { name: 'John', age: 28, address: '123 Main St' },
        { name: 'Jane', age: 35, address: '456 Oak St' },
        { name: 'John', age: 28, address: '123 Main St' },
        { name: 'Jane', age: 35, address: '456 Oak St' }
      ]
    };
  },
  methods: {
    mergeCells({ row, column, rowIndex, columnIndex }) {
      // 判断是否是name列
      if (column.property === 'name') {
        // 判断是否是第一行，如果是，则进行合并
        if (rowIndex === 0 || row.name !== this.tableData[rowIndex - 1].name) {
          // 获取当前name在数据中的重复个数
          const rowspan = this.tableData.filter(item => item.name === row.name).length;
          return {
            rowspan,
            colspan: 1
          };
        } else {
          // 不是第一行，不进行合并
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    }
  }
};
</script>
```

在上面的例子中，我们通过`mergeCells`方法来定义合并规则。在这个例子中，我们判断是否是`name`列，如果是，就检查当前行是否是该列的第一行，如果是，就获取当前`name`在数据中的重复个数，并返回`rowspan`和`colspan`来进行合并。否则，返回`rowspan: 0, colspan: 0`来表示不进行合并。

你可以根据实际情况调整合并规则。这个方法允许你自定义合并的条件，确保数据不错位。


## 二、资源链接集合

- W3C教程 [链接](https://www.w3schools.com/html/default.asp)

- JavaScript教程 [链接](https://wangdoc.com/javascript/)
- Es6教程 [链接](https://wangdoc.com/es6/)
- Vue.js教程 [链接](https://v2.cn.vuejs.org/v2/guide/)
- 微信小程序官方文档 [链接](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- ElementUI文档 [链接](https://element.eleme.io/#/zh-CN/component/installation)
- Vant文档 [链接](https://vant-contrib.gitee.io/vant/v2/#/zh-CN/)

