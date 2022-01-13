import React, { useState } from 'react';
import { SigninButton } from '../../components/SigninButton'
import {
  View, Image, Text, Alert, ActivityIndicator,
} from 'react-native';
import Illustration from '../../assets/illustration.png'
import { styles } from './styles';
import { Background } from '../../components/Background';
import { Auth } from '../../context/auth';
import { theme } from '../../styles/theme';

export function Signin() {
  const { user, signIn, loading } = Auth()

  async function handleSignIn() {
    try {
      await signIn()
    } catch (error) {
      Alert.alert(error)
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={Illustration}
          style={styles.image}
          resizeMode='stretch'
        />

        <View style={styles.content}>
          <Text style={styles.title} >
            Conecte-se {'\n'}
            e organize suas {'\n'}
            jogatinas
          </Text>
          <Text style={styles.subtitle} >
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>
          {loading
            ? <ActivityIndicator color={theme.colors.primary} />
            : <SigninButton onPress={handleSignIn} title='Entrar com discord'
            />}

        </View>
      </View>
    </Background>
  );
}