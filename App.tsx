import { StatusBar, LogBox } from 'react-native'
import React from 'react'
import { Background } from './src/components/Background'
import { useFonts } from 'expo-font'
import { Inter_500Medium, Inter_400Regular } from '@expo-google-fonts/inter'
import {
  Rajdhani_700Bold,
  Rajdhani_500Medium
} from '@expo-google-fonts/rajdhani'
import AppLoading from 'expo-app-loading'
import { AuthProvider } from './src/context/auth'
import { Routes } from './src/routes'

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

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
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  )
}
