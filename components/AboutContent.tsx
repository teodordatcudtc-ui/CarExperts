'use client'

import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'Alexandru Popescu',
    role: 'Fondator & Master Tuner',
    experience: '15+ ani',
    description: 'Pasiune pentru tuning de peste 15 ani. Specializat în optimizări ECU și modificări performanță.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    name: 'Mihai Ionescu',
    role: 'Specialist Modificări',
    experience: '12+ ani',
    description: 'Expert în modificări hardware și personalizări auto. Fiecare proiect este o operă de artă.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
  },
  {
    name: 'Andrei Georgescu',
    role: 'Diagnostic & Service',
    experience: '10+ ani',
    description: 'Specialist în diagnostic avansat și service pentru mașini tunate. Precisiune și atenție la detalii.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
]

const stats = [
  { number: '10+', label: 'Ani Experiență' },
  { number: '500+', label: 'Proiecte Finalizate' },
  { number: '98%', label: 'Clienți Mulțumiți' },
  { number: '24/7', label: 'Suport' },
]

export default function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-expand">
            <span className="text-premium-black">Despre</span>{' '}
            <span className="text-premium-red">Car Experts</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
              Suntem un atelier premium de tuning auto din București, cu peste 10 ani de experiență în transformarea mașinilor în adevărate bestii de performanță. Pasiunea noastră pentru tuning și atenția la detalii ne face diferiți.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-premium-red mb-2 neon-glow">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-expand">
                <span className="text-white">Povestea</span>{' '}
                <span className="text-premium-red">Noastră</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Car Experts a fost fondat din pasiunea pentru tuning auto și dorința de a oferi servicii de cea mai înaltă calitate în București. Începuturile noastre datează din 2013, când am transformat primul proiect într-un succes răsunător.
                </p>
                <p>
                  De-a lungul anilor, am lucrat cu sute de mașini, de la hatchback-uri sport la supercar-uri. Fiecare proiect este tratat cu aceeași atenție și profesionalism, indiferent de buget sau complexitate.
                </p>
                <p>
                  Echipa noastră este formată din specialiști cu experiență vastă în tuning, modificări performanță și personalizare auto. Continuăm să ne perfecționăm și să adoptăm cele mai noi tehnologii și tehnici din industrie.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-[500px] bg-gray-100 border-2 border-premium-red"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">🏎️</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-expand">
              <span className="text-premium-red">Echipa</span>{' '}
              <span className="text-premium-red">Noastră</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Specialiști pasionați cu experiență vastă în tuning auto
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-3d red-neon-unglow bg-white p-6 border-2 border-gray-200 hover:border-premium-red transition-all text-center group shadow-lg"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-premium-red group-hover:scale-110 transition-transform">
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                    <span className="text-4xl">👤</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-premium-black mb-2 group-hover:text-premium-red transition-colors">
                  {member.name}
                </h3>
                <p className="text-premium-red text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-xs mb-4">{member.experience} experiență</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-expand">
              <span className="text-premium-red">Valorile</span>{' '}
              <span className="text-premium-red">Noastre</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Calitate Premium',
                description: 'Folosim doar piese și componente de cea mai înaltă calitate. Fiecare proiect este tratat cu atenție la detalii.',
                icon: '⭐',
              },
              {
                title: 'Experiență',
                description: 'Peste 10 ani de experiență în tuning auto. Am lucrat cu sute de mașini și proiecte complexe.',
                icon: '🎯',
              },
              {
                title: 'Pasiune',
                description: 'Tuning-ul este mai mult decât o meserie pentru noi - este o pasiune. Fiecare mașină este o operă de artă.',
                icon: '🔥',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 border-2 border-gray-200 hover:border-premium-red transition-all text-center shadow-lg"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-premium-black mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

