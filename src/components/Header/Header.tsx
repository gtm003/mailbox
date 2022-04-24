import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Badge, Toolbar, Box, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { NUMBER_OF_LETTERS } from '../../constants/constants';
import { useAppSelector } from '../../hooks/useAppSelector';

import styles from './Header.module.scss';

export const Header = () => {
  const readLetterIds = useAppSelector((state) => state.folders.readLetterIds);

  return (
    <AppBar className={styles.appBar}>
      <Toolbar className={styles.toolBar}>
        <IconButton className={styles.account}>
          <MenuIcon className={styles.menuIcon} />
        </IconButton>
        <Box className={styles.header}>
          <Link to="NewLetters">
            <IconButton
              size="large"
              color="inherit"
            >
              <Badge
                badgeContent={NUMBER_OF_LETTERS - readLetterIds.length}
                color="error"
              >
                <MailIcon />
              </Badge>
            </IconButton>
          </Link>
          <IconButton>
            <AccountCircle className={styles.accountIcon} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
