import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button, MainTitle} from 'src/shared/ui';
import {InputLarge} from 'src/components/Inputs/InputLarge.tsx';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';
import {s} from 'src/shared/lib';
import SportApp from 'src/SportApp.ts';

export const SingInScreen = () => {
  const {top} = useSafeAreaInsets();
  const {colors} = useTheme();

  const onAuthStateChanged = async () => {
    await SportApp.sessionService.login({email: 'test@mail.ru', password: 'Qwerty!1'});
    console.log('user data', SportApp.sessionService.getCurrentUser());
  };

  return (
    <View style={[{flex: 1, marginTop: top, paddingHorizontal: 16, paddingTop: 20}, s.alignCenter]}>
      <MainTitle title="Вход" style={s.mb10} />
      <View style={[s.w100pct, s.gp10, s.mb20]}>
        <InputLarge placeholder="логин" placeholderTextColor={colors.placeholder} />
        <InputLarge placeholder="пароль" placeholderTextColor={colors.placeholder} />
      </View>
      <Button
        label="Войти"
        onPress={onAuthStateChanged}
        style={{paddingVertical: 15, paddingHorizontal: 10, width: '50%'}}
      />
    </View>
  );
};
