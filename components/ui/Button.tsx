'use client'

import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  icon?: boolean
  fullWidth?: boolean
  className?: string
  ariaLabel?: string
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon = true,
  fullWidth = false,
  className = '',
  ariaLabel,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-3 font-lato font-bold text-lg px-12 py-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-gold text-white hover:bg-primary shadow-[0_4px_20px_rgba(190,156,77,0.4)] hover:shadow-[0_8px_28px_rgba(7,111,62,0.5)] focus:ring-gold/50',
    secondary: 'bg-primary text-white hover:bg-gold shadow-lg hover:shadow-xl focus:ring-primary/50',
  }

  const widthStyle = fullWidth ? 'w-full' : ''

  const content = (
    <>
      {children}
      {icon && (
        <motion.span
          initial={{ y: 0 }}
          whileHover={{ y: 5 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowDownIcon className="w-5 h-5" />
        </motion.span>
      )}
    </>
  )

  const commonProps = {
    className: `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`,
    'aria-label': ariaLabel,
  }

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        {...commonProps}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...commonProps}
    >
      {content}
    </motion.button>
  )
}

