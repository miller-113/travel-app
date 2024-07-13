import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const signIn = createAsyncThunk("auth/signIn", async (credentials, { rejectWithValue }) => {
  try {
    const response = await api.post("/auth/sign-in", credentials);
    localStorage.setItem("token", response.data.token);
    return response.data.user;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const signUp = createAsyncThunk("auth/signUp", async (credentials, { rejectWithValue }) => {
  try {
    const response = await api.post("/auth/sign-up", credentials);
    localStorage.setItem("token", response.data.token);
    return response.data.user;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const fetchAuthenticatedUser = createAsyncThunk(
  "auth/fetchAuthenticatedUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/auth/authenticated-user");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const signOut = createAsyncThunk("auth/signOut", async () => {
  localStorage.removeItem("token");
});
