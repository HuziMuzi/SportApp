import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {HomeNavigator} from '@screens/HomeNavigator.tsx';
import {RootStackParamList} from 'types/types.ts';
import {GreetingScreen} from '@screens/Greeting.tsx';
import {useTheme} from 'src/theme/hooks.ts';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export function InnerApp(): React.JSX.Element {
  const {colors} = useTheme();

  return (
    <RootStack.Navigator
      initialRouteName="greeting"
      screenOptions={{
        ...screenOptions,
        contentStyle: {
          backgroundColor: colors.bg1,
        },
      }}>
      <RootStack.Screen name="greeting" component={GreetingScreen} />
      <RootStack.Screen name="home" component={HomeNavigator} />
    </RootStack.Navigator>
  );
}
