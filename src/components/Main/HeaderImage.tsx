import React from 'react';
import {Image, View} from 'react-native';
import {Text} from 'src/ui/Text.tsx';

export const HeaderImage = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 200,
        // top: -10,
        overflow: 'hidden',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        marginBottom: 20,
      }}>
      <Image
        style={{
          width: '100%',
          height: 200,
          position: 'absolute',
        }}
        source={require('../../assets/images/headerImage.png')}
      />
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.51)',
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          padding: 20,
        }}>
        <Text m_p style={{zIndex: 1}} color="text">
          "Спорт — дорога к укреплению не только тела, но и духа. В каждой тренировке — мощная
          инвестиция в своё будущее и здоровье."
        </Text>
      </View>
    </View>
  );
};
