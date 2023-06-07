import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const queryClient = new QueryClient()
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <div className="mx-auto max-w-screen-xl">
        <RouterProvider router={router}></RouterProvider>
      </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
