import propTypes from "prop-types";

export const labPickProps = {
  name: propTypes.oneOfType([
    propTypes.string.isRequired,
    propTypes.arrayOf(propTypes.string).isRequired,
  ]),
  selectedLabels: propTypes.arrayOf(propTypes.string.isRequired).isRequired,

  onChange: propTypes.func.isRequired,
};

export type labPickProps = propTypes.InferProps<typeof labPickProps>;
