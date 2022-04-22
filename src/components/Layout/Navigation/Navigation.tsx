import DraftsIcon from '@mui/icons-material/Drafts';
import ErrorIcon from '@mui/icons-material/Error';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import React from 'react';

import { Folder } from '../../../ts/enums/enums';

import styles from './Navigation.module.scss';

export const Navigation: React.FC = () => {
  return (
    <div className={styles.container}>
      <Button startIcon={<InboxIcon />}>{Folder.Inbox}</Button>
      <Button startIcon={<SendIcon />}>{Folder.Sent}</Button>
      <Button startIcon={<DraftsIcon />}>{Folder.Drafts}</Button>
      <Button startIcon={<ErrorIcon />}>{Folder.Spam}</Button>
    </div>
  );
};
