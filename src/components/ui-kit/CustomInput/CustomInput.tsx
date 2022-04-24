import CheckIcon from '@mui/icons-material/Check';
import { Box, IconButton, TextField } from '@mui/material';
import React, { ReactNode, useState } from 'react';

import styles from './CustomInput.module.scss';

interface CustomInputProps {
  defaultValue: string;
  updateStore: (arg: string) => void;
  icon?: ReactNode;
  existedNames: string[];
}

export const CustomInput: React.FC<CustomInputProps> = ({
  defaultValue,
  updateStore,
  existedNames,
}) => {
  const [newName, setNewName] = useState(defaultValue);
  const [errorMessage, setErrorMessage] = useState('');
  const onBlurInput = () => {
    if (!newName.length) {
      return;
    }
    updateStore(newName);
    setNewName(defaultValue);
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value.length) {
      setErrorMessage('name should not be empty');
    } else if (existedNames.includes(event.target.value)) {
      setErrorMessage('name should be unique');
    } else {
      setErrorMessage('');
    }
    setNewName(event.target.value);
  };

  const onFocusInput = () => {
    setNewName('');
  };

  return (
    <Box className={styles.container}>
      <TextField
        variant="standard"
        className={styles.input}
        error={Boolean(errorMessage.length)}
        value={newName}
        size="small"
        onChange={onChangeInput}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        helperText={errorMessage}
        inputProps={{ maxLength: 20 }}
      />
      <IconButton>
        <CheckIcon />
      </IconButton>
    </Box>
  );
};
