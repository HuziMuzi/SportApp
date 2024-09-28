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
      <Image style={[s.w100pct, s.borderRadius10, {height: IMG_HEIGHT}]} src={MOCK_IMG_URI} />
      <View style={[s.flexRow, s.gp10]}>
        <Tab onPress={toggleTab} label="Выполнение" isActive={switchTab} />
        <Tab onPress={toggleTab} label="Подробности" isActive={!switchTab} />
      </View>
      {!switchTab ? (
        <Text m_p2>
          <Text m_p2_bold>Описание: </Text>
          Используем специальный тренажер для сиси-приседов или крепкий атлетический пояс. Поясом
          пристегиваем себя под коленями к любому устойчивому тренажеру или силовой раме. Стопы
          ставим узко, параллельно друг другу. Лопатки сведены, спина прямая, взгляд перед собой.
          Отходим от тренажера на сколько это возможно, плотно прижимаясь голенями к поясу. На
          вдохе, контролируя вертикальное положение верхней части тела, садимся вниз, провисая на
          поясе. В нижней точке в коленных и тазобедренных суставах - прямой угол, голени
          перпендикулярны полу. На выдохе, сжимая переднюю поверхность бедер и концентрируясь на
          выталкивании таза вперед, поднимаемся. Колени до конца не разгибаем.
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
