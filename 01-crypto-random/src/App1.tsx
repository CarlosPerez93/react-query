import { useRandom } from "./hooks/useRandom";

import "./App.css";

export const App1 = () => {
  const query = useRandom();
  return (
    <div>
      {query.isFetching ? (
        <h2>Loading...</h2>
      ) : (
        <h2>Number Random: {query.data}</h2>
      )}

      {!query.isFetching && query.isError && <h3>{`${query.error}`}</h3>}
      <button onClick={() => query.refetch()} disabled={query.isFetching}>
        {query.isFetching ? "...." : "new number"}
      </button>
    </div>
  );
};
