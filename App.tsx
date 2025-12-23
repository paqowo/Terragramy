
import React, { useState, useCallback } from 'react';
import { CARDS, PROVIDER_LOGO, SymbolIcon } from './constants';
import { TerragramCard, AppMode } from './types';
import TerragramCardView from './components/TerragramCardView';
import CardBack from './components/CardBack';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>('home');
  const [currentCard, setCurrentCard] = useState<TerragramCard | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const drawCard = useCallback(() => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    setCurrentCard(null);
    setShowDetail(false);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * CARDS.length);
      setCurrentCard(CARDS[randomIndex]);
      
      setTimeout(() => {
        setIsFlipping(false);
        setTimeout(() => setShowDetail(true), 800);
      }, 800);
    }, 100);
  }, [isFlipping]);

  const selectCard = (card: TerragramCard) => {
    setCurrentCard(card);
    setShowDetail(true);
  };

  const renderHome = () => (
    <div className="flex flex-col items-center justify-center min-h-[70vh] animate-in fade-in zoom-in duration-700">
      <div className="bg-white p-6 rounded-[3rem] shadow-2xl mb-12 max-w-xs md:max-w-sm flex items-center justify-center">
        {PROVIDER_LOGO}
      </div>
      
      <h1 className="text-4xl md:text-5xl font-cinzel text-[#D4AF37] mb-12 text-center uppercase tracking-[0.2em] px-4">
        Terragramy
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl px-6">
        <button 
          onClick={() => setMode('draw')}
          className="group relative overflow-hidden bg-[#D4AF37] p-8 rounded-2xl text-white font-cinzel text-xl tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
        >
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <span className="relative z-10 font-bold">KARTA DNE</span>
          <p className="relative z-10 text-xs mt-2 opacity-70 font-lora lowercase italic">náhodný výběr symbolu</p>
        </button>

        <button 
          onClick={() => setMode('gallery')}
          className="group relative overflow-hidden bg-white/5 border border-[#D4AF37]/30 p-8 rounded-2xl text-[#D4AF37] font-cinzel text-xl tracking-widest transition-all hover:scale-105 hover:bg-white/10"
        >
          <span className="relative z-10 font-bold">GALERIE</span>
          <p className="relative z-10 text-xs mt-2 opacity-70 font-lora lowercase italic">všechny Terragramy</p>
        </button>
      </div>
    </div>
  );

  const renderDraw = () => (
    <div className="flex flex-col items-center animate-in slide-in-from-right duration-500 w-full max-w-md">
      <button 
        onClick={() => { setMode('home'); setCurrentCard(null); }}
        className="mb-8 text-[#D4AF37] font-cinzel text-sm uppercase tracking-widest flex items-center gap-2 hover:opacity-70"
      >
        ← Zpět na úvod
      </button>

      <div className="card-perspective w-72 h-[450px] md:w-80 md:h-[500px] cursor-pointer group mb-12" onClick={drawCard}>
        <div className={`card-inner w-full h-full relative ${currentCard ? 'card-flipped' : ''}`}>
          <div className="card-face card-back absolute inset-0">
            <CardBack />
          </div>
          <div className="card-face card-front absolute inset-0 bg-white border-4 border-[#D4AF37] rounded-3xl flex flex-col items-center justify-center p-6 text-center">
            {currentCard && (
              <>
                <div className="w-full h-3/4 flex items-center justify-center p-4">
                   <SymbolIcon card={currentCard} />
                </div>
                <h3 className="text-2xl font-cinzel mt-4 font-bold" style={{ color: currentCard.symbolColor }}>{currentCard.title}</h3>
              </>
            )}
          </div>
        </div>
      </div>

      <button 
        onClick={drawCard}
        disabled={isFlipping}
        className="w-full py-4 rounded-xl font-cinzel text-xl tracking-widest bg-[#D4AF37] hover:bg-[#b08d2b] text-white shadow-xl transition-all disabled:opacity-50"
      >
        {isFlipping ? 'MÍCHÁM...' : 'TAHAT ZNOVU'}
      </button>
    </div>
  );

  const renderGallery = () => (
    <div className="w-full max-w-6xl animate-in slide-in-from-left duration-500 px-4 pb-12">
      <div className="flex justify-between items-center mb-12 border-b border-[#D4AF37]/30 pb-6">
        <button 
          onClick={() => setMode('home')}
          className="text-[#D4AF37] font-cinzel text-sm uppercase tracking-widest flex items-center gap-2 hover:opacity-70"
        >
          ← Zpět
        </button>
        <h2 className="text-2xl font-cinzel text-[#D4AF37] tracking-[0.2em] uppercase font-bold">Galerie Terragramů</h2>
        <div className="w-16"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {CARDS.map((card) => (
          <div 
            key={card.id}
            onClick={() => selectCard(card)}
            className="group cursor-pointer flex flex-col items-center"
          >
            <div 
              className="w-full aspect-square bg-white border-4 rounded-[2rem] mb-3 flex items-center justify-center p-5 transition-all group-hover:scale-105 shadow-xl overflow-hidden relative"
              style={{ borderColor: card.symbolColor + 'aa' }}
            >
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${card.symbolColor} 0%, transparent 80%)` }}
              ></div>
              <SymbolIcon card={card} />
            </div>
            <span 
              className="font-cinzel text-sm tracking-widest uppercase text-center font-bold"
              style={{ color: card.symbolColor }}
            >
              {card.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center py-8">
      {mode === 'home' && renderHome()}
      {mode === 'draw' && renderDraw()}
      {mode === 'gallery' && renderGallery()}

      {showDetail && currentCard && (
        <TerragramCardView card={currentCard} onClose={() => setShowDetail(false)} />
      )}

      <footer className="mt-auto pt-12 text-gray-500 text-[10px] font-cinzel uppercase tracking-[0.3em] opacity-40">
        © SVOBODNÁ SPOLUPRÁCE | Evoluční informační portál
      </footer>
    </div>
  );
};

export default App;
