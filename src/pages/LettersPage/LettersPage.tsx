import { Box, Typography } from '@mui/material';
import React from 'react';

import { Table } from '../../components/ui-kit/Table/Table';
import data from '../../data/data';
import { useAppSelector } from '../../hooks/useAppSelector';
import { FolderState } from '../../store/folders/initialState';

export const LettersPage: React.FC = () => {
  const readLetterIds = useAppSelector((state) => state.folders.readLetterIds);
  const currentFolderName = useAppSelector((state) => state.folders.current);
  const folders = useAppSelector((state) => state.folders.folders);
  const currentFolder = folders.filter(
    (folder: FolderState) => folder.name === currentFolderName
  )[0];
  const letters = data.filter(({ id }) => currentFolder.letterIds.includes(id));

  if (!letters.length) {
    return <Typography mt={10} ml={10} variant='h4'>В этой папке писем нет</Typography>;
  }

  return (
    <Box>
      <Table letters={letters} readLetterIds={readLetterIds} />
    </Box>
  );
};
