import propTypes from "prop-types";

export const TanStackProviderProps = {
  children: propTypes.element.isRequired,
};
export const TanStackProviderDefaultProps = {};

export type TanStackProviderProps = propTypes.InferProps<
  typeof TanStackProviderProps
>;
