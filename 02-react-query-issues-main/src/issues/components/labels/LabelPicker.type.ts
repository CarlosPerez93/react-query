import propTypes from "prop-types";

export const labPickProps = {
  selectedLabels: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  onChange: propTypes.func.isRequired,
};

export type labPickProps = propTypes.InferProps<typeof labPickProps>;
