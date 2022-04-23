import data from '../../data/data';
import { Folder } from '../../ts/enums/enums';

export interface FolderState {
  name: string;
  letterIds: number[];
}

const initialState = {
  current: Folder.Inbox as string,
  defaultFolders: [
    { name: Folder.Inbox, letterIds: [] },
    { name: Folder.Sent, letterIds: [] },
    { name: Folder.Drafts, letterIds: [] },
    { name: Folder.Deleted, letterIds: [] },
    { name: Folder.Spam, letterIds: [] },
  ],
  customFolders: [] as FolderState[],
  readLetterIds: data
    .filter((letter) => letter.isRead)
    .map((letter) => letter.id),
};

export default initialState;
