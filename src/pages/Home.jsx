import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

export default function Home() {
  const stats = [
    { label: 'Hectares Reflorestados', value: 125000, suffix: ' ha' },
    { label: 'Espécies Protegidas', value: 850, suffix: '' },
    { label: 'Produção Agrícola Sustentável', value: 450000, suffix: ' t' },
    { label: 'Produção Aquícola', value: 35000, suffix: ' t' },
  ];

  const sections = [
    { title: 'Itambaracá', icon: '🌾', desc: 'Conheça o município e sua história' },
    { title: 'Infográficos', icon: '📊', desc: 'Dados e gráficos interativos' },
    { title: 'Vozes da Comunidade', icon: '🎙️', desc: 'Depoimentos inspiradores' },
    { title: 'Quiz', icon: '❓', desc: 'Teste seus conhecimentos' },
    { title: 'Podcasts', icon: '🎧', desc: 'Ouça conteúdo educativo' },
    { title: 'Galeria', icon: '📸', desc: 'Fotos e imagens impressionantes' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section com Parallax */}
      <motion.section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200)' }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AgroFortuna
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cultivando o Futuro
          </motion.p>
          <motion.p
            className="text-lg max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Conectando agricultura, tecnologia e sustentabilidade para transformar o amanhã.
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition">
              Explorar Projeto
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg font-semibold transition">
              Conhecer Itambaracá
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Contadores Animados */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-16">Impacto Sustentável do Paraná</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass p-8 rounded-xl text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{stat.label}</p>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Seções em Grid */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-16">Explore o Projeto</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="glass p-8 rounded-xl cursor-pointer hover:shadow-lg transition"
                  whileHover={{ translateY: -5 }}
                >
                  <div className="text-5xl mb-4">{section.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{section.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600 dark:bg-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-4">Pronto para fazer a diferença?</h2>
            <p className="text-xl mb-8">Junte-se a nós na construção de um futuro mais sustentável</p>
            <button className="px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition">
              Entre em Contato
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
