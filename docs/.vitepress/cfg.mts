import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "54321",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '标签', link: '/tags/' },
      { text: '关于', link: '/about' }
    ],

    // 测试文章数据
    posts: [
      {
        title: '第一篇博客文章',
        date: '2023-12-23',
        path: '/posts/first-post',
        tags: ['Vue', 'VitePress'],
        excerpt: '这是我的第一篇博客文章，主要介绍如何使用 VitePress 搭建博客。'
      },
      {
        title: '使用 Vue 3 的组合式 API',
        date: '2023-12-22',
        path: '/posts/vue3-composition-api',
        tags: ['Vue', 'JavaScript'],
        excerpt: '深入了解 Vue 3 组合式 API 的使用方法和最佳实践。'
      }
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
