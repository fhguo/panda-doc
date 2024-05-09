import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PandaDoc",
  description: "A VitePress Document",
  head: [['link', { rel: 'icon', href: '/panda-doc/favicon.ico' }]], 
  base: '/panda-doc/', // 使用相对路径，线上部署非根路径时需要修改
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/doc-logo-mini.png', width: 24, height: 24 },
    editLink: {
      pattern: 'https://github.com/fhguo/panda-doc/blob/main/docs/:path',
      text: 'Edit this page'
    },
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-2025 你若盛开'
    },
    // algolia: { // algolia 搜索服务 与 内置 search 可二选一
    //   appId: 'LPTNA0E8HM',
    //   apiKey: '8f1b68dfab6b0320adef728a1c3a77cc',
    //   indexName: 'themusecatcher_front-end'
    // },
    search: {
      provider: 'local', // 可以开启本地搜索
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '技术', link: '/note/html&css' },
      { text: '开发', link: '/dev/dev1' },
      // { text: '实战', link: '/project/ggzx/index1' },
      {
        text: '实战',
        items: [
          {
            // 该部分的标题
            text: '项目实战',
            items: [
              { text: '博欣试剂管理系统', link: '/project/ggzx/index1' },
              // { text: 'Section B Item B', link: '...' }
            ]
          }
        ]
      },
      { text: 'Interview ', link: '/interview/index1' },
    ],

    sidebar: {
      '/note/': [
        {
          text: '前端笔记',
          collapsed: true,
          items: [
            { text: 'HTML&CSS', link: '/note/html&css' },
            { text: 'JS基础', link: '/note/js-base' },
            { text: 'JS进阶', link: '/note/js-high' },
            { text: 'Nodejs&Git', link: '/note/node' },
            { text: '前后端交互', link: '/note/link' },
            { text: 'Vue基础', link: '/note/vue-base' },
            { text: 'Vue进阶', link: '/note/vue-high' },
            { text: 'Typescript', link: '/note/ts' },
            { text: 'Vue3', link: '/note/vue3' },
            { text: '小程序及数据可视化', link: '/note/miniApp' },
            { text: 'Angularjs', link: '/note/Angularjs' },
            { text: 'test', link: '/note/test' },
          ]
        }
      ],
      '/dev/': [
        {
          text: '开发',
          collapsed: true,
          items: [
            { text: 'HTML&CSS&JS', link: '/dev/dev1' },
            { text: '框架&工具', link: '/dev/dev2' },
            { text: '综合&其它', link: '/dev/dev3' },
          ]
        }
      ],
      '/interview/': [
        {
          text: 'Interview',
          collapsed: true,
          items: [
            { text: '题一', link: '/interview/index1' },
            { text: '题二', link: '/interview/index2' },
            { text: '题三', link: '/interview/index3' },
            { text: '题四', link: '/interview/index4' },
            { text: '题五', link: '/interview/index5' },
          ]
        },
        {
          text: '项目',
          collapsed: true,
          items: [
            { text: '行政诉讼E监督', link: '/interview/project/e-supervise' },
            { text: 'APEC', link: '/interview/project/apec' },
            { text: '浙江解纷码', link: '/interview/project/jfm' },
            { text: '小U智选', link: '/interview/project/ushop' },
          ]
        }
      ],
      '/project/': [
        {
          text: '试剂管理系统',
          collapsed: true,
          items: [
            { text: '一、组件通信', link: '/project/ggzx/index1' },
            { text: '二、搭建项目', link: '/project/ggzx/index2' },
            { text: '三、项目集成', link: '/project/ggzx/index3' },
            { text: '四、后台模板', link: '/project/ggzx/index4' },
            { text: '五、综合配置', link: '/project/ggzx/index5' },
          ]
        }
      ]
    },
    // 层级
    sidebarDepth: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fhguo/panda-doc' }
    ]
  }
})

