import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';
import { Feather } from '@expo/vector-icons'
import {
  Text,
  View
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from '../../styles/theme';
import { styles } from './styles';

type Props = {
  title: string
  action?: ReactNode
}

export function Header({ title, action }: Props) {
  function handleGoBack() {

  }

  const { secondary100, secondary40, heading } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather
          name='arrow-left'
          size={24}
          color={heading}
        />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
      {
        action ?
          <View>
            {action}
          </View> : <View style={{ width: 24 }} />
      }

    </LinearGradient >
  );
}