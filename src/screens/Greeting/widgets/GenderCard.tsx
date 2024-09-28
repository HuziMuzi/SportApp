import React, {useState} from 'react';
import {RadioButtons, Text} from 'src/shared/ui';
import {GENDER_DATA} from 'src/shared/lib/consts.ts';
import {Card} from '@screens/Greeting/ui/Card.tsx';
import {RoundLabel} from '@screens/Greeting/ui/RoundLabel.tsx';
import {s} from 'src/shared/lib';
import {Gender} from 'src/shared/services/types.ts';
import SportApp from 'src/SportApp.ts';

type Props = {};

export const GenderCard = ({}: Props) => {
  const [gender, setGender] = useState<Gender>('unspecified');

  const changeGender = (value: string) => {
    const currentGender = value as Gender;
    setGender(currentGender);
    SportApp.sessionService.saveInitUserData({gender: currentGender});
  };

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
        onChangeValue={changeGender}
      />
    </Card>
  );
};
