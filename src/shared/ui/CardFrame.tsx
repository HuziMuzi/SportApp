import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';

type Props = {
  children: React.ReactNode;
};

export const CardFrame = ({children}: Props) => {
  const {colors} = useTheme();

  return <View style={[styles.card, {backgroundColor: colors.strong_gray}]}>{children}</View>;
};
const styles = StyleSheet.create({
  card: {
    gap: 15,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 20,
  },
});
