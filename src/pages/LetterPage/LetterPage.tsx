import { Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

import { Letter } from '../../components/Letter/Letter';
import data from '../../data/data';

export const LetterPage: React.FC = () => {
  const { id } = useParams();
  const letter = data.filter((letter) => letter.id === Number(id))[0];

  return (
    <Box>
      <Letter letter={letter} />
    </Box>
  );
};
