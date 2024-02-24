import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MainTitle} from 'src/shared/ui';

export const ExercisesScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{flex: 1, marginTop: top, paddingHorizontal: 16, paddingTop: 20}}>
      <MainTitle title="Exercises" />
    </View>
  );
};
