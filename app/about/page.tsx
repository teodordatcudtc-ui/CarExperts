import { Metadata } from 'next'
import AboutContent from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'Despre Noi - Car Experts | Atelier Service Auto București',
  description: 'Car Experts - Peste 10 ani de experiență în service auto. Echipa noastră de specialiști oferă servicii premium de reparații auto și service complet în București.',
  keywords: 'despre Car Experts, echipa service auto, experiență service auto, atelier auto București',
}

export default function AboutPage() {
  return (
    <div className="pt-24">
      <AboutContent />
    </div>
  )
}

