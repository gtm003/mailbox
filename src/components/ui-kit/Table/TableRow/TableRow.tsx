import { Box, Card, Typography } from '@mui/material';
import classNames from 'classnames';
import React from 'react';

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
  const { author, text, date } = letter;

  const formatDate = (date: Date) => {
    const currentYear = new Date().getFullYear();
    const optionsDefault: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };
    const optionsCurrentYear: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
    };

    return currentYear === date.getFullYear()
      ? date.toLocaleString('ru-Ru', optionsCurrentYear)
      : date.toLocaleString('ru-Ru', optionsDefault);
  };

  return (
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
  );
};
