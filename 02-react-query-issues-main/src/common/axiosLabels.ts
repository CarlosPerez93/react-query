import { Api } from "./api";

import { sleep } from "../helpers/sleep";
import { labelProps } from "../issues/components/labels/label.type";

export const getLabels = async (): Promise<labelProps[]> => {
  await sleep(0.5);
  const { data } = await Api.get<labelProps[]>("/labels");
  console.log(data);

  return data;
};
