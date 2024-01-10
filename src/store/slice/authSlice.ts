import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IUser {
  useremail: string;
  userpassword: string;
}

interface AuthInitialState {
  user: IUser | null;
}
export interface RootState {
  auth: AuthInitialState;
}

// const initialState: AuthInitialState = {
//   user: null,

// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setUser: (state, action: PayloadAction<IUser>) => {
//       state.user = action.payload;
//     },
//   },
// });
// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: { setUser: (state, action: PayloadAction<IUser>) => {
//      state.user = action.payload;
//    },},
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginAsync.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//       })
//       .addCase(loginAsync.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       .addCase(registerAsync.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//       })
//       .addCase(registerAsync.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

const YourAuthService = {
  login: async (useremail: string, userpassword: string) => {
    return { useremail, userpassword };
  },
  register: async (useremail: string, userpassword: string) => {
    return { useremail, userpassword };
  },
};

export const loginAsync = createAsyncThunk(
  "auth/login",
  async ({ useremail, userpassword }: IUser, thunkAPI) => {
    try {
      const response = await YourAuthService.login(useremail, userpassword);
      return response;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerAsync = createAsyncThunk(
  "auth/register",
  async ({ useremail, userpassword }: IUser, thunkAPI) => {
    try {
      const response = await YourAuthService.register(useremail, userpassword);
      return response;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.message);
    }
  }
);

interface AuthInitialState {
  user: IUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthInitialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        // state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? String(action.payload) : "Login failed";
      })
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.loading = false;
        // state.user = action.payload;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? String(action.payload)
          : "Registration failed";
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
