'use client'

import { motion } from 'framer-motion'
import { ClockIcon } from '@heroicons/react/24/outline'
import Section from '../ui/Section'
import Container from '../ui/Container'

export default function UrgencyBanner() {
  return (
    <Section background="primary" className="py-16">
      <Container size="narrow" className="text-center">
        {/* Icon */}
        <motion.div
          className="flex justify-center mb-6"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ClockIcon className="w-16 h-16 text-gold" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-cinzel text-2xl md:text-3xl lg:text-4xl text-white mb-6 text-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Guaranteed Prices Only Until December 31, 2025
        </motion.h2>

        {/* Body Text */}
        <motion.div
          className="font-lato text-lg text-white/95 leading-relaxed space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            Our exclusive packages are available at a fixed and locked price only until the end of 2025.
          </p>
          <p>
            From January 1st, 2026, rates will be updated.
          </p>
          <p className="font-semibold">
            Book now and secure the best value for your golf experience.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}

