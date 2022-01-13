import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, Modal
} from 'react-native';
import { Auth } from '../../context/auth';
import { Avatar } from '../Avatar';
import { styles } from './styles';

type Props = {
  handleOpenModal?: () => void
}

export function Profile({ handleOpenModal }: Props) {
  const { user } = Auth()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOpenModal} activeOpacity={.7}>
        <Avatar urlImage={user.avatar} />
      </TouchableOpacity>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>{user.firstName}</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}