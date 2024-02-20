import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'src/theme/hooks.ts';

type Props = {};

export const CardVertical = ({}: Props) => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        height: 220,
        flex: 1,
        backgroundColor: colors.strong_gray,
        borderRadius: 10,
      }}
    />
  );
};
