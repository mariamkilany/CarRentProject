import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCar = createAsyncThunk("car/fetchCar", async (_, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		const response = await axios({
			method: "get",
			url: "http://localhost:8080/api/auth/authenticate/",
		});
		console.log(response.data);
		return response.data;
	} catch (error) {
		const message = error.response?.data || error.message;
		console.log(message);
		return rejectWithValue(message);
	}
});
