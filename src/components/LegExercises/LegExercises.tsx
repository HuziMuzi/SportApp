import React from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from 'src/ui/Text.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';
import {s} from 'src/shared/lib/styles.ts';
import {ExerciseCard} from 'src/components/ExerciseCard/ExerciseCard.tsx';

type Props = {};

export const LegExercises = ({}: Props) => {
  return (
    <SafeAreaView style={[s.px16, s.flex1]}>
      <ScrollView contentContainerStyle={{gap: 10}}>
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
      </ScrollView>

      {/*<Text>legExercises</Text>*/}
    </SafeAreaView>
  );
};
