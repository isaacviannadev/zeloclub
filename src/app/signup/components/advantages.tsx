import { CheckIcon } from '@heroicons/react/20/solid'
import React from 'react'

export type AdvantagesPropsList = {
  title: string
  description: string
}

export type AdvantagesProps = {
  advantages: AdvantagesPropsList[]
  showDescription?: boolean
}

function Advantages({ advantages, showDescription = false }: AdvantagesProps) {
  if (!advantages) return null

  return (
    <div className="mb-4 flex flex-col items-start gap-0 lg:mb-0 lg:gap-2">
      {advantages.map((advantage, index) => (
        <div
          key={index}
          className="flex w-full  cursor-pointer flex-row items-center gap-1 rounded-md border border-transparent py-2 transition-all duration-300 ease-in-out
          hover:border-brand-200 hover:bg-brand-100 hover:shadow-md lg:gap-3 lg:p-2 "
        >
          <div className="flex h-6 w-6 ">
            <CheckIcon className="text-brand-400" />
          </div>
          <h2 className=" text-sm text-gray-700 ">{advantage.title}</h2>

          {showDescription && (
            <p className="mt-4 text-center text-sm text-gray-600">
              {advantage.description}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default Advantages
