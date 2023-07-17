import React from 'react'

type CardProps = {
  children: React.ReactNode
  classes?: string
} & React.HTMLAttributes<HTMLDivElement>

export default function Card({ children, classes = '' }: CardProps) {
  const cardClasses = `flex h-full w-full max-w-md items-center justify-center space-y-8 rounded-md bg-white p-2 ${classes}`

  return <div className={cardClasses}>{children}</div>
}
