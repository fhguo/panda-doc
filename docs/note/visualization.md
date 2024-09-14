---
outline: [1, 3]
---
# 数据可视化

## 一、绘图基础
### 1、SVG

**SVG**（Scalable Vector Graphics，可缩放矢量图形）是一种基于XML的图形格式，用于描述二维矢量图形。它的主要特点是可以无损缩放，适用于网页中的图形展示。

#### SVG的特点：
1. **矢量图形**：  
   SVG 是基于矢量的，这意味着无论图像放大或缩小多少，都不会失去清晰度。这与位图图像（如JPG或PNG）不同，后者放大时会变得模糊或像素化。

2. **基于XML**：  
   SVG 文件是用 XML（可扩展标记语言）来定义的，意味着可以直接用文本编辑器查看和编辑。你可以通过标签的方式来描述形状、路径、文本等图形元素。

3. **可编程**：  
   因为 SVG 是DOM的一部分，可以通过 JavaScript 操作它，从而使图形具备交互功能。你可以动态改变图形的样式、大小、位置等属性。

4. **可与CSS结合**：  
   SVG 元素可以像 HTML 元素一样，通过 CSS 设置样式，比如颜色、线条宽度、透明度等。这使得 SVG 非常适合用于网页设计。

5. **文件小、可压缩**：  
   与位图图像相比，SVG 文件的体积通常较小，特别是当图形复杂度较高时，矢量图形的优势更加明显。同时，SVG 可以使用 gzip 等压缩技术进一步减小文件大小。

#### SVG的基本应用场景：
- **图标**：因为 SVG 图标可以随时缩放且不会失真，很多网站使用 SVG 图标代替 PNG 或 JPG 图标。
- **图形和图表**：SVG 适合用于绘制各种图形，比如饼图、柱状图等。
- **动画**：SVG 支持 CSS 和 JavaScript 动画，适用于制作简单动画效果。

#### 示例：
以下是一个简单的 SVG 代码，它绘制了一个红色的圆形：
```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
```
这个代码会在页面上显示一个红色的圆，半径为40，圆心坐标是 (50, 50)。

SVG 的灵活性和高扩展性使它在网页开发，尤其是需要可交互的矢量图形时，成为非常强大的工具。

### 2、Canvas

Canvas 是 HTML5 引入的一种用于绘制图形的元素。与 SVG 不同，Canvas 采用的是基于像素的绘图方式，适合绘制复杂的图形和实时更新的场景（如游戏、动画等）。Canvas 提供了一个 2D 绘图环境，开发者可以通过 JavaScript 在其上绘制各种形状、文本、图像和动画。

#### Canvas 的主要特点：
1. **基于像素**：Canvas 是通过像素来绘制图像的，这意味着放大或缩小后图形可能会失真，尤其在分辨率变化时。
2. **动态绘制**：Canvas 的图像是一次性绘制的，它并没有像 SVG 那样的 DOM 节点结构，一旦绘制完成，就不能直接对其进行修改，除非重新绘制。
3. **高性能**：由于是基于像素操作，Canvas 更适合处理需要频繁更新的复杂图形或动画，比如网页游戏和数据可视化。
4. **JavaScript 集成**：Canvas 依赖 JavaScript 来控制图形的绘制过程，能够绘制几乎任何类型的 2D 图形。

#### Canvas 的常见使用场景：
- **游戏开发**：Canvas 非常适合绘制游戏场景和处理实时动画。
- **数据可视化**：可以用来绘制实时更新的图表、仪表盘等。
- **图片处理**：能够对图片进行动态处理，例如滤镜、裁剪、旋转等操作。
- **动画**：通过 JavaScript 实现各种复杂的动画效果，如逐帧动画。

#### Canvas 示例：
```html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>

<script>
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  // 绘制一个矩形
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 150, 75);
</script>
```
这个示例在一个 200x100 的 `canvas` 画布上绘制了一个红色的矩形。

#### Canvas 和 SVG 的区别：
- **绘图方式**：Canvas 是基于像素的，而 SVG 是基于矢量图形的。
- **性能**：Canvas 更适合动态且复杂的场景，如动画和游戏，而 SVG 更适合静态的或者交互较少的图形，如图标、简单的图表。
- **缩放效果**：SVG 可以在放大时保持清晰度，而 Canvas 图像在放大时会出现像素化。

如果你需要处理实时更新的复杂场景（如游戏或动画），Canvas 会是一个很好的选择。



## 二、Echarts

### 1、ECharts概念

ECharts 是一个基于 JavaScript 的开源数据可视化库，由百度开源。它用于构建交互性强、可高度自定义的图表和数据可视化效果，支持多种图表类型，如折线图、柱状图、饼图、散点图、地图等。ECharts 被广泛用于展示大规模数据，尤其是在仪表盘、数据分析系统和报告中。

#### ECharts 的主要特点：
1. **丰富的图表类型**：ECharts 支持多种常见的图表类型（如折线图、柱状图、饼图、散点图等），以及一些高级的图表类型（如雷达图、树图、关系图等）。
2. **高性能**：ECharts 使用 Canvas 绘制图表，能够处理海量数据并保持流畅的交互体验，非常适合大规模数据的实时更新。
3. **高度可定制化**：开发者可以通过修改配置项来自定义图表的样式、动画效果、数据标签等，还支持主题定制。
4. **响应式设计**：ECharts 支持自适应屏幕大小，适合各种设备，包括桌面和移动设备。
5. **数据交互性强**：ECharts 支持图表之间的联动，以及鼠标悬停、点击、缩放等交互功能，适用于交互式数据展示。
6. **多平台支持**：ECharts 可以无缝集成到 Vue、React 等主流框架中，也可以用于 Web、微信小程序等平台。

#### 常见的使用场景：
- **仪表盘和报表系统**：ECharts 被广泛应用于商业报表、数据分析仪表盘等场景，适合大规模数据可视化。
- **数据分析工具**：使用 ECharts 可以构建交互式的图表，方便用户探索和分析数据。
- **地图展示**：ECharts 支持地理图，可以用来可视化地理数据或展示地理位置相关的统计数据。

#### ECharts 示例：
下面是一个简单的 ECharts 折线图示例：
```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.0.0/dist/echarts.min.js"></script>
</head>
<body>
    <div id="main" style="width: 600px;height:400px;"></div>
    <script>
        // 初始化 ECharts 实例
        var myChart = echarts.init(document.getElementById('main'));

        // 配置图表选项
        var option = {
            title: {
                text: '销售数据'
            },
            tooltip: {},
            xAxis: {
                data: ["1月", "2月", "3月", "4月", "5月", "6月"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用指定的配置项和数据生成图表
        myChart.setOption(option);
    </script>
</body>
</html>
```
![echarts1](/img/vis1.png)

上面的代码展示了一个简单的折线图，显示了不同月份的销售数据。

#### ECharts 的优点：
1. **简单易用**：通过配置化的方式生成图表，不需要复杂的编码。
2. **可扩展性强**：支持自定义组件、插件和图表类型。
3. **强大的社区支持**：ECharts 有活跃的开源社区和丰富的文档资源。

#### ECharts 与其他图表库的对比：
- **与 D3.js 相比**：D3.js 更灵活，可以处理任意类型的可视化，但 ECharts 使用更简单，适合快速构建常见的图表。
- **与 Chart.js 相比**：Chart.js 更适合小型项目，功能较少，而 ECharts 提供了更多图表类型和配置选项，适合复杂的数据可视化需求。

你可以将 ECharts 集成到你的 Vue 或 React 项目中，用它来实现动态、交互性强的数据可视化效果。

### 2、ECharts使用

在 Vue 项目中使用 ECharts 可以通过以下几个步骤进行配置和集成。下面是一个详细的步骤指南，帮助你在 Vue 项目中顺利使用 ECharts。

#### 步骤 1：创建 Vue 项目
如果你还没有 Vue 项目，可以使用 Vue CLI 创建一个新项目：
```bash
vue create my-echarts-app
```
选择合适的配置选项来创建项目。如果已经有项目，直接进入下一步。

#### 步骤 2：安装 ECharts
在项目目录下使用 npm 安装 ECharts：
```bash
npm install echarts --save
```

#### 步骤 3：在组件中引入并初始化 ECharts

**方式 1：直接引入 ECharts**

你可以在 Vue 组件中直接引入 ECharts，并手动初始化图表。以下是一个简单的实现。

```vue
<template>
  <div>
    <!-- 创建一个用于容纳图表的 DOM 元素 -->
    <div id="main" style="width: 600px; height: 400px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  mounted() {
    // 在 mounted 钩子函数中初始化 ECharts
    this.initChart();
  },
  methods: {
    initChart() {
      // 获取 DOM 容器
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);

      // 配置图表选项
      var option = {
        title: {
          text: 'ECharts 示例'
        },
        tooltip: {},
        xAxis: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };

      // 使用配置项和数据生成图表
      myChart.setOption(option);

      // 监听窗口大小变化，自适应图表尺寸
      window.addEventListener('resize', function () {
        myChart.resize();
      });
    }
  }
};
</script>

<style scoped>
/* 样式定义，可以根据需要调整 */
#main {
  width: 100%;
  height: 100%;
}
</style>
```

**方式 2：使用 `vue-echarts` 封装库**

如果你想更方便地集成 ECharts，建议使用 `vue-echarts`，这是一个基于 Vue 的 ECharts 封装库，支持响应式特性，并可以按需加载 ECharts 模块。

1. **安装 `vue-echarts` 和 ECharts**：
   ```bash
   npm install echarts vue-echarts
   ```

2. **按需加载 ECharts 模块**：
   为了优化性能，你可以按需加载 ECharts 模块。安装 `@echarts/core`、`@echarts/chart-bar` 等模块。

   ```bash
   npm install @echarts/core @echarts/chart-bar @echarts/component-tooltip @echarts/component-title
   ```

3. **全局注册 `vue-echarts` 组件**：

   在 `main.js` 中全局注册 `vue-echarts` 组件。

   ```js
   import { createApp } from 'vue';
   import App from './App.vue';
   import ECharts from 'vue-echarts';
   import { use } from '@echarts/core';
   import { CanvasRenderer } from '@echarts/renderers';
   import { BarChart } from '@echarts/chart-bar';
   import { TitleComponent, TooltipComponent } from '@echarts/components';

   // 按需引入 ECharts 模块
   use([CanvasRenderer, BarChart, TitleComponent, TooltipComponent]);

   const app = createApp(App);

   // 注册 ECharts 组件
   app.component('v-chart', ECharts);

   app.mount('#app');
   ```

4. **在组件中使用 `vue-echarts`**：

   ```vue
   <template>
     <!-- 使用 vue-echarts 组件来展示图表 -->
     <v-chart :option="chartOption" style="width: 600px; height: 400px;" />
   </template>

   <script>
   export default {
     data() {
       return {
         chartOption: {
           title: {
             text: 'ECharts 示例'
           },
           tooltip: {},
           xAxis: {
             type: 'category',
             data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
           },
           yAxis: {
             type: 'value'
           },
           series: [{
             name: '销量',
             type: 'bar',
             data: [120, 200, 150, 80, 70, 110, 130]
           }]
         }
       };
     }
   };
   </script>

   <style scoped>
   .v-chart {
     width: 100%;
     height: 100%;
   }
   </style>
   ```

#### 步骤 4：运行项目
完成上述步骤后，运行你的项目：
```bash
npm run serve
```
你应该能看到一个 ECharts 图表在页面中渲染。

#### 其他技巧：
1. **响应式布局**：无论是直接使用 ECharts 还是 `vue-echarts`，都需要监听窗口的大小变化，以确保图表能自适应屏幕尺寸。使用 `myChart.resize()` 或让容器有相对的宽高。
2. **按需加载**：按需加载可以减少不必要的模块引入，提升性能，特别是在项目中需要绘制多种类型的图表时。

这样，你就可以在 Vue 项目中轻松使用 ECharts 进行数据可视化！

### 3、ECharts配置

ECharts 是一个强大的数据可视化库，它提供了丰富的配置项来创建各种类型的图表。以下是一些常用的 ECharts 配置项，它们涵盖了图表的核心部分和常用功能。

#### 1. **`title`（标题）**
用于设置图表的主标题和副标题。
```js
title: {
  text: '主标题',
  subtext: '副标题',
  left: 'center',  // 标题的位置，比如 'left', 'right', 'center'
}
```

#### 2. **`tooltip`（提示框）**
用于配置鼠标悬停时显示的提示信息。
```js
tooltip: {
  trigger: 'axis', // 可以是 'item' 或 'axis'
  formatter: '{b0}: {c0}', // 自定义显示内容
}
```

#### 3. **`legend`（图例）**
用于展示不同数据系列的标识。
```js
legend: {
  data: ['系列1', '系列2'],  // 图例名称数组
  orient: 'horizontal',     // 图例方向：'horizontal' 或 'vertical'
  left: 'right',            // 图例位置
}
```

#### 4. **`xAxis`（X轴）**
配置 X 轴的类型、样式和数据。
```js
xAxis: {
  type: 'category',          // 类型：'category', 'value', 'time', 'log'
  data: ['一月', '二月', '三月'], // 类别数据
  axisLine: {                // 设置轴线样式
    lineStyle: { color: '#333' }
  }
}
```

#### 5. **`yAxis`（Y轴）**
配置 Y 轴的类型、样式和范围。
```js
yAxis: {
  type: 'value',             // 类型：'value', 'category', 'time', 'log'
  min: 0,                    // 最小值
  max: 100,                  // 最大值
  axisLabel: { formatter: '{value} %' }  // 自定义标签格式
}
```

#### 6. **`series`（系列）**
定义图表中不同数据系列的配置，每个系列对应一种图形（柱状图、折线图等）。
```js
series: [
  {
    name: '系列1',            // 系列名称
    type: 'bar',              // 类型：'line', 'bar', 'pie', 'scatter' 等
    data: [10, 20, 30],       // 数据
    itemStyle: {              // 样式配置
      color: '#ff7f50'
    }
  },
  {
    name: '系列2',
    type: 'line',
    data: [30, 50, 80],
    smooth: true,             // 平滑曲线
    lineStyle: { width: 3 }
  }
]
```

#### 7. **`grid`（网格）**
调整图表的内边距和大小，尤其在需要自定义图表布局时。
```js
grid: {
  left: '10%',                // 图表左侧留白
  right: '10%',
  bottom: '15%',
  containLabel: true          // 防止标签溢出
}
```

#### 8. **`dataZoom`（数据缩放）**
用于添加数据缩放功能，常用于折线图、柱状图。
```js
dataZoom: [
  {
    type: 'slider',           // 缩放类型：'inside' 或 'slider'
    start: 0,                 // 默认开始百分比
    end: 100                  // 默认结束百分比
  }
]
```

#### 9. **`visualMap`（视觉映射）**
用于对数据值进行视觉映射（如颜色、大小等）。
```js
visualMap: {
  min: 0,                     // 最小值
  max: 100,                   // 最大值
  text: ['高', '低'],          // 文字描述
  realtime: false,            // 是否实时更新
  calculable: true,           // 是否显示拖动条
  inRange: { color: ['#50a3ba', '#eac736', '#d94e5d'] }  // 映射的颜色范围
}
```

#### 10. **`toolbox`（工具栏）**
用于添加工具按钮，如保存图片、区域缩放等。
```js
toolbox: {
  feature: {
    saveAsImage: {},          // 保存为图片
    dataZoom: {               // 缩放
      yAxisIndex: 'none'
    },
    restore: {},              // 还原
    magicType: {              // 动态切换图表类型
      type: ['line', 'bar']
    }
  }
}
```

#### 11. **`animation`（动画）**
用于控制图表的动画效果。
```js
animation: true,               // 是否开启动画
animationDuration: 1000,       // 动画时长
animationEasing: 'cubicOut',   // 动画缓动效果
```

#### 12. **`backgroundColor`（背景颜色）**
设置图表区域的背景颜色。
```js
backgroundColor: '#ffffff'     // 例如设置为白色
```

#### 常用图表类型：
- **柱状图（`bar`）**
- **折线图（`line`）**
- **饼图（`pie`）**
- **散点图（`scatter`）**
- **雷达图（`radar`）**

这些配置项可以组合使用来构建各种复杂的数据可视化图表。根据具体需求，ECharts 还支持高级功能如地图、关系图、桑基图等。

## 三、大屏展示布局

### 1、大屏布局

构建适用于大屏展示的布局，通常用于控制台、数据可视化场景（如数字驾驶舱、大屏展示等）。大屏展示的布局需要适应不同屏幕尺寸，保证数据和图表的清晰呈现，同时布局合理、响应灵活。下面是构建大屏展示布局的关键点和具体实施步骤。

#### 关键点：
1. **全屏设计**：确保布局可以自适应各种大屏幕分辨率，从 1080p 到 4K，甚至更高的分辨率。
2. **栅格化布局**：通常使用栅格系统来划分屏幕，便于管理不同区域的布局。
3. **响应式设计**：根据屏幕尺寸自适应调整元素的大小和布局，保持视觉一致性。
4. **高对比度和清晰度**：在大屏幕上观看，建议使用高对比度的配色，确保文本和图表清晰可见。
5. **图表与数据可视化**：在大屏布局中，通常会用大量的图表进行展示，因此图表的设计需要简洁明了，内容突出。
6. **动态效果**：增加一些视觉效果，比如动画、数据更新效果，使页面更具活力。
7. **性能优化**：由于大屏展示通常需要处理大量实时数据，性能优化（如减少重绘、按需加载等）非常重要。

#### 实施步骤：

#### 1. 使用 CSS Flexbox 或 Grid 布局
使用 CSS 的 Flexbox 或 Grid 布局，可以轻松实现灵活、可扩展的布局，适合大屏展示的需求。

##### **Grid 布局示例**：
```html
<div class="container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content</div>
  <div class="footer">Footer</div>
</div>

<style>
  .container {
    display: grid;
    grid-template-rows: 100px auto 100px;
    grid-template-columns: 200px auto;
    grid-template-areas: 
      "header header"
      "sidebar main"
      "footer footer";
    height: 100vh;
  }

  .header {
    grid-area: header;
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px;
  }

  .sidebar {
    grid-area: sidebar;
    background-color: #444;
    color: white;
    padding: 20px;
  }

  .main {
    grid-area: main;
    background-color: #555;
    color: white;
    padding: 20px;
  }

  .footer {
    grid-area: footer;
    background-color: #666;
    color: white;
    text-align: center;
    padding: 20px;
  }
</style>
```
此布局将页面分为顶部的 Header、左侧的 Sidebar 和中间的 Main Content，并在底部有一个 Footer。你可以根据需要调整网格和内容区域。

#### 2. 使用响应式设计
为了适应不同的屏幕尺寸，可以利用媒体查询（media queries）和百分比单位来创建响应式布局。

##### **示例：媒体查询**：
```css
@media (min-width: 1920px) {
  .container {
    grid-template-columns: 300px auto;
  }
}

@media (max-width: 1080px) {
  .container {
    grid-template-columns: 150px auto;
  }
}
```
使用媒体查询可以根据屏幕宽度动态调整布局，使内容在不同分辨率下都能正常显示。

#### 3. 使用可伸缩的单位（vw、vh、rem、百分比）
大屏幕需要根据屏幕大小自适应调整内容的尺寸。避免使用固定像素，可以使用相对单位来保证布局的灵活性。

##### **常见单位**：
- `vw`：基于视口宽度的单位，`1vw` 等于视口宽度的 1%。
- `vh`：基于视口高度的单位，`1vh` 等于视口高度的 1%。
- `rem`：相对于根元素（`<html>`）字体大小的单位，保证字体大小和间距随比例调整。
- `百分比`：可以用于宽高、边距等属性，让元素相对于父容器自适应调整。

```css
.header {
  height: 10vh;  /* 高度为视口高度的 10% */
}

.main {
  width: 70vw;  /* 宽度为视口宽度的 70% */
}
```

#### 4. 图表布局优化（ECharts 与大屏布局）
在大屏展示中，ECharts 常用于图表展示。为了适配大屏，ECharts 图表的布局和自适应也需要考虑：

- **图表自适应**：ECharts 提供了 `resize()` 方法，在窗口大小变化时重新计算图表大小。
- **全屏图表**：可以让某些关键图表充满整个屏幕，吸引用户的注意力。
- **自定义主题**：大屏展示中，可能需要根据业务需求定制符合品牌或场景的 ECharts 主题。

##### **ECharts 示例（自适应大屏）**：
```vue
<template>
  <div id="chart" style="width: 100vw; height: 100vh;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  mounted() {
    this.initChart();
    window.addEventListener('resize', this.resizeChart);
  },
  methods: {
    initChart() {
      const chartDom = document.getElementById('chart');
      this.myChart = echarts.init(chartDom);
      const option = {
        title: {
          text: '大屏展示图表',
          textStyle: { color: '#fff' }
        },
        tooltip: {},
        series: [{
          name: '数据',
          type: 'bar',
          data: [10, 52, 200, 334, 390, 330, 220]
        }]
      };
      this.myChart.setOption(option);
    },
    resizeChart() {
      this.myChart.resize();  // 在窗口大小变化时重新调整图表尺寸
    }
  }
};
</script>

<style scoped>
#chart {
  width: 100%;  /* 图表宽度占满容器 */
  height: 100%; /* 图表高度占满容器 */
}
</style>
```

#### 5. 动效和动态数据展示
大屏展示通常会包含一些动画效果来吸引用户注意，比如数据变化时的过渡动画、元素进入时的平滑过渡等。这些动画可以通过 CSS 动画或 JavaScript 实现。

##### **CSS 动画示例**：
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.main-content {
  animation: fadeIn 2s ease-in-out;
}
```

#### 总结：
1. **使用 CSS Grid 或 Flexbox** 实现大屏布局，结合相对单位和媒体查询实现自适应。
2. **ECharts 图表集成**，使用按需加载和自适应功能，确保在大屏上良好的性能。
3. **响应式设计**，通过媒体查询调整不同屏幕尺寸的显示效果。
4. **动画与数据动态更新**，通过 CSS 动画和 JavaScript 实现动态效果，使数据更具吸引力。

这样可以构建一个适用于大屏的数据展示布局，能很好地展示各种图表和实时数据。

## 四、实时数据通信

### 1. WebSocket

**WebSocket** 是一种网络通信协议，提供了全双工通信通道，允许客户端（通常是浏览器）和服务器之间进行实时数据交换。与传统的HTTP请求-响应模型不同，WebSocket协议允许服务器和客户端之间建立持久连接，一旦连接建立，双方可以随时相互发送数据，而无需重新建立连接。

#### WebSocket 的特点：
1. **全双工通信**：客户端和服务器可以在一个单一的连接上同时进行双向通信，而不必等待对方的响应。
2. **低延迟**：相比于传统的轮询方式，WebSocket的连接更加高效，适合需要实时数据更新的场景，比如在线聊天、游戏、股票行情等。
3. **持久连接**：WebSocket一旦建立连接，会一直保持，直到主动关闭或断开。

#### WebSocket 与 HTTP 的区别：
- **HTTP** 是基于请求-响应模式的通信协议，客户端每次要获取数据时，必须向服务器发送请求，服务器才会返回数据。
- **WebSocket** 是持久连接的协议，连接建立后，双方可以随时发送数据，不需要每次都建立新的连接。

#### WebSocket的工作流程：
1. **握手阶段**：WebSocket连接的建立依赖于一次 HTTP 请求。在客户端发送一个带有特定头部的 HTTP 请求给服务器时，服务器响应相应的头部信息，双方确认后，连接会从 HTTP 升级为 WebSocket。
2. **数据传输阶段**：一旦连接建立，客户端和服务器可以随时向对方发送消息，且没有请求/响应的限制。
3. **关闭连接**：当通信结束时，客户端或服务器可以主动关闭连接。

#### WebSocket 使用示例：
在前端浏览器中使用 WebSocket 可以通过原生 JavaScript API 来实现，简单示例如下：

```javascript
// 创建 WebSocket 连接
const socket = new WebSocket('ws://example.com/socket');

// 连接成功时的回调
socket.onopen = function(event) {
    console.log('WebSocket 连接已建立');
    // 发送消息给服务器
    socket.send('Hello, Server!');
};

// 接收到服务器消息时的回调
socket.onmessage = function(event) {
    console.log('接收到消息: ', event.data);
};

// 发生错误时的回调
socket.onerror = function(error) {
    console.error('WebSocket 错误: ', error);
};

// 连接关闭时的回调
socket.onclose = function(event) {
    console.log('WebSocket 连接已关闭');
};
```

#### WebSocket 的应用场景：
- **实时聊天应用**：如微信、Slack等在线聊天工具。
- **在线游戏**：需要实时同步状态的在线多人游戏。
- **实时股票或行情数据**：如股票、加密货币价格变化的实时更新。
- **实时通知系统**：如消息推送、系统状态通知等。

WebSocket 的实时性和效率非常适合你在开发数字驾驶舱时展示实时数据。


