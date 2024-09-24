import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/Roboto';
import{ AppLoading } from 'expo'

import Routes from './src/router'; //

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <>
      <StatusBar style="light" backgroundColor='#000' translucent={true} />
      <Routes />
    </>
  );
}
