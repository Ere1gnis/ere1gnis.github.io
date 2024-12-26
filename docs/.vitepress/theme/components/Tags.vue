<script setup>
import { ref, computed, onMounted } from 'vue'
import { useData, useRouter } from 'vitepress'

const { theme } = useData()
const router = useRouter()
const selectedTag = ref('')
const posts = ref([])

// 获取所有标签
const tags = computed(() => {
  const tagMap = new Map()
  posts.value.forEach(post => {
    post.tags?.forEach(tag => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1)
    })
  })
  return Array.from(tagMap.entries()).map(([name, count]) => ({ name, count }))
})

// 根据标签筛选文章
const filteredPosts = computed(() => {
  if (!selectedTag.value) return posts.value
  return posts.value.filter(post => post.tags?.includes(selectedTag.value))
})

onMounted(() => {
  // 从主题配置中获取文章列表
  posts.value = theme.value.posts || []
})

const selectTag = (tag) => {
  selectedTag.value = tag === selectedTag.value ? '' : tag
}
</script>

<template>
  <div class="tags-container">
    <h1>标签</h1>
    
    <div class="tag-cloud">
      <div
        v-for="tag in tags"
        :key="tag.name"
        class="tag"
        :class="{ active: selectedTag === tag.name }"
        @click="selectTag(tag.name)"
      >
        {{ tag.name }}
        <span class="count">{{ tag.count }}</span>
      </div>
    </div>

    <div class="posts-list">
      <div
        v-for="post in filteredPosts"
        :key="post.path"
        class="post-item"
        @click="router.go(post.path)"
      >
        <h3 class="post-title">{{ post.title }}</h3>
        <div class="post-meta">
          <span class="post-date">{{ new Date(post.date).toLocaleDateString() }}</span>
          <div class="post-tags">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="tag"
              :class="{ active: selectedTag === tag }"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tags-container {
  padding: 2rem;
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--light-blue);
  color: var(--dark-blue);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tag:hover {
  background-color: var(--primary-blue);
  color: white;
  transform: translateY(-2px);
}

.tag.active {
  background-color: var(--coral);
  color: white;
}

.count {
  margin-left: 0.5rem;
  font-size: 0.8em;
  opacity: 0.8;
}

.posts-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.post-item {
  padding: 1.5rem;
  background-color: white;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid var(--border-gray);
}

.post-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.post-title {
  margin: 0 0 1rem;
  color: var(--dark-blue);
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.post-date {
  color: var(--text-gray);
  font-size: 0.9rem;
}

.post-tags {
  display: flex;
  gap: 0.5rem;
}

.post-tags .tag {
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
}
</style> 