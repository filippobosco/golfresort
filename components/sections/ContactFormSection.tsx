'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  UserIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  BuildingOfficeIcon,
  GiftIcon,
  CalendarIcon,
  CheckCircleIcon,
  PaperAirplaneIcon 
} from '@heroicons/react/24/outline'
import Section from '../ui/Section'
import Container from '../ui/Container'

interface FormData {
  fullName: string
  email: string
  phone: string
  customerType: string
  packageInterest: string
  preferredDates: string
  message: string
  privacyAccepted: boolean
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  customerType: '',
  packageInterest: '',
  preferredDates: '',
  message: '',
  privacyAccepted: false,
}

export default function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    }

    if (!formData.customerType) {
      newErrors.customerType = 'Select an option'
    }

    if (!formData.packageInterest) {
      newErrors.packageInterest = 'Select a package'
    }

    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted = true
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          customerType: formData.customerType,
          packageInterest: formData.packageInterest,
          preferredDates: formData.preferredDates,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSuccess(true)
      setFormData(initialFormData)
      
      // Redirect to thank you page after a brief delay
      setTimeout(() => {
        window.location.href = '/thank-you'
      }, 1500)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Si è verificato un errore. Riprova più tardi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Section background="gradient" className="py-20 lg:py-28" id="contact-form">
        <Container size="narrow">
          <motion.div
            className="bg-white/95 rounded-2xl p-12 shadow-2xl text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <CheckCircleIcon className="w-20 h-20 text-primary mx-auto mb-6" />
            </motion.div>
            
            <h3 className="font-cinzel text-3xl text-primary mb-4">
              Thank you! Your request has been sent successfully.
            </h3>
            <p className="font-lato text-lg text-gray-700 mb-8">
              We will contact you within 24 hours.
            </p>
            
            <button
              onClick={() => setIsSuccess(false)}
              className="font-lato font-bold text-primary hover:text-gold transition-colors"
            >
              Send another request
            </button>
          </motion.div>
        </Container>
      </Section>
    )
  }

  return (
    <Section background="gradient" className="py-20 lg:py-28" id="contact-form">
      <Container size="narrow">
        <motion.div
          className="bg-white/95 rounded-2xl p-8 md:p-16 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl md:text-4xl lg:text-[38px] text-primary mb-4">
              Request Information About 2026 Packages
            </h2>
            <p className="font-lato text-lg text-gray-600">
              Fill out the form and we will contact you within 24 hours with all personalized information for you.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block font-lato font-semibold text-gray-700 mb-2">
                Full Name*
              </label>
              <div className="relative">
                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. John Smith"
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-lg font-lato transition-all focus:outline-none focus:ring-4 focus:ring-primary/10 ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300 focus:border-primary'
                  }`}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                />
              </div>
              {errors.fullName && (
                <p id="fullName-error" className="mt-1 text-sm text-red-600">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-lato font-semibold text-gray-700 mb-2">
                  Email*
                </label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john.smith@email.com"
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-lg font-lato transition-all focus:outline-none focus:ring-4 focus:ring-primary/10 ${
                      errors.email ? 'border-red-500' : 'border-gray-300 focus:border-primary'
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                </div>
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block font-lato font-semibold text-gray-700 mb-2">
                  Phone*
                </label>
                <div className="relative">
                  <PhoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +39 333 1234567"
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-lg font-lato transition-all focus:outline-none focus:ring-4 focus:ring-primary/10 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-primary'
                    }`}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                </div>
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Customer Type & Package */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Customer Type */}
              <div>
                <label htmlFor="customerType" className="block font-lato font-semibold text-gray-700 mb-2">
                  Are you a Company or Individual?*
                </label>
                <div className="relative">
                  <BuildingOfficeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <select
                    id="customerType"
                    name="customerType"
                    value={formData.customerType}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-lg font-lato transition-all focus:outline-none focus:ring-4 focus:ring-primary/10 appearance-none bg-white ${
                      errors.customerType ? 'border-red-500' : 'border-gray-300 focus:border-primary'
                    }`}
                    aria-invalid={!!errors.customerType}
                    aria-describedby={errors.customerType ? 'customerType-error' : undefined}
                  >
                    <option value="">Select an option</option>
                    <option value="privato">Individual</option>
                    <option value="azienda">Company</option>
                  </select>
                </div>
                {errors.customerType && (
                  <p id="customerType-error" className="mt-1 text-sm text-red-600">
                    {errors.customerType}
                  </p>
                )}
              </div>

              {/* Package Interest */}
              <div>
                <label htmlFor="packageInterest" className="block font-lato font-semibold text-gray-700 mb-2">
                  Which package are you interested in?*
                </label>
                <div className="relative">
                  <GiftIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <select
                    id="packageInterest"
                    name="packageInterest"
                    value={formData.packageInterest}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-lg font-lato transition-all focus:outline-none focus:ring-4 focus:ring-primary/10 appearance-none bg-white ${
                      errors.packageInterest ? 'border-red-500' : 'border-gray-300 focus:border-primary'
                    }`}
                    aria-invalid={!!errors.packageInterest}
                    aria-describedby={errors.packageInterest ? 'packageInterest-error' : undefined}
                  >
                    <option value="">Select a package</option>
                    <option value="charme">Charme, Relax & Golf Week</option>
                    <option value="be-first">Be The First</option>
                    <option value="book-early">Book Early</option>
                    <option value="tutti">Not sure, I would like information about all of them</option>
                  </select>
                </div>
                {errors.packageInterest && (
                  <p id="packageInterest-error" className="mt-1 text-sm text-red-600">
                    {errors.packageInterest}
                  </p>
                )}
              </div>
            </div>

            {/* Preferred Dates */}
            <div>
              <label htmlFor="preferredDates" className="block font-lato font-semibold text-gray-700 mb-2">
                Preferred dates (optional)
              </label>
              <div className="relative">
                <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="preferredDates"
                  name="preferredDates"
                  value={formData.preferredDates}
                  onChange={handleChange}
                  placeholder="e.g. December 15-22, 2025"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg font-lato transition-all focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-lato font-semibold text-gray-700 mb-2">
                Message (optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your needs or any special requests..."
                rows={5}
                maxLength={500}
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg font-lato transition-all focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 resize-none"
              />
              <div className="mt-1 text-right text-sm text-gray-500">
                {formData.message.length}/500
              </div>
            </div>

            {/* Privacy Checkbox */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="privacyAccepted"
                  checked={formData.privacyAccepted}
                  onChange={handleChange}
                  className={`mt-1 w-5 h-5 rounded border-2 text-primary focus:ring-4 focus:ring-primary/10 cursor-pointer ${
                    errors.privacyAccepted ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={!!errors.privacyAccepted}
                  aria-describedby={errors.privacyAccepted ? 'privacy-error' : undefined}
                />
                <span className="font-lato text-sm text-gray-600 group-hover:text-gray-800">
                  I consent to the processing of my personal data according to the{' '}
                  <a href="https://golfinrome.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-gold transition-colors">
                    Privacy Policy
                  </a>
                  *
                </span>
              </label>
              {errors.privacyAccepted && (
                <p id="privacy-error" className="mt-1 text-sm text-red-600 ml-8">
                  You must accept the privacy policy
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold text-white font-lato font-bold text-xl py-5 rounded-lg hover:bg-primary transition-all duration-300 shadow-[0_6px_20px_rgba(190,156,77,0.4)] hover:shadow-[0_8px_28px_rgba(7,111,62,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-gold/50"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Request Free Information
                  <PaperAirplaneIcon className="w-6 h-6" />
                </>
              )}
            </motion.button>

            {/* Microcopy */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-primary" />
                <span>Guaranteed response within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-primary" />
                <span>No commitment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-primary" />
                <span>Free personalized consultation</span>
              </div>
            </div>
          </form>
        </motion.div>
      </Container>
    </Section>
  )
}

