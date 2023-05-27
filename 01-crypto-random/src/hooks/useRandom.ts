import { useQuery } from "@tanstack/react-query";
import { getRandomNumberApi } from "./useGetRandomNumber";

export const useRandom = () => {
  const query = useQuery(["randomNumber"], getRandomNumberApi);

  return query;
};
