'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    car: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', car: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
            <span className="text-premium-black">Contactează</span>{' '}
            <span className="text-premium-red">Ne</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Ai întrebări despre serviciile noastre? Vrei o consultanță gratuită? Contactează-ne și îți vom răspunde în cel mai scurt timp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-premium-black mb-6 tracking-expand">
                Informații <span className="text-premium-red">Contact</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-premium-red text-2xl">📍</div>
                  <div>
                    <h3 className="text-premium-black font-semibold mb-1">Adresă</h3>
                    <p className="text-gray-600">
                      Strada Luigi Galvani<br />
                      București 020362<br />
                      România
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-premium-red text-2xl">📞</div>
                  <div>
                    <h3 className="text-premium-black font-semibold mb-1">Telefon</h3>
                    <a
                      href="tel:0725562178"
                      className="text-premium-red hover:text-white transition-colors"
                    >
                      0725562178
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-premium-red text-2xl">🕒</div>
                  <div>
                    <h3 className="text-premium-black font-semibold mb-1">Program</h3>
                    <p className="text-gray-600">
                      Luni - Vineri: 09:00 - 18:00<br />
                      Sâmbătă: 09:00 - 14:00<br />
                      Duminică: Închis
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-premium-red text-2xl">✉️</div>
                  <div>
                    <h3 className="text-premium-black font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:contact@carexperts.ro"
                      className="text-premium-red hover:text-white transition-colors"
                    >
                      contact@carexperts.ro
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="mt-8">
              <h3 className="text-white font-semibold mb-4">Locația Noastră</h3>
              <div className="relative w-full h-64 border-2 border-premium-red">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11390.218932064307!2d26.0944617871582!3d44.46280080000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f912fb313a83%3A0xec46d0a3b7260156!2sCar%20Experts!5e0!3m2!1sen!2sro!4v1764248261418!5m2!1sen!2sro"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 p-8 border-2 border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-premium-black mb-6 tracking-expand">
                Trimite <span className="text-premium-red">Mesaj</span>
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-premium-red/20 border border-premium-red p-6 text-center"
                >
                  <p className="text-premium-red font-bold text-lg">
                    ✓ Mesajul a fost trimis cu succes!
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Vom răspunde în cel mai scurt timp.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-premium-black mb-2 text-sm font-semibold">
                      Nume Complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-premium-black focus:border-premium-red focus:outline-none transition-colors"
                      placeholder="Introdu numele tău"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white mb-2 text-sm font-semibold">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-premium-black focus:border-premium-red focus:outline-none transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white mb-2 text-sm font-semibold">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-premium-black focus:border-premium-red focus:outline-none transition-colors"
                      placeholder="0725562178"
                    />
                  </div>

                  <div>
                    <label htmlFor="car" className="block text-white mb-2 text-sm font-semibold">
                      Mașină
                    </label>
                    <input
                      type="text"
                      id="car"
                      name="car"
                      value={formData.car}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-premium-black focus:border-premium-red focus:outline-none transition-colors"
                      placeholder="Ex: BMW M3, Audi RS6..."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white mb-2 text-sm font-semibold">
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-premium-black border border-gray-700 text-white focus:border-premium-red focus:outline-none transition-colors resize-none"
                      placeholder="Descrie proiectul tău sau întreabă-ne ce vrei..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full liquid-shine-btn px-8 py-4 text-white font-bold uppercase tracking-wider transition-transform hover:scale-105"
                  >
                    Trimite Mesaj
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

