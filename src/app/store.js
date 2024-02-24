import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice";
import usesrReducer from "../features/car/usersSlice";




export const store = configureStore({
	reducer: {
		car: carReducer,
		users: usesrReducer

	},
});
