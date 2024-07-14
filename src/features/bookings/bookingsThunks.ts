import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const fetchBookings = createAsyncThunk(
  "bookings/fetchBookings",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/bookings");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const cancelBooking = createAsyncThunk(
  "bookings/cancelBooking",
  async (bookingId, { rejectWithValue }) => {
    try {
      await api.delete(`/bookings/${bookingId}`);
      return bookingId;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const bookTrip = createAsyncThunk(
  "bookings/bookTrip",
  async ({ tripId, guests, date }, { rejectWithValue }) => {
    try {
      const response = await api.post("/bookings", { tripId, guests, date });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
