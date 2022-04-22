import { createSlice } from '@reduxjs/toolkit';

import initialState from './initialState';

export const lettersSlice = createSlice({
  name: 'letters',
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    // fill in async logic here
  },
});

export default lettersSlice.reducer;
