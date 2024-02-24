import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'src/shared/ui';
import {Color} from 'src/shared/lib/theme/types.ts';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';

type Props = {
  label: string;
};

export const RoundLabel = ({label}: Props) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.label_one, {backgroundColor: colors.bg1}]}>
      <Text m_h3>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label_one: {
    alignItems: 'center',
    alignSelf: 'center',
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    justifyContent: 'center',
  },
});
