import { useShortener } from "../../stores/useShortener";
import InvalidUrlError from "./exceptions";

class Shortener {
  constructor(url) {
    this.url = url;
  }

  #generateRequest() {
    return {
      method: "POST",
      body: JSON.stringify({
        group_guid: import.meta.env.VITE_BITLY_GROUP_ID,
        domain: "bit.ly",
        long_url: this.url.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${import.meta.env.VITE_BITLY_TOKEN}`,
      },
    };
  }

  shortenUrl() {
    const shortenerStore = useShortener();
    const request = this.#generateRequest();

    shortenerStore.setShortening(true);
    shortenerStore.setResponseStatus(undefined);
    shortenerStore.setShortenedLink(undefined);

    fetch("https://api-ssl.bitly.com/v4/shorten", request)
      .then((response) => {
        const status = response.status;
        shortenerStore.setResponseStatus(status);
        if ([200, 201].includes(status)) {
          response.json().then((data) => {
            shortenerStore.setShortenedLink(data.link);
          });
        } else if (status === 400) {
          throw new InvalidUrlError("Invalid URL");
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((error) => {
        Promise.reject(error);
      })
      .finally(() => {
        shortenerStore.setShortening(false);
      });
  }
}

export default Shortener;
