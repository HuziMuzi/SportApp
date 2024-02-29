import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';
import {getNormalizedVerticalSizeWithPlatformOffset} from 'src/shared/lib/scaling.ts';

type Props = {};

export const CardVertical = ({}: Props) => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        height: getNormalizedVerticalSizeWithPlatformOffset(215),
        flex: 1,
        backgroundColor: colors.strong_gray,
        borderRadius: 10,
      }}
    />
  );
};
