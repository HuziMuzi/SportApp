import React from 'react';
import {ScrollView, View} from 'react-native';
import {MainTitle, Text} from 'src/shared/ui';
import {useTypedNavigation} from 'src/shared/lib/hooks/useTypeNavigation.ts';
import {HeaderImage} from 'src/components/Main/HeaderImage.tsx';
import {s} from 'src/shared/lib';
import {MuscleGroups} from 'src/components/MuscleGroups/MuscleGroups.tsx';

export const Main = () => {
  const {navigate} = useTypedNavigation();

  return (
    <ScrollView style={[s.flex1, s.gp10]} showsVerticalScrollIndicator={false}>
      <HeaderImage />
      <View style={[s.px16, {gap: 15}]}>
        <MainTitle title="Главная" />
        <Text m_p>Выберите группу мышц</Text>
        <MuscleGroups />
        {/*<Button title="go back" onPress={() => navigate('greeting')} />*/}
      </View>
    </ScrollView>
  );
};
