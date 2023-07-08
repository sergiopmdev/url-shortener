<script setup></script>

<template>
  <header>
    <div class="logo-container">
      <h1 class="logo-text">url</h1>
      <v-icon name="ri-scissors-fill" class="logo-icon"></v-icon>
    </div>
    <a href="https://github.com/sergiopmdev/url-shortener" target="_blank">
      <v-icon name="bi-github" class="github-icon"></v-icon>
    </a>
  </header>
</template>

<style scoped>
@import "../style.css";

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--dimension-max-width);
  height: 4rem;
  margin: 0 auto;
  padding: 0.5rem 2rem;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: 0.1s;
  cursor: pointer;
  color: var(--color-anti-flash-white);
}

.logo-container:hover,
.github-icon:hover {
  color: var(--color-cool-gray);
}

.logo-text {
  font-size: 1.8rem;
}

.logo-icon {
  width: 2rem;
  height: 2rem;
}

.github-icon {
  width: 2rem;
  height: 2rem;
  transition: 0.1s;
  cursor: pointer;
  color: var(--color-anti-flash-white);
}
</style>
