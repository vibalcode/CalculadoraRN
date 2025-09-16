import React from 'react';
import { globalStyles } from './config/theme/app-theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CalculadoraScreen } from './presentation/screens/CalculadoraScreen';

const App = () => {
  return (
    <SafeAreaView style={globalStyles.background}>
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;