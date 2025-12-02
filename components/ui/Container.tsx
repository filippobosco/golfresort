import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'default' | 'narrow' | 'wide'
}

const sizes = {
  default: 'max-w-7xl',
  narrow: 'max-w-4xl',
  wide: 'max-w-[1400px]',
}

export default function Container({ 
  children, 
  className = '', 
  size = 'default' 
}: ContainerProps) {
  return (
    <div className={`${sizes[size]} mx-auto px-6 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}

