import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ReactQueryDevtools } from "react-query/devtools";
import "./index.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
  </QueryClientProvider>
);
