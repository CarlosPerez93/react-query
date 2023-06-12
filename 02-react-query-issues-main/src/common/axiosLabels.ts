import { gitHubApi } from "./api";

import { sleep } from "../helpers/sleep";

import { axiosProps } from "./axiosLabels.type";

export const getLabels = async () => {
  await sleep(0.5);
  const { data } = await gitHubApi.get<axiosProps[]>("/labels");
  return data;
};
