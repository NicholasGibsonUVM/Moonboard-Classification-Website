import { configureStore } from '@reduxjs/toolkit';
import boardReducer from '../features/moonboard/boardSlice';

export const store = configureStore({
  reducer: {
    board: boardReducer
  },
});
