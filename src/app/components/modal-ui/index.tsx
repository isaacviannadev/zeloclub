'use client';
import Image from 'next/image';
import { ReactNode } from 'react';
import CloseIcon from './icons/x-thin.svg';

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

interface KeyboardEvent {
  key: string;
}

export default function Modal({
  isOpen = false,
  onClose,
  children,
}: ModalProps): JSX.Element | null {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    if (onClose) onClose();
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div
      className='flex items-center justify-center fixed inset-0 p-5'
      onKeyDown={handleKeyPress}
    >
      <div
        className='w-screen h-screen bg-gray-500 absolute -z-[1] bg-opacity-25'
        onClick={handleOverlayClick}
      />
      <div className='flex items-center justify-center relative z-1 p-5 bg-white border border-zinc-400 w-fit min-w-full md:min-w-[42rem] h-fit rounded-lg'>
        <div
          className='flex items-center justify-center absolute right-0 -top-8 w-6 h-6 text-[#2e2e2e] border border-zinc-500 rounded-full md:hover:bg-slate-300 transition-all bg-white cursor-pointer'
          onClick={handleOverlayClick}
        >
          <Image src={CloseIcon} alt='close' width={16} height={16} />
        </div>
        {children}
      </div>
    </div>
  );
}
