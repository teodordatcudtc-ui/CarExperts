'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface GalleryItem {
  id: number
  title: string
  car: string
  beforeImage: string
  afterImage: string
  description: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Reparație Motor',
    car: 'BMW M3',
    beforeImage: '/placeholder-image.jpg',
    afterImage: '/placeholder-image.jpg',
    description: 'Reparație completă motor cu piese originale și testare profesională.',
  },
  {
    id: 2,
    title: 'Service Complet',
    car: 'Audi RS6',
    beforeImage: '/placeholder-image.jpg',
    afterImage: '/placeholder-image.jpg',
    description: 'Service complet cu schimb ulei, filtre și verificare generală.',
  },
  {
    id: 3,
    title: 'Reparație Suspensie',
    car: 'Mercedes AMG',
    beforeImage: '/placeholder-image.jpg',
    afterImage: '/placeholder-image.jpg',
    description: 'Reparație suspensie și aliniere roți pentru siguranță maximă.',
  },
  {
    id: 4,
    title: 'Reparație Frâne',
    car: 'Porsche 911',
    beforeImage: '/placeholder-image.jpg',
    afterImage: '/placeholder-image.jpg',
    description: 'Schimb plăcuțe și discuri frâne cu componente premium.',
  },
  {
    id: 5,
    title: 'Reparație Electrică',
    car: 'VW Golf GTI',
    beforeImage: '/placeholder-image.jpg',
    afterImage: '/placeholder-image.jpg',
    description: 'Diagnostic și reparație sistem electric complet.',
  },
  {
    id: 6,
    title: 'Service Preventiv',
    car: 'Subaru WRX STI',
    beforeImage: '/placeholder-image.jpg',
    afterImage: '/placeholder-image.jpg',
    description: 'Service preventiv pentru menținerea performanței optime.',
  },
]

export default function GalleryGrid() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [showBefore, setShowBefore] = useState(true)

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-expand">
            <span className="text-premium-black">Galerie</span>{' '}
            <span className="text-premium-red">Proiecte</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explorează transformările realizate de echipa noastră. Fiecare proiect este o poveste de pasiune și performanță.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-3d red-neon-unglow bg-white border-2 border-gray-200 hover:border-premium-red transition-all cursor-pointer group overflow-hidden shadow-lg"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-500 text-sm">Placeholder Imagine</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-premium-red text-sm">{item.car}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-premium-red px-3 py-1 text-white text-xs font-bold uppercase">
                  After
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-6xl w-full bg-white border-2 border-premium-red p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-premium-black mb-2">{selectedItem.title}</h2>
                  <p className="text-premium-red">{selectedItem.car}</p>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-premium-black hover:text-premium-red text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="relative h-96 mb-4 bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-32 h-32 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-500">Placeholder Imagine</p>
                </div>
                <div className="absolute top-4 left-4 bg-premium-red px-4 py-2 text-white font-bold uppercase">
                  {showBefore ? 'Before' : 'After'}
                </div>
              </div>

              <div className="flex justify-center space-x-4 mb-4">
                <button
                  onClick={() => setShowBefore(true)}
                  className={`px-6 py-2 border-2 ${
                    showBefore
                      ? 'border-premium-red bg-premium-red text-white'
                      : 'border-gray-600 text-gray-400 hover:border-premium-red'
                  } transition-all`}
                >
                  Before
                </button>
                <button
                  onClick={() => setShowBefore(false)}
                  className={`px-6 py-2 border-2 ${
                    !showBefore
                      ? 'border-premium-red bg-premium-red text-white'
                      : 'border-gray-600 text-gray-400 hover:border-premium-red'
                  } transition-all`}
                >
                  After
                </button>
              </div>

              <p className="text-gray-600 text-center">{selectedItem.description}</p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

