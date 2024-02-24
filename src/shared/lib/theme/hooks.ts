import {useContext} from 'react';

import {ThemeContext} from './context.tsx';
import {createTheme} from './createTheme.ts';
import {NamedStyles} from './types.ts';

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThematicStyles = <T extends {}>(stylesObj: T | NamedStyles<T>) => {
  const {colors} = useTheme();
  const styles = createTheme(stylesObj, colors);
  return {styles, colors};
};
