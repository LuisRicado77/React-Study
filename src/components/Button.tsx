import React from 'react'


interface Props{
  children: String;
  onClick:() => void;
  color?: 'primary' | 'secundary' | 'danger' | 'success';
}

export const Button = ({children,onClick,color = 'primary'}:Props) => {
  return (
    <button className={'btn btn-'+ color} onClick={onClick}>{children}</button>
  )
}
