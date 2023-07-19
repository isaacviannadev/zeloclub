import React from 'react'
type DividerProps = {
  orientation?: 'horizontal' | 'vertical'
  classes?: string
} & React.HTMLAttributes<HTMLDivElement>

const crossAxisClasses = {
  horizontal: 'w-full h-[1px]',
  vertical: 'h-full w-[1px]',
}

const Divider = ({ orientation = 'horizontal', classes }: DividerProps) => {
  const dividerClasses = `flex bg-brand-300 ${crossAxisClasses[orientation]} ${classes}`

  return <div className={dividerClasses} />
}

export default Divider
