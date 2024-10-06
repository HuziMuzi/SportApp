import React, {useMemo} from 'react';
import {ActivityIndicator, StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {Text, TextProps} from './../Text.tsx';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';
import {Color} from 'src/shared/lib/theme/types.ts';
import {s} from 'src/shared/lib';

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
  disabled?: boolean;
  isLoading?: boolean;
};

export const Button = ({
  onPress,
  style,
  label,
  color = 'main',
  disabled = false,
  isLoading = false,
  type = ButtonType.Medium,
  ...textProps
}: Props) => {
  const {colors} = useTheme();

  const buttonColor = useMemo(() => {
    if (isLoading || disabled) {
      return {
        backgroundColor: colors.accent2,
      };
    }

    return {
      backgroundColor: colors[color],
    };
  }, [disabled, isLoading]);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, buttonSize[type], buttonColor, style]}>
      {isLoading ? <ActivityIndicator style={[s.absolute]} size="small" /> : null}
      <Text {...textProps} style={{opacity: isLoading ? 0 : 1}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const buttonSize = {
  large: {
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 41,
  },
  medium: {
    borderRadius: 7,
    paddingVertical: 8,
    paddingHorizontal: 17,
  },
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
