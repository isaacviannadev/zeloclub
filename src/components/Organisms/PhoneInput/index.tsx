'use client'
import React, { useEffect, useState } from 'react'
import {
  PhoneInput as PhoneInputLib,
  defaultCountries,
  parseCountry,
} from 'react-international-phone'
import 'react-international-phone/style.css'
import './styled.css'

type PhoneInputProps = {
  label?: string
  callback?: (phone: any) => void
} & React.InputHTMLAttributes<HTMLInputElement>

const PhoneInput = ({ label, callback, ...props }: PhoneInputProps) => {
  const countries = defaultCountries.filter((country) => {
    const { iso2 } = parseCountry(country)
    return ['pt', 'br', 'us'].includes(iso2)
  })
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (callback) {
      callback(phone)
    }
  }, [phone])

  return (
    <div>
      {label && (
        <label
          htmlFor={props.name}
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          {label} {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <PhoneInputLib
        {...props}
        className="phoneInput"
        defaultCountry="br"
        value={phone}
        onChange={(phone) => setPhone(phone)}
        defaultMask="(00) 00000-0000"
        countries={countries}
      />
    </div>
  )
}

export default PhoneInput
