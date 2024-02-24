import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("Auth/fetchData", async (requestData) => {
  const response = await axios.post("https://dummyjson.com/auth/login", requestData);
  return response.data;
});

const initialState = {
  data: [],
  status: "idle",
  error: null,
  token:"",
  isAuthneticate : false,
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.token = action.payload.token;
        state.isAuthneticate = true
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default AuthSlice.reducer;
