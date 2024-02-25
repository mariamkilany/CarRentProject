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

export const addCarAction = createAsyncThunk(
  "car/add",
  async (car, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await axios.post(
        `https://65d24788987977636bfc333b.mockapi.io/api/cars`,
        car
      );
      return car;
    } catch (error) {
      const message = error.response?.data || error.message;
      return rejectWithValue(message);
    }
  }
);
export const updateCarAction = createAsyncThunk(
  "car/update",
  async ({ id, updatedInfo }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.put(
        `https://65d24788987977636bfc333b.mockapi.io/api/cars/${id}`,
        updatedInfo
      );
      return response.data;
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

export const getCarsTypes = createAsyncThunk(
  "cars/getCarsTypes",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(
        "https://65d24788987977636bfc333b.mockapi.io/api/cars"
      );
      const types = [
        ...new Set(
          response.data.map((ele) => {
            return ele.type;
          })
        ),
      ];

      return types;
    } catch (error) {
      const message = error.response?.data || error.message;
      return rejectWithValue(message);
    }
  }
);

export const getCarsCapacity = createAsyncThunk(
  "cars/getCarsCapacity",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(
        "https://65d24788987977636bfc333b.mockapi.io/api/cars"
      );
      const capacity = [
        ...new Set(
          response.data.map((ele) => {
            return Number(ele.chairCapacity);
          })
        ),
      ];
      capacity.sort((a, b) => a - b);
      return capacity;
    } catch (error) {
      const message = error.response?.data || error.message;
      return rejectWithValue(message);
    }
  }
);

export const getCarsByTypes = createAsyncThunk(
  "cars/getCarsByTypes",
  async (types, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    let url = "https://65d24788987977636bfc333b.mockapi.io/api/cars?";
    Object.keys(types).map((key) => {
      url += `$type=${key}|`;
    });
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      const message = error.response?.data || error.message;
      return rejectWithValue(message);
    }
  }
);

export const getCarsTransactions = createAsyncThunk(
  "cars/getCarsTransactions",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(
        `https://65d24788987977636bfc333b.mockapi.io/api/cars`
      );
      const transactions = response.data.map((car) => car.transactions);
      return transactions;
    } catch (error) {
      const message = error.response?.data || error.message;
      return rejectWithValue(message);
    }
  }
);
