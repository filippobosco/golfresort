'use client'

import { motion } from 'framer-motion'
import { ChevronDownIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import Button from '../ui/Button'

export default function HeroSection() {
  const scrollToNextSection = () => {
    const trustBar = document.getElementById('trust-bar')
    trustBar?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-8 lg:pt-0">
      {/* Background with Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/field.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10" />
      </motion.div>

      {/* Logo - Desktop only (absolute top-left) */}
      <motion.div
        className="hidden lg:block absolute top-8 left-8 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <img 
          src="/images/logo.svg" 
          alt="Golf Resort Rome"
          className="h-48 w-auto"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        {/* Logo - Mobile only (centered above title) */}
        <motion.div
          className="lg:hidden mb-4 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <img 
            src="/images/logo.svg" 
            alt="Golf Resort Rome"
            className="h-32 w-auto"
          />
        </motion.div>
        <motion.h1
          className="font-cinzel text-4xl sm:text-5xl lg:text-[56px] text-white leading-tight mb-6 text-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        >
          Your Golf & Luxury Retreat<br />
          in the Heart of Rome
        </motion.h1>

        <motion.p
          className="font-lato text-xl lg:text-2xl text-white max-w-3xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
        >
          Exclusive 2026 packages: top-class golf, relaxation and refined hospitality.<br />
          Book now and lock in your guaranteed price until February 28, 2026.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.5, ease: 'easeOut' }}
        >
          <Button 
            href="#contact-form" 
            variant="primary"
            ariaLabel="Request information about packages"
          >
            Request Information
          </Button>
        </motion.div>

        {/* Microcopy */}
        <motion.div
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-white/90 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5 text-gold" />
            <span>Free personalized consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5 text-gold" />
            <span>Prices locked until 28/02/2026</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <ChevronDownIcon className="w-8 h-8" />
      </motion.button>
    </section>
  )
}

