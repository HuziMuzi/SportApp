import React, {createContext, memo, useCallback, useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useColorScheme} from 'react-native';

import {Color, ThemeColors} from './types.ts';
import {LIGHT_THEME} from 'src/shared/lib/theme/light.ts';
import {DARK_THEME} from 'src/shared/lib/theme/dark.ts';

interface ProvidedValue {
  colors: ThemeColors;
  onChangeLightTheme: () => void;
  onChangeDarkTheme: () => void;
}

export const ThemeContext = createContext<ProvidedValue>({
  colors: Color,
  onChangeLightTheme: () => {},
  onChangeDarkTheme: () => {},
});

interface Props {
  children?: React.ReactNode;
}

export const ThemeProvider = memo<Props>(props => {
  const systemTheme = useColorScheme() === 'dark' ? DARK_THEME : LIGHT_THEME;
  const [colors, setColor] = useState<ThemeColors>(DARK_THEME);
  const setSystem = useCallback(() => {
    setColor(systemTheme);
  }, [systemTheme]);

  const setLightColors = useCallback(() => {
    setColor(LIGHT_THEME);
  }, []);

  const setDarkColors = useCallback(() => {
    setColor(DARK_THEME);
  }, []);

  const onChangeLightTheme = useCallback(async () => {
    await AsyncStorage.setItem('currentTheme', 'light');
    setColor(LIGHT_THEME);
  }, []);
  const onChangeDarkTheme = useCallback(async () => {
    await AsyncStorage.setItem('currentTheme', 'dark');
    setColor(DARK_THEME);
  }, []);

  // useEffect(() => {
  //   AsyncStorage.getItem('currentTheme')
  //     .then(theme => {
  //       console.debug('theme', theme);
  //       switch (theme) {
  //         case 'light':
  //           return setLightColors();
  //         case 'dark':
  //           return setDarkColors();
  //         default:
  //           return setSystem();
  //       }
  //     })
  //     .catch(error => {
  //       console.error("can't get installed theme, error:", error);
  //     });
  // }, [systemTheme]);

  return (
    <ThemeContext.Provider value={{colors, onChangeDarkTheme, onChangeLightTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
});
