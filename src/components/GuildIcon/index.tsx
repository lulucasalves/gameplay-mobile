import React from 'react';

import {
  Image,
  View
} from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://i.pinimg.com/originals/8d/e6/07/8de607fb1f1ab56c837678af6717a80e.jpg'

  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode='cover'
    />

  )
}