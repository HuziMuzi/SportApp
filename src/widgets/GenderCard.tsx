import React, {useEffect, useState} from 'react';
import {RadioButtons, Text} from 'src/shared/ui';
import {GENDER_DATA} from 'src/shared/lib/consts.ts';
import {CardFrame} from 'src/shared/ui/CardFrame.tsx';
import {RoundLabel} from '@screens/Greeting/RoundLabel.tsx';
import {s} from 'src/shared/lib';
import {Gender} from 'src/shared/services/types.ts';
import SportApp from 'src/SportApp.ts';

type Props = {};
const {sessionService} = SportApp;

export const GenderCard = ({}: Props) => {
  const [gender, setGender] = useState<Gender>('unspecified');

  const changeGender = async (value: string) => {
    const currentGender = value as Gender;
    setGender(currentGender);
    await sessionService.setUserData({gender: currentGender});
  };

  useEffect(() => {
    (async () => {
      await sessionService.setUserData({gender});
    })();
  }, []);

  return (
    <CardFrame>
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
    </CardFrame>
  );
};
