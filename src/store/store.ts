import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import { authApi } from "./API/authApi";
// import { postApi } from "./API/postApi";

export const store = configureStore({
  reducer: {
    userSlice,
    [authApi.reducerPath]: authApi.reducer,
    // [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat([authApi.middleware, postApi.middleware]),
    getDefaultMiddleware().concat([authApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
