import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';
import { Feather } from '@expo/vector-icons'
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from '../../styles/theme';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

type Props = {
  title: string
  action?: ReactNode
}

export function Header({ title, action }: Props) {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }

  const { secondary100, secondary40, heading } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <TouchableHighlight
        activeOpacity={1}
        underlayColor={theme.colors.transparent}
        style={styles.button}
        onPress={handleGoBack}
      >
        <Feather
          name='arrow-left'
          size={24}
          color={heading}
        />
      </TouchableHighlight>
      <Text style={styles.title}>{title}</Text>

      {
        action ?
          <TouchableHighlight activeOpacity={1}
            underlayColor={theme.colors.transparent}
            style={[styles.button, { height: 50, width: 50 }]}>
            {action}
          </TouchableHighlight> : <View style={{ width: 24 }} />
      }



    </LinearGradient >
  );
}