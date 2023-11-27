import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculadoraTela } from './components/CalculadoraTela';

import { styles } from './components/styles';

const App = () => {
  return (
    <SafeAreaView style={ styles.fundo }>
      <StatusBar 
        backgroundColor="black"
        barStyle='light-content'
      />

      <CalculadoraTela />
    </SafeAreaView>
  )
}


export default App;