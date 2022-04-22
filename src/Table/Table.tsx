import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  MenuItem,
  Typography,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { filter, chunk } from 'lodash';
import React, { useState } from 'react';

import data from '../data/data';
import usePagination from '../hooks/usePagination';
import { Folder } from '../ts/enums/enums';

import { TableRow } from './TableRow/TableRow';

import styles from './Table.module.scss';

interface TableProps {
  folder?: Folder;
}

export const Table: React.FC<TableProps> = ({
  folder = Folder.Inbox,
}): JSX.Element => {
  const letters = filter(data, ['folder', folder]);
  const [lettersPerPage, setLettersPerPage] = useState(20);
  const LettersChunk = chunk(letters, lettersPerPage);
  const { nextPage, prevPage, page, setPage, totalPages } = usePagination(
    lettersPerPage,
    letters.length
  );

  const handleChange = (event: SelectChangeEvent<number>) => {
    setPage(1);
    setLettersPerPage(Number(event.target.value));
  };

  const moveToLastPage = () => {
    setPage(totalPages);
  };

  const moveToFirstPage = () => {
    setPage(1);
  };

  return (
    <Box>
      <Box className={styles.controls}>
        <FormControl
          className={styles.select}
          variant="standard"
          sx={{ m: 1, width: 70 }}
        >
          <Typography>Писем на странице</Typography>
          <Select value={lettersPerPage} onChange={handleChange}>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
        <Typography>
          {(page - 1) * lettersPerPage + 1}&nbsp;-&nbsp;
          {Math.min(page * lettersPerPage, letters.length)}
          &nbsp;из&nbsp;{letters.length}
        </Typography>
        <Box className={styles.pagination}>
          {page > 1 && <Button onClick={moveToFirstPage}>{1}</Button>}
          {page > 1 && (
            <IconButton size="small" onClick={prevPage}>
              <ArrowLeftIcon />
            </IconButton>
          )}
          <Button className={styles.active}>{page}</Button>
          {page < totalPages && (
            <IconButton size="small" onClick={nextPage}>
              <ArrowRightIcon />
            </IconButton>
          )}
          {page < totalPages && (
            <Button onClick={moveToLastPage}>{totalPages}</Button>
          )}
        </Box>
      </Box>
      <Box className={styles.container}>
        {LettersChunk[page - 1].map((letter) => (
          <TableRow key={letter.id} letter={letter}></TableRow>
        ))}
      </Box>
    </Box>
  );
};
