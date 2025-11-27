import { Metadata } from 'next'
import AboutContent from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'Despre Noi - Car Experts | Atelier Tuning Auto București',
  description: 'Car Experts - Peste 10 ani de experiență în tuning auto. Echipa noastră de specialiști oferă servicii premium de tuning și modificări performanță în București.',
  keywords: 'despre Car Experts, echipa tuning, experiență tuning auto, atelier tuning București',
}

export default function AboutPage() {
  return (
    <div className="pt-24">
      <AboutContent />
    </div>
  )
}

