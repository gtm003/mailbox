import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Card,
  CardActions,
  IconButton,
  Typography,
} from '@mui/material';
import classNames from 'classnames';
import React, { ReactNode, useState } from 'react';

import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import {
  changeCurrentFolder,
  deleteFolder,
  renameFolder,
} from '../../../../store/folders/foldersSlice';
import { CustomInput } from '../../../ui-kit/CustomInput/CustomInput';

import styles from './NavItem.module.scss';

interface NavItemProps {
  name: string;
  icon?: ReactNode;
}

export const NavItem: React.FC<NavItemProps> = ({ name, icon }) => {
  const [isEdit, setIsEdit] = useState(false);
  const currentFolder = useAppSelector((state) => state.folders.current);
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

  return (
    <Box className={styles.container}>
      <Card
        className={classNames({
          [styles.folder]: true,
          [styles.active]: name === currentFolder,
        })}
      >
        {isEdit ? (
          <CustomInput defaultValue={name} updateStore={changeName} />
        ) : (
          <Box className={styles.label} onClick={onClickFolder}>
            {icon && <IconButton>{icon}</IconButton>}
            <Typography className={styles.name}>{name}</Typography>
          </Box>
        )}
      </Card>
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
