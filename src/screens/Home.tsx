import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {MainScreen} from 'src/screens/Main.tsx';
import {FavouritesScreen} from 'src/screens/Favourites.tsx';
import {ExercisesScreen} from '@screens/Exercises.tsx';
import {ProfileScreen} from '@screens/Profile.tsx';
import {TabNavigator} from 'types/types.ts';
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ComponentProps, useCallback} from 'react';
import {useTypedNavigation} from 'src/shared/lib/hooks/useTypeNavigation.ts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Home} from 'src/assets/icons/Home.tsx';
import {Favourite} from 'src/assets/icons/Favourite.tsx';
import {Exercise} from 'src/assets/icons/Exercise.tsx';
import {Profile} from 'src/assets/icons/Profile.tsx';

const Tab = createBottomTabNavigator<TabNavigator>();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

type TabOptions = 'main' | 'favourites' | 'exercises' | 'profile';

const getTabData = {
  main: {
    label: 'Главное',
    icon: Home,
  },
  favourites: {
    label: 'Избранное',
    icon: Favourite,
  },
  exercises: {
    label: 'Упражнения',
    icon: Exercise,
  },
  profile: {
    label: 'Профиль',
    icon: Profile,
  },
};

const TabBar = (props: BottomTabBarProps) => {
  const {navigate} = useTypedNavigation();
  const {bottom} = useSafeAreaInsets();
  // console.log(JSON.stringify(props, null, 2));
  console.log(bottom);

  const onPressTab = useCallback((tab: TabOptions) => {
    navigate(tab);
  }, []);

  return (
    <View
      style={{
        height: 50,
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        marginBottom: bottom,
      }}>
      {props.state.routeNames.map(el => {
        return (
          <Btn
            icon={getTabData[el].icon}
            label={getTabData[el].label}
            onPress={() => onPressTab(el)}
          />
        );
      })}
    </View>
  );
};

interface BtnProps
  extends Pick<
    ComponentProps<typeof TouchableOpacity>,
    | 'accessible'
    | 'accessibilityRole'
    | 'accessibilityHint'
    | 'accessibilityLabel'
  > {
  testID?: string;
  icon?: JSX.Element;
  label: string;
  notificationCount?: string;
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
}

function Btn({
  testID,
  icon,
  label,
  onPress,
  onLongPress,
  accessible,
  accessibilityHint,
  accessibilityLabel,
}: BtnProps) {
  return (
    <TouchableOpacity
      testID={testID}
      style={{}}
      onPress={onLongPress ? onPress : undefined}
      onPressIn={onLongPress ? undefined : onPress}
      onLongPress={onLongPress}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {icon}
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}

export const HomeScreen = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={screenOptions}
      initialRouteName="main">
      <Tab.Screen name="main" component={MainScreen} />
      <Tab.Screen name="favourites" component={FavouritesScreen} />
      <Tab.Screen name="exercises" component={ExercisesScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
