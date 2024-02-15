import React from 'react';
import {Button, Image, StyleSheet, View} from 'react-native';
import {Text} from 'src/ui/Text.tsx';
import {useTypedNavigation} from 'src/shared/lib/hooks/useTypeNavigation.ts';
import {HeaderImage} from 'src/components/Main/HeaderImage.tsx';
import {s} from 'src/shared/lib/styles.ts';

export const Main = () => {
  const {navigate} = useTypedNavigation();

  return (
    <View style={styles.container}>
      <HeaderImage />
      <View style={[s.px16, s.rgp20]}>
        <Text m_h3>Главная</Text>
        <Text m_p>Выберите группу мышц</Text>
        <View />
        <Button title={'go back'} onPress={() => navigate('greeting')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    gap: 10,
  },
});
