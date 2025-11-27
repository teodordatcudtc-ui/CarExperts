import Hero from '@/components/Hero'
import ServicesPreview from '@/components/ServicesPreview'
import Timeline from '@/components/Timeline'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export const metadata = {
  title: 'Car Experts - Tuning Auto Premium București | Acasă',
  description: 'Car Experts - Atelier premium de tuning auto în București. Servicii profesionale de tuning, modificări performanță, chip tuning și personalizare auto.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Timeline />
      <Testimonials />
      <CTA />
    </>
  )
}

