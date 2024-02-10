import {useContext} from 'react';

import {ThemeContext} from './context';
import {createTheme} from './createTheme';
import {NamedStyles} from './types';

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThematicStyles = <T extends {}>(stylesObj: T | NamedStyles<T>) => {
  const {colors} = useTheme();
  const styles = createTheme(stylesObj, colors);
  return {styles, colors};
};
