import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCarAction = createAsyncThunk(
  "car/getAll",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(
        "https://65d24788987977636bfc333b.mockapi.io/api/cars"
      );
      return response.data;
    } catch (error) {
      const message = error.response?.data || error.message;
      return rejectWithValue(message);
    }
  }
);

export const deleteCarAction = createAsyncThunk(
  "car/delete",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.delete(
        `https://65d24788987977636bfc333b.mockapi.io/api/cars/${id}`
      );
      return id;
    } catch (error) {
      const message = error.response?.data || error.message;
      return rejectWithValue(message);
    }
  }
);

export const getCarById = createAsyncThunk(
  "car/getCarById",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(
        `https://65d24788987977636bfc333b.mockapi.io/api/cars/${id}`
      );
      return response.data;
    } catch (error) {
      const message = error.response?.data || error.message;
      return rejectWithValue(message);
    }
  }
);
