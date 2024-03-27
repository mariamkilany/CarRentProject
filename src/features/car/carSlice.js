import { createSlice } from "@reduxjs/toolkit";
import {
  deleteCarAction,
  getAllCarAction,
  addCarAction,
  updateCarAction,
} from "./carActions";
import { useDispatch } from "react-redux";

const initialState = {
  car: [],
  loading: false,
  error: null,
  carsTypes: [],
  carsCapacity: [],
  carsTransactions: [],
  filteredCars: [],
  selectedCar: null,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    reset: (state) => initialState,
    getCarsByTypes: (state, action) => {
      let filteredCars = [];
      Object.keys(action.payload).map((key) => {
        if (action.payload[key]) {
          state.car.forEach((ele) => {
            if (ele.type === key) filteredCars.push(ele);
          });
        }
      });
      if (filteredCars.length === 0) filteredCars = state.car;
      return { ...state, filteredCars };
    },
    getCarsTransactions: (state, action) => {
      const transactions = state.car.map((car) => car.transactions);
      return { ...state, carsTransactions: transactions };
    },
    addCarToWishList: (state, action) => {
      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      };
    },
    deleteFromWishList: (state, action) => {
      const newWishList = state.wishList.filter(
        (ele) => ele.id !== action.payload
      );
      return {
        ...state,
        wishList: newWishList,
      };
    },
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
      state.filteredCars = action.payload;
      const types = [
        ...new Set(
          action.payload.map((ele) => {
            return ele.type;
          })
        ),
      ];
      const capacity = [
        ...new Set(
          state.car.map((ele) => {
            return Number(ele.chairCapacity);
          })
        ),
      ];
      capacity.sort((a, b) => a - b);
      state.carsCapacity = capacity;
      state.carsTypes = types;
      state.loading = false;
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
  },
});

export default carSlice.reducer;

export const { reset, getCarsByTypes, getCarsTransactions } = carSlice.actions;
