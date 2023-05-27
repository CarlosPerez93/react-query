import axios from "axios";

export const Api = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {},
});
