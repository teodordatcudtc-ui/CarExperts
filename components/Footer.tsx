'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t-2 border-premium-red/30 mt-20">
      {/* Energy Pulse Line */}
      <div className="energy-pulse-line"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-expand">
              <span className="text-premium-red">CAR</span>
              <span className="text-premium-black">EXPERTS</span>
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Atelier premium de service auto în București. Experiență, pasiune și performanță.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <span className="text-premium-red">Tel:</span>{' '}
                <a href="tel:0725562178" className="hover:text-premium-red transition-colors">
                  0725562178
                </a>
              </p>
              <p>
                <span className="text-premium-red">Adresă:</span> Strada Luigi Galvani, București 020362
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-premium-black font-semibold mb-4 uppercase tracking-wider">Link-uri Rapide</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-premium-red transition-colors text-sm">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-premium-red transition-colors text-sm">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-premium-red transition-colors text-sm">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-premium-red transition-colors text-sm">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-premium-red transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-premium-black font-semibold mb-4 uppercase tracking-wider">Servicii</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Chip Tuning</li>
              <li>Modificări Performanță</li>
              <li>Personalizare Auto</li>
              <li>Diagnostic Avansat</li>
              <li>Consultanță Tuning</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} Car Experts. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-premium-red transition-colors">
                Politica de Confidențialitate
              </Link>
              <Link href="/terms" className="hover:text-premium-red transition-colors">
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

