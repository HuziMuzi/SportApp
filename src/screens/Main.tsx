import React, {useEffect, useState} from 'react';
import {Button, Switch, Text, View} from 'react-native';
import {useTheme} from 'src/theme/hooks.ts';
import {useTypedNavigation} from "src/shared/lib/hooks/useTypeNavigation.ts";

export const MainScreen = () => {
  const {onChangeLightTheme, onChangeDarkTheme, colors} = useTheme();
  const [isSwitch, setIsSwitch] = useState(false);
  const {navigate} = useTypedNavigation()

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      }}>
      <Button title={'go back'} onPress={() => navigate('greeting')}/>
    </View>
  );
};
