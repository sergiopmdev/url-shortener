<script setup>
import { ref } from "vue";
import { useShortener } from "../stores/useShortener";
import Shortener from "../services/shortenUrl/Shortener";

const url = ref(new String());
const shortenerStore = useShortener();

function onSubmit(event) {
  event.preventDefault();
  const shortener = new Shortener(url);
  shortener.shortenUrl();
}
</script>

<template>
  <form @submit="onSubmit" class="url-form-container">
    <div class="url-input-container">
      <input v-model="url" class="url-input" placeholder="Enter an URL..." />
      <span class="url-error" v-if="shortenerStore.responseStatus === 400"
        >Invalid URL</span
      >
    </div>
    <button
      v-bind:class="
        !shortenerStore.shortening ? 'url-submit' : 'url-submit submit-disabled'
      "
      type="submit"
      :disabled="shortenerStore.shortening"
    >
      Shorten
      <v-icon
        name="ri-loader-4-line"
        animation="spin"
        class="submit-loader"
        v-if="shortenerStore.shortening"
      ></v-icon>
    </button>
  </form>
</template>

<style scoped>
@import "../style.css";

.url-form-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: var(--dimension-max-width);
  height: 2.2rem;
  margin: 2rem auto;
  padding: 0 2rem;
}

.url-input-container {
  position: relative;
  width: 80%;
}

.url-input {
  width: 100%;
  height: 100%;
  padding: 0rem;
  border: none;
  text-indent: 0.7rem;
}

.url-input:focus {
  outline: none;
}

.url-submit {
  width: 20%;
  transition: background-color 0.1s;
  background-color: var(--color-red-pantone);
  cursor: pointer;
  border: none;
  border-radius: 0;
  font-size: 1rem;
  color: var(--color-anti-flash-white);
}

.url-submit:hover {
  background-color: var(--color-red-pantone-dark);
}

.url-input-container,
.url-submit {
  height: 100%;
}

.submit-loader {
  margin-left: 0.2rem;
}

.submit-disabled {
  background-color: var(--color-red-pantone-dark);
  cursor: not-allowed;
}

.url-error {
  position: absolute;
  top: -90%;
  right: 0;
  padding: 0.2rem 0.5rem;
  background-color: var(--color-red-pantone-light);
  font-size: 0.8rem;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  color: var(--color-red-pantone);
}

@media (width <= 768px) {
  .url-form-container {
    flex-direction: column;
    height: inherit;
  }

  .url-input-container,
  .url-submit {
    width: 100%;
    height: 2.2rem;
  }
}
</style>
