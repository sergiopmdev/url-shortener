<script setup>
import HeaderLogo from "./HeaderLogo.vue";
import HeaderGitHub from "./HeaderGitHub.vue";
</script>

<template>
  <header>
    <HeaderLogo />
    <HeaderGitHub />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--dimension-max-width);
  height: 4rem;
  margin: 0 auto;
  padding: 0.5rem 2rem;
}
</style>
