import propTypes from "prop-types";
import { Issues } from "../../../common/getIssues/getIssues.type";
export const IssuesList = {
  issues: Issues,
};

export type IssuesList = propTypes.InferProps<typeof IssuesList>;
