import { Box } from '@mui/material';
import React from 'react';

import { Table } from '../../components/ui-kit/Table/Table';
import data from '../../data/data';
import { useAppSelector } from '../../hooks/useAppSelector';

export const NewLettersPage: React.FC = () => {
  const readLetterIds = useAppSelector((state) => state.folders.readLetterIds);
  const letters = data.filter(({ id }) => !readLetterIds.includes(id));

  return (
    <Box>
      <Table letters={letters} readLetterIds={readLetterIds} />
    </Box>
  );
};
