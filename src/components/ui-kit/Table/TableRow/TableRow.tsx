import { Box, Card, Typography } from '@mui/material';
import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '../../../../helpers/formatDate';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { checkAsRead } from '../../../../store/folders/foldersSlice';
import { Letter } from '../../../../ts/models/letter.model';

import styles from './TableRow.module.scss';

interface TableRowProps {
  letter: Letter;
  isRead: boolean;
}

export const TableRow: React.FC<TableRowProps> = ({
  letter,
  isRead,
}): JSX.Element => {
  const { author, text, date, id } = letter;
  const dispatch = useAppDispatch();
  const onClickLetter = () => {
    if (!isRead) {
      dispatch(checkAsRead(id));
    }
  };

  return (
    <Link to={`letter/${id}`} onClick={onClickLetter}>
      <Card
        className={classNames({
          [styles.container]: true,
          [styles.bold]: !isRead,
        })}
      >
        <Box>
          <Typography className={styles.name}>{author}</Typography>
        </Box>
        <Box className={styles.preview}>
          <Typography className={styles.preview}>{text}</Typography>
        </Box>
        <Box>
          <Typography className={styles.date}>{formatDate(date)}</Typography>
        </Box>
      </Card>
    </Link>
  );
};
