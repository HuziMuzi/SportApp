import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MainTitle, Text} from 'src/shared/ui';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';
import {s} from 'src/shared/lib';
import Apple from 'src/shared/assets/Apple.tsx';
import Google from 'src/shared/assets/Google.tsx';
import {SignInForm} from 'src/components/SignInForm/SignInForm.tsx';
import SportApp from 'src/SportApp.ts';
import {SessionStatus} from 'src/shared/services/types.ts';
import {useTypedNavigation} from 'src/shared/lib/hooks/useTypeNavigation.ts';
import {Routes} from 'types/types.ts';

//TODO transfer
type FormValue = {
  email: string;
  password: string;
};

export const SingInScreen = () => {
  const {top} = useSafeAreaInsets();
  const {colors} = useTheme();
  const {navigate} = useTypedNavigation();

  const onAuthStateChanged = async (data: FormValue) => {
    const {email, password} = data;
    console.log(data);
    await SportApp.sessionService.login({email: 'test@mail.ru', password: 'Qwerty!1'});
  };

  useEffect(() => {
    const subscription = SportApp.sessionService.subscribeStatus(status => {
      if (status === SessionStatus.Authorized) {
        navigate(Routes.Greeting);
      }
    });
    return subscription.unsubscribe;
  }, []);

  return (
    <View style={[{flex: 1, marginTop: top, paddingHorizontal: 16, paddingTop: 20}]}>
      <View style={{height: '20%', justifyContent: 'center'}}>
        <MainTitle title="Вход" style={[s.mb10, s.alignSlfCenter]} />
      </View>
      <View style={[s.flex1]}>
        <SignInForm onChange={onAuthStateChanged} />
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
