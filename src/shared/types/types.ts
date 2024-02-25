// navigation

import {StyleProp, ViewStyle} from 'react-native';

export type TabNavigator = {
  main: undefined;
  diary: undefined;
  favourites: undefined;
  profile: undefined;
};
export type RootStackParamList = TabNavigator & {
  home: undefined;
  greeting: undefined;
  legExercises: undefined;
};

export type IconProps = {
  width?: number;
  height?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
};
