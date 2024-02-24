import React from 'react';
import {ScrollView, View} from 'react-native';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';
import {CardHorizontal} from 'src/components/MuscleGroups/CardHorizontal.tsx';
import {CardVertical} from 'src/components/MuscleGroups/CardVertical.tsx';
import {useTypedNavigation} from 'src/shared/lib/hooks/useTypeNavigation.ts';

type Props = {};

export const MuscleGroups = ({}: Props) => {
  const {colors} = useTheme();
  const {navigate} = useTypedNavigation();

  return (
    <View style={{gap: 10}}>
      <CardHorizontal label="Ноги" onPress={() => navigate('legExercises')} />
      <View style={{columnGap: 10, flexDirection: 'row'}}>
        <CardVertical />
        <CardVertical />
      </View>
      <CardHorizontal />
    </View>
  );
};
