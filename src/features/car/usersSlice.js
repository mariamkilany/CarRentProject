import { createSlice } from "@reduxjs/toolkit";
import { getAllUsersAction ,deleteUsersAction,addUserAction } from "./usersAction";


const initialState = {
	users: [],
	loading: false,
	error: null,
	errorMessage: null,
};

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		reset: state => initialState,
	},
	extraReducers: builder => {
		builder.addCase(getAllUsersAction.fulfilled, (state, action) => {
			state.users = action.payload;
		});
		builder.addCase(getAllUsersAction.pending, state => {
			state.loading = true;
		});
		builder.addCase(getAllUsersAction.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error;
			state.errorMessage = action.payload;
		});
        builder.addCase(deleteUsersAction.fulfilled, (state, action) => {
			state.users = state.users.filter(users=> users.id !== action.payload);
		});
		builder.addCase(addUserAction.fulfilled, (state, action) => {
			state.users = state.users.push(action.payload);
		});
		

	},
});

export default usersSlice.reducer;

export const { reset } = usersSlice.actions;
