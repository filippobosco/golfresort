'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import Section from '../ui/Section'
import Container from '../ui/Container'
import { useState } from 'react'

const benefits = [
  'Selected golf courses with pristine fairways and greens',
  'Refined hospitality and tailored service',
  'High-quality gourmet dining',
  'Absolute tranquility and privacy',
  'Strategic location near Rome',
]

const images = [
  {
    src: '/images/Green.jpg',
    alt: 'Golf course with impeccable green',
  },
  {
    src: '/images/Restaurant.jpg',
    alt: 'Elegant restaurant interiors',
  },
  {
    src: '/images/Relax.jpg',
    alt: 'Relaxation area with panoramic terrace',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export default function IntroductionSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <Section background="white" className="py-20 lg:py-28">
      <Container>
        {/* Mobile Carousel */}
        <motion.div
          className="md:hidden relative mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img 
                  src={images[currentIndex].src} 
                  alt={images[currentIndex].alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-lg transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-lg transition-all hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex ? 'bg-gold w-8' : 'bg-white/60 hover:bg-white/90'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:grid grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-cinzel text-3xl md:text-4xl lg:text-[42px] text-primary text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Golf Resort Rome
        </motion.h2>

        {/* Body Text */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-lato text-lg text-gray-700 leading-relaxed mb-6">
            Golf Resort Rome offers you access to exclusive experiences where golfing tradition, 
            Italian elegance and impeccable service come together to create unforgettable moments.
          </p>
          <p className="font-lato text-lg text-gray-700 leading-relaxed">
            Our selected partners in the Rome area offer championship courses, 
            premium facilities and an atmosphere that conquers the most demanding golfers.
          </p>
        </motion.div>

        {/* Subheading */}
        <motion.h3
          className="font-lato text-xl md:text-2xl text-gray-800 text-center mb-8 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Whether you are a professional or an enthusiast, you will find:
        </motion.h3>

        {/* Benefits List */}
        <motion.ul
          className="max-w-3xl mx-auto space-y-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-4"
              variants={item}
            >
              <CheckCircleIcon className="w-7 h-7 text-primary flex-shrink-0 mt-0.5" />
              <span className="font-lato text-lg text-gray-700 leading-relaxed">
                {benefit}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </Section>
  )
}

