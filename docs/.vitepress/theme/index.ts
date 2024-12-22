import DefaultTheme from 'vitepress/theme'
import { Theme } from 'vitepress'
import Layout from './layouts/Layout.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // 注册全局组件
  }
} satisfies Theme 