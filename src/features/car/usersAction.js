import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllUsersAction = createAsyncThunk("users/getAll", async (_,thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		const response = await axios.get("https://65d24788987977636bfc333b.mockapi.io/api/users");
		return response.data;
	} catch (error) {
		const message = error.response?.data || error.message;
		return rejectWithValue(message);
	}
});
export const deleteUsersAction = createAsyncThunk("users/delete", async (id,thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
	
		const response = await axios.delete(`https://65d24788987977636bfc333b.mockapi.io/api/users/${id}`);
		return id;
	} catch (error) {
		const message = error.response?.data || error.message;
		return rejectWithValue(message);
	}
});
export const addUserAction = createAsyncThunk("users/add", async (user,thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
	
		const response = await axios.post(`https://65d24788987977636bfc333b.mockapi.io/api/users`,user);
		return response.data;
	} catch (error) {
		const message = error.response?.data || error.message;
		return rejectWithValue(message);
	}
});

