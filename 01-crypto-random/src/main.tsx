import React from "react";
import ReactDOM from "react-dom/client";
/* import { App } from "./App.tsx";
 */ import { App1 } from "./App1.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App1 />
      {/* <App /> */}
    </QueryClientProvider>
  </React.StrictMode>
);
