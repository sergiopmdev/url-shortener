import { defineStore } from "pinia";

export const useShortener = defineStore("shortener", {
  state: () => ({
    shortening: false,
    responseStatus: undefined,
    shortenedLink: undefined,
  }),
  actions: {
    setShortening(value) {
      this.shortening = value;
    },
    setResponseStatus(status) {
      this.responseStatus = status;
    },
    setShortenedLink(link) {
      this.shortenedLink = link;
    },
  },
});
