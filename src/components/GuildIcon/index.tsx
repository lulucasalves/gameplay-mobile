import React from 'react';
import Discord from '../../assets/discord.svg';
import { Image, View } from 'react-native';
import { styles } from './styles';

type Props = {
  guildId?: string;
  iconId?: string | null;
}

const { CDN_IMAGE } = process.env


export function GuildIcon({ guildId, iconId }: Props) {

  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`

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
          <Discord
            width={40}
            height={40}
          />
      }
    </View>
  )
}