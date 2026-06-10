import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { motion } from 'framer-motion';

export default function Itambaraca() {
  const highlights = [
    {
      title: 'Bandeirantes',
      desc: 'Exploradores que abriram caminho para o interior do Paraná',
      image: '🏺'
    },
    {
      title: 'Londrina',
      desc: 'Cidade próxima com grande importância histórica e econômica',
      image: '🏙️'
    },
    {
      title: 'Curitiba',
      desc: 'Capital do Paraná com tecnologia e inovação',
      image: '🌆'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-green-600 to-blue-600 text-white flex items-center py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 font-serif">Itambaracá</h1>
            <p className="text-2xl md:text-3xl mb-6 font-light">
              Nossa Terra, Nosso Compromisso
            </p>
            <p className="text-lg max-w-2xl leading-relaxed">
              Descobra a história, geografia e potencial sustentável do município de Itambaracá, 
              Paraná, um lugar onde tradição e inovação se encontram.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Dados do Município */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-12 text-center">Dados do Município</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'População', value: '5.200 hab.', icon: '👥' },
              { label: 'Área', value: '399 km²', icon: '📍' },
              { label: 'Altitude', value: '390 m', icon: '⛰️' },
              { label: 'Economia', value: 'Agricultura', icon: '🌾' }
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="glass p-8 rounded-xl text-center hover:shadow-lg transition"
                  whileHover={{ translateY: -5 }}
                >
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{stat.label}</p>
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-8">Uma Jornada pela História</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="glass p-8 rounded-xl mb-6">
              <h3 className="text-2xl font-bold mb-4">Da Época do Café à Agricultura Moderna</h3>
              <p className="text-lg leading-relaxed mb-4">
                Itambaracá possui uma rica herança agrícola que remonta aos tempos do café. 
                O município evoluiu de uma economia cafeeira para uma agricultura diversificada 
                e sustentável, incorporando técnicas modernas como agricultura de precisão, 
                piscicultura e reflorestamento inteligente.
              </p>
              <p className="text-lg leading-relaxed">
                Hoje, o município é um exemplo vivo de como tradição e inovação podem coexistir, 
                promovendo desenvolvimento econômico sem comprometer o meio ambiente.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Destaques Regionais */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-12 text-center">Destaques Regionais</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="glass p-8 rounded-xl cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-6xl mb-4">{highlight.image}</div>
                  <h3 className="text-2xl font-bold mb-3">{highlight.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{highlight.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-green-600 dark:bg-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-4">Explore Mais sobre Itambaracá</h2>
            <p className="text-xl mb-8">Conheça os projetos sustentáveis e as iniciativas que transformam a região</p>
            <button className="px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition">
              Voltar à Home
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
