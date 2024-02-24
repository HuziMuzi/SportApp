import React from 'react';
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {Text, TextProps} from './../Text.tsx';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';
import {Color} from 'src/shared/lib/theme/types.ts';

type Props = Omit<TextProps, 'i18next'> & {
  onPress: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
  color?: Color | keyof typeof Color;
};

export const Button = ({onPress, style, label, color = 'main', ...textProps}: Props) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor: colors[color]}, style]}>
      <Text {...textProps}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 17,
  },
});
