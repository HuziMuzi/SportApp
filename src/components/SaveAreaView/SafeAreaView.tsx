import React from 'react';

import {ColorValue, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {Bar} from './Bar';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';

type Props = {
  children: React.ReactNode;
  bottom_color?: ColorValue;
  style?: StyleProp<ViewStyle>;
};

export function SafeAreaView({children, bottom_color, style}: Props) {
  // const {top, left, right, bottom} = useSafeAreaInsets();
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <Bar color={colors.bg1} />
      <View style={[styles.content, style]}>{children}</View>
      <Bar color={bottom_color || colors.strong_gray} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
  },
});
