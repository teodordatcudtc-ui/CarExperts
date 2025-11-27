import { Metadata } from 'next'
import ServicesDetail from '@/components/ServicesDetail'

export const metadata: Metadata = {
  title: 'Servicii Service Auto - Car Experts București',
  description: 'Servicii complete de service auto: reparații motor, reparații frâne, reparații suspensie, diagnostic avansat. Experiență de peste 10 ani în service auto București.',
  keywords: 'servicii service auto, reparații auto București, service auto profesional, reparații motor, diagnostic auto',
}

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <ServicesDetail />
    </div>
  )
}

