<script setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #nav-bar-content-before>
      <VPNavBarMenu class="menu" />
    </template>

    <template #nav-bar-content-after>
      <div class="nav-tools">
        <VPNavBarSearch class="search" />
        <VPSwitchAppearance class="appearance" />
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.nav-tools {
  display: flex;
  align-items: center;
  gap: 8px;
}

@media (max-width: 768px) {
  .menu,
  .nav-tools {
    display: none;
  }
}
</style> 