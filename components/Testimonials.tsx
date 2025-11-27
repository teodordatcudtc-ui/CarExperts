'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Testimonial {
  name: string
  car: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Alexandru Popescu',
    car: 'BMW M3',
    text: 'Servicii excepționale! Mașina mea a primit o transformare completă. Echipa Car Experts este foarte profesională și pasionată.',
    rating: 5,
  },
  {
    name: 'Mihai Ionescu',
    car: 'Audi RS6',
    text: 'Cea mai bună experiență de tuning pe care am avut-o. Rezultatele depășesc așteptările. Recomand cu încredere!',
    rating: 5,
  },
  {
    name: 'Andrei Georgescu',
    car: 'Mercedes AMG',
    text: 'Profesionalism la cel mai înalt nivel. Modificările sunt perfecte, iar atenția la detalii este remarcabilă.',
    rating: 5,
  },
  {
    name: 'Cristian Radu',
    car: 'Porsche 911',
    text: 'Car Experts a transformat mașina mea într-o adevărată bestie de performanță. Mulțumesc pentru munca excelentă!',
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-expand"
        >
          <span className="text-premium-black">Ce Spun</span>{' '}
          <span className="text-premium-red">Clienții</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9, z: -50 }}
            animate={{ opacity: 1, scale: 1, z: 0 }}
            exit={{ opacity: 0, scale: 0.9, z: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-8 md:p-12 border-2 border-gray-200 hover:border-premium-red transition-all shadow-lg"
          >
            <div className="flex items-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="text-premium-red text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-700 text-lg md:text-xl mb-6 italic">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-premium-black font-bold text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-premium-red text-sm">
                  {testimonials[currentIndex].car}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 border-2 border-premium-red text-premium-red hover:bg-premium-red hover:text-white transition-all flex items-center justify-center"
              aria-label="Testimonial anterior"
            >
              ←
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-premium-red w-8'
                      : 'bg-gray-600 hover:bg-premium-red'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 border-2 border-premium-red text-premium-red hover:bg-premium-red hover:text-white transition-all flex items-center justify-center"
              aria-label="Testimonial următor"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

