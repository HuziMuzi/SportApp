import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Text} from 'src/ui/Text.tsx';
import {useTheme} from 'src/theme/hooks.ts';

type Props = {
  height?: number;
  onLayoutHeight?: (value: number) => void;
};

export const Description = ({height, onLayoutHeight}: Props) => {
  const {colors} = useTheme();
  const [switchTab, setSwitchTab] = useState(false);

  const toggleTab = () => setSwitchTab(!switchTab);

  return (
    <View style={{padding: 10, gap: 10, width: '100%'}}>
      <Image
        style={{width: '100%', height: 184, borderRadius: 10}}
        src={
          'https://pumpmuscles.ru/wp-content/uploads/2016/04/fizicheskie-uprazhneniya-dlya-razvitiya-vseh-vidov-vyinoslivosti.jpg'
        }
      />
      <View style={{flexDirection: 'row', gap: 10}}>
        <TouchableOpacity
          onPress={toggleTab}
          style={{
            borderRadius: 36,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: switchTab ? colors.main : colors.accent3,
          }}>
          <Text m_p2>Выполнение</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleTab}
          style={{
            borderRadius: 36,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: !switchTab ? colors.main : colors.accent3,

            flex: 1,
          }}>
          <Text m_p2>Подробности</Text>
        </TouchableOpacity>
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
        <View style={{gap: 5, flex: 1}}>
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
