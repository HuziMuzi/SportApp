import React from 'react';
import {Text, View} from 'react-native';

export const MainScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      }}>
      {/*<Text>Main</Text>*/}
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: `hsl(${211}, 20%, 4%)`,
        }}
      />
      <View style={{width: 150, height: 150, backgroundColor: '#0C151F'}} />
    </View>
  );
};
