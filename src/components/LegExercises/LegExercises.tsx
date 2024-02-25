import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {s} from 'src/shared/lib';
import {ExerciseCard} from 'src/components/ExerciseCard/ExerciseCard.tsx';

type Props = {};

export const LegExercises = ({}: Props) => {
  return (
    <SafeAreaView style={[s.px16, s.flex1]}>
      <ScrollView contentContainerStyle={{gap: 10}} showsVerticalScrollIndicator={false}>
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
      </ScrollView>
    </SafeAreaView>
  );
};
