import React from 'react';
import {TextInputProps} from 'react-native';
import {InputLarge} from 'src/components/Inputs/InputLarge.tsx';
import {Control, Controller, FieldPath, FieldValues, RegisterOptions} from 'react-hook-form';

type Rules<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = Omit<
  RegisterOptions<TFieldValues, TName>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
>;

type Props<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  rules?: Rules<TFieldValues, FieldPath<TFieldValues>>;
  name: FieldPath<TFieldValues>;
} & TextInputProps;

export function InputLargeWithController<TFieldValues extends FieldValues>({
  control,
  rules,
  name,
  ...inputProps
}: Props<TFieldValues>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}}) => (
        <InputLarge {...inputProps} onChangeText={onChange} onBlur={onBlur} value={value} />
      )}
    />
  );
}
