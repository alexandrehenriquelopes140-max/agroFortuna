import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeZones = [
    { name: 'New York', zone: 'America/New_York', flag: '🇺🇸' },
    { name: 'London', zone: 'Europe/London', flag: '🇬🇧' },
    { name: 'Paris', zone: 'Europe/Paris', flag: '🇫🇷' },
    { name: 'Tokyo', zone: 'Asia/Tokyo', flag: '🇯🇵' },
    { name: 'Sydney', zone: 'Australia/Sydney', flag: '🇦🇺' },
    { name: 'Dubai', zone: 'Asia/Dubai', flag: '🇦🇪' },
    { name: 'São Paulo', zone: 'America/Sao_Paulo', flag: '🇧🇷' },
    { name: 'Mumbai', zone: 'Asia/Kolkata', flag: '🇮🇳' },
    { name: 'Hong Kong', zone: 'Asia/Hong_Kong', flag: '🇭🇰' },
    { name: 'Los Angeles', zone: 'America/Los_Angeles', flag: '🇺🇸' },
    { name: 'Singapore', zone: 'Asia/Singapore', flag: '🇸🇬' },
    { name: 'Bangkok', zone: 'Asia/Bangkok', flag: '🇹🇭' },
  ];

  const getTimeInZone = (zone) => {
    const formatter = new Intl.DateTimeFormat('pt-BR', {
      timeZone: zone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
    return formatter.format(time);
  };

  const getDateInZone = (zone) => {
    const formatter = new Intl.DateTimeFormat('pt-BR', {
      timeZone: zone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    return formatter.format(time);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
            🌍 Relógio Global
          </h1>
          <p className="text-xl text-purple-300">
            Horário atual em diferentes zonas horárias
          </p>
        </motion.div>

        {/* Grid de Relógios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timeZones.map((tz, index) => (
            <motion.div
              key={tz.zone}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-slate-900 rounded-2xl p-6 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{tz.name}</h2>
                    <p className="text-sm text-purple-300">{tz.zone}</p>
                  </div>
                  <div className="text-4xl">{tz.flag}</div>
                </div>

                {/* Relógio Digital */}
                <motion.div
                  className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg p-6 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-5xl font-bold text-cyan-400 font-mono tracking-wider">
                    {getTimeInZone(tz.zone)}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">
                    {getDateInZone(tz.zone)}
                  </div>
                </motion.div>

                {/* Detalhes */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-slate-800 rounded p-2">
                    <p className="text-gray-400">UTC</p>
                    <p className="text-green-400 font-semibold">
                      {new Intl.DateTimeFormat('pt-BR', {
                        timeZone: tz.zone,
                        timeZoneName: 'short',
                      })
                        .formatToParts(time)
                        .find(p => p.type === 'timeZoneName')?.value || 'GMT'}
                    </p>
                  </div>
                  <div className="bg-slate-800 rounded p-2">
                    <p className="text-gray-400">AM/PM</p>
                    <p className="text-blue-400 font-semibold">
                      {new Intl.DateTimeFormat('pt-BR', {
                        timeZone: tz.zone,
                        hour12: true,
                      })
                        .formatToParts(time)
                        .find(p => p.type === 'dayPeriod')?.value || '--'}
                    </p>
                  </div>
                  <div className="bg-slate-800 rounded p-2">
                    <p className="text-gray-400">Dia</p>
                    <p className="text-pink-400 font-semibold">
                      {new Intl.DateTimeFormat('pt-BR', {
                        timeZone: tz.zone,
                        weekday: 'short',
                      })
                        .format(time)
                        .slice(0, 3)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-6 text-center"
        >
          <p className="text-gray-300">
            ⏰ Relógio atualizado a cada segundo • 🌐 12 zonas horárias principais
          </p>
          <p className="text-sm text-purple-300 mt-2">
            Horário sincronizado com a hora do seu sistema
          </p>
        </motion.div>
      </div>
    </div>
  );
}
