import { FC } from "react";

import { IssueItem } from "../issuesItem/IssueItem";

import { IssuesList } from "./issuesList.type";
import { Issues, State } from "../../../common/Interface.type";

interface Props {
  state?: State;
  issues: Issues[];
  onStateChanged: (state?: State) => void;
}

export const IssueList: FC<Props> = ({ issues, state, onStateChanged }) => {
  return (
    <div className="card border-white">
      <div className="card-header bg-dark">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <a
              className={`nav-link ${!state ? "active" : ""}`}
              onClick={() => onStateChanged()}
            >
              All
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${state === State.Open ? "active" : ""}`}
              onClick={() => onStateChanged(State.Open)}
            >
              Open
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${state === State.Closed ? "active" : ""}`}
              onClick={() => onStateChanged(State.Closed)}
            >
              Closed
            </a>
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
