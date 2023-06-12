import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../common/getLabels";

export const useQueryLabels = () => {
  const queryLabels = useQuery({
    queryKey: ["queryLabels"],
    queryFn: getLabels,
  });
  return queryLabels;
};
