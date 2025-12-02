'use client'

import { motion } from 'framer-motion'

const footerLinks = {
  legal: [
    { label: 'Privacy Policy', href: 'https://golfinrome.com/privacy-policy/' },
    { label: 'Cookie Policy', href: 'https://golfinrome.com/cookie-policy/' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Bottom Footer */}
        <motion.div
          className="py-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-lato text-sm text-white/70 mb-2">
            © 2025 Golf Resort Rome. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-white/70">
            {footerLinks.legal.map((link, index) => (
              <span key={index}>
                {index > 0 && <span className="mx-2">|</span>}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

