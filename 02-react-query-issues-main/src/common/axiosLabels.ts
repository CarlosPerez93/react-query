import { gitHubApi } from "./api";

import { sleep } from "../helpers/sleep";

type T = {
  id: number;
  name: string;
  color: string;
};

export const getLabels = async () => {
  await sleep(0.5);
  const { data } = await gitHubApi.get<T[]>("/labels");
  return data;
};
