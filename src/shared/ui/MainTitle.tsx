import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {Text} from './Text.tsx';
import {Color} from 'src/shared/lib/theme/types.ts';

type Props = {
  title: string;
  color?: Color;
  style?: StyleProp<TextStyle>;
};

export const MainTitle = ({title, color, style}: Props) => {
  return (
    <Text m_h3 color={color} style={style}>
      {title}
    </Text>
  );
};
