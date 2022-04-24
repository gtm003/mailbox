import DeleteIcon from '@mui/icons-material/Delete';
import DraftsIcon from '@mui/icons-material/Drafts';
import ErrorIcon from '@mui/icons-material/Error';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';

import { Folder } from '../ts/enums/enums';

export const NAV_ITEMS = [
  {
    name: Folder.Inbox,
    path: 'Inbox',
    icon: <InboxIcon />,
  },
  {
    name: Folder.Sent,
    path: 'Sent',
    icon: <SendIcon />,
  },
  {
    name: Folder.Drafts,
    path: 'Drafts',
    icon: <DraftsIcon />,
  },
  {
    name: Folder.Deleted,
    path: 'Deleted',
    icon: <DeleteIcon />,
  },
  {
    name: Folder.Spam,
    path: 'Spam',
    icon: <ErrorIcon />,
  },
];
