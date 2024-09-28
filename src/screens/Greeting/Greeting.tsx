import React from 'react';
import {useTypedNavigation} from 'src/shared/lib/hooks/useTypeNavigation.ts';
import {useThematicStyles} from 'src/shared/lib/theme/hooks.ts';
import {SafeAreaView} from 'src/components/SaveAreaView';
import {ScrollView, StyleSheet, View} from 'react-native';
import {s} from 'src/shared/lib';
import {Button, MainTitle, Text} from 'src/shared/ui';
import {GenderCard} from '../../widgets/GenderCard.tsx';
import {DiaryCard} from '../../widgets/DiaryCard.tsx';
import {Color} from 'src/shared/lib/theme/types.ts';

export const GreetingScreen = () => {
  const {navigate} = useTypedNavigation();
  const {styles, colors} = useThematicStyles(rawStyles);

  return (
    <SafeAreaView bottom_color={colors.bg1}>
      <ScrollView contentContainerStyle={[s.px16, s.flexGrow1]}>
        <View style={[s.flex1, s.justifyBetween, s.gp20]}>
          <View>
            <MainTitle title="Добро пожаловать!" style={[s.mb20, s.textCenter]} />
            <Text m_p center>
              *Название* - ваш персональный тренер и удобный справочник упражнений!
            </Text>
          </View>
          <View style={s.rgp20}>
            <GenderCard />
            <DiaryCard />
          </View>
          <Button
            m_p
            label="Понятно"
            color="strong_gray"
            style={styles.agreeBtn}
            onPress={() => navigate('home')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const rawStyles = StyleSheet.create({
  agreeBtn: {
    paddingHorizontal: 22,
    paddingVertical: 15,
    backgroundColor: Color.strong_gray,
    borderRadius: 15,
  },
});
