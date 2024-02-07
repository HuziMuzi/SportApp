import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {MainScreen} from 'src/screens/Main.tsx';
import {FavouritesScreen} from 'src/screens/Favourites.tsx';
import {ExercisesScreen} from '@screens/Exercises.tsx';
import {ProfileScreen} from '@screens/Profile.tsx';
import {TabNavigator} from 'types/types.ts';
import {useMemo} from 'react';
import {Home} from 'src/assets/icons/Home.tsx';
import {Favourite} from 'src/assets/icons/Favourite.tsx';
import {Exercise} from 'src/assets/icons/Exercise.tsx';
import {Profile} from 'src/assets/icons/Profile.tsx';

const Tab = createBottomTabNavigator<TabNavigator>();

type routing = 'main' | 'favourites' | 'exercises' | 'profile';

const icon = {
  main: Home,
  favourites: Favourite,
  exercises: Exercise,
  profile: Profile,
};

const HomeScreenTabBarIcon = ({
  focused,
  route,
}: {
  focused: boolean;
  route: routing;
}) => {
  const Icon = useMemo(() => icon[route], [route]);
  return <Icon color={focused ? '#ED7A43' : '#B9B9B9'} />;
};

const tabBarIcon = (route: routing) => (props: {focused: boolean}) =>
  <HomeScreenTabBarIcon focused={props.focused} route={route} />;

const mainOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarIcon: tabBarIcon('main'),
};

const favouritesOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarIcon: tabBarIcon('favourites'),
};

const exercisesOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarIcon: tabBarIcon('exercises'),
};

const profileOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarIcon: tabBarIcon('profile'),
};

export const HomeNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="main">
      <Tab.Screen
        options={() => ({...mainOptions})}
        name="main"
        component={MainScreen}
      />
      <Tab.Screen
        options={() => ({...favouritesOptions})}
        name="favourites"
        component={FavouritesScreen}
      />
      <Tab.Screen
        options={() => ({...exercisesOptions})}
        name="exercises"
        component={ExercisesScreen}
      />
      <Tab.Screen
        options={() => ({...profileOptions})}
        name="profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
