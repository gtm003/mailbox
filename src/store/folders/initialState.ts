import { NAV_ITEMS } from '../../constants/navItems';
import data from '../../data/data';
import { Folder } from '../../ts/enums/enums';
import { Letter } from '../../ts/models/letter.model';

export interface FolderState {
  name: string;
  path: string;
  letterIds: number[];
}
const getLetterIds = (data: Letter[], folder: string) =>
  data
    .filter((letter: Letter) => letter.folder === folder)
    .map((letter: Letter) => letter.id);

const initialState = {
  current: Folder.Inbox as string,
  folders: Object.values(Folder).map((folder) => ({
    name: folder,
    path: NAV_ITEMS.filter((item) => item.name === folder)[0].path,
    letterIds: getLetterIds(data, folder),
  })) as FolderState[],
  readLetterIds: data
    .filter((letter) => letter.isRead)
    .map((letter) => letter.id),
};

export default initialState;
