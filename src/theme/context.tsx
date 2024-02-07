import {createContext, ReactNode} from 'react';
import {Theme} from '@react-navigation/native';
import {ColorSchemeName, TextStyle, useColorScheme} from 'react-native';
import {defaultTheme} from 'src/theme/themes.ts';

export type ColorScheme = 'light' | 'dark';
export interface ThemeProviderProps {
  children?: ReactNode;
  theme?: 'light' | 'dark' | 'system';
}

// TypographyVariant

export interface Theme {
  colorScheme: ColorScheme;
  palette: any;
  // shapes: Shapes;
  // typography: Typography;
}

function getTheme(theme: ColorSchemeName) {
  return theme === 'dark' ? darkTheme : defaultTheme;
}
export const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  const colorScheme = useColorScheme();
  const themeValue = getTheme(theme === 'system' ? colorScheme : theme);

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};
