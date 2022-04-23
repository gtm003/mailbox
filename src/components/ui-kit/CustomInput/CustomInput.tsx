import { Input } from '@mui/material';
import React, { ReactNode, useState } from 'react';

import styles from './CustomInput.module.scss';

interface CustomInputProps {
  defaultValue: string;
  updateStore: (arg: string) => void;
  icon?: ReactNode;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  defaultValue,
  updateStore,
}) => {
  const [newName, setNewName] = useState(defaultValue);
  const onBlurInput = () => {
    if(!newName.length) {
      return;
    }
    updateStore(newName);
    setNewName(defaultValue);
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const onFocusInput = () => {
    setNewName('');
  };

  return (
    <Input
      value={newName}
      className={styles.input}
      onChange={onChangeInput}
      onFocus={onFocusInput}
      onBlur={onBlurInput}
      error={Boolean(!newName.length)}
    />
  );
};
