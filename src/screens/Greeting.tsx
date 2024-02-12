import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useTypedNavigation} from 'src/shared/lib/hooks/useTypeNavigation.ts';
import {Text} from 'src/ui/Text.tsx';
import {SafeAreaView} from 'src/components/SaveAreaView';
import {useTheme} from 'src/theme/hooks.ts';

export const GreetingScreen = () => {
  const {navigate} = useTypedNavigation();
  const {colors} = useTheme();

  return (
    <SafeAreaView bottom_color={colors.bg1} style={{paddingHorizontal: 16, gap: 50}}>
      <View>
        <Text m_h3 center style={{marginBottom: 30}}>
          Добро пожаловать!
        </Text>
        <Text m_p center style={{marginBottom: 50}}>
          *Название* - ваш персональный тренер и удобный справочник упражнений!
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigate('home')}>
        <Text m_h1>Понятно</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
