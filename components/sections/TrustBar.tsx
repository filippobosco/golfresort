'use client'

import { motion } from 'framer-motion'
import { 
  TrophyIcon, 
  StarIcon, 
  ShieldCheckIcon, 
  SparklesIcon 
} from '@heroicons/react/24/solid'
import Container from '../ui/Container'

const trustItems = [
  {
    icon: TrophyIcon,
    text: 'Championship Courses',
  },
  {
    icon: StarIcon,
    text: '4.8/5 on 200+ Reviews',
  },
  {
    icon: ShieldCheckIcon,
    text: 'FIG Certified Courses',
  },
  {
    icon: SparklesIcon,
    text: '5-Star Hospitality',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function TrustBar() {
  return (
    <section id="trust-bar" className="bg-white border-b border-gray-200 py-12">
      <Container>
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {trustItems.map((trustItem, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center text-center group cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-4">
                <trustItem.icon className="w-10 h-10 text-gold group-hover:text-primary transition-colors duration-300" />
              </div>
              <p className="font-lato text-base text-gray-700 font-medium">
                {trustItem.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

