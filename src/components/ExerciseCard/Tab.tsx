import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'src/shared/ui';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';

type Props = {
  onPress: () => void;
  isActive?: boolean;
  label: string;
};

export const Tab = ({onPress, label, isActive}: Props) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor: isActive ? colors.main : colors.accent3}]}>
      <Text m_p2>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 30,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
