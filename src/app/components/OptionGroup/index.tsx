'use client';
import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

const clientType = [
  {
    title: 'Sou cuidador',
    description: 'e desejo receber oportunidades de trabalho.',
  },
  {
    title: 'Sou cliente',
    description: 'e desejo contratar um cuidador.',
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [selected, setSelected] = useState(clientType[0]);

  return (
    <RadioGroup
      value={selected}
      onChange={setSelected}
      className='mt-2.5'
      name='clientType'
      id='clientType'
    >
      <RadioGroup.Label className='sr-only'>
        Grupo de interesse
      </RadioGroup.Label>
      <div className='flex gap-4'>
        {clientType.map((client) => (
          <RadioGroup.Option
            key={client.title}
            value={client}
            className={({ checked, active }) =>
              classNames(
                checked ? 'border-transparent' : 'border-gray-300',
                active
                  ? 'border-[#abedd8] ring-2 ring-[#abedd8] bg-[#abedd8] bg-opacity-10'
                  : '',
                'relative flex flex-1  cursor-pointer rounded-lg border bg-white px-3 py-3 shadow-sm focus:outline-none sm:flex sm:justify-between sm:px-6 sm:py-4'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span className='flex items-center'>
                  <span className='flex flex-col text-sm'>
                    <RadioGroup.Label
                      as='span'
                      className='font-bold text-lg text-gray-900'
                    >
                      {client.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description as='span' className='text-gray-500'>
                      <span className='block sm:inline'>
                        {client.description}
                      </span>{' '}
                    </RadioGroup.Description>
                  </span>
                </span>

                <span
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-[#abedd8]' : 'border-transparent',
                    'pointer-events-none absolute -inset-px rounded-lg'
                  )}
                  aria-hidden='true'
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
