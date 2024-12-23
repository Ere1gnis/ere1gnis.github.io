import DefaultTheme from 'vitepress/theme'
import { Theme } from 'vitepress'
import './styles/custom.css'
import Layout from './Layout.vue'
import Tags from './components/Tags.vue'
import PostList from './components/PostList.vue'
import NotFound from './NotFound.vue'

export default {
  extends: DefaultTheme,
  Layout,
  NotFound: NotFound,
  enhanceApp({ app }) {
    app.component('Tags', Tags)
    app.component('PostList', PostList)
  }
} as Theme 