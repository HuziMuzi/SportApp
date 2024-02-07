// navigation

import {StyleProp, ViewStyle} from 'react-native';

export type TabNavigator = {
  main: undefined;
  favourites: undefined;
  exercises: undefined;
  profile: undefined;
};
export type RootStackParamList = TabNavigator & {
  home: undefined;
};

export type IconProps = {
  width?: number;
  height?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
};
