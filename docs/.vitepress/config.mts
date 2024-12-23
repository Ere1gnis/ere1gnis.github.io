import { defineConfig } from 'vitepress'
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

// 获取所有文章数据
function getPosts() {
  const postsDir = join(__dirname, '../posts')
  const files = readdirSync(postsDir)
  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const content = readFileSync(join(postsDir, file), 'utf-8')
      const { data } = matter(content)
      return {
        title: data.title,
        date: data.date,
        tags: data.tags || [],
        path: `/posts/${file.replace('.md', '')}`,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export default defineConfig({
  // 站点基本配置
  lang: 'zh-CN',
  title: '🐧',
  description: '个人博客站点',
  lastUpdated: true,

  // markdown配置
  markdown: {
    lineNumbers: true,
  },

  // 主题配置
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '标签', link: '/tags/' },
      { text: '关于', link: '/about' }
    ],

    // 侧边栏配置
    sidebar: {
      '/posts/': [
        {
          text: '最新文章',
          items: getPosts().map(post => ({
            text: post.title,
            link: post.path
          }))
        }
      ]
    },

    // 页脚配置
    footer: {
      message: '基于 VitePress 构建',
      copyright: `Copyright © ${new Date().getFullYear()}`
    },

    // 文档页脚文本配置
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 大纲配置
    outline: {
      level: [2, 3],
      label: '目录'
    },

    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    // 深色模式配置
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    // 移动端菜单标签
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/takamofu3n/takamofu3n.github.io',
      text: '在 GitHub 上编辑此页'
    },

    // 最后更新时间文本
    lastUpdatedText: '最后更新于',

    // 文章数据
    posts: getPosts()
  }
})