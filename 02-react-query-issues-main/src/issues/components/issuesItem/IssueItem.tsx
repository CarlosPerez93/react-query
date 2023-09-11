import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { FiInfo, FiMessageSquare, FiCheckCircle } from "react-icons/fi";

import { IssuesItemProps } from "../issuesItem.type";
import { State } from "../../../common/getIssues/getIssues.type";
import { getIssueInfo } from "../../../common/getIssuesInfo/getIssueInfo";
import { getIssueComments } from "../../../common/getIssues/getIssuesComments";

export const IssueItem: FC<IssuesItemProps> = ({ issues }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  /* load data in cache with prefetchQuery or setQueryData */
  const prefetchData = () => {
    queryClient.prefetchQuery(["issue", issues.number], () =>
      getIssueInfo(issues.number)
    );

    queryClient.prefetchQuery(["issue", issues.number, "comments"], () =>
      getIssueComments(issues.number)
    );
  };

  const preSetData = () => {
    queryClient.setQueryData(["issue", issues.number], issues, {
      updatedAt: new Date().getTime() + 10000,
    });
  };
  return (
    <div
      className="card mb-2 issue"
      onClick={() => navigate(`/issues/issue/${issues.number}`)}
      //onMouseEnter={prefetchData}
      onMouseEnter={preSetData}
    >
      <div className="card-body d-flex align-items-center">
        {issues.state === State.Open ? (
          <FiInfo size={30} color="red" />
        ) : (
          <FiCheckCircle size={30} color="green" />
        )}

        <div className="d-flex flex-column flex-fill px-2">
          <span>{issues.title}</span>
          <span className="issue-subinfo">
            #{issues?.number} opened 2 days ago by
            <span className="fw-bold">{issues?.user?.login}</span>
          </span>
        </div>

        <div className="d-flex align-items-center">
          <img
            src={issues?.user?.avatar_url}
            alt="User Avatar"
            className="avatar"
          />
          <span className="px-2">{issues?.comments}</span>
          <FiMessageSquare />
        </div>
      </div>
    </div>
  );
};
