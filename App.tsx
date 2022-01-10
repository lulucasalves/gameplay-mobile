import { StatusBar, View } from 'react-native'
import React from 'react'
import { Signin } from './src/screens/Signin'
import { Background } from './src/components/Background';

export default function App() {
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Signin />
    </Background>
  );
}
