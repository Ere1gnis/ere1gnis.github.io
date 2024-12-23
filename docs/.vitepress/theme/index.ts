import DefaultTheme from 'vitepress/theme'
import { Theme } from 'vitepress'
import './styles/custom.css'
import Layout from './Layout.vue'
import Tags from './components/Tags.vue'
import PostList from './components/PostList.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Tags', Tags)
    app.component('PostList', PostList)
  }
} as Theme 