'use client';

import React, { useState } from 'react';
import Modal from '../Modal';

export default function Logo() {
  const [easterEggOpen, setEasterEggOpen] = useState(false);

  function handleEasterEggClick() {
    setEasterEggOpen((old) => !old);
  }

  return (
    <>
      <h1
        className='text-7xl font-bold md:text-9xl select-none'
        onClick={() => setEasterEggOpen((old) => !old)}
      >
        zeloclub
      </h1>

      <Modal isOpen={easterEggOpen} onClose={handleEasterEggClick}>
        <div className='flex flex-col items-center justify-center gap-4 text-center'>
          <h2 className='text-6xl font-bold'>zeloclub</h2>
          <p className='text-xl'>em breve!</p>
          ---
          <p className='text-2xl'>
            Mas o que é <strong className='text-[#9BD0C3]'>zeloclub</strong>?
          </p>
          <p className='text-xl max-w-xl'>
            <strong className='text-[#9BD0C3]'>zeloclub</strong> é uma
            plataforma que conecta profissionais de cuidados com idosos com
            pessoas que precisam de cuidados.
          </p>
          <p className='text-xl max-w-xl'>
            <strong className='text-[#9BD0C3]'>zeloclub</strong> é um projeto
            que visa trazer a melhor experiência na hora de contratar um
            profissional para cuidar daquela pessoa que cuidou de você a vida
            inteira.
          </p>
          <p className='text-xl max-w-xl'>
            <strong className='text-[#9BD0C3]'>zeloclub</strong> é uma
            plataforma que conecta pessoas! ♥️
          </p>
          ---
          <small className='text-xs max-w-md text-zinc-500'>
            Estamos na fase de desenvolvimento, trabalhando duro para trazer a
            melhor experiência para você!
          </small>
          <small className='text-xs max-w-md text-zinc-50 select-none'>
            Matheus me entrega a API!
          </small>
        </div>
      </Modal>
    </>
  );
}
