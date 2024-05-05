import ErrorMessage from '@zeloclub/components/UI/ErroMessage';
import { forwardRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { cn } from '../../../../@/lib/utils';

export type PhoneInputProps = {
  name: string;
  label?: string;
  country?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: { [key: string]: any };
} & React.ComponentProps<typeof PhoneInput> &
  React.InputHTMLAttributes<HTMLInputElement>;

export const PhoneInputField = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      label = 'Telefone',
      name,
      country = 'br',
      error = {},
      inputProps,
      ...phoneInputLibProps
    },
    ref
  ) => {
    return (
      <div className='w-full mb-2'>
        <PhoneInput
          specialLabel={''}
          country={country}
          className={cn(error[name as string]?.message ? 'error' : '')}
          {...phoneInputLibProps}
          inputProps={{
            name,
            ref: { ref },
            ...inputProps,
          }}
        />
        {error[name as string]?.message && (
          <ErrorMessage message={error[name as string]?.message} />
        )}
      </div>
    );
  }
);

export default PhoneInputField;
