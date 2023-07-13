import React from 'react'

type Props = {
  children?: string | any
  onMouseEnter?: () => any
  className: any
  type?: 'button' | 'submit' | 'reset'
}

export default function CustomButton({children, onMouseEnter, className, type}: Props) {
  const onmouseEnter = () => {
    onMouseEnter && onMouseEnter()
  }
  return (
    <button onMouseEnter={onmouseEnter} className={className} type={type}>{children}</button>
  )
}