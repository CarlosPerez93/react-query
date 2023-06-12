import propTypes from "prop-types";

export const axiosProps = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
};

export type axiosProps = propTypes.InferProps<typeof axiosProps>;
