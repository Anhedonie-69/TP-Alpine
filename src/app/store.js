import { configureStore } from '@reduxjs/toolkit';
import configuratorReducer from '../features/configurator/configuratorSlice';

export const store = configureStore({
  reducer: {
    configurator: configuratorReducer,
  },
})