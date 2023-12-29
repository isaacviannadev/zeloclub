import React from 'react'

type CardProps = {
  children: React.ReactNode
  classes?: string
} & React.HTMLAttributes<HTMLDivElement>

export default function Card({ children, classes = '' }: CardProps) {
  const cardClasses = `flex h-full w-full max-w-6xl items-center justify-center rounded-md bg-white ${classes}`

  return <div className={cardClasses}>{children}</div>
}
