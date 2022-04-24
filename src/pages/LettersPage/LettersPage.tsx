import { Box } from '@mui/material';
import React from 'react';

import { Table } from '../../components/ui-kit/Table/Table';
import data from '../../data/data';
import { useAppSelector } from '../../hooks/useAppSelector';

export const LettersPage: React.FC = () => {
  const readLetterIds = useAppSelector((state) => state.folders.readLetterIds);
  const currentFolderName = useAppSelector((state) => state.folders.current);
  const folders = useAppSelector((state) => state.folders.folders);
  const currentFolder = folders.filter(
    (folder) => folder.name === currentFolderName
  )[0];
  const letters = data.filter(({ id }) => currentFolder.letterIds.includes(id));

  return (
    <Box>
      <Table letters={letters} readLetterIds={readLetterIds} />
    </Box>
  );
};
