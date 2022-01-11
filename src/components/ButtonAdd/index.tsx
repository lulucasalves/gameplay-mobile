import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from 'react-native';


import { styles } from './styles';
import { theme } from '../../styles/theme';

export function ButtonAdd({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity activeOpacity={.7} {...rest} style={styles.container}>
      <MaterialCommunityIcons
        name='plus'
        color={theme.colors.heading}
        size={24}
      />
    </TouchableOpacity>
  );
}