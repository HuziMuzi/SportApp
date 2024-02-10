import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export interface ThemeColors {
  bg1: string;
  icon: string;
  main: string;
  strong_gray: string;
}

export type SomeStyle = ViewStyle | TextStyle | ImageStyle;
export type NamedStyles<T> = {
  [P in keyof T]: SomeStyle;
};

export enum Color {
  bg1 = 'bg1',
  icon = 'icon',
  main = 'main',
  strong_gray = 'strong_gray',
}
