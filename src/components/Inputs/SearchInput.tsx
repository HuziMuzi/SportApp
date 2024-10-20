import React, {useCallback, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';
import {s} from 'src/shared/lib';

type Props = {};

export const SearchInput = ({}: Props) => {
  const {colors} = useTheme();
  const [text, setText] = useState('');

  const handleClearInput = useCallback(() => {
    setText('');
  }, []);

  return (
    <View>
      <View style={[s.flexRow, styles.container]}>
        <AntDesign name={'search1'} size={18} color={colors.main} style={s.pr5} />
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder={'Найти упражнение'}
          placeholderTextColor={colors.placeholder}
          style={[s.ffMR, styles.input, {color: colors.text}]}
        />
        <TouchableOpacity onPress={handleClearInput}>
          <FontAwesome6 name="delete-left" size={18} color={colors.placeholder} />
        </TouchableOpacity>
      </View>
      <View style={[styles.line, {backgroundColor: colors.placeholder}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 32,
    // borderBottomWidth: 1,
    // borderBottomColor: colors.placeholder
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  line: {
    height: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: '100%',
    paddingVertical: 0,
  },
});
