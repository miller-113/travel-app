import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const fetchTrips = createAsyncThunk("trips/fetchTrips", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get("/trips");
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const fetchTripById = createAsyncThunk(
  "trips/fetchTripById",
  async (tripId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/trips/${tripId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
