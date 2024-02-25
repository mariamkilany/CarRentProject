import { createSlice } from "@reduxjs/toolkit";
import {
  deleteCarAction,
  getAllCarAction,
  addCarAction,
  updateCarAction,
  getCarById,
  // getCarsTypes,
  // getCarsCapacity,
  // getCarsByTypes,
  // getCarsTransactions,
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
    getCarsTypes: (state) => {
      const types = [
        ...new Set(
          state.car.map((ele) => {
            return ele.type;
          })
        ),
      ];
      return {
        ...state,
        carsTypes: types,
      };
    },
    getCarsCapacity: (state) => {
      const capacity = [
        ...new Set(
          state.car.map((ele) => {
            return Number(ele.chairCapacity);
          })
        ),
      ];
      capacity.sort((a, b) => a - b);
      return {
        ...state,
        carsCapacity: capacity,
      };
    },
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
    // builder.addCase(getCarsByTypes.fulfilled, (state, action) => {
    //   state.car = action.payload;
    //   console.log(state.car);
    //   state.loading = false;
    // });
    // builder.addCase(getCarsByTypes.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(getCarsByTypes.rejected, (state, action) => {
    //   state.loading = false;
    // });
  },
});

export default carSlice.reducer;

export const { reset, getCarsTypes, getCarsCapacity, getCarsByTypes } =
  carSlice.actions;
