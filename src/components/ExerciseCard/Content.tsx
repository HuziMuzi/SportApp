import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {Text} from 'src/shared/ui';
import {s} from 'src/shared/lib';
import {MOCK_IMG_URI} from 'src/shared/variables.ts';
import {Tab} from 'src/components/ExerciseCard/Tab.tsx';

type Props = {};
const IMG_HEIGHT = 184;

export const Content = ({}: Props) => {
  const [switchTab, setSwitchTab] = useState(false);

  const toggleTab = () => setSwitchTab(!switchTab);

  return (
    <View style={[s.p10, s.gp10]}>
      <Image style={[s.w100pct, s.radius10, {height: IMG_HEIGHT}]} src={MOCK_IMG_URI} />
      <View style={[s.flexRow, s.gp10]}>
        <Tab onPress={toggleTab} label="Подробности" isActive={switchTab} />
        <Tab onPress={toggleTab} label="Выполнение" isActive={!switchTab} />
      </View>
      {!switchTab ? (
        <Text m_p2>
          {
            ' - Используем специальный тренажер для сиси-приседов или крепкий атлетический пояс.  \n - Жим Арнольда с гантелями \n - Жим штанги сидя \n - Жим штанги в тренажере Смитт \n - Жим гантелей сидя. \n - Жим гантелей стоя. \n - Жим гантелей на скамье 65 градусов \n -Подъем гантелей перед собой/по очередно \n - Подъем штанги перед собой - Пронация плеча наблоке - Тяга штанги к подбородку, узкий хват'
          }
        </Text>
      ) : (
        <View style={[s.gp5]}>
          <Text m_p2>
            <Text m_p2_bold>Задействованы: </Text>
            квадрицепс, ягодичные, приводящие, разгибатели поясницы, мышцы задней поверхности бедра.
          </Text>
          <Text m_p2>
            <Text m_p2_bold>Важно: </Text>
            Не стремимся отводить таз назад (наклоняясь корпусом вперед), концентрируясь на
            растяжении ягодиц. Весь весь тела уводим назад. Может появиться страх, что вы упадете,
            но вы плотно зафиксированы и при достаточно сильных мышцах вы удержите равновесие. Если
            вы начинаете чувствовать дискомфорт в коленных суставах, укрепите сначала мышцы ног,
            используя тренажеры и потом возвращайтесь к работе со свободными весами.
          </Text>
        </View>
      )}
    </View>
  );
};
