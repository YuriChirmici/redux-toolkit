import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/user"
import { fetchUsers } from "./createActions";

interface IUserState {
	users: IUser[];
	isLoading: boolean;
	error: string;
}

const initialState: IUserState = {
	users: [],
	isLoading: false,
	error: ""
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		removeUser: (state, action: PayloadAction<IUser>) => {
			state.users = state.users.filter(({ id }) => id !== action.payload.id);
		}
	},
	extraReducers: {
		[fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
			state.users = action.payload;
			state.isLoading = false;
			state.error = "";
		},
		[fetchUsers.pending.type]: (state) => {
			state.isLoading = true;
		},
		[fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	}
});

export const userReducer = userSlice.reducer;