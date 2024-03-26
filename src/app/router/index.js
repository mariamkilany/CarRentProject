import { createBrowserRouter } from "react-router-dom";
import NotFound from "../../Pages/NotFound";
import MainLayout from "../../Pages/MainLayout";
import Category from "../../Pages/Category";
import Home from "../../Pages/Home";
import Details from "../../Pages/Details";
import Payment from "../../Pages/Payment";
import Wishlist from "../../Pages/Wishlist";
import Dashboard from "../../Pages/Dashboard";
import DbCars from "../../Components/dashboard/components/dbCars";
import Register from "../../Pages/Register";
import Login from "../../Pages/Login";
import MangerDashbord from "../../Pages/MangerDashbord";
import CategoryLayout from "../../Pages/CategoryLayout";
import DbCustomers from "../../Components/dashboard/components/dbCustomers";
import DbTransactions from "../../Components/dashboard/components/dbTransactions";
import DbCarsUpdate from "../../Components/dashboard/components/dbCarsUpdate";
import LandingPage from "../../Pages/LandingPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLIC_KEY } from "../../config";

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

export const router = createBrowserRouter(routerConfig);
