'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'gray' | 'gradient' | 'primary'
  id?: string
}

const backgrounds = {
  white: 'bg-white',
  gray: 'bg-gradient-to-b from-gray-50 to-gray-100',
  gradient: 'bg-gradient-to-b from-primary to-primary-dark',
  primary: 'bg-primary',
}

export default function Section({ 
  children, 
  className = '', 
  background = 'white',
  id 
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`${backgrounds[background]} ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}

