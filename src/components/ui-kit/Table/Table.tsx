import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import ErrorIcon from '@mui/icons-material/Error';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {
  Box,
  ButtonGroup,
  FormControl,
  IconButton,
  MenuItem,
  Typography,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { chunk } from 'lodash';
import React, { useState } from 'react';

import usePagination from '../../../hooks/usePagination';
import { Letter } from '../../../ts/models/letter.model';

import { TableRow } from './TableRow/TableRow';

import styles from './Table.module.scss';

interface TableProps {
  letters: Letter[];
  readLetterIds: number[];
}

export const Table: React.FC<TableProps> = ({
  letters,
  readLetterIds,
}): JSX.Element => {
  const sortedLetters = letters.sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date)
  );
  const [lettersPerPage, setLettersPerPage] = useState(20);
  const LettersChunk = chunk(sortedLetters, lettersPerPage);
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
        <ButtonGroup className={styles.pagination}>
          <IconButton disabled={false}>
            <DeleteIcon />
          </IconButton>
          <IconButton disabled={false}>
            <ErrorIcon />
          </IconButton>
          <IconButton disabled={false}>
            <DriveFileMoveIcon />
          </IconButton>
        </ButtonGroup>
        <FormControl
          className={styles.select}
          variant="standard"
          sx={{ m: 1, width: 70 }}
        >
          <Typography>?????????? ???? ????????????????</Typography>
          <Select value={lettersPerPage} onChange={handleChange}>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
        <Typography>
          {(page - 1) * lettersPerPage + 1}&nbsp;-&nbsp;
          {Math.min(page * lettersPerPage, letters.length)}
          &nbsp;????&nbsp;{letters.length}
        </Typography>
        <ButtonGroup className={styles.pagination}>
          <IconButton onClick={moveToFirstPage} disabled={page === 1}>
            <FirstPageIcon />
          </IconButton>
          <IconButton onClick={prevPage} disabled={page === 1}>
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton onClick={nextPage} disabled={page === totalPages}>
            <NavigateNextIcon />
          </IconButton>
          <IconButton onClick={moveToLastPage} disabled={page === totalPages}>
            <LastPageIcon />
          </IconButton>
        </ButtonGroup>
      </Box>
      <Box className={styles.container}>
        {LettersChunk.length ? (
          LettersChunk[page - 1].map((letter) => (
            <TableRow
              key={letter.id}
              letter={letter}
              isRead={readLetterIds.includes(letter.id)}
            ></TableRow>
          ))
        ) : (
          <Typography>?? ???????? ?????????? ?????? ??????????</Typography>
        )}
      </Box>
    </Box>
  );
};
