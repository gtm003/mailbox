import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

import { formatDate } from '../../helpers/formatDate';
import { Letter as LetterModel } from '../../ts/models/letter.model';

import styles from './Letter.module.scss';

interface LetterProps {
  letter: LetterModel;
}

export const Letter: React.FC<LetterProps> = ({ letter }) => {
  return (
    <Paper className={styles.container}>
      <Box className={styles.head}>
        <Box>
          <Typography variant="h6">{letter.author}</Typography>
          <Typography>{`<${letter.email}>`}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">{formatDate(letter.date)}</Typography>
        </Box>
      </Box>
      <Typography>{letter.text}</Typography>
    </Paper>
  );
};
