'use client'
import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { ClientSelectionProps, MailTypes } from '@zeloclub/app/types/apiTypes'

const clientSelection: ClientSelectionProps = [
  {
    title: 'Sou cuidador',
    description: 'e desejo receber oportunidades de trabalho.',
    type: 'caregiver',
  },
  {
    title: 'Sou cliente',
    description: 'e desejo contratar um cuidador.',
    type: 'client',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type ContactProps = {
  callback: (value: MailTypes['type']) => void
}

export default function Contact({ callback }: ContactProps) {
  const [selected, setSelected] = useState(clientSelection[0])

  useEffect(() => {
    if (!selected) return
    callback(selected.type)
  }, [callback, selected])

  return (
    <RadioGroup
      value={selected}
      onChange={setSelected}
      className="mt-2.5"
      name="client-type"
      id="client-type"
    >
      <RadioGroup.Label className="sr-only">
        Grupo de interesse
      </RadioGroup.Label>
      <div className="flex gap-4">
        {clientSelection.map((client) => (
          <RadioGroup.Option
            key={client.title}
            value={client}
            defaultChecked={client.type === 'caregiver'}
            className={({ checked, active }) =>
              classNames(
                checked
                  ? 'border-transparent bg-[#abedd8] bg-opacity-20'
                  : 'border-gray-300 bg-white',
                active ? 'border-[#abedd8] ring-2 ring-[#abedd8] ' : '',
                'relative flex flex-1 cursor-pointer rounded-lg  border px-3 py-3 shadow-sm focus:outline-none sm:flex sm:justify-between sm:px-6 sm:py-4',
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span className="flex items-center">
                  <span className="flex flex-col text-sm">
                    <RadioGroup.Label
                      as="span"
                      className="text-lg font-bold text-gray-900"
                    >
                      {client.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description as="span" className="text-gray-500">
                      <span className="block sm:inline">
                        {client.description}
                      </span>{' '}
                    </RadioGroup.Description>
                  </span>
                </span>

                <span
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-[#abedd8]' : 'border-transparent',
                    'pointer-events-none absolute -inset-px rounded-lg',
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
