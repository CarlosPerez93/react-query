import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../common/axiosLabels";

export const useQueryLabels = () => {
  const queryLabels = useQuery({
    queryKey: ["queryLabels"],
    queryFn: getLabels,
    /* initialData: [{}], */
    /* placeHolderData: [{}], */
    /*     staleTime: 1000 * 60 * 60, //time refresh data*/
    /*     refetchOnWindowFocus: false, //refresh windows */
  });
  return queryLabels;
};
