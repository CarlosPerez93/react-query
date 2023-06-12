import { gitHubApi } from "../api";

import { sleep } from "../../helpers/sleep";

import { Label } from "./getLabels.type";

export const getLabels = async (): Promise<Label[]> => {
  await sleep(0.5);
  const { data } = await gitHubApi.get<Label[]>("/labels");
  return data;
};
