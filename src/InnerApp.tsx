import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {HomeScreen} from '@screens/Home.tsx';
import {RootStackParamList} from 'types/types.ts';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export function InnerApp(): React.JSX.Element {
  return (
    <RootStack.Navigator screenOptions={screenOptions}>
      <RootStack.Screen name="home" component={HomeScreen} />
    </RootStack.Navigator>
  );
}
