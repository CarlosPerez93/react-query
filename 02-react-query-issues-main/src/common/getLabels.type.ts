import propTypes from "prop-types";

export const Label = {
  id: propTypes.number.isRequired,
  node_id: propTypes.number.isRequired,
  url: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
  default: propTypes.bool.isRequired,
  description: propTypes.string,
};

export type Label = propTypes.InferProps<typeof Label>;
