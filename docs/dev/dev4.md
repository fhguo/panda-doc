---
outline: deep
---

## 一、项目问题二

### 1.1 el-table表格编辑浅拷贝问题

在 Vue 中，当我们将一个对象赋值给另一个对象时，默认是浅拷贝，而不是深拷贝。浅拷贝只会复制对象的引用，而不会复制对象的内容。

在 el-table 表格编辑弹窗中，我们将当前行的数据绑定到表单上时，默认是浅拷贝。因此，在表单中修改数据时，会影响原始数据，从而导致表格数据也随之变化。

为了解决这个问题，我们需要使用深拷贝，而不是浅拷贝。深拷贝会复制对象的内容，而不是只是引用。

```js{27,29}
// 编辑表格数据方法
edit (row) {
  this.dialogVisible = true
  // 方法一:
  this.form = JSON.parse(JSON.stringify(row))
  // 方法二:只适合扁平数据
  this.form = {...row}
}
```

### 1.2 可拖拽调节的分割布局

实现一个可调整大小的布局，其中包含两个面板：左侧面板和右侧面板。用户可以通过拖拽分隔条来调整左侧面板的宽度，右侧面板会相应地填充空间。

```vue
<template>
    <div class="resizable-layout">
      <!-- 左侧面板 -->
      <div
        class="left-pane"
        :style="{ width: leftWidth + 'px' }"
        ref="leftPane"
      >
        <!-- Left Pane Content -->
        Left Pane
      </div>
      <!-- 分割条 -->
      <div
        class="separator"
        @mousedown="startResize"
      ></div>
      <!-- 右侧面板 -->
      <div class="right-pane">
        <!-- Right Pane Content -->
        Right Pane
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDragging: false, // 标记是否正在拖拽
        startX: 0, // 记录拖拽开始时的鼠标水平坐标
        startWidth: 0, // 记录拖拽开始时的左侧面板宽度
        leftWidth: 200, // 左侧面板的初始宽度
      };
    },
    methods: {
      // 开始拖拽
      startResize(event) {
        this.isDragging = true; // 设置拖拽状态为true
        this.startX = event.clientX; // 记录拖拽开始时的鼠标水平坐标
        this.startWidth = this.$refs.leftPane.clientWidth; // 记录拖拽开始时的左侧面板宽度
        // 监听文档上的mousemove事件和mouseup事件
        document.addEventListener('mousemove', this.resizing);
        document.addEventListener('mouseup', this.stopResize);
      },
      // 拖拽过程中调整左侧面板宽度
      resizing(event) {
        if (this.isDragging) { // 如果正在拖拽
          const deltaX = event.clientX - this.startX; // 计算鼠标移动的水平距离
          let newWidth = this.startWidth + deltaX; // 根据鼠标移动距离计算新的宽度
          // 确保新宽度在100px和600px之间
          newWidth = Math.min(Math.max(newWidth, 100), 600);
          this.leftWidth = newWidth; // 更新左侧面板的宽度
        }
      },
      // 停止拖拽
      stopResize() {
        this.isDragging = false; // 设置拖拽状态为false
        // 移除文档上的mousemove事件和mouseup事件监听器
        document.removeEventListener('mousemove', this.resizing);
        document.removeEventListener('mouseup', this.stopResize);
      },
    },
  };
  </script>
  
  <style scoped>
  .resizable-layout {
    display: flex;
    width: 100%;
    height: 300px;
  }
  
  .left-pane {
    background-color: lightblue;
    height: 100%;
    overflow: auto;
  }
  
  .right-pane {
    flex: 1;
    background-color: lightgreen;
    height: 100%;
    overflow: auto;
  }
  
  .separator {
    width: 6px;
    cursor: col-resize;
    background-color: #eee;
  }
  </style>
  
```

### 1.3 el-tree点击节点获取所有的父节点

> 基础布局，添加 @node-click=“handleNodeClick”

```js
<el-tree :data="data" @node-click="handleNodeClick"></el-tree>
```

```js
handleNodeClick(node) {
  // 最终的数据
  this.breadList = []
  //  获取点击当节点的dom的信息
  let selectNode = this.$refs.tree.getNode(node)
  // 调用递归函数
  this.platform(selectNode)
},
// 递归函数
platform(node) {
  if (!node.parent) {
    return
  }
  this.breadList.unshift(node.data)
  //调用递归
  this.platform(node.parent)
},

```
