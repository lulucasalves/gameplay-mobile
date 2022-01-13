import React from 'react';
import { Feather } from '@expo/vector-icons'
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from 'react-native';
import { GuildIcon } from '../GuildIcon';
import { styles } from './styles';
import { theme } from '../../styles/theme';

export type GuildProps = {
  id: string,
  name: string,
  icon: string | null,
  owner: boolean
}

type Props = TouchableOpacityProps & {
  data: GuildProps,
}

export function Guild({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
      activeOpacity={0.7}
    >
      <GuildIcon guildId={data.id} iconId={data.icon} />

      <View style={styles.content}>
        <Text style={styles.title}>
          {data.name}
        </Text>

        <Text style={styles.type}>
          {data.owner ? 'Administrador' : 'Convidado'}
        </Text>
      </View>

      <Feather
        name='chevron-right'
        color={theme.colors.heading}
        size={24}
      />
    </TouchableOpacity>
  );
}