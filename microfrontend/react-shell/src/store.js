// host/src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { name: 'Host User' },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

export default store;
