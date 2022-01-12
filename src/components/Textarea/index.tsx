import React from 'react';

import {
  TextInput,
  TextInputProps,
  View
} from 'react-native';

import { styles } from './styles';

export function Textarea({ ...rest }: TextInputProps) {
  return (
    <TextInput
      keyboardType='default'
      style={styles.container}
      {...rest}
    />
  );
}