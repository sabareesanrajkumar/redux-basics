import { configureStore, createSlice } from '@reduxjs/toolkit';
import authReducer from './authSlice';
const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authReducer },
});

export const counterActions = counterSlice.actions;
export default store;
