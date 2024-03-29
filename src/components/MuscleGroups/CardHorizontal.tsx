import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';
import {Text} from 'src/shared/ui';

type Props = {
  label?: string;
  onPress?: () => void;
};

export const CardHorizontal = ({label, onPress}: Props) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 110,
        width: '100%',
        backgroundColor: colors.strong_gray,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};
