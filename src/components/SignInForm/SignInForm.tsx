import React from 'react';
import {View} from 'react-native';
import {s} from 'src/shared/lib';
import {Button} from 'src/shared/ui';
import {ButtonType} from 'src/shared/ui/Button/Button.tsx';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';
import {InputLargeWithController} from 'src/components/Inputs/InputLargeWithController.tsx';
import {useForm} from 'react-hook-form';

type FormValue = {
  email: string;
  password: string;
};

type Props = {
  onChange: (data: FormValue) => void;
};

export const SignInForm = ({onChange}: Props) => {
  const {colors} = useTheme();
  const {
    control,
    handleSubmit,
    formState: {isSubmitting, disabled},
  } = useForm<FormValue>();

  return (
    <View style={[s.w100pct, s.gp20, s.mb20]}>
      <InputLargeWithController
        control={control}
        name="email"
        placeholder="логин"
        placeholderTextColor={colors.placeholder}
      />
      <InputLargeWithController
        control={control}
        name="password"
        placeholder="пароль"
        placeholderTextColor={colors.placeholder}
      />
      <Button
        label="Войти"
        disabled={disabled}
        isLoading={isSubmitting}
        type={ButtonType.Large}
        onPress={handleSubmit(onChange)}
      />
    </View>
  );
};
