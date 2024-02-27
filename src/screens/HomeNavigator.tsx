import {BottomTabNavigationOptions, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen} from 'src/screens/Main.tsx';
import {FavouritesScreen} from '@screens/Favourites/Favourites.tsx';
import {DiaryScreen} from '@screens/Diary.tsx';
import {ProfileScreen} from '@screens/Profile.tsx';
import {TabNavigator} from 'types/types.ts';
import {useMemo} from 'react';
import {Favourite} from 'src/assets/icons/Favourite.tsx';
import {Profile} from 'src/assets/icons/Profile.tsx';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';
import {RouteProp} from '@react-navigation/native';
import {Home} from 'src/assets/icons/Home.tsx';
import {ThemeColors} from 'src/shared/lib/theme/types.ts';
import {Text} from 'src/shared/ui';
import {Diary} from 'src/assets/icons/Diary.tsx';

const Tab = createBottomTabNavigator<TabNavigator>();

type routing = 'main' | 'diary' | 'favourites' | 'profile';

const tabData = {
  main: {
    icon: Home,
    label: 'Главная',
  },
  diary: {
    icon: Diary,
    label: 'Дневник',
  },
  favourites: {
    icon: Favourite,
    label: 'Избранное',
  },
  profile: {
    icon: Profile,
    label: 'Профиль',
  },
};

const HomeScreenTabBarIcon = ({route, color}: {color: string; route: routing}) => {
  const Icon = useMemo(() => tabData[route].icon, [route]);
  return <Icon color={color} />;
};

const tabBarIcon = (route: routing) => (props: {color: string}) =>
  <HomeScreenTabBarIcon route={route} color={props.color} />;

const tabBarLabel = (route: routing) => (props: {color: string}) =>
  (
    <Text m_p3 style={{color: props.color}}>
      {tabData[route].label}
    </Text>
  );

const tabScreenOption = (
  route: RouteProp<TabNavigator, keyof TabNavigator>,
  colors: ThemeColors,
): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarIcon: tabBarIcon(route.name),
  tabBarLabel: tabBarLabel(route.name),
  tabBarActiveBackgroundColor: colors.strong_gray,
  tabBarActiveTintColor: colors.main,
  tabBarItemStyle: {
    paddingVertical: 3,
  },
  tabBarStyle: {
    borderTopColor: colors.placeholder,
    backgroundColor: colors.strong_gray,
  },
});

export const HomeNavigator = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.bg1,
      }}
      screenOptions={({route}) => ({
        ...tabScreenOption(route, colors),
      })}
      initialRouteName="main">
      <Tab.Screen name="main" component={MainScreen} />
      <Tab.Screen name="diary" component={DiaryScreen} />
      <Tab.Screen name="favourites" component={FavouritesScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
