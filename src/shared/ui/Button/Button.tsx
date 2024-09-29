import React, {useMemo} from 'react';
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {Text, TextProps} from './../Text.tsx';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';
import {Color} from 'src/shared/lib/theme/types.ts';

export enum ButtonType {
  Medium = 'medium',
  Large = 'large',
}
type Props = Omit<TextProps, 'i18next'> & {
  onPress: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
  color?: Color | keyof typeof Color;
  type?: ButtonType;
};

export const Button = ({onPress, style, label, color = 'main', type, ...textProps}: Props) => {
  const {colors} = useTheme();

  const buttonStylesByType = useMemo(() => {
    switch (type) {
      case 'large': {
        return {
          borderRadius: 15,
          paddingVertical: 15,
          paddingHorizontal: 41,
        };
      }
      default: {
        return {
          borderRadius: 7,
          paddingVertical: 8,
          paddingHorizontal: 17,
        };
      }
    }
  }, [type]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, buttonStylesByType, {backgroundColor: colors[color]}, style]}>
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
  },
});
