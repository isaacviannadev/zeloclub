import React from 'react';
import Input from '../UI/Input';
import { phoneValidation, telMask } from '@zeloclub/app/helpers/formatters';

type PhoneInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function PhoneInput({ ...rest }: PhoneInputProps) {
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
      placeholder='(00) 00000-0000'
      required
      onInput={handlePhone}
      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
      {...rest}
    />
  );
}
