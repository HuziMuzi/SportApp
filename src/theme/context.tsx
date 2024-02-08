import {createContext, ReactNode} from 'react';
import {ColorSchemeName, TextStyle, useColorScheme} from 'react-native';
import {darkTheme, defaultTheme} from 'src/theme/themes.ts';

export type ColorScheme = 'light' | 'dark';
export interface ThemeProviderProps {
  children?: ReactNode;
  theme?: 'light' | 'dark' | 'system';
}

export type PaletteColorName =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'inverted'
    | 'error'

export type PaletteColor = {
  // background: string
  // backgroundLight: string
  // text: string
  // textLight: string
  // textInverted: string
  // link: string
  // border: string
  // borderDark: string
  icon: string
  [k: string]: string
}

export type Palette =  Record<PaletteColorName, PaletteColor>

export interface Theme {
  colorScheme: ColorScheme;
  palette: Palette;
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
