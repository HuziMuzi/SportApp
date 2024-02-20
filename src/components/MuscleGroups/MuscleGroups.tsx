import React from 'react';
import {ScrollView, View} from 'react-native';
import {useTheme} from 'src/theme/hooks.ts';
import {CardHorizontal} from 'src/components/MuscleGroups/CardHorizontal.tsx';
import {CardVertical} from 'src/components/MuscleGroups/CardVertical.tsx';

type Props = {};

export const MuscleGroups = ({}: Props) => {
  const {colors} = useTheme();

  return (
    <View style={{gap: 10}}>
      <CardHorizontal />
      <View style={{columnGap: 10, flexDirection: 'row'}}>
        <CardVertical />
        <CardVertical />
      </View>
      <CardHorizontal />
    </View>
  );
};
