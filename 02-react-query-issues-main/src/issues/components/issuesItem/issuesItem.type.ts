import propTypes from "prop-types";
import { Issues } from "../../../common/getIssues/getIssues.type";

export const IssuesItemProps = {
  issues: Issues,
};

export type IssuesItemProps = propTypes.InferProps<typeof IssuesItemProps>;
