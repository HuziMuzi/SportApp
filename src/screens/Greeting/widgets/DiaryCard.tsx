import React from 'react';
import {Button, Text} from 'src/shared/ui';
import {Card} from '@screens/Greeting/ui/Card.tsx';
import {RoundLabel} from '@screens/Greeting/ui/RoundLabel.tsx';

type Props = {};

export const DiaryCard = ({}: Props) => {
  return (
    <Card>
      <RoundLabel label="2" />
      <Text m_p center>
        Для адаптации тренировок вы можете указать свой пол:
      </Text>
      <Text m_p center>
        Вы также можете добавить актуальные замеры вашего тела для отслеживания изменения физической
        формы:
      </Text>
      <Button m_p onPress={() => {}} label="Перейти в дневник" />
    </Card>
  );
};
