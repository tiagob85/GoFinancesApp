import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import { Dashboard } from './src/screens/Dashboard'; 

import{
  useFonts,   
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
/**
 * Instalação Styled Components: yarn add styled-components
 * Instalação da tipagem: yarn add @types/styled-components-react-native
 * Instalação do expo loading que trata do carregamento do splash: expo install expo-app=loading
 * Instalação das fonts do google: expo install expo-font @expo-google-fonts/poppins
 */

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>  
  )  
}
