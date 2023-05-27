import propTypes from "prop-types";

export const labelPropTypes = {
  id: propTypes.number,
  node_id: propTypes.string,
  url: propTypes.string,
  name: propTypes.string,
  color: propTypes.string,
  default: propTypes.bool,
  description: propTypes.string,
};

export type labelProps = propTypes.InferProps<typeof labelPropTypes>;
