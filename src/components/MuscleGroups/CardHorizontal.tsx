import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useThematicStyles, useTheme} from 'src/shared/lib/theme/hooks.ts';
import {Text} from 'src/shared/ui';
import {getNormalizedSizeWithPlatformOffset} from 'src/shared/lib/scaling.ts';
import {s} from 'src/shared/lib';
import {Color} from 'src/shared/lib/theme/types.ts';

type Props = {
  label?: string;
  onPress?: () => void;
};

export const CardHorizontal = ({label, onPress}: Props) => {
  const {styles} = useThematicStyles(rawStyles);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const rawStyles = StyleSheet.create({
  container: {
    height: getNormalizedSizeWithPlatformOffset(100),
    width: '100%',
    backgroundColor: Color.strong_gray,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
