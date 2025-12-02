'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Section from '../ui/Section'
import Container from '../ui/Container'
import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const galleryImages = [
  {
    src: '/images/18 buche.jpg',
    alt: 'Panoramic golf course',
    caption: 'Championship courses in the heart of the Roman countryside',
  },
  {
    src: '/images/Green curato.jpg',
    alt: 'Green with flag',
    caption: 'Impeccable greens maintained daily',
  },
  {
    src: '/images/Architettura.jpg',
    alt: 'Clubhouse exterior',
    caption: 'Elegant and welcoming architecture',
  },
  {
    src: '/images/Cucina.jpg',
    alt: 'Restaurant interior',
    caption: 'Gourmet cuisine with panoramic views',
  },
  {
    src: '/images/Comfort.jpg',
    alt: 'Luxury room',
    caption: 'Comfort and luxury for your stay',
  },
  {
    src: '/images/Italia.jpg',
    alt: 'Convivial moment',
    caption: 'Authentic Italian hospitality',
  },
]

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <Section background="gray" className="py-20 lg:py-28">
      <Container>
        {/* Headline */}
        <motion.h2
          className="font-cinzel text-3xl md:text-4xl lg:text-[42px] text-primary text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Experience Golf Resort Rome
        </motion.h2>

        {/* Mobile Carousel */}
        <motion.div
          className="md:hidden relative max-w-4xl mx-auto"
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
                  src={galleryImages[currentIndex].src} 
                  alt={galleryImages[currentIndex].alt}
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
              {galleryImages.map((_, index) => (
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
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

