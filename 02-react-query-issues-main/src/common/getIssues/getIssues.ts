import { gitHubApi } from "../api";

import { sleep } from "../../helpers/sleep";

import { Issues, State } from "../Interface.type";

interface Props {
  state?: State;
  labels: string[];
  page?: number;
}

export const getIssues = async ({
  labels,
  state,
  page = 1,
}: Props): Promise<Issues[]> => {
  await sleep(0.5);

  const params = new URLSearchParams();

  if (state) params.append("state", state);

  if (labels.length > 0) {
    const labelString = labels.join(",");
    params.append("labels", labelString);
  }

  params.append("page", page.toString());
  params.append("per_page", "5");

  const { data } = await gitHubApi.get<Issues[]>("/issues", { params });
  return data;
};
