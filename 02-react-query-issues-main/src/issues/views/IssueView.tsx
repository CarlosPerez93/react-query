import { Link, Navigate, useParams } from "react-router-dom";
import { IssueComment } from "../components/IssueComment";
import { useIssue } from "../../hooks";
import Loading from "../components/Loading/Loading";

export const IssueView = () => {
  const params = useParams();
  const { id = "0" } = params;
  const { issueQuery, commentsQuery } = useIssue(+id);

  if (issueQuery.isLoading) return <Loading />;

  if (!issueQuery.data && !commentsQuery.data)
    <Navigate to={`./issues/list`} />;

  return (
    <div className="row mb-5">
      <div className="col-12 mb-3">
        <Link to="./issues/list">Go Back</Link>
      </div>

      <IssueComment issues={issueQuery.data} />

      {commentsQuery.data?.map((issue) => (
        <IssueComment key={issue.id} issues={issue} />
      ))}
    </div>
  );
};
