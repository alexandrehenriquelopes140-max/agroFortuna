import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { motion } from 'framer-motion';

export default function Minigame() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [choices, setChoices] = useState([]);

  const scenarios = [
    {
      title: 'Escolha de Cultivo',
      description: 'Qual cultura você plantaria em sua propriedade?',
      image: '🌾',
      choices: [
        { text: 'Monocultura de soja', points: 0, feedback: 'Impacto ambiental alto!' },
        { text: 'Rotação de culturas', points: 25, feedback: 'Ótima escolha! Regenera o solo.' },
        { text: 'Agrofloresta', points: 25, feedback: 'Excelente! Combina produção e conservação.' }
      ]
    },
    {
      title: 'Recuperação de Mata Ciliar',
      description: 'Como restaurar a mata ao redor de um rio?',
      image: '🌳',
      choices: [
        { text: 'Não fazer nada', points: 0, feedback: 'Errado! O rio precisa de proteção.' },
        { text: 'Plantar espécies nativas', points: 25, feedback: 'Ótimo! Restaura o ecossistema.' },
        { text: 'Usar tecnologia de reflorestamento inteligente', points: 25, feedback: 'Perfeito! Máxima eficiência.' }
      ]
    },
    {
      title: 'Gestão da Água',
      description: 'Como otimizar o uso de água em sua fazenda?',
      image: '💧',
      choices: [
        { text: 'Irrigação constante', points: 0, feedback: 'Desperdiça água!' },
        { text: 'Irrigação por gotejamento', points: 25, feedback: 'Bom! Economia de 50%.' },
        { text: 'Sensores IoT + gotejamento inteligente', points: 25, feedback: 'Excelente! Economia máxima.' }
      ]
    },
    {
      title: 'Uso de Tecnologia',
      description: 'Qual tecnologia adotar para monitorar sua plantação?',
      image: '🤖',
      choices: [
        { text: 'Observação visual diária', points: 0, feedback: 'Método tradicional, mas limitado.' },
        { text: 'Drones para mapeamento', points: 25, feedback: 'Muito bom! Visão de 360°.' },
        { text: 'IA + Drones + Sensores', points: 25, feedback: 'Perfeito! Máxima precisão.' }
      ]
    },
    {
      title: 'Controle Ambiental',
      description: 'Como controlar pragas de forma sustentável?',
      image: '🦗',
      choices: [
        { text: 'Agrotóxicos em excesso', points: 0, feedback: 'Prejudica solo e biodiversidade!' },
        { text: 'Controle biológico', points: 25, feedback: 'Muito bom! Ecológico e eficaz.' },
        { text: 'Agricultura regenerativa + IA', points: 25, feedback: 'Excelente! Harmonia total.' }
      ]
    }
  ];

  const handleChoice = (points, feedback) => {\n    setChoices([...choices, feedback]);\n    setScore(score + points);\n\n    if (currentScenario + 1 < scenarios.length) {\n      setCurrentScenario(currentScenario + 1);\n    } else {\n      setShowResults(true);\n    }\n  };\n\n  const getClassification = () => {\n    const maxScore = scenarios.length * 25;\n    const percentage = (score / maxScore) * 100;\n\n    if (percentage >= 80) {\n      return { level: 'Mestre da Sustentabilidade', emoji: '👑', color: 'text-yellow-500' };\n    } else if (percentage >= 60) {\n      return { level: 'Líder Verde', emoji: '🏆', color: 'text-green-600' };\n    } else if (percentage >= 40) {\n      return { level: 'Agricultor Sustentável', emoji: '🌾', color: 'text-green-500' };\n    }\n    return { level: 'Guardião da Natureza', emoji: '🌱', color: 'text-blue-500' };\n  };\n\n  const resetGame = () => {\n    setCurrentScenario(0);\n    setScore(0);\n    setShowResults(false);\n    setChoices([]);\n  };\n\n  return (\n    <div className=\"w-full\">\n      {/* Hero Section */}\n      <section className=\"min-h-screen bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center py-20 px-4\">\n        <div className=\"max-w-6xl mx-auto\">\n          <ScrollReveal>\n            <h1 className=\"text-6xl md:text-7xl font-bold mb-4 font-serif\">Minigame Ambiental</h1>\n            <p className=\"text-2xl mb-6\">Simulador Educativo de Sustentabilidade</p>\n            <p className=\"text-lg max-w-2xl\">\n              Tome decisões sustentáveis e descubra seu nível de maestria em agricultura eco-responsável!\n            </p>\n          </ScrollReveal>\n        </div>\n      </section>\n\n      {/* Game Container */}\n      <section className=\"py-20 px-4 bg-white dark:bg-slate-900 min-h-screen flex items-center\">\n        <div className=\"max-w-2xl mx-auto w-full\">\n          {!showResults ? (\n            <ScrollReveal>\n              <motion.div\n                className=\"glass p-10 rounded-xl\"\n                initial={{ opacity: 0, scale: 0.9 }}\n                animate={{ opacity: 1, scale: 1 }}\n              >\n                {/* Progress */}\n                <div className=\"mb-8\">\n                  <div className=\"flex justify-between mb-2\">\n                    <span className=\"font-semibold\">Cenário {currentScenario + 1} de {scenarios.length}</span>\n                    <span className=\"text-green-600 font-bold\">{score} Pontos</span>\n                  </div>\n                  <div className=\"w-full bg-gray-300 rounded-full h-3 dark:bg-gray-700\">\n                    <motion.div\n                      className=\"bg-green-600 h-3 rounded-full\"\n                      initial={{ width: 0 }}\n                      animate={{ width: `${((currentScenario + 1) / scenarios.length) * 100}%` }}\n                      transition={{ duration: 0.5 }}\n                    />\n                  </div>\n                </div>\n\n                {/* Scenario */}\n                <div className=\"text-center mb-8\">\n                  <div className=\"text-6xl mb-4\">{scenarios[currentScenario].image}</div>\n                  <h2 className=\"text-3xl font-bold mb-4\">{scenarios[currentScenario].title}</h2>\n                  <p className=\"text-lg text-gray-600 dark:text-gray-300\">\n                    {scenarios[currentScenario].description}\n                  </p>\n                </div>\n\n                {/* Choices */}\n                <div className=\"space-y-4\">\n                  {scenarios[currentScenario].choices.map((choice, index) => (\n                    <motion.button\n                      key={index}\n                      onClick={() => handleChoice(choice.points, choice.feedback)}\n                      className=\"w-full p-4 text-left bg-gray-100 dark:bg-slate-800 hover:bg-green-100 dark:hover:bg-green-900 rounded-lg transition font-semibold border-2 border-transparent hover:border-green-500\"\n                      whileHover={{ scale: 1.02 }}\n                      whileTap={{ scale: 0.98 }}\n                    >\n                      ✓ {choice.text}\n                    </motion.button>\n                  ))}\n                </div>\n              </motion.div>\n            </ScrollReveal>\n          ) : (\n            <ScrollReveal>\n              <motion.div\n                className=\"glass p-10 rounded-xl text-center\"\n                initial={{ opacity: 0, scale: 0.9 }}\n                animate={{ opacity: 1, scale: 1 }}\n              >\n                <div className={`text-6xl mb-4 ${getClassification().color}`}>\n                  {getClassification().emoji}\n                </div>\n                <h2 className=\"text-4xl font-bold mb-4\">Parabéns!</h2>\n                <p className=\"text-2xl mb-4\">Sua Classificação:</p>\n                <p className={`text-3xl font-bold ${getClassification().color} mb-8`}>\n                  {getClassification().level}\n                </p>\n                <p className=\"text-xl mb-2\">\n                  Pontuação Final: {score} de {scenarios.length * 25}\n                </p>\n                <p className=\"text-lg text-gray-600 dark:text-gray-300 mb-8\">\n                  {Math.round((score / (scenarios.length * 25)) * 100)}% de Sustentabilidade\n                </p>\n\n                {/* Feedback resumido */}\n                <div className=\"bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-8 text-left\">\n                  <h3 className=\"font-bold mb-4\">Suas Decisões:</h3>\n                  <ul className=\"space-y-2 text-sm\">\n                    {choices.map((choice, i) => (\n                      <li key={i} className=\"flex items-start\">\n                        <span className=\"text-green-600 mr-2\">•</span>\n                        <span>{choice}</span>\n                      </li>\n                    ))}\n                  </ul>\n                </div>\n\n                <motion.button\n                  onClick={resetGame}\n                  className=\"px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition\"\n                  whileHover={{ scale: 1.05 }}\n                  whileTap={{ scale: 0.95 }}\n                >\n                  Jogar Novamente\n                </motion.button>\n              </motion.div>\n            </ScrollReveal>\n          )}\n        </div>\n      </section>\n    </div>\n  );\n}
