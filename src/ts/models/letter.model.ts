import { Folder } from '../enums/enums';

export interface Letter {
  id: number;
  folder: Folder;
  author: string;
  email: string;
  text: string;
  date: Date;
  isRead: boolean;
}
