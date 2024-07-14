import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export interface BookTripData {
  tripId: string; 
  guests: number;
  date: string;
}

export const fetchBookings = createAsyncThunk(
  "bookings/fetchBookings",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/bookings");
      return response.data;
    } catch (error: any) {
      return rejectWithValue({ message: error.response?.data?.message || "Unknown error" });
    }
  }
);

export const cancelBooking = createAsyncThunk(
  "bookings/cancelBooking",
  async (bookingId: string, { rejectWithValue }) => {
    try {
      await api.delete(`/bookings/${bookingId}`);
      return bookingId;
    } catch (error: any) {
      return rejectWithValue({ message: error.response?.data?.message || "Unknown error" });
    }
  }
);

export const bookTrip = createAsyncThunk(
  "bookings/bookTrip",
  async ({ tripId, guests, date }: BookTripData, { rejectWithValue }) => {
    try {
      const response = await api.post("/bookings", { tripId, guests, date });
      return response.data;
    } catch (error: any) {
      return rejectWithValue({ message: error.response?.data?.message || "Unknown error" });
    }
  }
);
