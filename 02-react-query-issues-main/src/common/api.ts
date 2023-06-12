import axios from "axios";

export const gitHubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
