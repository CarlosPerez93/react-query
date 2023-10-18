import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../common/getIssues/getIssues";
import { State } from "../common/Interface.type";
import { useState, useEffect } from "react";

interface Props {
  state?: State;
  labels: string[];
}

export const useIssues = ({ state, labels }: Props) => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPage(1);
  }, [state, labels]);

  const issuesQuery = useQuery(["issues", { state, labels, page }], () =>
    getIssues({ labels, state, page })
  );

  const nextPage = () => {
    if (issuesQuery.data?.length === 0) return;
    setPage(page + 1);
  };
  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };
  return {
    issuesQuery,
    page: issuesQuery.isFetching ? "Loading" : page,
    nextPage,
    prevPage,
  };
};
