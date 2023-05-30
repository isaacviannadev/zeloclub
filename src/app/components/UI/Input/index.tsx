import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...rest }: InputProps) {
  return (
    <input
      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#abedd8] focus-visible:outline-none  sm:text-sm sm:leading-6'
      {...rest}
    />
  );
}
