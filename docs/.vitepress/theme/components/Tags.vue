<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useData } from 'vitepress'

const router = useRouter()
const { theme } = useData()
const tags = ref([])

onMounted(async () => {
  // 从文章数据中获取所有标签
  const allTags = new Map()
  
  // 假设文章数据存储在 theme.posts 中
  if (theme.value && theme.value.posts) {
    theme.value.posts.forEach(post => {
      if (post.tags) {
        post.tags.forEach(tag => {
          const count = allTags.get(tag) || 0
          allTags.set(tag, count + 1)
        })
      }
    })
  }
  
  // 转换为数组格式
  tags.value = Array.from(allTags.entries()).map(([name, count]) => ({
    name,
    count
  })).sort((a, b) => b.count - a.count)
})

const handleTagClick = (tag) => {
  router.go(`/tags/${tag.name.toLowerCase()}`)
}
</script>

<template>
  <div class="tags-cloud">
    <div v-for="tag in tags" 
         :key="tag.name" 
         class="tag-item"
         :style="{ fontSize: `${Math.max(0.9, Math.min(1.4, 1 + tag.count * 0.1))}rem` }"
         @click="handleTagClick(tag)">
      {{ tag.name }}
      <span class="tag-count">({{ tag.count }})</span>
    </div>
  </div>
</template>

<style scoped>
.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 1rem;
}

.tag-item {
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  transition: all 0.3s ease;
  user-select: none;
}

.tag-item:hover {
  background-color: var(--vp-c-brand-light);
  color: var(--vp-c-bg);
  transform: translateY(-2px);
}

.tag-count {
  font-size: 0.8em;
  opacity: 0.8;
  margin-left: 0.25rem;
}
</style> 