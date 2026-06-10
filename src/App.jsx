import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SectionLayout from './components/SectionLayout';
import Home from './pages/Home';
import Itambaraca from './pages/Itambaraca';
import Infograficos from './pages/Infograficos';
import Vozes from './pages/Vozes';
import Quiz from './pages/Quiz';
import Podcasts from './pages/Podcasts';
import Galeria from './pages/Galeria';
import Contato from './pages/Contato';
import Inovacoes from './pages/Inovacoes';
import Minigame from './pages/Minigame';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <Router>
      <Routes>
        <Route element={<SectionLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}>
          <Route path="/" element={<Home />} />
          <Route path="/itambaraca" element={<Itambaraca />} />
          <Route path="/infograficos" element={<Infograficos />} />
          <Route path="/vozes" element={<Vozes />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/inovacoes" element={<Inovacoes />} />
          <Route path="/minigame" element={<Minigame />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
