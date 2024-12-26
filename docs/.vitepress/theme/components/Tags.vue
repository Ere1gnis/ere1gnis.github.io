<script setup>
import { ref, computed } from 'vue'
import { useData, useRouter } from 'vitepress'

const { site } = useData()
const router = useRouter()
const selectedTag = ref('')

// 获取所有文章
const posts = computed(() => {
  const sidebarItems = site.value.themeConfig.sidebar['/posts/']?.[0]?.items || []
  return sidebarItems.map(item => {
    const path = item.link
    const title = item.text
    const tags = path.includes('老王胡诌') ? ['入世'] :
                 path.includes('Untitled') ? ['后端'] :
                 path.includes('hello-world') ? ['示例'] :
                 path.includes('cluster') ? ['技术'] :
                 []
    return { title, path, tags }
  })
})

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
  max-width: 1152px;
  margin: 0 auto;
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

.post-tags {
  display: flex;
  gap: 0.5rem;
}

.post-tags .tag {
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
}
</style> 