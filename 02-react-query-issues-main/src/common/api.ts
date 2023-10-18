import axios from "axios";

export const gitHubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization: "Bearer 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",
  },
});
