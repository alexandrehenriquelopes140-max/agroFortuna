import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Coluna 1: AgroFortuna */}
        <ScrollReveal>
          <div>
            <img src="/logo.svg" alt="AgroFortuna" className="h-10 mb-4" />
            <h3 className="font-bold text-lg mb-2">AgroFortuna</h3>
            <p className="text-gray-300 text-sm">
              Conectando agricultura, tecnologia e sustentabilidade para transformar o amanhã.
            </p>
          </div>
        </ScrollReveal>

        {/* Coluna 2: Navegação */}
        <ScrollReveal delay={0.1}>
          <div>
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/" className="hover:text-green-400 transition">Home</Link></li>
              <li><Link to="/itambaraca" className="hover:text-green-400 transition">Itambaracá</Link></li>
              <li><Link to="/infograficos" className="hover:text-green-400 transition">Infográficos</Link></li>
              <li><Link to="/vozes" className="hover:text-green-400 transition">Vozes da Comunidade</Link></li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Coluna 3: Contato */}
        <ScrollReveal delay={0.2}>
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>📧 <a href="mailto:alexandre.henrique.lopes@escola.pr.gov.br" className="hover:text-green-400 transition">Email</a></li>
              <li>📱 +55 (43) 98828-3507</li>
              <li>📍 Itambaracá - PR - Brasil</li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Coluna 4: Links Importantes */}
        <ScrollReveal delay={0.3}>
          <div>
            <h4 className="font-bold text-lg mb-4">Links Importantes</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="https://www.ibge.gov.br/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">IBGE</a></li>
              <li><a href="https://www.embrapa.br/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">Embrapa</a></li>
              <li><a href="https://www.iat.pr.gov.br/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">IAT</a></li>
              <li><a href="https://www.seab.pr.gov.br/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">SEAB</a></li>
            </ul>
          </div>
        </ScrollReveal>
      </div>

      {/* Créditos */}
      <ScrollReveal delay={0.4}>
        <div className="border-t border-gray-700 pt-8 mt-8">
          <details className="cursor-pointer">
            <summary className="font-bold text-green-400 hover:text-green-300 transition">
              Créditos e Referências
            </summary>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Criador do Projeto */}
              <div className="bg-slate-800 p-6 rounded-lg">
                <h5 className="font-bold text-lg mb-4">Criador do Projeto</h5>
                <div className="flex gap-4">
                  <img 
                    src="https://via.placeholder.com/80" 
                    alt="Alexandre Henrique Lopes" 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="text-sm">
                    <p className="font-semibold mb-1">Alexandre Henrique Lopes</p>
                    <p className="text-gray-400 text-xs mb-1">1º A</p>
                    <p className="text-gray-400 text-xs mb-2">Colégio Estadual Marcílio Dias</p>
                    <p className="text-gray-300 text-xs">📧 alexandre.henrique.lopes@escola.pr.gov.br</p>
                    <p className="text-gray-300 text-xs">📱 +55 (43) 98828-3507</p>
                  </div>
                </div>
              </div>

              {/* Professor Orientador */}
              <div className="bg-slate-800 p-6 rounded-lg">
                <h5 className="font-bold text-lg mb-4">Professor Orientador</h5>
                <div className="flex gap-4">
                  <img 
                    src="https://via.placeholder.com/80" 
                    alt="Guilherme Cordeiro" 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="text-sm">
                    <p className="font-semibold mb-1">Guilherme Cordeiro</p>
                    <p className="text-gray-400 text-xs mb-2">Professor Orientador</p>
                    <p className="text-gray-300 text-xs">📧 guilherme.cordeiro.santos19@escola.pr.gov.br</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fontes e Referências */}
            <div className="mt-6 bg-slate-800 p-6 rounded-lg">
              <h5 className="font-bold text-lg mb-4">Fontes e Referências</h5>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>📊 IBGE - Instituto Brasileiro de Geografia e Estatística</li>
                <li>🌾 Embrapa - Empresa Brasileira de Pesquisa Agropecuária</li>
                <li>🏞️ IAT - Instituto Água e Terra</li>
                <li>📈 MapBiomas - Mapeamento dos Biomas Brasileiros</li>
                <li>🌱 SEAB Paraná - Secretaria da Agricultura</li>
                <li>🐟 PeixeBR - Associação Brasileira de Piscicultura</li>
                <li>🌍 FAO - Organização das Nações Unidas para Alimentação</li>
              </ul>
            </div>
          </details>
        </div>
      </ScrollReveal>

      {/* Copyright */}
      <div className="text-center mt-8 pt-4 border-t border-gray-700 text-gray-400 text-sm">
        <p>&copy; 2024 AgroFortuna - Cultivando o Futuro. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
