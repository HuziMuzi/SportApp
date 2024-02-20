import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'src/theme/hooks.ts';

type Props = {};

export const CardHorizontal = ({}: Props) => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        height: 110,
        width: '100%',
        backgroundColor: colors.strong_gray,
        borderRadius: 10,
      }}
    />
  );
};
