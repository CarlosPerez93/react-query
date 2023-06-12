import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../common/getIssues/getIssues";

export const useIssues = () => {
  const issuesQuery = useQuery(["issues"], getIssues);
  return { issuesQuery };
};
