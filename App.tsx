import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Dashboard } from './src/screens/Dashboard'; 
/**
 * Instalação Styled Components: yarn add styled-components
 * Instalação da tipagem: yarn add @types/styled-components-react-native
 */

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard />
    </View>    
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
