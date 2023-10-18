import { gitHubApi } from "../api";

import { sleep } from "../../helpers/sleep";

import { Issues } from "../Interface.type";

export const getIssueInfo = async (issueNumber: number): Promise<Issues> => {
  await sleep(2);
  const { data } = await gitHubApi.get<Issues>(`/issues/${issueNumber}`);
  return data;
};
