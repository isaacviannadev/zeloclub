'use client'
import Image from 'next/image'
import { ReactNode } from 'react'
import CloseIcon from './icons/x-thin.svg'

type ModalProps = {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

interface KeyboardEvent {
  key: string
}

export default function Modal({
  isOpen = false,
  onClose,
  children,
}: ModalProps) {
  if (!isOpen) return null

  const handleOverlayClick = () => {
    if (onClose) onClose()
  }

  const handleKeyPress = (event: KeyboardEvent) => {
    console.log(event.key, 'key')
    if (event.key === 'Escape') {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-5"
      onKeyDown={(e) => handleKeyPress(e)}
    >
      <div
        className="absolute -z-[1] h-screen w-screen bg-gray-500 bg-opacity-25"
        onClick={handleOverlayClick}
      />
      <div className="z-1 relative flex h-fit w-fit min-w-full items-center justify-center rounded-lg border border-zinc-400 bg-white p-5 md:min-w-[42rem]">
        <div
          className="absolute right-1 top-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-zinc-500 bg-white text-[#2e2e2e] transition-all md:-top-8 md:right-0 md:hover:bg-slate-300"
          onClick={handleOverlayClick}
        >
          <Image src={CloseIcon} alt="close" width={16} height={16} />
        </div>
        {children}
      </div>
    </div>
  )
}
