import React, {useState} from 'react';
import {RadioButtons, Text} from 'src/shared/ui';
import {GENDER_DATA} from 'src/shared/lib/consts.ts';
import {Card} from '@screens/Greeting/ui/Card.tsx';
import {RoundLabel} from '@screens/Greeting/ui/RoundLabel.tsx';
import {s} from 'src/shared/lib';

type Props = {};

export const GenderCard = ({}: Props) => {
  const [gender, setGender] = useState('unspecified');

  return (
    <Card>
      <RoundLabel label="1" />
      <Text m_p center>
        Для адаптации тренировок вы можете указать свой пол:
      </Text>
      <RadioButtons
        style={s.flexGrow1}
        data={GENDER_DATA}
        value={gender}
        onChangeValue={setGender}
      />
    </Card>
  );
};
