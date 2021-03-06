import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Card, CardActions, IconButton, Typography } from '@mui/material';
import classNames from 'classnames';
import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import {
  changeCurrentFolder,
  deleteFolder,
  renameFolder,
} from '../../../../store/folders/foldersSlice';
import { FolderState } from '../../../../store/folders/initialState';
import { CustomInput } from '../../../ui-kit/CustomInput/CustomInput';

import styles from './NavItem.module.scss';

interface NavItemProps {
  name: string;
  path: string;
  icon?: ReactNode;
  numberOfUnreadLetters: number;
}

export const NavItem: React.FC<NavItemProps> = ({
  name,
  path,
  icon,
  numberOfUnreadLetters,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const currentFolder = useAppSelector((state) => state.folders.current);
  const folders = useAppSelector((state) => state.folders.folders);
  const existedNames = folders.map((folder: FolderState) => folder.name);
  const dispatch = useAppDispatch();
  const onClickFolder = () => {
    dispatch(changeCurrentFolder(name));
  };
  const onClickDeleteBtn = () => {
    dispatch(deleteFolder(name));
  };
  const onClickEditBtn = () => {
    setIsEdit(true);
  };

  const changeName = (newName: string) => {
    dispatch(renameFolder([name, newName]));
    setIsEdit(false);
  };

  if (isEdit) {
    return (
      <Box>
        <CustomInput
          defaultValue={name}
          updateStore={changeName}
          existedNames={existedNames}
        />
      </Box>
    );
  }

  return (
    <Box className={styles.container}>
      <Link to={path}>
        <Card
          className={classNames({
            [styles.folder]: true,
            [styles.active]: name === currentFolder,
          })}
        >
          <Box className={styles.label} onClick={onClickFolder}>
            {icon && <IconButton>{icon}</IconButton>}
            <Typography
              className={classNames({
                [styles.name]: true,
                [styles.bold]: numberOfUnreadLetters,
              })}
            >
              {name}
            </Typography>
          </Box>
          {Boolean(numberOfUnreadLetters) && (
            <Typography
              className={classNames({
                [styles.name]: true,
                [styles.bold]: numberOfUnreadLetters,
              })}
            >
              {numberOfUnreadLetters}
            </Typography>
          )}
        </Card>
      </Link>
      {!icon && (
        <CardActions className={styles.actions}>
          <IconButton onClick={onClickEditBtn}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onClickDeleteBtn}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      )}
    </Box>
  );
};
