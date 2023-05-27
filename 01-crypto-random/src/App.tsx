import { useState, useEffect, useReducer } from "react";

import { getRandomNumberApi } from "./hooks/useGetRandomNumber";

import "./App.css";

export const App = () => {
  const [number, setNumber] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<String>();
  const [key, forRefetch] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    setIsLoading(true);
    getRandomNumberApi()
      .then((num) => setNumber(num))
      .catch((error) => setError(error.message));
  }, [key]);

  useEffect(() => {
    if (number) {
      setIsLoading(false);
    }
  }, [number]);

  useEffect(() => {
    if (error) setIsLoading(false);
  }, [error]);

  return (
    <div>
      {isLoading ? <h2>Loading...</h2> : <h2>Number Random {number}</h2>}
      {!isLoading && error && <h3>{error}</h3>}
      <button onClick={forRefetch} disabled={isLoading}>
        {isLoading ? "...." : "new number"}
      </button>
    </div>
  );
};
