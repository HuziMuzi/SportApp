import React from 'react';
import {StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';
import {s} from 'src/shared/lib';
import {Text} from './../Text.tsx';

type Item = {
  label: string;
  value: string;
};

type Props = {
  data: Item[];
  value: string;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onChangeValue: (value: string) => void;
};

export const RadioButtons = ({data, onChangeValue, value, containerStyle, style}: Props) => {
  return (
    <View style={[s.flexRow, containerStyle]}>
      {data.map((el, i) => (
        <Button
          key={i}
          isActive={value === el.value}
          label={el.label}
          style={style}
          onPress={() => onChangeValue(el.value)}
        />
      ))}
    </View>
  );
};

const Button = ({label, onPress, isActive, style}) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, isActive && {backgroundColor: colors.main}, style]}>
      <Text m_p>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
