import { Metadata } from 'next'
import ServicesDetail from '@/components/ServicesDetail'

export const metadata: Metadata = {
  title: 'Servicii Tuning Auto - Car Experts București',
  description: 'Servicii complete de tuning auto: chip tuning, modificări performanță, personalizare auto, diagnostic avansat. Experiență de peste 10 ani în tuning auto București.',
  keywords: 'servicii tuning auto, chip tuning București, modificări performanță auto, personalizare auto, diagnostic auto',
}

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <ServicesDetail />
    </div>
  )
}

