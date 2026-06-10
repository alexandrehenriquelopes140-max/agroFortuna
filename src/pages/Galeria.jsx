import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { motion } from 'framer-motion';

export default function Galeria() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['Agricultura', 'Piscicultura', 'Natureza', 'Tecnologia'];

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400',
      category: 'Agricultura',
      title: 'Plantações Sustentáveis',
      desc: 'Cultivos modernos respeitando o meio ambiente'
    },
    {
      url: 'https://images.unsplash.com/photo-1500382017468-7049fae79eaa?w=400',
      category: 'Natureza',
      title: 'Floresta Nativa',
      desc: 'Biodiversidade do Paraná'
    },
    {
      url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=400',
      category: 'Piscicultura',
      title: 'Tanques Aquícolas',
      desc: 'Produção de peixes sustentável'
    },
    {
      url: 'https://images.unsplash.com/photo-1497206365907-3ff1691b912d?w=400',
      category: 'Tecnologia',
      title: 'Drones Agrícolas',
      desc: 'Tecnologia inovadora no campo'
    },
    {
      url: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400',
      category: 'Agricultura',
      title: 'Colheita',
      desc: 'Trabalho em harmonia com a natureza'
    },
    {
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
      category: 'Natureza',
      title: 'Rio e Vegetação',
      desc: 'Conservação de recursos hídricos'
    },
    {
      url: 'https://images.unsplash.com/photo-1574180045827-681f8a0fc14e?w=400',
      category: 'Piscicultura',
      title: 'Tilápia',
      desc: 'Espécie-chave da piscicultura'
    },
    {
      url: 'https://images.unsplash.com/photo-1516537266230-7498ab6014ce?w=400',
      category: 'Tecnologia',
      title: 'Sensores IoT',
      desc: 'Monitoramento inteligente de cultivos'
    }
  ];

  const filteredImages = selectedCategory === 'todos' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-cyan-600 to-teal-600 text-white flex items-center py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 font-serif">Galeria</h1>
            <p className="text-2xl mb-6">Explore Imagens Impressionantes</p>
            <p className="text-lg max-w-2xl">
              Uma coleção visual que mostra a beleza e a força do desenvolvimento sustentável em Itambaracá.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 bg-white dark:bg-slate-900 sticky top-20 z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory('todos')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === 'todos'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-green-600 hover:text-white'
              }`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-green-600 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            layout
          >
            {filteredImages.map((image, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(image)}
                className="cursor-pointer group"
              >
                <div className="relative overflow-hidden rounded-xl h-64 group-hover:shadow-xl transition">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-end">
                    <div className="w-full p-4 bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition">
                      <p className="font-bold">{image.title}</p>
                      <p className="text-sm">{image.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full rounded-xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition"
            >
              ✕
            </button>
            <div className="bg-gray-900 text-white p-6 rounded-b-xl">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 mb-2">{selectedImage.desc}</p>
              <span className="inline-block px-3 py-1 bg-green-600 rounded-full text-sm">
                {selectedImage.category}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
