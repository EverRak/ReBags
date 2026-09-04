import React, { useState } from 'react';
import './Prince.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Obrigado pelo contato, ${formData.nome}! Sua mensagem foi enviada.`);
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  const pageTitles: Record<string, string> = {
    home: 'Página Inicial',
    beneficios: 'Benefícios',
    modelos: 'Nossos Modelos',
    contato: 'Contato'
  };

  return (
    <div className="app-root">
      {/* HEADER */}
      <header className="header">
        <div className="logo-container">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </div>
          <h2>{pageTitles[activeTab]}</h2>
        </div>

        <nav>
          <ul className="nav-menu">
            {[
              { id: 'home', label: 'Início' },
              { id: 'beneficios', label: 'Benefícios' },
              { id: 'modelos', label: 'Modelos' },
              { id: 'contato', label: 'Contato' }
            ].map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`nav-button ${activeTab === tab.id ? 'active' : ''}`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* CONTEÚDO */}
      <main className="main-container">
        {activeTab === 'home' && (
          <section className="animate-fadeIn">
            <div className="hero-grid">
              <div className="hero-text">
                <h2>Sacolas retornáveis</h2>
                <p>
                  No dia a dia, pequenas escolhas individuais têm o poder de transformar o meio ambiente. O uso das sacolas retornáveis (ou ecobags) é uma das formas mais simples e eficientes de reduzir o consumo de plástico descartável e adotar uma rotina mais consciente.
                </p>
                <p>
                  Ao substituir as sacolas plásticas tradicionais por opções reutilizáveis, você evita que centenas de resíduos voltem para a natureza, onde levariam séculos para se decompor.
                </p>
              </div>

              <div className="hero-image-wrapper">
                <div className="glass-backdrop">
                  <div className="image-card">
                    <svg className="ecobag-svg" viewBox="0 0 200 240" fill="none">
                      <path d="M65 80 C65 20, 135 20, 135 80" stroke="#FAF7EE" strokeWidth="14" strokeLinecap="round" fill="none" />
                      <path d="M65 80 C65 20, 135 20, 135 80" stroke="#E2DBCA" strokeWidth="8" strokeLinecap="round" fill="none" />
                      <polygon points="40,80 160,80 148,210 52,210" fill="#FFFDF7" />
                      <polygon points="160,80 175,90 162,218 148,210" fill="#E2DBCA" />
                      <polygon points="40,80 160,80 175,90 55,90" fill="#F4EFE2" />
                      <path d="M52 210 L148 210 L160 80" stroke="#D3C9B5" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'beneficios' && (
          <section className="animate-fadeIn">
            <h2>Por que adotar sacolas retornáveis?</h2>
            <div className="grid-cards">
              <div className="card"><div className="card-icon">🌱</div><h3>Preservação</h3><p>Economize mais de 500 sacolas plásticas por ano.</p></div>
              <div className="card"><div className="card-icon">💪</div><h3>Resistência</h3><p>Suportam muito mais peso sem rasgar.</p></div>
              <div className="card"><div className="card-icon">💰</div><h3>Economia</h3><p>Evite taxas de sacolas plásticas em mercados.</p></div>
            </div>
          </section>
        )}

        {activeTab === 'modelos' && (
          <section className="animate-fadeIn">
            <h2>Nossos Modelos</h2>
            <div className="grid-cards">
              <div className="card"><h3>Ecobag de Algodão</h3><p>Clássica, leve e 100% lavável.</p></div>
              <div className="card"><h3>Dobrável de Nylon</h3><p>Cabe no bolso para levar a qualquer lugar.</p></div>
            </div>
          </section>
        )}

        {activeTab === 'contato' && (
          <section className="animate-fadeIn">
            <h2>Contato</h2>
            <form onSubmit={handleFormSubmit} className="contact-form">
              <div className="form-group">
                <label>Nome</label>
                <input type="text" required value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Mensagem</label>
                <textarea rows={4} required value={formData.mensagem} onChange={(e) => setFormData({...formData, mensagem: e.target.value})} />
              </div>
              <button type="submit" className="btn-submit">Enviar</button>
            </form>
          </section>
        )}
      </main>
    </div>
  );
}