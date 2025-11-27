import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QuickBookingButton from '@/components/QuickBookingButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Car Experts - Tuning Auto Premium București | Service Tuning Profesional',
  description: 'Car Experts - Atelier premium de tuning auto în București. Servicii profesionale de tuning, modificări performanță, chip tuning și personalizare auto. Experiență de peste 10 ani.',
  keywords: 'tuning auto București, service tuning București, chip tuning, modificări performanță auto, atelier tuning, Car Experts',
  authors: [{ name: 'Car Experts' }],
  openGraph: {
    title: 'Car Experts - Tuning Auto Premium București',
    description: 'Atelier premium de tuning auto în București. Servicii profesionale de tuning și modificări performanță.',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'Car Experts',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutomotiveRepair",
              "name": "Car Experts",
              "image": "https://carexperts.ro/logo.png",
              "description": "Atelier premium de tuning auto în București",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Strada Luigi Galvani",
                "addressLocality": "București",
                "postalCode": "020362",
                "addressCountry": "RO"
              },
              "telephone": "0725562178",
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <QuickBookingButton />
      </body>
    </html>
  )
}

