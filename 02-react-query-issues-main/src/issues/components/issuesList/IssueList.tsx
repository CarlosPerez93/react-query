import { FC } from "react";

import { IssueItem } from "../issuesItem/IssueItem";

import { IssuesList } from "./issuesList.type";
import { Issues } from "../../../common/getIssues/getIssues.type";

export const IssueList: FC<IssuesList> = ({ issues }) => {
  return (
    <div className="card border-white">
      <div className="card-header bg-dark">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <a className="nav-link active">All</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Open</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Closed</a>
          </li>
        </ul>
      </div>
      <div className="card-body text-dark">
        {issues.map((issues: Issues) => (
          <IssueItem key={issues.id} issues={issues} />
        ))}
      </div>
    </div>
  );
};
