import React, {useState} from 'react';
import {useThematicStyles} from 'src/shared/lib/theme/hooks.ts';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {s} from 'src/shared/lib';
import {Color} from 'src/shared/lib/theme/types.ts';

type Props = TextInputProps & {};

export const InputLarge = ({onChangeText, style = {}, ...restProps}: Props) => {
  const {colors, styles} = useThematicStyles({...(style as object), ...customStyles});
  const [text, setText] = useState('');

  const onChange = (currentText: string) => {
    setText(currentText);
    onChangeText && onChangeText(currentText);
  };

  return (
    <TextInput
      {...restProps}
      value={text}
      onChangeText={onChange}
      style={[s.ffMR, styles.input, {color: colors.placeholder}, style]}
    />
  );
};

const customStyles = StyleSheet.create({
  input: {
    width: '100%',
    minWidth: 100,
    fontSize: 16,
    height: 68,
    paddingVertical: 0,
    borderRadius: 15,
    backgroundColor: Color.strong_gray,
    paddingHorizontal: 20,
  },
});
