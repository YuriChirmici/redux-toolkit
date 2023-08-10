import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
	"user/fetchAll",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get("https://jsonplaceholder.typicode.com/users");
			return response.data;
		} catch (err) {
			return thunkAPI.rejectWithValue(String(err));
		}
	}
)