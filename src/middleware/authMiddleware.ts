import { createListenerMiddleware, isRejectedWithValue } from "@reduxjs/toolkit";
import { signOut } from "../features/auth/authThunks";

const authMiddleware = createListenerMiddleware();

authMiddleware.startListening({
  matcher: isRejectedWithValue,
  effect: async (action, listenerApi) => {
    const status = action.payload?.status;
    if (status === 401) {
      listenerApi.dispatch(signOut());
    }
  },
});

export default authMiddleware;
