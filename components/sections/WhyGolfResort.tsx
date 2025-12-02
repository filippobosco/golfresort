'use client'

import { motion } from 'framer-motion'
import { 
  TrophyIcon, 
  FireIcon, 
  HeartIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline'
import Section from '../ui/Section'
import Container from '../ui/Container'

const features = [
  {
    icon: TrophyIcon,
    title: 'Championship Courses',
    description: 'Courses designed by internationally renowned architects. Fairways and greens maintained daily to ensure an impeccable playing experience.',
  },
  {
    icon: FireIcon,
    title: 'Gourmet Dining',
    description: 'Selected restaurants offer refined Italian cuisine with top-quality local ingredients. Every meal is an experience for the palate.',
  },
  {
    icon: HeartIcon,
    title: 'Personalized Service',
    description: 'Each guest receives dedicated assistance. From tee time to accommodation, we take care of every detail to make your stay perfect.',
  },
  {
    icon: MapPinIcon,
    title: 'Strategic Location',
    description: 'Facilities in the Rome area, immersed in the tranquility of the countryside. The perfect combination of nature, culture and excellent golf.',
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function WhyGolfResort() {
  return (
    <Section background="white" className="py-20 lg:py-28">
      <Container>
        {/* Headline */}
        <motion.h2
          className="font-cinzel text-3xl md:text-4xl lg:text-[42px] text-primary text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          An Experience Beyond Golf
        </motion.h2>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={item}
            >
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 rounded-xl mb-6"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="w-12 h-12 text-gold group-hover:text-primary transition-colors duration-300" />
              </motion.div>

              {/* Title */}
              <h3 className="font-cinzel text-xl md:text-2xl text-primary mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-lato text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

