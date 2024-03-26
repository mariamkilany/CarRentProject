import { createBrowserRouter } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import MainLayout from "./Pages/MainLayout";
import Category from "./Pages/Category";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Payment from "./Pages/Payment";
import Wishlist from "./Pages/Wishlist";
import Dashboard from "./Pages/Dashboard";
import DbCars from "./Components/dashboard/components/dbCars";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import MangerDashbord from "./Pages/MangerDashbord";
import CategoryLayout from "./Pages/CategoryLayout";
import DbCustomers from "./Components/dashboard/components/dbCustomers";
import DbTransactions from "./Components/dashboard/components/dbTransactions";
import DbCarsUpdate from "./Components/dashboard/components/dbCarsUpdate";
import LandingPage from "./Pages/LandingPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLIC_KEY } from "./config";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { RouterProvider } from "react-router";
// import { router } from "./app/router";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ThemeStyles/themeStyles";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));

const routerConfig = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "home", element: <Home /> },
      {
        path: "category",
        element: <CategoryLayout />,
        children: [
          { path: "", element: <Category /> },
          { path: ":id", element: <Details /> },
        ],
      },
      {
        path: "payment",
        element: (
          <Elements stripe={loadStripe(STRIPE_PUBLIC_KEY)}>
            <Payment />
          </Elements>
        ),
      },
      { path: "wishlist", element: <Wishlist /> },
      { path: "land", element: <LandingPage /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <MangerDashbord /> },
      { path: "cars", element: <DbCars /> },
      { path: "customers", element: <DbCustomers /> },
      { path: "transactions", element: <DbTransactions /> },
      { path: "cars:id", element: <DbCarsUpdate /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];

const router = createBrowserRouter(routerConfig);

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
