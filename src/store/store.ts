import { configureStore } from '@reduxjs/toolkit';

import foldersReducer from './folders/foldersSlice';
import lettersReducer from './letters/lettersSlice';

export const store = configureStore({
  reducer: {
    folders: foldersReducer,
    letters: lettersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
