import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID zafe-i-se8hiW7qT97dRGy-2Dw1qBgLXHw8qQgSFq0M",
  },
});
