import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {InnerApp} from './InnerApp';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <InnerApp />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
