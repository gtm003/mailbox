import { Folder } from '../../ts/enums/enums';

export interface FolderState {
  name: string;
  letters: number[];
}

const initialState = {
  current: Folder.Inbox as string,
  defaultFolders: [
    { name: Folder.Inbox, letters: [] },
    { name: Folder.Sent, letters: [] },
    { name: Folder.Drafts, letters: [] },
    { name: Folder.Deleted, letters: [] },
    { name: Folder.Spam, letters: [] },
  ],
  customFolders: [{ name: 'New Folder', letters: [] }] as FolderState[],
};

export default initialState;
