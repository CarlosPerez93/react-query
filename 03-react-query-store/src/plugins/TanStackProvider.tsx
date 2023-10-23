import { FC } from "react";
import {
  TanStackProviderDefaultProps,
  TanStackProviderProps,
} from "./tanStackProvider.type";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

export const TanStackProvider: FC<TanStackProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

TanStackProvider.propTypes = TanStackProviderProps;
TanStackProvider.defaultProps = TanStackProviderDefaultProps;

export default TanStackProvider;
