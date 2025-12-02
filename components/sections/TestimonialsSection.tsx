'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import Section from '../ui/Section'
import Container from '../ui/Container'
import { useState } from 'react'

const testimonials = [
  {
    rating: 5,
    quote: 'Magnificent courses, meticulously maintained in every detail. The staff is extremely professional and the overall experience was exceptional. We will definitely return!',
    author: 'Marco R.',
    location: 'Milano',
  },
  {
    rating: 5,
    quote: 'We spent an unforgettable week. The courses are splendid, the restaurants excellent and the service impeccable. Highly recommended for those seeking quality.',
    author: 'Laura & Giuseppe T.',
    location: 'Firenze',
  },
  {
    rating: 5,
    quote: 'Fantastic location, a stone\'s throw from Rome yet immersed in nature. The courses are technically challenging and very well maintained. Top-level hospitality.',
    author: 'John M.',
    location: 'London',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <StarIcon key={i} className="w-6 h-6 text-gold" />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <Section background="white" className="py-20 lg:py-28">
      <Container>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-[42px] text-primary mb-4">
            What Our Guests Say
          </h2>
          <p className="font-lato text-lg text-gray-600 mb-6">
            Over 200 reviews with an average of 4.8/5 stars
          </p>
          
          {/* Visual Rating */}
          <motion.div
            className="flex justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              >
                <StarIcon className="w-8 h-8 text-gold" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Mobile Carousel */}
        <motion.div
          className="md:hidden relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 border-l-4 border-gold rounded-lg p-8 shadow-md"
              >
                <StarRating rating={testimonials[currentIndex].rating} />
                
                <blockquote className="relative">
                  <span className="absolute -top-2 -left-2 text-6xl text-gold/20 font-serif">"</span>
                  <p className="font-lato italic text-gray-700 leading-relaxed relative z-10 mb-4">
                    {testimonials[currentIndex].quote}
                  </p>
                </blockquote>

                <div className="font-lato font-bold text-primary">
                  — {testimonials[currentIndex].author}
                  <span className="font-normal text-gray-600">, {testimonials[currentIndex].location}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-primary rounded-full p-2 shadow-lg transition-all hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-primary rounded-full p-2 shadow-lg transition-all hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-gold w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:grid grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 border-l-4 border-gold rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300"
              variants={item}
              whileHover={{ y: -4 }}
            >
              <StarRating rating={testimonial.rating} />
              
              <blockquote className="relative">
                <span className="absolute -top-2 -left-2 text-6xl text-gold/20 font-serif">"</span>
                <p className="font-lato italic text-gray-700 leading-relaxed relative z-10 mb-4">
                  {testimonial.quote}
                </p>
              </blockquote>

              <div className="font-lato font-bold text-primary">
                — {testimonial.author}
                <span className="font-normal text-gray-600">, {testimonial.location}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </Container>
    </Section>
  )
}

