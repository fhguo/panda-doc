// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.less'
// 全局引入elementPlus样式
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import MyLayout from './MyLayout.vue'
// import Layout from './Layout.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component('MyGlobalComponent' /* ... */)
  },
  Layout: MyLayout,
}