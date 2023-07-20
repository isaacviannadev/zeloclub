import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonVariant = {
  primary:
    'bg-[#abedd8] text-gray-800 focus-visible:outline-[#abedd8] [&:not(:disabled)]:hover:bg-[#97d3c0]',
  secondary:
    'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 px-3.5 py-2.5 focus-visible:outline-[#f9f9f9] [&:not(:disabled)]:hover:bg-[#ebebeb]',
}
export default function Button({
  children,
  variant = 'primary',
  ...props
}: ButtonProps): React.JSX.Element {
  const buttonClasses = `text-md h-14 w-full rounded-md px-3.5 py-2.5 text-center font-semibold shadow-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  disabled:cursor-not-allowed 
      disabled:opacity-40 md:w-fit ${ButtonVariant[variant]}`

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}
