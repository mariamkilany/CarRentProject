import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { RouterProvider } from "react-router";
import { router } from "./app/router";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ThemeStyles/themeStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	// <React.StrictMode>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<RouterProvider router={router}>
					
					</RouterProvider>
				</ThemeProvider>
			</Provider>
	// </React.StrictMode>
);
