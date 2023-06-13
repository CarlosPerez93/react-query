import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { IssuesItemProps } from "./issuesItem.type";

export const IssueComment: FC<IssuesItemProps> = ({ issues }) => {
  return (
    <div className="col-12">
      <div className="card border-white mt-2">
        <div className="card-header bg-dark">
          <img
            src={issues?.user?.avatar_url}
            alt="User Avatar"
            className="avatar"
          />
          <span className="mx-2">{issues?.user?.login}</span>
        </div>
        <div className="card-body text-dark">
          <ReactMarkdown>{issues.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
