import React from 'react';
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {Text} from 'src/ui/Text.tsx';
import {useTheme} from 'src/theme/hooks.ts';

type Props = {
  onPress: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
};

export const Button = ({onPress, style, label}: Props) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor: colors.main}, style]}>
      <Text m_p>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 7,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 17,
  },
});
