import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export interface ThemeColors {
  bg1: string;
  icon: string;
  text: string;
  main: string;
  accent3: string;
  dimmed: string;
  placeholder: string;
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
  text = 'text',
  accent3 = 'accent3',
  dimmed = 'dimmed',
  placeholder = 'placeholder',
  strong_gray = 'strong_gray',
}