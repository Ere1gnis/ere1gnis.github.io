---
title: 文章列表
posts:
  - title: 老王乱侃
    date: 2024-12-26
    tags: ['入世']
    path: /posts/老王胡诌
  - title: 待更新的建站经验
    date: 2024-12-26
    tags: ['后端']
    path: /posts/Untitled
  - title: Hello World
    date: 2024-12-26
    tags: ['示例']
    path: /posts/hello-world
---

<script setup>
import { ref, onMounted } from 'vue'
import { useData, useRouter } from 'vitepress'

const { frontmatter } = useData()
const router = useRouter()
const posts = ref([])

onMounted(() => {
  posts.value = frontmatter.value.posts || []
})
</script>

# 文章列表

这里列出了所有的博客文章，按照发布时间倒序排列。

<div class="post-list">
  <div v-for="post in posts" :key="post.path" class="post-item" @click="router.go(post.path)">
    <h3 class="post-title">{{ post.title }}</h3>
    <div class="post-meta">
      <span class="post-date">{{ new Date(post.date).toLocaleDateString() }}</span>
      <div class="post-tags">
        <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</div>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.post-item {
  cursor: pointer;
  padding: 1rem;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.post-item:hover {
  background-color: var(--vp-c-bg-soft);
}

.post-title {
  color: var(--vp-c-text-1);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.post-date {
  color: var(--vp-c-text-3);
  font-size: 0.9rem;
}

.post-tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}
</style> 