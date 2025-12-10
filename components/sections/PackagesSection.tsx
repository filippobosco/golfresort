'use client'

import { motion } from 'framer-motion'
import { CheckCircleIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import Section from '../ui/Section'
import Container from '../ui/Container'
import Button from '../ui/Button'

const packages = [
  {
    badge: 'COMPLETE EXPERIENCE',
    badgeColor: 'bg-primary',
    title: 'Charme, Relax & Golf Week',
    tagline: 'The perfect week between golf and dolce vita',
    image: '/images/\'Charme, Relax & Golf\' week golf Rome.jpg',
    features: [
      '7 nights in classic room in Leon&apos;s Place boutique Hotel 4* in Rome',
      'Full daily buffet breakfast',
      '1 Green fee on Marco Simone Golf & Country Club',
      '1 Green fee on Castelgandolfo Golf Club, the Robert Trend Jones Sr. Golf Course',
      '1 Green fee on Acquasanta Golf Club',
      'Advanced starting times at time of the reservation',
      'Unlimited use of practice facilities',
      'Club storage and locker room service',
      'Full time assistance during your stay',
    ],
    idealFor: 'Couples and golfers who want to fully immerse themselves in the golf & relax experience',
    price: '€990',
    priceNote: '',
  },
  {
    badge: 'EARLY BIRD EXCLUSIVE',
    badgeColor: 'bg-primary',
    title: 'Be The First',
    tagline: 'Start your day like a true champion',
    image: '/images/Be the First!.jpg',
    features: [
      '3 overnight accommodations in Carpediem Residence Relais',
      '2 Green fees on Marco Simone Golf & Country Club,',
      'the official host Venue of the 2023 RYDER CUP MATCH',
      'Advanced starting times at time of the reservation',
      'Club storage and locker room service',
      'Unlimited use of practice facilities',
      'Full time assistance during your stay',
    ],
    idealFor: 'Early morning golfers who love to play on a perfect course without crowds',
    price: '€599',
    priceNote: '',
  },
  {
    badge: 'LOCKED PRICE 2026',
    badgeColor: 'bg-primary',
    title: 'Book Early',
    tagline: 'Book in advance and save',
    image: '/images/Book Early.jpg',
    features: [
      '4 nights stay in Sheraton Golf Parco de\' Medici 4*s',
      'American breakfast',
      '2 green fees on Parco de\' Medici Golf Club',
      '1 green fee on Castelgandolfo golf Course',
      'Advanced starting times at time of the reservation',
      'Club storage and locker room service',
      'Unlimited use of practice facilities',
      'Meet & Greet at the Airport & Hotel',
      'Full time assistance during your stay',
      'Rome City tax to pay on site',
    ],
    idealFor: 'Those who plan ahead and want to secure the best price of the year',
    price: '€499',
    priceNote: '',
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

export default function PackagesSection() {
  return (
    <Section background="gray" className="py-20 lg:py-28" id="packages">
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-[46px] text-primary mb-4">
            Exclusive Golf Packages 2026
          </h2>
          <p className="font-lato font-bold text-xl text-gold mb-6">
            Lock In Your Guaranteed Price Now
          </p>
          <p className="font-lato text-lg text-gray-700 max-w-3xl mx-auto">
            Choose the perfect experience for you. Each package includes golf, hospitality and unforgettable moments.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 items-stretch"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gold group flex flex-col h-full"
              variants={item}
              whileHover={{ y: -8 }}
            >
              {/* Badge */}
              <div className="relative">
                <span className={`absolute top-0 right-0 ${pkg.badgeColor} text-white text-xs font-bold uppercase px-4 py-2 rounded-bl-lg z-10`}>
                  {pkg.badge}
                </span>
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-cinzel text-2xl text-primary mb-2">
                  {pkg.title}
                </h3>
                <p className="font-lato italic text-gray-600 mb-6">
                  {pkg.tagline}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-lato font-bold text-gray-800 mb-4">
                    What&apos;s included:
                  </h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircleIcon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For, Price & CTA - aligned to bottom */}
                <div className="mt-auto">
                  {/* Ideal For */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6 flex items-start gap-3">
                    <UserGroupIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600">
                    <span className="font-semibold">Ideal for:</span> {pkg.idealFor}
                  </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <p className="font-lato text-3xl font-bold text-primary">
                      Starting from {pkg.price}{' '}
                      <span className="text-base font-normal text-gray-600">
                        {pkg.priceNote}
                      </span>
                    </p>
                  </div>

                  {/* CTA */}
                  <Button 
                    href="#contact-form" 
                    variant="primary" 
                    fullWidth
                    ariaLabel={`Request information about ${pkg.title}`}
                  >
                    Request Information
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Central CTA - Hidden on mobile */}
        <motion.div
          className="hidden md:block text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Button 
            href="#contact-form" 
            variant="primary"
            className="text-xl px-16 py-5"
            ariaLabel="Request information about all packages"
          >
            Request Package Information
          </Button>
          
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-primary" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-primary" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-primary" />
              <span>Guaranteed prices until 02/28/2026</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}

