'use client'

import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'

const allServices = [
  {
    title: 'Reparații Motor',
    description: 'Reparații complete motor cu piese originale. De la schimburi simple la reparații complexe de motor. Garantăm calitate profesională și testare completă.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: ['Reparații complete', 'Piese originale', 'Testare profesională', 'Garantie lucrări'],
  },
  {
    title: 'Reparații Frâne',
    description: 'Service complet frâne: schimb plăcuțe, discuri, lichid frâne. Verificare și reglare sistem frânare pentru siguranță maximă. Componente premium testate.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    features: ['Schimb plăcuțe/discuri', 'Lichid frâne', 'Verificare sistem', 'Testare siguranță'],
  },
  {
    title: 'Reparații Suspensie',
    description: 'Reparații și înlocuiri suspensie, amortizoare, arcuri. Aliniere roți precisă pentru confort și siguranță optimă. Diagnostic complet sistem suspensie.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    features: ['Schimb amortizoare', 'Aliniere roți', 'Verificare suspensie', 'Componente premium'],
  },
  {
    title: 'Reparații Electrică',
    description: 'Diagnostic și reparații sistem electric complet. De la probleme simple la reparații complexe. Echipamente moderne și piese originale.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: ['Diagnostic electric', 'Reparații cablaje', 'Baterie și alternator', 'Sistem iluminare'],
  },
  {
    title: 'Service & Mentenanță',
    description: 'Service complet: schimburi de ulei, filtre, verificări periodice și mentenanță preventivă. Păstrăm mașina ta în condiții optime.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    features: ['Schimb ulei și filtre', 'Verificare generală', 'Mentenanță preventivă', 'Program flexibil'],
  },
  {
    title: 'Diagnostic Complet',
    description: 'Diagnostic complet cu echipamente moderne. Identificăm probleme rapid și oferim soluții profesionale. Raport detaliat și recomandări.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    features: ['Scanare completă', 'Testare sisteme', 'Raport detaliat', 'Recomandări profesionale'],
  },
]

export default function ServicesDetail() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-expand">
            <span className="text-premium-black">Serviciile</span>{' '}
            <span className="text-premium-red">Noastre</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Oferim o gamă completă de servicii de reparații auto, de la reparații simple la intervenții complexe. Fiecare lucrare este tratată cu atenție la detalii și profesionalism. Calitate garantată pentru toate reparațiile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-3d red-neon-unglow bg-gray-50 p-8 border-2 border-gray-200 hover:border-premium-red transition-all group shadow-lg"
            >
              <div className="mb-6 text-premium-red group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4 text-premium-black group-hover:text-premium-red transition-colors">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="text-premium-red mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

