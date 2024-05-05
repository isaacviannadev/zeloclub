'use client';
import Link from 'next/link';

import RegisterForm from '@zeloclub/app/signup/components/register-form';
import { MailIcon } from 'lucide-react';

export const Contact = () => {
  return (
    <div className='relative isolate bg-white' id='contact'>
      <div className='mx-auto  grid max-w-7xl  grid-cols-1 lg:grid-cols-2'>
        <div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
          <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
            <div className='absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gradient-to-l from-white to-[#abedd86d] lg:w-1/2'>
              <svg
                className='absolute inset-0 h-full object-cover opacity-10'
                aria-hidden='true'
                width='1728'
                height='1117'
                viewBox='0 0 1728 1117'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='867.996'
                  y='856.414'
                  width='1891.82'
                  height='1891.82'
                  transform='rotate(45.1709 867.996 856.414)'
                  stroke='#2A2A2Ae7'
                  strokeWidth='2'
                />
                <rect
                  x='868.119'
                  y='414.414'
                  width='1891.82'
                  height='1891.82'
                  transform='rotate(45.1709 868.119 414.414)'
                  stroke='#2A2A2Ae7'
                  strokeWidth='2'
                />
                <rect
                  x='868.119'
                  y='-27.5858'
                  width='1891.82'
                  height='1891.82'
                  transform='rotate(45.1709 868.119 -27.5858)'
                  stroke='#2A2A2Ae7'
                  strokeWidth='2'
                />
                <rect
                  x='867.996'
                  y='-469.586'
                  width='1891.82'
                  height='1891.82'
                  transform='rotate(45.1709 867.996 -469.586)'
                  stroke='#2A2A2Ae7'
                  strokeWidth='2'
                />
              </svg>
            </div>
            <h2 className='font-alt text-3xl font-bold tracking-tight text-gray-900'>
              Cadastre-se na lista de interesse
            </h2>
            <p className='mt-6 text-lg leading-6 text-gray-600'>
              Se você é um cuidador dedicado e experiente, gostaríamos de
              conhecê-lo. Preencha o formulário ao lado para se cadastrar em
              nossa plataforma e começar a fazer a diferença na vida dos idosos.
              <br />
              <br />
              Se você está em busca de cuidadores qualificados para seus entes
              queridos, você está no lugar certo.Preencha o formulário ao lado
              para que possamos entender melhor suas necessidades e ajudá-lo a
              encontrar o cuidador perfeito para sua família.
            </p>
            <dl className='mt-10 space-y-4 text-base leading-7 text-gray-600'>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>E-mail</span>
                  <MailIcon
                    className='h-7 w-6 text-gray-400'
                    aria-hidden='true'
                  />
                </dt>
                <dd>
                  <Link
                    className='hover:text-gray-900'
                    href='mailto:contato@zeloclub.com.br'
                  >
                    contato@zeloclub.com.br
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <RegisterForm />
      </div>
    </div>
  );
};

export default Contact;
