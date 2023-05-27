import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../common/axiosLabels";

export const useQueryLabels = () => {
  const queryLabels = useQuery({
    queryKey: ["queryLabels"],
    queryFn: getLabels,
    /*     refetchOnWindowFocus: false, //refresh windows */
  });
  return queryLabels;
};
