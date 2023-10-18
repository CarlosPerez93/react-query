import propTypes from "prop-types";
import { Issues, State } from "../../../common/getIssues/getIssues.type";
export const IssuesList = {
  issues: Issues,
  state: State,
};

export type IssuesList = propTypes.InferProps<typeof IssuesList>;
