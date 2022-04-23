import DeleteIcon from '@mui/icons-material/Delete';
import DraftsIcon from '@mui/icons-material/Drafts';
import ErrorIcon from '@mui/icons-material/Error';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button } from '@mui/material';
import React, { useState } from 'react';

import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { createFolder } from '../../../store/folders/foldersSlice';
import { Folder } from '../../../ts/enums/enums';
import { CustomInput } from '../../ui-kit/CustomInput/CustomInput';

import { NavItem } from './NavItem/NavItem';

import styles from './Navigation.module.scss';

const NAV_ITEMS = [
  {
    name: Folder.Inbox,
    icon: <InboxIcon />,
  },
  {
    name: Folder.Sent,
    icon: <SendIcon />,
  },
  {
    name: Folder.Drafts,
    icon: <DraftsIcon />,
  },
  {
    name: Folder.Deleted,
    icon: <DeleteIcon />,
  },
  {
    name: Folder.Spam,
    icon: <ErrorIcon />,
  },
];

export const Navigation: React.FC = () => {
  const [isCreate, setIsCreate] = useState(false);
  const customFolders = useAppSelector((state) => state.folders.customFolders);
  const dispatch = useAppDispatch();
  const onClickCreateFolderBtn = () => {
    setIsCreate(true);
  };
  const createFolderInStore = (folderName: string) => {
    const letters: number[] = [];
    const folder = {
      name: folderName,
      letters: letters,
    };

    dispatch(createFolder(folder));
    setIsCreate(false);
  };

  return (
    <div className={styles.container}>
      <Box className={styles.navigation}>
        {NAV_ITEMS.map((folder) => (
          <NavItem key={folder.name} name={folder.name} icon={folder.icon} />
        ))}
      </Box>
      <Box className={styles.navigation}>
        {customFolders.map((folder) => (
          <NavItem key={folder.name} name={folder.name} />
        ))}
        {!isCreate ? (
          <Button
            className={styles.createBtn}
            variant="outlined"
            onClick={onClickCreateFolderBtn}
          >
            создать папку
          </Button>
        ) : (
          <CustomInput
            defaultValue="Новая папка"
            updateStore={createFolderInStore}
          />
        )}
      </Box>
    </div>
  );
};
