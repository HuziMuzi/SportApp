import React, {useCallback, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {RadioButtons, Text} from 'src/shared/ui';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';
import {s} from 'src/shared/lib';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTypedNavigation} from 'src/shared/lib/hooks/useTypeNavigation.ts';

type Props = {};

export const Settings = ({}: Props) => {
  const {colors} = useTheme();
  const {navigate} = useTypedNavigation();
  const [lang, setLang] = useState(LANGUAGES[0].value);

  const onLogout = useCallback(() => navigate('greeting'), []);

  return (
    <View style={s.gp10}>
      <View
        style={{
          borderColor: colors.accent1,
          borderWidth: 1,
          padding: 15,
          borderRadius: 15,
          gap: 10,
        }}>
        <Text m_p>Изменить язык</Text>
        <RadioButtons style={s.py5} data={LANGUAGES} value={lang} onChangeValue={setLang} />
      </View>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          borderColor: colors.accent1,
          borderWidth: 1,
          padding: 15,
          borderRadius: 15,
          gap: 10,
        }}>
        <AntDesign name="sharealt" color={colors.main} size={20} />
        <Text m_p>Поделиться с другом</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onLogout}
        style={{
          flexDirection: 'row',
          borderColor: colors.accent1,
          borderWidth: 1,
          padding: 15,
          borderRadius: 15,
          gap: 10,
        }}>
        <AntDesign name="logout" color={colors.main} size={20} />
        <Text m_p>Выйти</Text>
      </TouchableOpacity>
    </View>
  );
};

const LANGUAGES = [
  {
    label: 'Русский',
    value: 'ru',
  },
  {
    label: 'English',
    value: 'en',
  },
];
