import React from 'react';
import { SvgProps } from 'react-native-svg'
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../styles/theme';

type Props = TouchableOpacityProps & {
  title: string,
  icon: React.FC<SvgProps>,
  checked?: boolean,
  hasCheckBox?: boolean;
}

export function Category({
  title,
  icon: Icon, checked = false,
  hasCheckBox = true,
  ...rest
}: Props) {
  const { secondary70, secondary50, secondary80, secondary40 } = theme.colors;

  return (
    <TouchableOpacity activeOpacity={.7} {...rest} >
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? secondary80 : secondary50, secondary40]}
        >
          {
            hasCheckBox &&
            <View style={
              checked ? styles.checked : styles.check
            } />
          }

          <Icon
            width={48}
            height={48}
          />

          <Text style={styles.title}>
            {title}
          </Text>
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
}