import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact - Car Experts | Service Auto București',
  description: 'Contactează Car Experts pentru consultanță gratuită. Strada Luigi Galvani, București. Telefon: 0725562178. Program: Luni-Sâmbătă 09:00-18:00.',
  keywords: 'contact Car Experts, service auto București, adresă atelier auto, telefon service auto',
}

export default function ContactPage() {
  return (
    <div className="pt-24">
      <ContactForm />
    </div>
  )
}

