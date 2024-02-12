import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {InnerApp} from './InnerApp';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'src/theme/context.tsx';
import {SafeAreaView} from 'src/components/SaveAreaView';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <InnerApp />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
