import React from 'react';
import {
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string
}

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={.7} {...rest} style={styles.container} >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}