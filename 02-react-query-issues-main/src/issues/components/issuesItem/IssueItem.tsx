import { FC } from "react";
import { FiInfo, FiMessageSquare, FiCheckCircle } from "react-icons/fi";

import { IssuesItemProps } from "../issuesItem.type";
import { State } from "../../../common/getIssues/getIssues.type";
import { useNavigate } from "react-router-dom";

export const IssueItem: FC<IssuesItemProps> = ({ issues }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card mb-2 issue"
      onClick={() => navigate(`/issues/issue/${issues.number}`)}
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
