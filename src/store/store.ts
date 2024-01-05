import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import { matchApi } from "./API/matchApi";
// import { postApi } from "./API/postApi";

export const store = configureStore({
  reducer: {
    userSlice,
    [matchApi.reducerPath]: matchApi.reducer,
    // [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat([authApi.middleware, postApi.middleware]),
    getDefaultMiddleware().concat([matchApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
