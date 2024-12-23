<script setup>
import { useData } from 'vitepress'
const { site } = useData()
</script>

<template>
  <div class="not-found">
    <div class="not-found-content">
      <div class="image-container">
        <img src="/404.png" alt="404" class="not-found-image" />
      </div>
      <h1 class="not-found-title">404</h1>
      <div class="not-found-text">PAGE MAY LOST</div>
      <div class="not-found-desc">"有人吗？这是哪里？噢不，看来我们迷路了……" </div>
      <a href="/" class="home-button">回家</a>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  padding: 64px 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: calc(100vh - 64px);
  font-family: 'CustomFont', sans-serif;
}

.not-found-content {
  margin-top: -64px;
  width: 100%;
  max-width: 600px;
}

.image-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.not-found-image {
  width: 300px;
  height: auto;
  margin-bottom: 24px;
}

.not-found-title {
  font-size: 5rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  opacity: 0.8;
}

.not-found-text {
  font-size: 2rem;
  font-weight: 500;
  margin: 12px 0;
  opacity: 0.8;
}

.not-found-desc {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  margin-top: 12px;
  margin-bottom: 32px;
}

.home-button {
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--vp-c-brand);
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.home-button:hover {
  background-color: var(--vp-c-brand-dark);
}
</style> 