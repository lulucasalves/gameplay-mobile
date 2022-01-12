import React from 'react';
import DiscordSvg from '../../assets/discord.svg';
import {
  Image,
  View
} from 'react-native';

import { styles } from './styles';

type Props = {
  guildId?: string;
  iconId?: string | null;
}

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = 'https://i.pinimg.com/originals/8d/e6/07/8de607fb1f1ab56c837678af6717a80e.jpg'

  return (
    <View style={styles.container}>
      {
        iconId ?
          <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
          />
          :
          <DiscordSvg
            width={40}
            height={40}
          />
      }
    </View>
  )
}