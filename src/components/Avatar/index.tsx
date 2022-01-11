import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  Image,
  View
} from 'react-native';
import { theme } from '../../styles/theme';
import { styles } from './styles';

type Props = {
  urlImage: string
}

export function Avatar({ urlImage }: Props) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image style={styles.avatar} source={{ uri: urlImage }} />
    </LinearGradient>
  );
}