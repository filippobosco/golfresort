import HeroSection from '@/components/sections/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import IntroductionSection from '@/components/sections/IntroductionSection'
import PackagesSection from '@/components/sections/PackagesSection'
import UrgencyBanner from '@/components/sections/UrgencyBanner'
import WhyGolfResort from '@/components/sections/WhyGolfResort'
import GallerySection from '@/components/sections/GallerySection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ContactFormSection from '@/components/sections/ContactFormSection'
import FAQSection from '@/components/sections/FAQSection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustBar />
      <IntroductionSection />
      <PackagesSection />
      <UrgencyBanner />
      <WhyGolfResort />
      <GallerySection />
      <TestimonialsSection />
      <ContactFormSection />
      <FAQSection />
      <Footer />
    </main>
  )
}

