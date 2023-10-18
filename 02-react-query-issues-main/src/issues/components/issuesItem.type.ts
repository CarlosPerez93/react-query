import propTypes from "prop-types";
import { Issues } from "../../common/Interface.type";

export const IssuesItemProps = {
  issues: Issues,
};

export type IssuesItemProps = propTypes.InferProps<typeof IssuesItemProps>;
