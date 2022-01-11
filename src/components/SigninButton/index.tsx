import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';

import Discord from '../../assets/discord.png'
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string
}

export function SigninButton({ title, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={.7} {...rest} style={styles.container} >
      <View style={styles.iconWrap}>
        <Image source={Discord} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}