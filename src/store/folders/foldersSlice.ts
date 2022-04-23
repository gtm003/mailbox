import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import initialState, { FolderState } from './initialState';

export const foldersSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    changeCurrentFolder(state, action: PayloadAction<string>) {
      state.current = action.payload;
    },
    createFolder(state, action: PayloadAction<FolderState>) {
      state.customFolders = [...state.customFolders, action.payload];
    },
    renameFolder(state, action: PayloadAction<[string, string]>) {
      state.customFolders = state.customFolders.map((folder) => {
        if (action.payload[0] === folder.name) {
          return {
            name: action.payload[1],
            letters: folder.letters,
          };
        }

        return folder;
      });
    },
    deleteFolder(state, action: PayloadAction<string>) {
      state.customFolders = state.customFolders.filter(
        (folder) => folder.name !== action.payload
      );
    },
  },
});
export const { changeCurrentFolder, createFolder, deleteFolder, renameFolder } = foldersSlice.actions;
export default foldersSlice.reducer;
