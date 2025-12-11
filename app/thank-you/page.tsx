'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircleIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  ClockIcon,
  ArrowLeftIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Footer from '@/components/sections/Footer'

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

export default function ThankYouPage() {
  // Google Ads Conversion Tracking
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Track conversion event
      window.gtag('event', 'conversion', {
        'send_to': 'AW-949798166/INSERISCI_CONVERSION_LABEL_QUI'
        // Sostituisci INSERISCI_CONVERSION_LABEL_QUI con il tuo Conversion Label
        // Es: 'AW-949798166/AbCdEfGhIjKlMnOp'
      })
    }
  }, [])
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-gold/5">
      <Container>
        <div className="py-16 md:py-24 lg:py-32">
          {/* Success Icon */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.6, 
              type: 'spring', 
              stiffness: 200,
              delay: 0.1 
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <CheckCircleIcon className="relative w-24 h-24 md:w-32 md:h-32 text-primary drop-shadow-lg" />
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Title */}
            <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
              Thank You!
            </h1>
            
            {/* Subtitle */}
            <p className="font-lato text-xl md:text-2xl text-gray-700 mb-4">
              Your request has been received successfully
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-2 text-gold mb-12"
            >
              <SparklesIcon className="w-5 h-5" />
              <span className="font-lato font-semibold">
                We&apos;re excited to help you plan your perfect golf experience
              </span>
              <SparklesIcon className="w-5 h-5" />
            </motion.div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Response Time */}
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <ClockIcon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-cinzel text-lg text-primary mb-2">
                  Quick Response
                </h3>
                <p className="font-lato text-sm text-gray-600">
                  We&apos;ll contact you within 24 hours
                </p>
              </motion.div>

              {/* Email Confirmation */}
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ y: -5 }}
              >
                <EnvelopeIcon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-cinzel text-lg text-primary mb-2">
                  Check Your Email
                </h3>
                <p className="font-lato text-sm text-gray-600">
                  A confirmation has been sent to your inbox
                </p>
              </motion.div>

              {/* Personal Assistance */}
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <PhoneIcon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-cinzel text-lg text-primary mb-2">
                  Personal Consultation
                </h3>
                <p className="font-lato text-sm text-gray-600">
                  Dedicated expert for your needs
                </p>
              </motion.div>
            </div>

            {/* What's Next Section */}
            <motion.div
              className="bg-gradient-to-r from-primary/10 via-gold/10 to-primary/10 rounded-2xl p-8 md:p-10 mb-12"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
            >
              <h2 className="font-cinzel text-2xl md:text-3xl text-primary mb-6">
                What Happens Next?
              </h2>
              <div className="space-y-4 text-left max-w-xl mx-auto">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-lato font-bold text-gray-800 mb-1">
                      We Review Your Request
                    </h3>
                    <p className="font-lato text-gray-600 text-sm">
                      Our team carefully analyzes your preferences and requirements
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-lato font-bold text-gray-800 mb-1">
                      Personalized Proposal
                    </h3>
                    <p className="font-lato text-gray-600 text-sm">
                      We&apos;ll send you a tailored package with all the details and pricing
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-lato font-bold text-gray-800 mb-1">
                      Direct Contact
                    </h3>
                    <p className="font-lato text-gray-600 text-sm">
                      A dedicated consultant will reach out to answer all your questions
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-3 font-lato font-bold text-lg px-10 py-4 rounded-lg bg-primary text-white hover:bg-gold transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/50"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                Back to Homepage
              </Link>
              
              <a
                href="https://golfinrome.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 font-lato font-bold text-lg px-10 py-4 rounded-lg bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/50"
              >
                Visit Main Website
              </a>
            </motion.div>

            {/* Additional Info */}
            <motion.p
              className="font-lato text-gray-600 mt-12 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              Need immediate assistance? Call us at{' '}
              <a 
                href="tel:+390630883055" 
                className="text-primary font-semibold hover:text-gold transition-colors"
              >
                +39 06 3088 3055
              </a>
            </motion.p>
          </motion.div>
        </div>
      </Container>
      
      <Footer />
    </main>
  )
}


