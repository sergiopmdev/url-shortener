<script setup>
import { ref } from "vue";
import { useShortener } from "../stores/useShortener";
import Shortener from "../services/shortenUrl/Shortener";
import copyToClipboard from "../utils/copyToClipboard";

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
      <span class="error" v-if="shortenerStore.responseStatus === 400"
        >Invalid URL</span
      >
      <span class="error" v-if="shortenerStore.responseStatus === 403"
        >Something went wrong</span
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
  <div class="shortened-link-block" v-if="shortenerStore.shortenedLink">
    <div class="shortened-link-container">
      <span class="shortened-link" id="shortened-link">{{
        shortenerStore.shortenedLink
      }}</span>
      <button
        class="copy-link"
        id="copy-link"
        @click="copyToClipboard('shortened-link', 'copy-link')"
      >
        Copy
      </button>
    </div>
  </div>
</template>

<style scoped>
@import "../style.css";

.url-form-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: var(--dimension-max-width);
  height: 2.2rem;
  margin: 2rem auto 0rem auto;
  padding: 0 2rem;
}

.url-input-container {
  position: relative;
  width: 80%;
}

.url-input {
  width: calc(100% - 0.5rem);
  height: 100%;
  padding: 0rem 0.5rem 0rem 0rem;
  border: none;
  text-indent: 0.7rem;
  text-overflow: ellipsis;
  white-space: nowrap;
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

.error {
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

.shortened-link-block {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  margin: 1.5rem auto 0rem auto;
  padding: 0rem 2rem;
}

.shortened-link-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--dimension-max-width);
  height: 100%;
  background-color: var(--color-space-cadet-dark);
}

.shortened-link {
  margin-left: 1rem;
  font-family: "Ubuntu", sans-serif;
  color: var(--color-anti-flash-white);
}

.copy-link {
  height: 55%;
  margin-right: 1rem;
  padding: 0rem 0.5rem 0rem 0.5rem;
  background-color: var(--color-space-cadet);
  cursor: pointer;
  border: none;
  border-radius: 0;
  color: var(--color-anti-flash-white);
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
