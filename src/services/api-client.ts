import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8e8ce4f79e934173bed1e205aed5b721",
  },
});
