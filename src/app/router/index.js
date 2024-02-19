import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import MainLayout from "../../pages/MainLayout";
import Category from "../../pages/Category";
import Home from "../../pages/Home";
import Details from "../../pages/Details";
import Payment from "../../pages/Payment";
import Wishlist from "../../pages/Wishlist";
import Dashboard from "../../pages/Dashboard";

const routerConfig = [
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{ path: "home", element: <Home /> },
			{ path: "category", element: <Category /> },
			{ path: "details/:id", element: <Details /> },
			{ path: "payment", element: <Payment /> },
			{ path: "wishlist", element: <Wishlist /> },
			{ path: "dashboard", element: <Dashboard /> },
		],
	},
	{ path: "/login", element: <Login /> },
	{ path: "*", element: <NotFound /> },
];

export const router = createBrowserRouter(routerConfig);
