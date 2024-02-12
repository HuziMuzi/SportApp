import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useTypedNavigation} from 'src/shared/lib/hooks/useTypeNavigation.ts';
import {Text} from 'src/ui/Text.tsx';
import {SafeAreaView} from 'src/components/SaveAreaView';
import {useThematicStyles} from 'src/theme/hooks.ts';
import {Color} from 'src/theme/types.ts';

export const GreetingScreen = () => {
  const {navigate} = useTypedNavigation();
  const {styles, colors} = useThematicStyles(rawStyles);

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
      <TouchableOpacity onPress={() => navigate('home')} style={styles.agreeBtn}>
        <Text m_p>Понятно</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const rawStyles = StyleSheet.create({
  agreeBtn: {
    paddingHorizontal: 22,
    paddingVertical: 15,
    backgroundColor: Color.strong_gray,
    borderRadius: 15,
    alignItems: 'center',
    alignSelf: 'center',
  },
});
