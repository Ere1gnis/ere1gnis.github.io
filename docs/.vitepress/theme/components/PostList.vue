<script setup>
import { ref, onMounted } from 'vue'
import { useData, useRouter } from 'vitepress'

const { theme } = useData()
const router = useRouter()

const posts = ref([])

onMounted(() => {
  // 从theme配置中获取文章列表
  posts.value = theme.value.posts || []
})
</script>

<template>
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
</template>

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