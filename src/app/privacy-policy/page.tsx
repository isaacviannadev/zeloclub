'use client';

import React from 'react';
import privacyPolicy from '@zeloclub/assets/docs/privacy-policy';
import Link from 'next/link';
import { Toaster, toast } from 'react-hot-toast';

function PrivacyPolicy() {
  const download = () => {
    const element = document.createElement('a');
    const file = new Blob([privacyPolicy], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'zeloclub-privacy-policy.txt';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <>
      <Toaster position='top-right' />
      <div className='flex flex-col justify-center items-center h-screen bg-brand-100/50 p-5 md:p-10 '>
        <Link href='/'>
          <h1 className='font-alt text-5xl'>zeloclub</h1>
        </Link>
        <div className='flex flex-col md:flex-row  items-center pb-5 md:items-baseline md:justify-between w-full max-w-6xl pt-5 md:pt-14 '>
          <h2 className='text-2xl '>Política de Privacidade</h2>
          <h3 className='text-right'>Última atualização: 6 de junho de 2023</h3>
        </div>
        <div className='bg-white w-full max-w-6xl p-6 rounded-lg shadow-md max-h-full overflow-y-auto text-sm md:text-base'>
          <pre className='font-sans'>{privacyPolicy}</pre>
        </div>

        <button
          className='bg-brand-500 text-white px-4 py-2 rounded-lg shadow-md mt-5'
          onClick={() => {
            download();
            toast.success('Copiado para o clipboard');
          }}
        >
          Fazer download
        </button>
      </div>
    </>
  );
}

export default PrivacyPolicy;
