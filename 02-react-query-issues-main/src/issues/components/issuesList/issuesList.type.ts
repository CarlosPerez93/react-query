import propTypes from "prop-types";
import { Issues, State } from "../../../common/Interface.type";
export const IssuesList = {
  issues: Issues,
  state: State,

  onStateChanged: propTypes.func,
};

export type IssuesList = propTypes.InferProps<typeof IssuesList>;
