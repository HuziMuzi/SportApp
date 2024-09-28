import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {HomeNavigator} from '@screens/HomeNavigator.tsx';
import {RootStackParamList, Routes} from 'types/types.ts';
import {GreetingScreen} from '@screens/Greeting/Greeting.tsx';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';
import {LegExercisesScreen} from '@screens/LegExercises.tsx';
import {SingInScreen} from '@screens/SingIn.tsx';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

type Props = {
  initRoute: Routes;
};

export function InnerApp({initRoute}: Props): React.JSX.Element {
  const {colors} = useTheme();

  return (
    <RootStack.Navigator
      initialRouteName={Routes.SingIn}
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
        <RootStack.Screen name={Routes.SingIn} component={SingInScreen} />
        <RootStack.Screen name={Routes.Greeting} component={GreetingScreen} />
        <RootStack.Screen name={Routes.Home} component={HomeNavigator} />
      </RootStack.Group>

      <RootStack.Screen
        name={Routes.LegExercises}
        options={{headerTitle: 'Упражнения на спину'}}
        component={LegExercisesScreen}
      />
    </RootStack.Navigator>
  );
}
