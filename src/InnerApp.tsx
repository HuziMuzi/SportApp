import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {HomeNavigator} from '@screens/HomeNavigator.tsx';
import {RootStackParamList} from 'types/types.ts';
import {GreetingScreen} from '@screens/Greeting.tsx';
import {useTheme} from 'src/theme/hooks.ts';
import {LegExercisesScreen} from '@screens/LegExercises.tsx';

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
        headerStyle: {
          backgroundColor: colors.bg1,
        },
        headerTitleStyle: {color: colors.text},
        contentStyle: {
          backgroundColor: colors.bg1,
        },
      }}>
      <RootStack.Group screenOptions={screenOptions}>
        <RootStack.Screen name="greeting" component={GreetingScreen} />
        <RootStack.Screen name="home" component={HomeNavigator} />
      </RootStack.Group>

      <RootStack.Screen
        name="legExercises"
        options={{headerTitle: 'Упражнения на спину'}}
        component={LegExercisesScreen}
      />
    </RootStack.Navigator>
  );
}
