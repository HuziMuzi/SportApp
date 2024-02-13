import React, {useState} from 'react';
import {SafeAreaView} from 'src/components/SaveAreaView';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'src/ui/Text.tsx';
import {useTypedNavigation} from 'src/shared/lib/hooks/useTypeNavigation.ts';
import {useThematicStyles} from 'src/theme/hooks.ts';
import {Color} from 'src/theme/types.ts';
import {RadioButtons} from 'src/ui/RadioButtons/RadioButtons.tsx';
import {Button} from 'src/ui/Button/Button.tsx';

const DATA = [
  {
    label: 'Не указано',
    value: 'unspecified',
  },
  {
    label: 'Женский',
    value: 'female',
  },
  {
    label: 'Мужской',
    value: 'Male',
  },
];

export const Greeting = () => {
  const {navigate} = useTypedNavigation();
  const {styles, colors} = useThematicStyles(rawStyles);

  const [gender, setGender] = useState('unspecified');

  return (
    <SafeAreaView bottom_color={colors.bg1}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.content}>
          <View>
            <Text m_h3 center style={styles.welcomeText}>
              Добро пожаловать!
            </Text>
            <Text m_p center>
              *Название* - ваш персональный тренер и удобный справочник упражнений!
            </Text>
          </View>
          <View style={styles.cardsContainer}>
            <View style={styles.card}>
              <View style={styles.label_one}>
                <Text m_h3>1</Text>
              </View>
              <Text m_p center>
                Для адаптации тренировок вы можете указать свой пол:
              </Text>
              <RadioButtons data={DATA} value={gender} onChangeValue={setGender} />
            </View>
            <View style={styles.card}>
              <View style={styles.label_one}>
                <Text m_h3>2</Text>
              </View>
              <Text m_p center>
                Вы также можете добавить актуальные замеры вашего тела для отслеживания изменения
                физической формы:
              </Text>
              <Button onPress={() => {}} label="Перейти в дневник" />
            </View>
          </View>
          <TouchableOpacity onPress={() => navigate('home')} style={styles.agreeBtn}>
            <Text m_p>Понятно</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const rawStyles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
    flexGrow: 1,
  },
  welcomeText: {
    marginBottom: 20,
  },
  content: {
    flex: 1,
    gap: 20,
    justifyContent: 'space-between',
  },
  agreeBtn: {
    paddingHorizontal: 22,
    paddingVertical: 15,
    backgroundColor: Color.strong_gray,
    borderRadius: 15,
    alignItems: 'center',
    alignSelf: 'center',
  },
  cardsContainer: {
    rowGap: 20,
  },
  card: {
    gap: 15,
    backgroundColor: Color.strong_gray,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 20,
  },
  label_one: {
    alignItems: 'center',
    alignSelf: 'center',
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    backgroundColor: Color.bg1,
    justifyContent: 'center',
  },
});
