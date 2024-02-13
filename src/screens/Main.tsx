import React from 'react';
import {Button, Image, ImageBackground, View} from 'react-native';
import {useTypedNavigation} from 'src/shared/lib/hooks/useTypeNavigation.ts';
import {Text} from 'src/ui/Text.tsx';

export const MainScreen = () => {
  const {navigate} = useTypedNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      }}>
      <View
        style={{
          width: '100%',
          height: 200,
          position: 'absolute',
          top: -50,
          overflow: 'hidden',
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
        }}>
        <Image
          style={{
            width: '100%',
            height: 200,
            position: 'absolute',
          }}
          source={require('../assets/images/headerImage.png')}
        />
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.4)',
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
      {/*<Image style={{width: 100, height: 100}} src={require('../assets/images/headerImage.png')} />*/}
      <Button title={'go back'} onPress={() => navigate('greeting')} />
    </View>
  );
};
