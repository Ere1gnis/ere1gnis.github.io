import DefaultTheme from 'vitepress/theme'
import Tags from './components/Tags.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Tags', Tags)
  }
} 