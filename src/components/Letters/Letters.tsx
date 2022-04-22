import { Box, Card } from '@mui/material';
import React from 'react';

import data from '../../data/data';

import styles from './Letters.module.scss';

export const Letters: React.FC = () => {
  return (
    <Box className={styles.container}>
      {data.map((item) => (
        <Card key={item.id}>{item.text}</Card>
      ))}
    </Box>
  );
};
