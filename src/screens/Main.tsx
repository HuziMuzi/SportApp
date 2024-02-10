import React, {useEffect, useState} from 'react';
import {Switch, Text, View} from 'react-native';
import {useTheme} from 'src/theme/hooks.ts';

export const MainScreen = () => {
  const {onChangeLightTheme, onChangeDarkTheme, colors} = useTheme();
  const [isSwitch, setIsSwitch] = useState(false);

  useEffect(() => {
    if (isSwitch) {
      onChangeDarkTheme();
    } else {
      onChangeLightTheme();
    }
  }, [isSwitch]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      }}>
      <Text>Change Color</Text>
      <Switch
        value={isSwitch}
        onChange={() => {
          setIsSwitch(!isSwitch);
        }}
      />
    </View>
  );
};
