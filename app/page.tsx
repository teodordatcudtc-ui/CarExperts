import Hero from '@/components/Hero'
import ServicesPreview from '@/components/ServicesPreview'
import Timeline from '@/components/Timeline'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export const metadata = {
  title: 'Car Experts - Service Auto Premium București | Acasă',
  description: 'Car Experts - Atelier premium de service auto în București. Servicii profesionale de reparații auto, service complet, diagnostic și mentenanță.',
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

