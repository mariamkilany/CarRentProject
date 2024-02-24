import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCar = createAsyncThunk("car/fetchCar", async (_, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		const response = await axios({
			method: "get",
			url: "http://localhost:8080/api/auth/authenticate/",
		});
		// console.log(response.data);
		return response.data;
	} catch (error) {
		const message = error.response?.data || error.message;
		// console.log(message);
		return rejectWithValue(message);
	}
});

export const getAllCarAction = createAsyncThunk("car/getAll", async (_,thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		const response = await axios.get("https://65d24788987977636bfc333b.mockapi.io/api/cars");
		return response.data;
	} catch (error) {
		const message = error.response?.data || error.message;
		return rejectWithValue(message);
	}
});

export const deleteCarAction = createAsyncThunk("car/delete", async (id,thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
	
		const response = await axios.delete(`https://65d24788987977636bfc333b.mockapi.io/api/cars/${id}`);
		return id;
	} catch (error) {
		const message = error.response?.data || error.message;
		return rejectWithValue(message);
	}
});

export const addCarAction = createAsyncThunk("car/add", async (car,thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		// console.log(car)
	 await axios.post(`https://65d24788987977636bfc333b.mockapi.io/api/cars`,car);
	return car;

	} catch (error) {
		const message = error.response?.data || error.message;
		return rejectWithValue(message);
	}
});
export const updateCarAction = createAsyncThunk("car/update", async ({id,updatedInfo},thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		// console.log(car)
		const response = await axios.put(`https://65d24788987977636bfc333b.mockapi.io/api/cars/${id}`,updatedInfo);
		return response.data;
	} catch (error) {
		const message = error.response?.data || error.message;
		return rejectWithValue(message);
	}
});
