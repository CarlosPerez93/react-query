import axios from "axios";

export const gitHubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
