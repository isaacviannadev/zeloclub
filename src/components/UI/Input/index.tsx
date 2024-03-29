import React from 'react'

type InputProps = {
  label?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export default function Input({ label, ...rest }: InputProps) {
  return (
    <div>
      {label && (
        <label
          htmlFor={rest.name}
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          {label} {rest.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        aria-label={label}
        className="text-md block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#abedd8] focus-visible:outline-none sm:leading-6"
        {...rest}
      />
    </div>
  )
}
