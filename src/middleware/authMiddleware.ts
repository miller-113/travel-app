import { createListenerMiddleware, isRejectedWithValue } from "@reduxjs/toolkit";
import { signOut } from "../features/auth/authThunks";
import { toast } from "react-toastify";

const authMiddleware = createListenerMiddleware();

authMiddleware.startListening({
  matcher: isRejectedWithValue,
  effect: async (action, listenerApi) => {
    const status = action.payload?.message;
    if (status === "Unauthorized user") {

      toast.error("Session expired. Please log in again.", { className: "notification" });
      setTimeout(() => {
        listenerApi.dispatch(signOut());
        window.location.href = "/travel-app/sign-in";
      }, 5000)
    } else {
      toast.error(action.payload.message || "Unknown error", { className: "notification" });
    }
  },
});

export default authMiddleware;
