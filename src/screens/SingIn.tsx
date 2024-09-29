import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button, MainTitle, Text} from 'src/shared/ui';
import {InputLarge} from 'src/components/Inputs/InputLarge.tsx';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';
import {s} from 'src/shared/lib';
import SportApp from 'src/SportApp.ts';
import {ButtonType} from 'src/shared/ui/Button/Button.tsx';
import Apple from 'src/shared/assets/Apple.tsx';
import Google from 'src/shared/assets/Google.tsx';

export const SingInScreen = () => {
  const {top} = useSafeAreaInsets();
  const {colors} = useTheme();

  const onAuthStateChanged = async () => {
    await SportApp.sessionService.login({email: 'test@mail.ru', password: 'Qwerty!1'});
    console.log('user data', SportApp.sessionService.getCurrentUser());
  };

  return (
    <View style={[{flex: 1, marginTop: top, paddingHorizontal: 16, paddingTop: 20}]}>
      <View style={{height: '20%', justifyContent: 'center'}}>
        <MainTitle title="Вход" style={[s.mb10, s.alignSlfCenter]} />
      </View>
      <View style={[s.flex1]}>
        <View style={[s.w100pct, s.gp20, s.mb20]}>
          <InputLarge placeholder="логин" placeholderTextColor={colors.placeholder} />
          <InputLarge placeholder="пароль" placeholderTextColor={colors.placeholder} />
          <Button label="Войти" type={ButtonType.Large} onPress={onAuthStateChanged} />
        </View>
        <View style={[{height: 1, backgroundColor: colors.accent1}, s.w100pct, s.mv30]} />
        <View style={[s.alignCenter, s.gp20]}>
          <Text>{'Через соцсеть'}</Text>
          <View style={[s.flexRow, s.gp20]}>
            <Google width={58} height={58} />
            <Apple width={58} height={58} />
          </View>
        </View>
      </View>
    </View>
  );
};
