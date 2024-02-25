import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {RadioButtons, Text} from 'src/shared/ui';
import {GENDER_DATA} from 'src/shared/lib/consts.ts';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';

type Props = {};

export const Profile = ({}: Props) => {
  const {colors} = useTheme();
  const [gender, setGender] = useState(GENDER_DATA[0].value);

  const onChangeGender = useCallback((section: string) => setGender(section), []);

  return (
    <View>
      <View
        style={{
          gap: 10,
          padding: 15,
          borderRadius: 15,
          borderColor: colors.accent1,
          borderWidth: 1,
        }}>
        <Text m_p>Изменить пол</Text>
        <RadioButtons
          style={{flexGrow: 1, flex: 0, paddingVertical: 5}}
          data={GENDER_DATA}
          value={gender}
          onChangeValue={onChangeGender}
        />
      </View>
    </View>
  );
};
