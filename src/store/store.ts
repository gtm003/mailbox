import { configureStore } from '@reduxjs/toolkit';

import lettersReducer from './letters/lettersSlise';

export const store = configureStore({
  reducer: {
    letters: lettersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
