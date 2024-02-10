import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useTypedNavigation} from 'src/shared/lib/hooks/useTypeNavigation.ts';

export const GreetingScreen = () => {
  const {navigate} = useTypedNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Greeting</Text>
      <TouchableOpacity onPress={() => navigate('home')}>
        <Text>Понятно</Text>
      </TouchableOpacity>
    </View>
  );
};
