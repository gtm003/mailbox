import { Box, Button } from '@mui/material';
import { uniqueId, difference } from 'lodash';
import React, { useState } from 'react';

import { NAV_ITEMS } from '../../../constants/navItems';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { createFolder } from '../../../store/folders/foldersSlice';
import { FolderState } from '../../../store/folders/initialState';
import { CustomInput } from '../../ui-kit/CustomInput/CustomInput';

import { NavItem } from './NavItem/NavItem';

import styles from './Navigation.module.scss';

export const Navigation: React.FC = () => {
  const [isCreate, setIsCreate] = useState(false);
  const folders = useAppSelector((state) => state.folders.folders);
  const readLetterIds = useAppSelector((state) => state.folders.readLetterIds);
  const existedNames = folders.map((folder: FolderState) => folder.name);
  const customFolders = folders.slice(NAV_ITEMS.length);
  const dispatch = useAppDispatch();
  const onClickCreateFolderBtn = () => {
    setIsCreate(true);
  };
  const createFolderInStore = (folderName: string) => {
    const letterIds: number[] = [];
    const folder = {
      name: folderName,
      path: uniqueId('CustomFolder_'),
      letterIds: letterIds,
    };

    dispatch(createFolder(folder));
    setIsCreate(false);
  };

  return (
    <div className={styles.container}>
      <Box className={styles.navigation}>
        {NAV_ITEMS.map((folder, index) => (
          <NavItem
            key={folder.name}
            name={folder.name}
            icon={folder.icon}
            path={folder.path}
            numberOfUnreadLetters={
              difference(folders[index].letterIds, readLetterIds).length
            }
          />
        ))}
      </Box>
      <Box className={styles.navigation}>
        {customFolders.map((folder: FolderState) => (
          <NavItem
            key={folder.name}
            name={folder.name}
            path={folder.path}
            numberOfUnreadLetters={
              difference(folder.letterIds, readLetterIds).length
            }
          />
        ))}
        {!isCreate ? (
          <Button
            className={styles.createBtn}
            variant="contained"
            onClick={onClickCreateFolderBtn}
          >
            создать папку
          </Button>
        ) : (
          <CustomInput
            defaultValue="Новая папка"
            updateStore={createFolderInStore}
            existedNames={existedNames}
          />
        )}
      </Box>
    </div>
  );
};
