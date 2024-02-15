import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'src/ui/Text.tsx';
import {useTheme} from 'src/theme/hooks.ts';
import {s} from 'src/shared/lib/styles.ts';

type Item = {
  label: string;
  value: string;
};

type Props = {
  data: Item[];
  value: string;
  onChangeValue: (value: string) => void;
};

export const RadioButtons = ({data, onChangeValue, value}: Props) => {
  return (
    <View style={s.flexRow}>
      {data.map((el, i) => (
        <Button
          key={i}
          isActive={value === el.value}
          label={el.label}
          onPress={() => onChangeValue(el.value)}
        />
      ))}
    </View>
  );
};

const Button = ({label, onPress, isActive}) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, isActive && {backgroundColor: colors.main}]}>
      <Text m_p>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexGrow: 1,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
