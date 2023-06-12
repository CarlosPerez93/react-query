import { gitHubApi } from "../api";

import { sleep } from "../../helpers/sleep";

import { Issues } from "./getIssues.type";

export const getIssues = async (): Promise<Issues[]> => {
  await sleep(0.5);
  const { data } = await gitHubApi.get<Issues[]>("/issues");
  return data;
};
