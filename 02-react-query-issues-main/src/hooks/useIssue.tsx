import { useQuery } from "@tanstack/react-query";
import { getIssueInfo } from "../common/getIssuesInfo/getIssueInfo";
import { getIssueComments } from "../common/getIssues/getIssuesComments";

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery(["issue", issueNumber], () =>
    getIssueInfo(issueNumber)
  );

  const commentsQuery = useQuery(
    ["issue", issueNumber, "comments"],
    () => getIssueComments(issueNumber),
    { enabled: issueQuery.data != undefined }
  );
  return { issueQuery, commentsQuery };
};
