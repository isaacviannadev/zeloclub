import React from 'react'

type ButtonProps = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  children,
  ...props
}: ButtonProps): React.JSX.Element {
  return (
    <button
      className="text-md h-14 w-full rounded-md bg-[#abedd8] px-3.5 py-2.5 text-center font-semibold text-gray-800 shadow-sm 
      transition-all focus-visible:outline  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#abedd8] disabled:cursor-not-allowed 
      disabled:opacity-40 sm:w-fit  md:w-fit [&:not(:disabled)]:hover:bg-[#97d3c0]"
      {...props}
    >
      {children}
    </button>
  )
}
