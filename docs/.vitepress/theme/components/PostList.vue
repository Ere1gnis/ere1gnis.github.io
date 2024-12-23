<script setup>
import { ref, onMounted } from 'vue'
import { useData, useRouter } from 'vitepress'

const { theme } = useData()
const router = useRouter()

const posts = ref([])

onMounted(async () => {
  // 这里需要实现获取所有博客文章的逻辑
  // 可以通过读取特定目录下的markdown文件来实现
  // 示例数据结构
  posts.value = [
    {
      title: '示例文章标题',
      date: '2024-01-01',
      tags: ['Vue', 'JavaScript'],
      excerpt: '这是文章的摘要内容...',
      path: '/posts/example'
    }
  ]
})
</script>

<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.path" class="post-item" @click="router.go(post.path)">
      <h3 class="post-title">{{ post.title }}</h3>
      <div class="post-meta">
        <span class="post-date">{{ post.date }}</span>
        <div class="post-tags">
          <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
      <p class="post-excerpt">{{ post.excerpt }}</p>
    </div>
  </div>
</template>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.post-item {
  cursor: pointer;
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

.post-excerpt {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  line-height: 1.6;
}
</style> 