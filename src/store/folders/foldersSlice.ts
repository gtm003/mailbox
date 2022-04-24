import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Folder } from '../../ts/enums/enums';

import initialState, { FolderState } from './initialState';

export const foldersSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    changeCurrentFolder(state, action: PayloadAction<string>) {
      state.current = action.payload;
    },
    createFolder(state, action: PayloadAction<FolderState>) {
      state.folders = [...state.folders, action.payload];
    },
    renameFolder(state, action: PayloadAction<[string, string]>) {
      console.log(state.current);
      if (state.current === action.payload[0]) {
        state.current = action.payload[1];
      }
      state.folders = state.folders.map((folder) => {
        if (action.payload[0] === folder.name) {
          return {
            ...folder,
            name: action.payload[1],
          };
        }

        return folder;
      });
    },
    deleteFolder(state, action: PayloadAction<string>) {
      console.log(state.current);
      if (state.current === action.payload) {
        state.current = Folder.Inbox;
      }
      state.folders = state.folders.filter(
        (folder) => folder.name !== action.payload
      );
    },
  },
});
export const { changeCurrentFolder, createFolder, deleteFolder, renameFolder } =
  foldersSlice.actions;
export default foldersSlice.reducer;
