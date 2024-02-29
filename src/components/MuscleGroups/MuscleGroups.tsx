import React from 'react';
import {View} from 'react-native';
import {CardHorizontal} from 'src/components/MuscleGroups/CardHorizontal.tsx';
import {CardVertical} from 'src/components/MuscleGroups/CardVertical.tsx';
import {useTypedNavigation} from 'src/shared/lib/hooks/useTypeNavigation.ts';
import {s} from 'src/shared/lib';

type Props = {};

export const MuscleGroups = ({}: Props) => {
  const {navigate} = useTypedNavigation();

  return (
    <View style={s.gp10}>
      <CardHorizontal label="Ноги" onPress={() => navigate('legExercises')} />
      <View style={[s.gp10, s.flexRow]}>
        <CardVertical />
        <CardVertical />
      </View>
      <CardHorizontal />
    </View>
  );
};
