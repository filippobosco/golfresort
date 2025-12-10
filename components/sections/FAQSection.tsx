'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDownIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import Section from '../ui/Section'
import Container from '../ui/Container'
import Button from '../ui/Button'

const faqs = [
  {
    question: 'Do package prices include everything?',
    answer: 'Packages include what is specified in each description. For personalized details or additional services (e.g. pro lessons, equipment rental, spa treatments), contact us and we will provide you with a customized quote.',
  },
  {
    question: 'Can I modify my booking dates?',
    answer: 'Yes, we offer flexibility on dates based on availability. The "Book Early" and "Be The First" packages offer priority and advantageous conditions for any changes.',
  },
  {
    question: 'Do I need to be a member?',
    answer: 'No, our packages are open to all golfers. No affiliation is required to book.',
  },
  {
    question: 'How long are the 2026 prices valid?',
    answer: 'Package prices are guaranteed for bookings made by February 28, 2026. From March 1st, 2026 rates will be updated.',
  },
  {
    question: 'Can I bring non-golfer guests?',
    answer: 'Absolutely! The facilities offer activities and comfort for non-golfers too: restaurants, relaxation areas, opportunities to visit Rome and the surrounding area.',
  },
  {
    question: 'How can I reach you?',
    answer: 'The facilities are easily accessible by car from Rome. We provide detailed directions at the time of booking. Upon request, we also arrange private transfers.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section background="gray" className="py-20 lg:py-28">
      <Container size="narrow">
        {/* Headline */}
        <motion.h2
          className="font-cinzel text-3xl md:text-4xl lg:text-[42px] text-primary text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 p-6 md:px-8 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-lato font-bold text-lg text-gray-800 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDownIcon className="w-6 h-6 text-primary" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 font-lato text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA after FAQ */}
        <motion.div
          className="text-center bg-gold/10 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-lato text-lg text-gray-800 mb-4">
            Have more questions?
          </p>
          <Button 
            href="#contact-form" 
            variant="secondary"
            icon={false}
            ariaLabel="Contact us for more questions"
          >
            <ChatBubbleLeftRightIcon className="w-5 h-5" />
            Contact Us Now
          </Button>
        </motion.div>
      </Container>
    </Section>
  )
}

