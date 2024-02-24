import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { RouterProvider } from "react-router";
import { router } from "./app/router";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ThemeStyles/themeStyles";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <GoogleOAuthProvider clientId="245400988912-m0ij8f3672s36suotbvgb63sl47s29ut.apps.googleusercontent.com">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </Provider>
  </GoogleOAuthProvider>
  // </React.StrictMode>
);
