import { createSlice } from "@reduxjs/toolkit";
import {
  deleteCarAction,
  getAllCarAction,
  addCarAction,
  updateCarAction,
  getCarById,
  getCarsTypes,
  getCarsCapacity,
  getCarsByTypes,
  getCarsTransactions,
} from "./carActions";
import { useDispatch } from "react-redux";

const initialState = {
  car: [],
  loading: false,
  error: null,
  carsTypes: [],
  carsCapacity: [],
  carsTransactions: [],
  selectedCar: null,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(addCarAction.fulfilled, (state, action) => {
      state.car.push(action.payload);
    });
    builder.addCase(updateCarAction.fulfilled, (state, action) => {
      const filteredCar = state.car.findIndex(
        (car) => car.id == action.payload.id
      );
      state.car[filteredCar] = action.payload;
    });
    builder.addCase(getAllCarAction.fulfilled, (state, action) => {
      state.car = action.payload;
    });
    builder.addCase(getAllCarAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllCarAction.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(deleteCarAction.fulfilled, (state, action) => {
      state.car = state.car.filter((car) => car.id !== action.payload);
    });
    builder.addCase(deleteCarAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteCarAction.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(getCarById.fulfilled, (state, action) => {
      state.loading = false;
      state.selectedCar = state.payload;
    });
    builder.addCase(getCarById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCarById.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getCarsTypes.fulfilled, (state, action) => {
      state.carsTypes = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getCarsTypes.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCarsTypes.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getCarsCapacity.fulfilled, (state, action) => {
      state.carsCapacity = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getCarsCapacity.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCarsCapacity.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getCarsTransactions.fulfilled, (state, action) => {
      state.carsTransactions = action.payload;
    });
  },
});

export default carSlice.reducer;

export const { reset } = carSlice.actions;
