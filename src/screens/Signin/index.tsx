import React from 'react';
import { SigninButton } from '../../components/SigninButton'
import {
  View, Image, Text,
} from 'react-native';
import Illustration from '../../assets/illustration.png'
import { styles } from './styles';

export function Signin() {
  return (
    <View style={styles.container}>

      <Image
        source={Illustration}
        style={styles.image}
        resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title} >
          Organize {'\n'}
          suas jogatinas {'\n'}
          facilmente
        </Text>
        <Text style={styles.subtitle} >
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>
        <SigninButton title='Entrar com discord'
        />

      </View>
    </View>
  );
}