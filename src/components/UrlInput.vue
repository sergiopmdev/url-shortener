<script setup>
import { ref } from "vue";
import shortenUrl from "../services/shortenUrl/shortenUrl";

const url = ref(new String());

function onSubmit(event) {
  event.preventDefault();
  shortenUrl(url);
}
</script>

<template>
  <form @submit="onSubmit" class="url-form-container">
    <input v-model="url" class="url-input" placeholder="Enter an URL..." />
    <input class="url-submit" type="submit" value="Shorten" />
  </form>
</template>

<style scoped>
@import "../style.css";

.url-form-container {
  display: flex;
  align-items: center;
  max-width: var(--dimension-max-width);
  margin: 0 auto;
  padding: 0 2rem;
}

.url-input {
  width: 80%;
}

.url-submit {
  width: 20%;
}
</style>
