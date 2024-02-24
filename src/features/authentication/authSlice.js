/* eslint-disable eqeqeq */
import { createSlice } from "@reduxjs/toolkit";
import { RegisterUser, canUserLogin } from "./authActions";

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const userSlice = createSlice({
  name: "user",
  initialState: getCookie("user")
    ? { user: JSON.parse(getCookie("user")) }
    : { user: {} },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(canUserLogin.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(canUserLogin.rejected, (state, action) => {
      state.user = { user: {} };
    });
    builder.addCase(RegisterUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
