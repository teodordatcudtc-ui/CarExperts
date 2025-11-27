'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-premium-red via-transparent to-premium-red"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-expand">
            <span className="text-premium-black">Gata Să</span>{' '}
            <span className="text-premium-red">Transformi</span>{' '}
            <span className="text-premium-black">Mașina Ta?</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Contactează-ne astăzi pentru o consultare gratuită și descoperă potențialul complet al mașinii tale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="liquid-shine-btn px-8 py-4 text-white font-bold uppercase tracking-wider rounded-none transform hover:scale-105 transition-transform"
            >
              Contactează-ne Acum
            </Link>
            <Link
              href="/gallery"
              className="px-8 py-4 border-2 border-premium-black text-premium-black font-bold uppercase tracking-wider rounded-none hover:bg-premium-black hover:text-white transition-all"
            >
              Vezi Proiectele Noastre
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

