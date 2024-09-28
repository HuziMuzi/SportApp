import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button, MainTitle} from 'src/shared/ui';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();
  const {onChangeDarkTheme, onChangeLightTheme} = useTheme();

  const onChangeTheme = useCallback(async () => {
    const currentTheme = await AsyncStorage.getItem('currentTheme');

    if (currentTheme === 'dark') {
      onChangeLightTheme();
    } else {
      onChangeDarkTheme();
    }
  }, []);

  return (
    <View style={{flex: 1, marginTop: top, paddingHorizontal: 16, paddingTop: 20}}>
      <MainTitle title="Profile" />

      <Button label="Change theme" onPress={onChangeTheme} />
    </View>
  );
};
