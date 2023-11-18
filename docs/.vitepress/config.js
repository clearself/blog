
module.exports = {
  base: '/blog/',
  title: '付雷洋前端技术归档',
  description: 'Just playing around.',
  lang: 'en-US',
  themeConfig: {
    logo: '/svgs/vite.svg',
    siteTitle: '付雷洋前端技术归档',
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '前端技术栈',
        items: [
          { text: 'HTML', link: '/fe/html/html-standard' },
          { text: 'CSS', link: '/fe/css/css-standard' },
          { text: 'Javascript', link: '/fe/js/js-standard' }
        ]
      },
      { text: '微前端', link: 'https://clearself.github.io/' },
      { text: 'venus组件库', link: 'https://clearself.github.io/vs-ui/dist/index.html' },
      { text: '易收藏', link: 'https://ysc.dnscn.site/#/login' },
      { text: 'Github', link: 'https://github.com/clearself/blog' }
    ],
    sidebar: [
      {
        text: '前端技术栈',
        items: [
          {
            text: 'HTML',
            collapsed: false,
            items: [
              { text: 'HTML编码规范', link: '/fe/html/html-standard' }
            ]
          },
          {
            text: 'CSS',
            collapsed: false,
            items: [
              { text: 'CSS编码规范', link: '/fe/css/css-standard' }
            ]
          },
          {
            text: 'Javascript',
            collapsed: false,
            items: [
              { text: 'Javascript编码规范', link: '/fe/js/js-standard' },
              { text: 'proxy的阐释', link: '/fe/js/proxy' },
              { text: '防抖 VS 节流', link: '/fe/js/throttle' },
              { text: 'js运行机制', link: '/fe/js/operating' },
              { text: '面向对象三种继承方式', link: '/fe/js/js-inherit' },
              { text: 'URLSearchParams API', link: '/fe/js/url-api' },
              { text: '动手实现Promise', link: '/fe/js/promise' },
              { text: 'RGB，HEX，HSL相互转换', link: '/fe/js/color-change' },
              { text: '前端实用方法', link: '/fe/js/fe-function' }
            ]
          },
          {
            text: 'Vue',
            collapsed: false,
            items: [
              { text: 'Vue2和Vue3的区别', link: '/fe/vue/vue2-vue3' }
            ]
          },
          { text: '单点登录实现方式', link: '/fe/single-login' },
          { text: 'git常用命令', link: '/fe/git' },
          { text: '前端项目优化', link: '/fe/fe-optimize' },
          { text: '前端优秀博客', link: '/fe/blog' },
          { text: 'ShowDoc本地部署', link: '/fe/showdoc' }
        ]
      }
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
    }
  },
  head: [
    [
      'link',
      { rel: 'stylesheet', href: '/blog/css/index.css' }
    ]
  ],
  markdown: {
    theme: 'material-theme-darker',
    // math: true
  }
}