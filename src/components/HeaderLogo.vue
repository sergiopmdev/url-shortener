<script setup></script>

<template>
  <div class="logo-container">
    <h1 class="logo-text">url</h1>
    <v-icon name="ri-scissors-fill" class="logo-icon"></v-icon>
  </div>
</template>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: 0.1s;
  cursor: pointer;
  color: var(--color-anti-flash-white);
}

.logo-container:hover {
  color: var(--color-cool-gray);
}

.logo-text {
  font-size: 1.8rem;
}

.logo-icon {
  width: 2rem;
  height: 2rem;
}
</style>
