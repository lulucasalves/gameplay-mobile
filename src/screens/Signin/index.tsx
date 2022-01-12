import React, { useState } from 'react';
import { SigninButton } from '../../components/SigninButton'
import {
  View, Image, Text,
} from 'react-native';
import Illustration from '../../assets/illustration.png'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';

export function Signin() {
  //  const navigation = useNavigation()
  function handleSignIn() {
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
          <SigninButton onPress={handleSignIn} title='Entrar com discord'
          />

        </View>
      </View>
    </Background>
  );
}