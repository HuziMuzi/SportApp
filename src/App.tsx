import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {InnerApp} from './InnerApp';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'src/shared/lib/theme/context.tsx';
import {Routes} from 'types/types.ts';
import SportApp from 'src/SportApp.ts';

const {sessionService} = SportApp;

function App(): React.JSX.Element {
  const [initRoute, setInitRoute] = useState(Routes.Greeting);

  useEffect(() => {
    (async () => {})();
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <InnerApp initRoute={initRoute} />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
