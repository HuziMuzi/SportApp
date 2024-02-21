// navigation

import {StyleProp, ViewStyle} from 'react-native';
import {LegExercisesScreen} from '@screens/LegExercises.tsx';

export type TabNavigator = {
  main: undefined;
  favourites: undefined;
  exercises: undefined;
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
