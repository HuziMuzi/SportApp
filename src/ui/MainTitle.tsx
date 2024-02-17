import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {Text} from 'src/ui/Text.tsx';
import {Color} from 'src/theme/types.ts';

type Props = {
  title: string;
  color?: Color;
  style?: StyleProp<ViewStyle>;
};

export const MainTitle = ({title, color, style}: Props) => {
  return (
    <Text m_h3 color={color} style={style}>
      {title}
    </Text>
  );
};
