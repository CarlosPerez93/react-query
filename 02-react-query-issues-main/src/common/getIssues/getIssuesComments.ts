import { gitHubApi } from "../api";

import { sleep } from "../../helpers/sleep";

import { Issues } from "./getIssues.type";

export const getIssueComments = async (
  issueNumber: number
): Promise<Issues[]> => {
  await sleep(2);
  const { data } = await gitHubApi.get<Issues[]>(
    `/issues/${issueNumber}/comments`
  );
  return data;
};
