import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className='rounded-md bg-[#abedd8] px-3.5 py-2.5 w-full md:w-fit text-center text-md text-gray-800 font-semibold shadow-sm transition-all hover:bg-[#97d3c0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#abedd8] '
      {...props}
    >
      {children}
    </button>
  );
}
