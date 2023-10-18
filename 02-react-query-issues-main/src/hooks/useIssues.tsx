import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../common/getIssues/getIssues";
import { State } from "../common/getIssues/getIssues.type";

interface Props {
  state?: State;
  labels: string[];
}

export const useIssues = ({ state, labels }: Props) => {
  const issuesQuery = useQuery(["issues", { state, labels }], () =>
    getIssues(labels, state)
  );
  return { issuesQuery };
};
