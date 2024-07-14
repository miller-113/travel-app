import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import bookingsReducer from "../features/bookings/bookingsSlice";
import tripsReducer from "../features/trips/tripsSlice";
import authMiddleware from "../middleware/authMiddleware";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    bookings: bookingsReducer,
    trips: tripsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware.middleware),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch