import { StatusBar } from 'react-native'
import React, { useState } from 'react'
import { Signin } from './src/screens/Signin'
import { Background } from './src/components/Background';
import { useFonts } from 'expo-font'
import { Inter_500Medium, Inter_400Regular, } from '@expo-google-fonts/inter'
import { Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani'
import { Home } from './src/screens/Home';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </Background>
  );
}
