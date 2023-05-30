import React from 'react';
import Input from '../UI/Input';
import { phoneValidation, telMask } from '@zeloclub/app/helpers/formatters';

type PhoneInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function PhoneInput() {
  const handlePhone = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const value = input.value;

    if (value.length === 0 || value.length <= 10) return;

    const isValid = phoneValidation(value);

    if (isValid) {
      input.setCustomValidity('');
    } else {
      input.setCustomValidity('Telefone inválido');
    }

    input.value = telMask(value);

    input.reportValidity();
  };

  return (
    <Input
      id='phone-number'
      name='phone-number'
      autoComplete='tel'
      placeholder='(00) 00000-0000'
      onInput={handlePhone}
    />
  );
}
