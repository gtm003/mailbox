import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Folder } from '../../ts/enums/enums';

import initialState, { FolderState } from './initialState';

export const foldersSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    changeCurrentFolder(state, action: PayloadAction<string>) {
      state.current = action.payload;
      localStorage.setItem('state', JSON.stringify(state));
    },
    createFolder(state, action: PayloadAction<FolderState>) {
      state.folders = [...state.folders, action.payload];
      localStorage.setItem('state', JSON.stringify(state));
    },
    renameFolder(state, action: PayloadAction<[string, string]>) {
      if (state.current === action.payload[0]) {
        state.current = action.payload[1];
      }
      state.folders = state.folders.map((folder: FolderState) => {
        if (action.payload[0] === folder.name) {
          return {
            ...folder,
            name: action.payload[1],
          };
        }

        return folder;
      });
      localStorage.setItem('state', JSON.stringify(state));
    },
    deleteFolder(state, action: PayloadAction<string>) {
      if (state.current === action.payload) {
        state.current = Folder.Inbox;
      }
      state.folders = state.folders.filter(
        (folder: FolderState) => folder.name !== action.payload
      );
      localStorage.setItem('state', JSON.stringify(state));
    },
    checkAsRead(state, action: PayloadAction<number>) {
      state.readLetterIds = [...state.readLetterIds, action.payload];
      localStorage.setItem('state', JSON.stringify(state));
    },
  },
});
export const {
  changeCurrentFolder,
  createFolder,
  deleteFolder,
  renameFolder,
  checkAsRead,
} = foldersSlice.actions;
export default foldersSlice.reducer;
