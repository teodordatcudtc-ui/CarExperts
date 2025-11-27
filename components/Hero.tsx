'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[45vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Car tuning service workshop"
          fill
          priority
          className="object-cover"
          quality={90}
          sizes="100vw"
        />
        {/* Overlay pentru lizibilitate - 40% opacitate */}
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/50"></div>
        
        {/* Geometric shapes for depth */}
        <div className="absolute inset-0 opacity-10 z-10">
          <svg className="w-full h-full" viewBox="0 0 1200 900" preserveAspectRatio="none">
            <defs>
              <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D90429" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#D90429" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Diagonal lines */}
            <motion.path
              d="M0,300 L1200,100"
              stroke="url(#redGradient)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,600 L1200,400"
              stroke="url(#redGradient)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,900 L1200,700"
              stroke="url(#redGradient)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(217, 4, 41, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 4, 41, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 bg-premium-red/10 text-premium-red text-sm font-bold uppercase tracking-wider mb-6">
            Service Auto Premium
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight"
        >
          <span className="text-premium-black block mb-2">CAR</span>
          <span className="text-premium-red block relative">
            EXPERTS
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-0 left-0 h-1 bg-premium-red"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-xl md:text-2xl text-premium-black mb-3 max-w-3xl mx-auto font-light drop-shadow-lg"
        >
          Transformăm mașinile în bestii de performanță
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg sm:text-lg text-premium-black mb-8 max-w-2xl mx-auto drop-shadow-lg"
        >
          <span className="text-premium-red font-semibold">Performanță.</span> Pasiune. <span className="text-premium-red font-semibold">Precisiune.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <Link
            href="/services"
            className="liquid-shine-btn flex-1 px-6 py-3 sm:px-10 sm:py-5 text-white font-bold uppercase tracking-wider rounded-none transform hover:scale-105 transition-transform text-sm sm:text-lg shadow-lg text-center"
          >
            Serviciile Noastre
          </Link>
          <Link
            href="/contact"
            className="flex-1 px-6 py-3 sm:px-10 sm:py-5 border-2 border-premium-black text-premium-black font-bold uppercase tracking-wider rounded-none hover:bg-premium-black hover:text-white transition-all text-sm sm:text-lg text-center"
          >
            Contact
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {[
            { number: '10+', label: 'Ani Experiență' },
            { number: '500+', label: 'Proiecte' },
            { number: '98%', label: 'Satisfacție' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-premium-red mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-premium-black uppercase tracking-wider drop-shadow-md">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}

