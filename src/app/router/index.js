import { createBrowserRouter } from "react-router-dom";
// import Login from "../../pages/Login";
import NotFound from "../../Pages/NotFound";
import MainLayout from "../../Pages/MainLayout";
import Category from "../../Pages/Category";
import Home from "../../Pages/Home";
import Details from "../../Pages/Details";
import Payment from "../../Pages/Payment";
import Wishlist from "../../Pages/Wishlist";
import Dashboard from "../../Pages/Dashboard";
import Register from "../../Pages/Register";
import Login from "../../pages/Login";

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
	{ path: "/register", element: <Register /> },
	{ path: "*", element: <NotFound /> },
];

export const router = createBrowserRouter(routerConfig);
