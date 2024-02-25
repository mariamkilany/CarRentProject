import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const UsersApi = "https://65d24788987977636bfc333b.mockapi.io/api/users";

export const canUserLogin = createAsyncThunk(
  "user/Login",
  async (login, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios({
        method: "get",
        url: `${UsersApi}/?email=${login.email}&password=${login.password}`,
      });
      if (
        response.data[0].email === login.email &&
        response.data[0].password === login.password
      ) {
        console.log("Logged-In With", response.data[0].email);
        return response.data[0];
      } else {
        console.log("Wrong Email or Password");
        throw new Error("Error");
      }
    } catch (error) {
      const message = error.response?.data || error.message;
      console.log(message);
      return rejectWithValue(message);
    }
  }
);

export const RegisterUser = createAsyncThunk(
  "user/Register",
  async (newUser, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      console.log("Post User");
      const response = await axios.post(UsersApi, {
        ...newUser,
        name: newUser.firstName + " " + newUser.lastName,
      });

      return {
        ...newUser,
        name: newUser.firstName + " " + newUser.lastName,
      };
    } catch (error) {
      const message = error.response?.data || error.message;
      console.log(message);
      return rejectWithValue(message);
    }
  }
);
