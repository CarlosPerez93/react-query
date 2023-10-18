import { gitHubApi } from "../api";

import { sleep } from "../../helpers/sleep";

import { Issues, State } from "./getIssues.type";

export const getIssues = async (
  labels: string[] = [],
  state?: State
): Promise<Issues[]> => {
  await sleep(2);

  const params = new URLSearchParams();

  if (state) params.append("state", state);

  if (labels.length > 0) {
    const labelString = labels.join(",");
    params.append("labels", labelString);
  }

  params.append("page", "1");
  params.append("per_page", "5");

  const { data } = await gitHubApi.get<Issues[]>("/issues", { params });
  return data;
};
